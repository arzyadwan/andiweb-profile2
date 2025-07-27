import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion"; // <-- 1. Import
import Navbar from "./components/layout/Navbar";
import PageTransition from "./components/layout/PageTransition"; // <-- 2. Import
import HomePage from "./pages/HomePage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import ContactPage from "./pages/ContactPage"; // <-- Import
import Footer from './components/layout/Footer'; // <-- 1. Import Footer
import ProjectsPage from './pages/ProjectsPage';

// Komponen baru untuk mengelola rute agar bisa menggunakan hook
function AppRoutes({ searchTerm }: { searchTerm: string }) {
  const location = useLocation();

  return (
    // 3. Bungkus Routes dengan AnimatePresence
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              {" "}
              {/* 4. Bungkus setiap halaman */}
              <HomePage searchTerm={searchTerm} />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <AboutPage />
            </PageTransition>
          }
        />
        <Route
          path="/project/:slug"
          element={
            <PageTransition>
              <ProjectDetailPage />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <ContactPage />
            </PageTransition>
          }
        />
        <Route
          path="/ProjectsPage"
          element={
            <PageTransition>
              <ProjectsPage />
            </PageTransition>
          }
        />
        <Route
          path="*"
          element={
            <PageTransition>
              <NotFoundPage />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-slate-900">
        <Navbar searchTerm={searchTerm} onSearchChange={handleSearch} />
        
        <main className="flex-grow">
          <AppRoutes searchTerm={searchTerm} />
        </main>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
