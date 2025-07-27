// Definisikan tipe untuk props
interface NavProject { id: number; slug: string; title: string; }
interface Tag { id: number; name: string; }
interface Heading { id: string; level: number; text: string; }

interface NavigationPaneProps {
  projects?: NavProject[];
  tags?: Tag[];
  selectedTag?: number | null;
  onTagClick?: (tagId: number | null) => void;
  headings?: Heading[];
}

export default function NavigationPane({ projects, tags, selectedTag, onTagClick, headings }: NavigationPaneProps) {
  return (
    // Pastikan kelas-kelas ini ada
    <div className="bg-slate-800 p-6 rounded-lg shadow-lg sticky top-24 z-10">
      
      {/* Bagian Filter Tag */}
      {tags && onTagClick && (
        <div className="mb-8">
          <h3 className="text-lg font-bold text-white mb-4">Filter Berdasarkan Tag</h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onTagClick(null)}
              className={`text-xs font-semibold px-3 py-1 rounded-full transition-colors ${
                selectedTag === null ? 'bg-cyan-500 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              Semua
            </button>
            {tags.map(tag => (
              <button
                key={tag.id}
                onClick={() => onTagClick(tag.id)}
                className={`text-xs font-semibold px-3 py-1 rounded-full transition-colors ${
                  selectedTag === tag.id ? 'bg-cyan-500 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                {tag.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Bagian Daftar Isi */}
      {headings && (
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Daftar Isi</h3>
          <ul className="space-y-3">
            {headings.map(heading => (
              <li key={heading.id} style={{ paddingLeft: `${(heading.level - 1) * 1}rem` }}>
                <a href={`#${heading.id}`} className="text-slate-400 hover:text-cyan-400 text-sm">
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Bagian Daftar Proyek */}
      {projects && (
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Daftar Proyek</h3>
          <ul className="space-y-3">
            {projects.map(project => (
              <li key={project.id}>
                <a href={`#project-${project.slug}`} className="text-slate-400 hover:text-cyan-400">
                  {project.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}