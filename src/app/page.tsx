type ProjectLink = {
  label: string;
  href: string;
  kind: "site" | "app" | "ig" | "tiktok";
};

type Project = {
  emoji: string;
  name: string;
  type: string;
  description: string;
  links: ProjectLink[];
  comingSoon?: boolean;
};

export default function Home() {
  const projects: Project[] = [
    {
      emoji: "💎",
      name: "AnimeGems",
      type: "Web",
      description: "Hidden anime worth your time. Find what to watch next, see where it streams.",
      links: [
        { label: "animegems.com", href: "https://animegems.com", kind: "site" },
        { label: "@anime__gems", href: "https://www.instagram.com/anime__gems", kind: "ig" },
        { label: "TikTok", href: "https://www.tiktok.com/@anime__gems", kind: "tiktok" },
      ],
    },
    {
      emoji: "🐾",
      name: "Can They Have It?",
      type: "Web",
      description: "AI-powered pet food safety checker. Snap a label, get an answer.",
      links: [
        { label: "cantheyhaveit.com", href: "https://cantheyhaveit.com", kind: "site" },
        { label: "@cantheyhaveit", href: "https://www.instagram.com/cantheyhaveit", kind: "ig" },
        { label: "TikTok", href: "https://www.tiktok.com/@cantheyhaveit", kind: "tiktok" },
      ],
    },
    {
      emoji: "📓",
      name: "Checkbook",
      type: "iOS",
      description: "A modern, private ledger. Track money like it's 1995, on hardware from 2025.",
      links: [
        { label: "App Store", href: "https://apps.apple.com/us/app/checkbook-by-mckittrick-llc/id6762422098", kind: "app" },
        { label: "@checkbook.app", href: "https://www.instagram.com/checkbook.app", kind: "ig" },
        { label: "TikTok", href: "https://www.tiktok.com/@checkbook.app", kind: "tiktok" },
      ],
    },
    {
      emoji: "⚔️",
      name: "Clashboard",
      type: "Web · iOS coming soon",
      description: "Live war + river race accountability for Clash of Clans & Clash Royale. Stop chasing your clan.",
      links: [
        { label: "clashboard.gg", href: "https://clashboard.gg", kind: "site" },
        { label: "@clashboardapp", href: "https://www.instagram.com/clashboardapp", kind: "ig" },
      ],
    },
    {
      emoji: "💬",
      name: "ReplyChecker",
      type: "Web",
      description: "AI text and vibe checker. Don't send regret.",
      links: [],
      comingSoon: true,
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
              {p.comingSoon ? (
                <span className="text-sm font-medium text-gray-600">
                  Coming Soon
                </span>
              ) : (
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                  {p.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={
                        l.kind === "site" || l.kind === "app"
                          ? "inline-flex items-center gap-1 font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                          : "inline-flex items-center gap-1 text-gray-500 hover:text-white transition-colors"
                      }
                    >
                      {linkIcon(l.kind)}
                      <span>{l.label}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="https://www.linkedin.com/company/mckittrick-llc"
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
          href="https://www.instagram.com/mckittrick.llc"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-white transition-colors"
          aria-label="Instagram"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
        </a>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-10 text-center text-gray-500 text-sm px-6">
        Want to collaborate or have questions?{" "}
        <a
          href="mailto:support@mckittrick.co"
          className="text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          Drop us a line at support@mckittrick.co
        </a>
      </footer>
    </main>
  );
}

function linkIcon(kind: "site" | "app" | "ig" | "tiktok") {
  const cls = "shrink-0";
  if (kind === "site") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}>
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    );
  }
  if (kind === "app") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className={cls}>
        <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.5-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
      </svg>
    );
  }
  if (kind === "ig") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    );
  }
  // tiktok
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className={cls}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.78a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.21z"/>
    </svg>
  );
}
