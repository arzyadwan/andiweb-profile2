import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 text-slate-400 mt-auto">
      <div className="container mx-auto px-4 lg:px-8 py-6 text-center">
        <p className="text-sm">
          &copy; {currentYear} Andi's Portfolio. Dibuat dengan React & Strapi.
        </p>
      </div>
    </footer>
  );
};

export default Footer;