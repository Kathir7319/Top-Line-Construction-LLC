import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import StickyMobileBar from './components/StickyMobileBar';
import HomePage from './pages/HomePage';
import CustomDecksPage from './pages/CustomDecksPage';
import ScreenedPorchesPage from './pages/ScreenedPorchesPage';
import BookConsultationPage from './pages/BookConsultationPage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 antialiased pb-14 sm:pb-0">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/custom-decks" element={<CustomDecksPage />} />
            <Route path="/screened-porches" element={<ScreenedPorchesPage />} />
            <Route path="/consultation" element={<BookConsultationPage />} />
            <Route path="/book-consultation" element={<Navigate to="/consultation" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <StickyMobileBar />
      </div>
    </Router>
  );
}
