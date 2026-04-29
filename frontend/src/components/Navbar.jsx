import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#131313]/80 backdrop-blur-xl">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-tighter text-[#e5e2e1] font-manrope"
        >
          ARCHITECT
        </Link>
        <div className="flex items-center space-x-6">
          <Link
            to="/login"
            className="text-[#e5e2e1] hover:text-[#22c55e] transition-colors font-semibold"
          >
            Log In
          </Link>
          <button className="bg-on-surface text-surface-dim px-6 py-2 rounded-lg font-bold hover:bg-[#22c55e] transition-all duration-300 transform active:scale-95">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
