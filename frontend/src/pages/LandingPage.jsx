import Navbar from "../components/LandingPage/Navbar";
import MainContent from "../components/LandingPage/MainContent";
import Footer from "../components/LandingPage/Footer";
import useSEO from "../hooks/useSEO";

const LandingPage = () => {
  useSEO({
    title: 'Smarter B2B Procurement',
    description: 'TrustGrid connects buyers and verified suppliers for seamless B2B procurement. Discover suppliers, manage orders, and grow your business.',
  });
  return (
    <div className="min-h-screen bg-[#000000] text-[#e5e2e1] selection:bg-[#22c55e]/30">
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
};

export default LandingPage;
