import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="bg-slate-900 flex flex-col justify-center items-center text-center p-4" style={{ minHeight: 'calc(100vh - 4rem)' }}>
      <h1 className="text-8xl font-bold text-cyan-400">404</h1>
      <h2 className="text-3xl font-semibold mt-4 mb-2 text-white">Halaman Tidak Ditemukan</h2>
      <p className="text-slate-400 mb-8">
        Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-cyan-500 text-white font-semibold rounded-md hover:bg-cyan-600 transition-colors"
      >
        Kembali ke Halaman Utama
      </Link>
    </div>
  );
};

export default NotFoundPage;