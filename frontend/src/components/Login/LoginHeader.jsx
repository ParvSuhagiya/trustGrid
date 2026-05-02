import { Link } from 'react-router-dom'

const LoginHeader = () => {
  return (
    <header className="fixed top-0 w-full z-50 py-8 px-8">
      <div className="max-w-7xl mx-auto flex justify-center md:justify-start">
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-tighter text-[#e5e2e1] font-manrope hover:text-[#22c55e] transition-colors"
        >
          ARCHITECT
        </Link>
      </div>
    </header>
  );
};

export default LoginHeader;
