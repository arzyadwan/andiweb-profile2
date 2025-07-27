import { useState, useEffect } from "react";
import { getProjects, getTags } from "../services/api";
import ProfileCard from "../components/layout/ProfileCard";
import NavigationPane from "../components/layout/NavigationPane";
import ProjectCard from "../components/ui/ProjectCard";
import ProjectCardSkeleton from "../components/ui/ProjectCardSkeleton";
import Pagination from "../components/ui/Pagination";

// --- Definisi Tipe ---
interface Tag {
  id: number;
  name: string;
}

interface Project {
  id: number;
  slug: string;
  title: string;
  summary: string;
  tags: Tag[];
}

export default function HomePage({ searchTerm }: { searchTerm: string }) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [allTags, setAllTags] = useState<Tag[]>([]);
  const [selectedTag, setSelectedTag] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      
      // Ambil data proyek yang sudah difilter dan dipaginasi dari API
      const projectsResponse = await getProjects(currentPage, 5, selectedTag, searchTerm);
      
      if (projectsResponse && projectsResponse.data) {
        setProjects(projectsResponse.data);
        setPageCount(projectsResponse.meta.pagination.pageCount);
      }
      
      setLoading(false);
    };

    // Ambil semua tag (hanya jika state 'allTags' masih kosong)
    const loadTags = async () => {
      if (allTags.length === 0) {
        const tagsData = await getTags();
        if (tagsData) setAllTags(tagsData);
      }
    };
    
    loadData();
    loadTags();
  }, [currentPage, selectedTag, searchTerm]); // Jalankan ulang saat filter/pencarian/halaman berubah

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleTagClick = (tagId: number | null) => {
    // Selalu kembali ke halaman 1 saat filter diubah
    if (currentPage !== 1) setCurrentPage(1); 
    setSelectedTag(tagId);
  };
  
  if (loading) {
    return (
      <div className="bg-slate-900 min-h-screen text-white p-4 lg:p-8 pt-20 lg:pt-24">
        <main className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8">
            <aside className="lg:col-span-3 mb-8 lg:mb-0">
              <ProfileCard />
            </aside>
            <section className="lg:col-span-6">
              <h1 className="text-3xl font-bold mb-6 text-cyan-400">
                Dokumentasi Proyek
              </h1>
              <ProjectCardSkeleton />
              <ProjectCardSkeleton />
              <ProjectCardSkeleton />
            </section>
            <aside className="hidden lg:block lg:col-span-3">
              <NavigationPane />
            </aside>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 min-h-screen text-white p-4 lg:p-8">
      <main className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8">
          <aside className="lg:col-span-3 mb-8 lg:mb-0">
            <ProfileCard />
          </aside>
          <section className="lg:col-span-6">
            <h1 className="text-3xl font-bold mb-6 text-cyan-400">
              Dokumentasi Proyek
            </h1>
            {projects.length > 0 ? (
              projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  slug={project.slug}
                  title={project.title}
                  summary={project.summary}
                  tags={project.tags}
                />
              ))
            ) : (
              <p className="text-slate-400">Proyek tidak ditemukan.</p>
            )}
            <div className="mt-8">
              <Pagination
                currentPage={currentPage}
                pageCount={pageCount}
                onPageChange={handlePageChange}
              />
            </div>
          </section>
          <aside className="hidden lg:block lg:col-span-3">
            <NavigationPane
              projects={projects}
              tags={allTags}
              selectedTag={selectedTag}
              onTagClick={handleTagClick}
            />
          </aside>
        </div>
      </main>
    </div>
  );
}