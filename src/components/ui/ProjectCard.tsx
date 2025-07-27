import { Link } from 'react-router-dom';

interface Tag {
  id: number;
  name: string;
}

interface ProjectCardProps {
  slug: string;
  title: string;
  summary: string;
  tags?: Tag[];
}

export default function ProjectCard({ slug, title, summary, tags }: ProjectCardProps) {
  return (
    // Kita tambahkan ID di sini agar bisa di-scroll
    <div id={`project-${slug}`}>
      <Link to={`/project/${slug}`}>
        <div className="bg-slate-800 p-6 rounded-lg shadow-lg mb-6 transition-transform hover:-translate-y-1">
          <h3 className="text-xl font-bold text-cyan-400 mb-2">{title}</h3>
          <p className="text-slate-400 mb-4">{summary}</p>
          <div className="flex flex-wrap gap-2">
            {tags?.map(tag => (
              <span key={tag.id} className="bg-slate-700 text-slate-300 text-xs font-semibold px-2.5 py-1 rounded-full">
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
}