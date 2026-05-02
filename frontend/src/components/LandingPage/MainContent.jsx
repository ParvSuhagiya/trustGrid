const MainContent = () => {
  const features = [
    {
      icon: "verified_user",
      title: "Verified Suppliers",
      description:
        "Multi-stage vetting process ensuring every partner meets rigorous industrial standards for quality and reliability.",
    },
    {
      icon: "insights",
      title: "Smart Analytics",
      description:
        "Real-time market pricing and supply chain visibility. Data-driven decisions for complex global procurement.",
    },
    {
      icon: "public",
      title: "Global Reach",
      description:
        "Integrated logistics network spanning six continents. Seamless customs handling and international trade compliance.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Register Account",
      description:
        "Complete our business verification process to unlock the full potential of our marketplace. Professional grade security for enterprise data.",
    },
    {
      number: "02",
      title: "Browse Marketplace",
      description:
        "Access a curated database of millions of industrial components and raw materials. Use advanced filters to find exact specifications.",
    },
    {
      number: "03",
      title: "Place Orders",
      description:
        "Secure transaction handling and automated document generation. Track your shipment from origin to doorstep in real-time.",
    },
  ];

  return (
    <main className="pt-24">
      {/* ── Hero Section ── */}
      <section className="relative min-h-[700px] flex items-center px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left copy */}
          <div className="lg:col-span-7 z-10">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#1c1b1b] border border-[#444444] mb-8">
              <span className="w-2 h-2 rounded-full bg-[#22c55e] mr-2 animate-pulse"></span>
              <span className="text-[10px] font-manrope uppercase tracking-[0.2em] text-[#22c55e]">
                Global Supply Chain Network
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold font-manrope tracking-tight leading-[1.1] mb-6">
              Precision Sourcing for{" "}
              <span className="text-[#22c55e] accent-glow">Global</span> Supply
              Chains
            </h1>
            <p className="text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed">
              The most efficient marketplace for industrial procurement.
              Engineering high-performance connections between manufacturers and
              verified suppliers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-on-surface text-surface-dim px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#22c55e] transition-all duration-300">
                Get Started
              </button>
              <button className="px-8 py-4 rounded-lg font-bold text-lg border border-[#444444] hover:bg-surface-container transition-all duration-300">
                View Marketplace
              </button>
            </div>
          </div>

          {/* Right image card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden aspect-square border border-[#444444] bg-surface-container shadow-2xl">
              <img
                alt="Industrial Logistics"
                className="w-full h-full object-cover opacity-60"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMHXsWTNLHKQ6XL-QjPW0Q31Au7wHeozfmITpruk4HHn4nBArinJd_E9O0B9kQ2bA42tFvXvRBoC19hugQ7bHwDcyZ1RNy_1tPc5WKjHAjLglWGvO0mxhl6BK0gFBCashHqoufxfITP7oiBkPkdsPLKBkoT2iHhMaLnCqRLuGNiRhS29YnJpo_ONAjNMVm2T31irXgmVAoYUcW5pjs42cZwK3vJ8adEWXWF__3YEfZJnTNwrlW5gf1oyNObQS00C03o1vUNOj2OWK0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-surface-container-low/90 backdrop-blur-md rounded-xl border border-[#444444]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-[#22c55e] uppercase tracking-widest">
                    Active Trade Flow
                  </span>
                  <span
                    className="material-symbols-outlined text-[#22c55e]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    monitoring
                  </span>
                </div>
                {/* Bar chart */}
                <div className="h-24 w-full bg-surface-container-highest rounded-lg flex items-end justify-between px-2 pb-2 gap-1">
                  {[40, 60, 30, 80, 55, 90].map((h, i) => (
                    <div
                      key={i}
                      className="w-full bg-[#22c55e] rounded-sm"
                      style={{ height: `${h}%`, opacity: i === 1 ? 0.8 : 1 }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
            {/* Decorative glow */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#22c55e]/10 blur-[100px] -z-10 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* ── Feature Blocks – Bento Grid ── */}
      <section className="py-24 px-8 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-manrope mb-4">
              Engineered Excellence
            </h2>
            <div className="h-1 w-20 bg-[#22c55e] mx-auto rounded-full mb-6"></div>
            <p className="text-on-surface-variant">
              Sophisticated tools designed for the modern procurement officer.
              Efficiency is our baseline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-8 rounded-xl bg-surface-container border border-[#444444] hover:bg-surface-container-high transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#1c1b1b] flex items-center justify-center mb-6 border border-[#444444] group-hover:border-[#22c55e] transition-colors">
                  <span className="material-symbols-outlined text-[#22c55e]">
                    {feature.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold font-manrope mb-4">
                  {feature.title}
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works – Asymmetric Layout ── */}
      <section className="py-24 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            {/* Sticky heading */}
            <div className="md:w-1/3 md:sticky md:top-32">
              <h2 className="text-4xl md:text-5xl font-black font-manrope leading-tight mb-6">
                The Path to <br />
                <span className="text-[#22c55e]">Streamlined</span> Operations.
              </h2>
              <p className="text-on-surface-variant text-lg">
                Three steps to transform your procurement workflow from
                fragmented to fluid.
              </p>
            </div>

            {/* Steps */}
            <div className="md:w-2/3 space-y-12">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-8 group">
                  <div className="flex-shrink-0 text-6xl font-black text-[#1c1b1b] transition-colors group-hover:text-[#22c55e]/20 font-manrope">
                    {step.number}
                  </div>
                  <div className="pt-4 border-t border-[#444444] w-full">
                    <h4 className="text-2xl font-bold font-manrope mb-3">
                      {step.title}
                    </h4>
                    <p className="text-on-surface-variant leading-relaxed max-w-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA Section ── */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto rounded-3xl bg-surface-container relative overflow-hidden p-12 md:p-24 border border-[#444444]">
          {/* Background image overlay */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
            <img
              alt="Abstract Industrial"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlU2s2FsARPqXG-ZtlsHr23r_Lyh-3fgiR9Uw4MD3sXDoeAMREltSIEe2vH4l8LBfKpdTpKrq_AFDXDExDoxixjPpUEuhmonJj1-uOkKkHd_XbB25nTcF5ThYs_xZykcbfDJkALzDuS6m3lxplu9UGzsCAwgDatGg4704-YE-HPgif4FzYTduJ7PixLrNbtqHZva2rIeBgN_HC2mFT99slsuUIfn3jMwyXBleSJvh0owRDkNkM4M8Zlymj75c1rpNTuwegV10hLahC"
            />
          </div>
          {/* CTA copy */}
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black font-manrope mb-8 leading-tight">
              Ready to architect your{" "}
              <span className="text-[#22c55e]">supply chain</span>?
            </h2>
            <p className="text-xl text-on-surface-variant mb-12">
              Join the world's leading manufacturers in a marketplace built for
              the next generation of industrial trade.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-on-surface text-surface-dim px-10 py-5 rounded-lg font-bold text-xl hover:bg-[#22c55e] transition-all duration-300">
                Get Started
              </button>
              <button className="px-10 py-5 rounded-lg font-bold text-xl border border-[#444444] hover:bg-[#1c1b1b] transition-all">
                Talk to an Expert
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
