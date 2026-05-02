const footerLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Contact", href: "#" },
  { label: "LinkedIn", href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-[#131313] w-full py-12 border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 max-w-7xl mx-auto gap-8">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start">
          <span className="text-lg font-black text-[#e5e2e1] font-manrope mb-2">
            ARCHITECT
          </span>
          <p className="text-[10px] font-manrope uppercase tracking-widest text-[#e5e2e1]/60">
            © 2024 Architectural Minimalist. Built for precision.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-8">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-manrope uppercase tracking-widest text-[10px] text-[#e5e2e1]/60 hover:text-[#22c55e] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
