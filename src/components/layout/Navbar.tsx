import { Link } from "react-router-dom";

// Definisikan tipe untuk props yang diterima
interface NavbarProps {
  searchTerm: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Navbar({ searchTerm, onSearchChange }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 bg-slate-800 shadow-lg">
      <div className="container mx-auto px-4 lg:px-8 ">
        <div className="flex items-center justify-between h-16 ">
          <div className="flex-shrink-0">
            <Link to="/" className="text-white font-bold text-xl">
              Andi's Portfolio
            </Link>
          </div>
          <div className="flex flex-box">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="text-gray-300 hover:bg-slate-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/ProjectsPage"
                  className="text-gray-300 hover:bg-slate-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Project
                </Link>
                <Link
                  to="/about"
                  className="text-gray-300 hover:bg-slate-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Tentang Saya
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:bg-slate-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Kontak
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="ml-6 relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Cari proyek..."
                className="bg-slate-700 text-white placeholder-gray-400 w-full pl-10 pr-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                value={searchTerm} // <-- Hubungkan value
                onChange={onSearchChange} // <-- Hubungkan fungsi onChange
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
