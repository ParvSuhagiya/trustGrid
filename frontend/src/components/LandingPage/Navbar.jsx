import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#131313]/80 backdrop-blur-xl">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Brand */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-tighter text-[#e5e2e1] font-manrope"
        >
          TRUSTGRID
        </Link>

        {/* Desktop nav links */}
        <div className="hidden sm:flex items-center space-x-6">
          <Link
            to="/login"
            className="text-[#e5e2e1] hover:text-[#22c55e] transition-colors font-semibold"
          >
            Log In
          </Link>
          <Link to="/signup">
            <button className="bg-on-surface text-surface-dim px-6 py-2 rounded-lg font-bold hover:bg-[#22c55e] transition-all duration-300 transform active:scale-95">
              Get Started
            </button>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] group"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-0.5 w-6 bg-[#e5e2e1] transition-all duration-300 origin-center ${
              menuOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#e5e2e1] transition-all duration-300 ${
              menuOpen ? 'opacity-0 scale-x-0' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#e5e2e1] transition-all duration-300 origin-center ${
              menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col px-6 pb-4 gap-3 border-t border-white/10">
          <Link
            to="/login"
            className="text-[#e5e2e1] hover:text-[#22c55e] transition-colors font-semibold py-2"
            onClick={() => setMenuOpen(false)}
          >
            Log In
          </Link>
          <Link to="/signup" onClick={() => setMenuOpen(false)}>
            <button className="w-full bg-on-surface text-surface-dim px-6 py-2.5 rounded-lg font-bold hover:bg-[#22c55e] transition-all duration-300 active:scale-95 text-left">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
