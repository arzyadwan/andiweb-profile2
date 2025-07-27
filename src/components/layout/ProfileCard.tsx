export default function ProfileCard() {
  return (
    <div className="bg-slate-800 p-6 rounded-lg shadow-lg sticky top-24 z-10">
      <div className="w-24 h-24 rounded-full bg-slate-600 mx-auto mb-4 flex items-center justify-center">
        <span className="text-sm text-slate-400">
          <img src="../../../public/profile.jpg" className="w-24 h-24 object-cover rounded-full"></img>
        </span>
      </div>
      <h2 className="text-xl font-bold text-center text-white">Andi</h2>
      <p className="text-slate-400 text-center text-sm mt-2">
        Full-stack Developer yang suka menjelajahi teknologi baru dan membangun aplikasi web yang bermanfaat.
      </p>
      
      {/* --- BAGIAN TEKNOLOGI UTAMA --- */}
      <div className="border-t border-slate-700 my-4"></div>
      <div className="text-center">
        <h3 className="text-sm font-semibold text-slate-400 mb-3">Teknologi Utama:</h3>
        <div className="flex flex-wrap justify-center gap-2">
          <span className="bg-cyan-500/20 text-cyan-300 text-xs font-semibold px-3 py-1 rounded-full">
            React
          </span>
          <span className="bg-cyan-500/20 text-cyan-300 text-xs font-semibold px-3 py-1 rounded-full">
            Node.js
          </span>
          <span className="bg-cyan-500/20 text-cyan-300 text-xs font-semibold px-3 py-1 rounded-full">
            Strapi
          </span>
        </div>
      </div>
      {/* --- AKHIR BAGIAN TEKNOLOGI --- */}

      <div className="border-t border-slate-700 my-4"></div>
      <div className="space-y-3 text-sm text-slate-400">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-3 text-slate-500">
            <path fillRule="evenodd" d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.1.4-.27.615-.454L16 14.8V7a6 6 0 0 0-12 0v7.8l5.308 4.675Z" clipRule="evenodd" />
            <path d="M10 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
          </svg>
          <span>Jakarta, Indonesia</span>
        </div>
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-3 text-slate-500">
            <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
            <path d="M19 8.839 10.772 13.5a1.25 1.25 0 0 1-1.544 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
          </svg>
          <a href="mailto:arzyadwan@gmail.com" className="hover:text-cyan-400 hover:underline">
            arzyadwan@gmail.com
          </a>
        </div>
      </div>

      <div className="border-t border-slate-700 my-4"></div>
      <div className="flex justify-center space-x-4">
        <a href="#" className="text-slate-400 hover:text-cyan-400">GitHub</a>
        <a href="#" className="text-slate-400 hover:text-cyan-400">LinkedIn</a>
      </div>
    </div>
  )
}