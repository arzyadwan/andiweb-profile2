import React from 'react';
import ProfileCard from '../components/layout/ProfileCard'; // Kita bisa gunakan lagi ProfileCard di sini

const AboutPage: React.FC = () => {
  return (
    <div className="bg-slate-900 min-h-screen text-white p-4 lg:p-8">
      <main className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8">
          {/* Kolom Kiri untuk Profil */}
          <aside className="lg:col-span-3 mb-8 lg:mb-0">
            <ProfileCard />
          </aside>

          {/* Kolom Kanan untuk Konten Detail */}
          <section className="lg:col-span-9 bg-slate-800 p-8 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold text-cyan-400 mb-6">Tentang Saya</h1>
            <div className="prose prose-invert lg:prose-xl max-w-none">
              <p>
                Selamat datang di halaman tentang saya. Saya adalah seorang Full-stack Developer dengan hasrat untuk menciptakan aplikasi web yang efisien dan mudah digunakan. Saya memiliki pengalaman dalam tumpukan teknologi modern dan selalu antusias untuk belajar hal-hal baru.
              </p>
              <h2 className="text-2xl font-bold mt-8 mb-4">Keahlian Saya</h2>
              <ul>
                <li><strong>Frontend:</strong> React, TypeScript, Tailwind CSS, Vite</li>
                <li><strong>Backend:</strong> Node.js, Express, Strapi</li>
                <li><strong>Database:</strong> PostgreSQL, MongoDB, SQLite</li>
                <li><strong>Lainnya:</strong> Git, Docker, CI/CD</li>
              </ul>
              <p>
                Di luar coding, saya menikmati membaca buku tentang teknologi, berkontribusi pada proyek open-source, dan menjelajahi kedai kopi baru di sekitar kota. Jangan ragu untuk menghubungi saya melalui detail yang ada di kartu profil.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;