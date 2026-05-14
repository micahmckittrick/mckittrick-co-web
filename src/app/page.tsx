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
