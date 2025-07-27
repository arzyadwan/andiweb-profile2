// src/components/ui/Pagination.tsx

interface PaginationProps {
  currentPage: number;
  pageCount: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, pageCount, onPageChange }: PaginationProps) {
  if (pageCount <= 1) return null; // Jangan tampilkan jika hanya ada 1 halaman

  const pageNumbers = Array.from({ length: pageCount }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center space-x-2 mt-8">
      {/* Tombol Sebelumnya */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-slate-700 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-600"
      >
        &larr;
      </button>

      {/* Tombol Halaman */}
      {pageNumbers.map(number => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`px-4 py-2 rounded-md ${
            currentPage === number
              ? 'bg-cyan-500 text-white'
              : 'bg-slate-700 hover:bg-slate-600'
          }`}
        >
          {number}
        </button>
      ))}

      {/* Tombol Berikutnya */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === pageCount}
        className="px-4 py-2 bg-slate-700 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-600"
      >
        &rarr;
      </button>
    </div>
  );
}