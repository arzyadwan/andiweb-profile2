import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  // 1. State untuk mengelola status pengiriman
  const [submitting, setSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  // 2. Fungsi untuk menangani submit formulir
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Mencegah form refresh halaman
    setSubmitting(true);
    setSubmissionStatus(null);

    const formData = new FormData(event.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/mvgqrpav", { // <-- GANTI DENGAN URL ANDA
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json' // Penting agar Formspree merespons dengan JSON
        }
      });

      if (response.ok) {
        setSubmissionStatus({ success: true, message: 'Terima kasih! Pesan Anda telah terkirim.' });
        (event.target as HTMLFormElement).reset(); // Mengosongkan form
      } else {
        throw new Error('Gagal mengirim pesan.');
      }
    } 
    /* kali aj butuh catch error 
    catch (error) {
      setSubmissionStatus({ success: false, message: 'Terjadi kesalahan. Silakan coba lagi.' });
    }
    */ 
    finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-900 min-h-screen text-white p-4 lg:p-8 pt-20 lg:pt-24">
      <main className="container mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold text-cyan-400 mb-6 text-center">Hubungi Saya</h1>
        <p className="text-slate-400 mb-8 text-center">
          Punya pertanyaan atau ingin bekerja sama? Silakan isi formulir di bawah ini.
        </p>

        {/* 3. Hapus 'action' & 'method', tambahkan 'onSubmit' */}
        <form onSubmit={handleSubmit} className="bg-slate-800 p-8 rounded-lg shadow-lg space-y-6">
          {/* ... (input untuk nama dan email tetap sama) ... */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-300">Nama</label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              required 
              className="mt-1 block w-full bg-slate-700 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-300">Email</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              required 
              className="mt-1 block w-full bg-slate-700 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-300">Pesan</label>
            <textarea 
              name="message" 
              id="message" 
              rows={4} 
              required
              className="mt-1 block w-full bg-slate-700 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
            ></textarea>
          </div>
          
          {/* 4. Tampilkan pesan sukses atau error */}
          {submissionStatus && (
            <div className={`p-4 rounded-md text-sm ${
              submissionStatus.success ? 'bg-green-800 text-green-200' : 'bg-red-800 text-red-200'
            }`}>
              {submissionStatus.message}
            </div>
          )}

          <div>
            {/* 5. Buat tombol disable saat mengirim & ubah teksnya */}
            <button 
              type="submit"
              disabled={submitting}
              className="w-full py-3 px-4 bg-cyan-500 text-white font-semibold rounded-md hover:bg-cyan-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-cyan-500 disabled:bg-slate-600 disabled:cursor-not-allowed"
            >
              {submitting ? 'Mengirim...' : 'Kirim Pesan'}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default ContactPage;