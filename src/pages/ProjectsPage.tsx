import { useState, useEffect } from 'react';
import { getProjects } from '../services/api';
import ProjectCard from '../components/ui/ProjectCard';
import Pagination from '../components/ui/Pagination';
import ProjectCardSkeleton from '../components/ui/ProjectCardSkeleton';

// Definisikan tipe data yang sama seperti di HomePage
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

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    const loadProjects = async () => {
      setLoading(true);
      const projectsResponse = await getProjects(currentPage, 9); // Tampilkan 9 proyek per halaman
      if (projectsResponse && projectsResponse.data) {
        setProjects(projectsResponse.data);
        setPageCount(projectsResponse.meta.pagination.pageCount);
      }
      setLoading(false);
    };
    loadProjects();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-slate-900 min-h-screen text-white p-4 lg:p-8 pt-20 lg:pt-24">
      <main className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-cyan-400 text-center">Semua Proyek</h1>
        
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tampilkan 6 skeleton saat loading */}
            {Array.from({ length: 6 }).map((_, index) => (
              <ProjectCardSkeleton key={index} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                slug={project.slug}
                title={project.title}
                summary={project.summary}
                tags={project.tags}
              />
            ))}
          </div>
        )}

        <div className="mt-12">
          <Pagination
            currentPage={currentPage}
            pageCount={pageCount}
            onPageChange={handlePageChange}
          />
        </div>
      </main>
    </div>
  );
}