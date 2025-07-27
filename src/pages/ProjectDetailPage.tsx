import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getProjectBySlug } from "../services/api";
import ReactMarkdown from "react-markdown";
import ProfileCard from "../components/layout/ProfileCard";
import NavigationPane from "../components/layout/NavigationPane";

// --- Definisi Tipe Data ---
interface Heading {
  id: string;
  level: number;
  text: string;
}

interface CoverImage {
  url: string;
  alternativeText?: string;
}

interface Project {
  id: number;
  title: string;
  details: string;
  coverImage?: CoverImage;
}

// --- Komponen Renderer yang Diperbaiki ---
const HeadingRenderer = (props: {
  level: number;
  children?: React.ReactNode;
}) => {
  // Pengecekan yang lebih sederhana
  if (!props.children) {
    return null;
  }
  
  // Mengubah children menjadi string untuk membuat ID
  const text = Array.isArray(props.children) 
    ? props.children.join('') 
    : String(props.children);
    
  const id = slugify(text);

  // Gunakan switch untuk merender tag yang benar
  switch (props.level) {
    case 1:
      return <h1 className="text-6xl" id={id}>{props.children}</h1>;
    case 2:
      return <h2 className="text-4xl" id={id}>{props.children}</h2>;
    default:
      return <h3 id={id}>{props.children}</h3>;
  }
};

// --- Fungsi Helper ---
const slugify = (text: string): string =>
  text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");

// --- Komponen Utama ---
export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      const loadProject = async () => {
        setLoading(true);
        const projectData = await getProjectBySlug(slug);

        if (projectData) {
          setProject(projectData);

          const markdownText = projectData.details || "";
          const headingLines = markdownText.match(/^#{1,2}\s+(.*)/gm) || [];
          const extractedHeadings = headingLines.map((line: string) => {
            const level = line.startsWith("##") ? 2 : 1;
            const text = line.replace(/^#{1,2}\s+/, "").trim();
            const id = slugify(text);
            return { id, level, text };
          });
          setHeadings(extractedHeadings);
        }
        setLoading(false);
      };
      loadProject();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="bg-slate-900 min-h-screen flex justify-center items-center text-white">
        Memuat...
      </div>
    );
  }

  if (!project) {
    return (
      <div className="bg-slate-900 min-h-screen flex justify-center items-center text-white">
        Proyek tidak ditemukan.
      </div>
    );
  }
  

  return (
    <div className="bg-slate-900 min-h-screen text-white p-4 lg:p-8">
      <main className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8">
          <aside className="lg:col-span-3 mb-8 lg:mb-0">
            <ProfileCard />
            <Link
              to="/"
              className="text-cyan-400 mt-4 inline-block hover:underline"
            >
            </Link>
          </aside>

          <article className="lg:col-span-6 prose prose-invert lg:prose-xl prose-headings:scroll-mt-24 text-justify">
            
            {/* 1. Judul Proyek Tampil Terlebih Dahulu */}
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

            {/* 2. Gambar Sampul Tampil Setelah Judul */}
            {project.coverImage && (
              <img
                src={`http://localhost:1337${project.coverImage.url}`}
                alt={project.coverImage.alternativeText || project.title}
                className="w-full rounded-lg my-8" // Adjusted margin
              />
            )}

            {/* 3. Isi Konten Tampil Terakhir */}
            <ReactMarkdown
              components={{
                h1: (props) => <HeadingRenderer level={1} {...props} />,
                h2: (props) => <HeadingRenderer level={2} {...props} />,
              }}
            >
              {project.details}
            </ReactMarkdown>

          </article>

          <aside className="hidden lg:block lg:col-span-3">
            <NavigationPane headings={headings} />
          </aside>
        </div>
      </main>
    </div>
  );
}
