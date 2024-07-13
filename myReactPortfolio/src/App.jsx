import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white font-montserrat">
        <Header />
        <main className="flex-grow">
          <PageContent />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

function PageContent() {
  const location = useLocation();
  return (
    <Routes location={location}>
      <Route path="/aboutme" element={<AboutMe />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/" element={<AboutMe />} />
    </Routes>
  );
}

export default App;
