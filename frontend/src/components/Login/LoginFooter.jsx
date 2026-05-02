const footerLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Contact", href: "#" },
];

const LoginFooter = () => {
  return (
    <footer className="w-full py-12 border-t border-white/5 bg-black">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 max-w-7xl mx-auto gap-8">
        {/* Brand */}
        <div className="text-lg font-black text-[#e5e2e1] font-manrope">
          ARCHITECT
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

        {/* Copyright */}
        <div className="font-manrope uppercase tracking-widest text-[10px] text-[#e5e2e1]/40">
          © 2024 Architectural Minimalist. Built for precision.
        </div>
      </div>
    </footer>
  );
};

export default LoginFooter;
