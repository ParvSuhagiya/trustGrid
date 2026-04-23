import Navbar from "../components/Navbar";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#000000] text-[#e5e2e1] selection:bg-[#22c55e]/30">
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
};

export default LandingPage;
