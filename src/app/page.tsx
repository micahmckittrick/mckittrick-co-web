export default function Home() {
  const projects = [
    {
      emoji: "💎",
      name: "AnimeGems",
      type: "Web",
      description: "Discover hidden anime gems.",
      href: "https://animegems.com",
      cta: "Visit Site",
    },
    {
      emoji: "🐾",
      name: "Can They Have It?",
      type: "Web",
      description: "AI-powered pet food safety checker.",
      href: "https://cantheyhaveit.com",
      cta: "Visit Site",
    },
    {
      emoji: "📓",
      name: "Checkbook",
      type: "iOS",
      description: "A modern, private ledger app.",
      href: "https://apps.apple.com/us/app/checkbook-by-mckittrick-llc/id6762422098",
      cta: "App Store",
    },
    {
      emoji: "⚔️",
      name: "Clashboard",
      type: "iOS",
      description: "Clash of Clans & Royale dashboard.",
      href: null,
      cta: "Coming Soon",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center flex-1 px-6 py-32 text-center">
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent mb-6">
          McKittrick LLC
        </h1>
        <p className="text-xl sm:text-2xl text-gray-400 max-w-xl leading-relaxed">
          We build apps, platforms, and products we actually want to use.
        </p>
      </section>

      {/* Projects */}
      <section className="px-6 pb-24 max-w-5xl mx-auto w-full">
        <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-8 text-center">
          What we&apos;ve built
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.name}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col gap-4 hover:border-gray-600 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">{p.emoji}</span>
                <div>
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <span className="text-xs text-gray-500 uppercase tracking-wide">
                    {p.type}
                  </span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed flex-1">
                {p.description}
              </p>
              {p.href ? (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  {p.cta} →
                </a>
              ) : (
                <span className="text-sm font-medium text-gray-600">
                  {p.cta}
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="https://www.linkedin.com/in/micahmckittrick"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-white transition-colors"
          aria-label="LinkedIn"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a
          href="https://github.com/micahmckittrick"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-white transition-colors"
          aria-label="GitHub"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-10 text-center text-gray-500 text-sm px-6">
        Want to collaborate or have questions?{" "}
        <a
          href="mailto:micah@mckittrick.co"
          className="text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          Drop us a line at micah@mckittrick.co
        </a>
      </footer>
    </main>
  );
}
