import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import CommandPalette from "./CommandPalette";

const topLinks = [
  { label: "Home", route: "/" },
  { label: "Biography", route: "/biography" },
  { label: "Literature", route: "/literature" },
  { label: "Organization", route: "/organization" },
];

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  // Keyboard shortcut to open command palette (Cmd/Ctrl + K)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setMenuOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="min-h-screen bg-linen text-ink">
      {/* Elegant top header */}
      <header className="sticky top-0 z-40 border-b border-black/5 bg-linen/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          {/* Brand wordmark */}
          <Link to="/" className="group flex flex-col leading-none" aria-label="ElTiempo home">
            <span className="font-serif text-2xl tracking-[0.32em] text-ink sm:text-[1.65rem]">
              ELTIEMPO
            </span>
            <span className="mt-0.5 font-serif text-sm italic text-sage sm:text-base">
              a legacy through time
            </span>
          </Link>

          {/* Desktop inline nav */}
          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
            {topLinks.map((l) => (
              <NavLink
                key={l.route}
                to={l.route}
                className={({ isActive }) =>
                  `relative text-xs font-semibold uppercase tracking-[0.18em] transition ${
                    isActive ? "text-ink" : "text-muted hover:text-ink"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && (
                      <span className="absolute -bottom-1.5 left-0 h-[2px] w-full rounded-full bg-sage" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Floating trigger pill (identity widget) */}
          <button
            onClick={() => setMenuOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={menuOpen}
            aria-label="Open navigation menu"
            className="group flex items-center gap-3 rounded-full border border-black/10 bg-white/70 py-1.5 pl-2 pr-4 shadow-sm transition hover:border-sage/40 hover:shadow-md"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-sage/20 text-sage transition group-hover:bg-sage/30">
              <Menu className="h-4 w-4 text-ink" strokeWidth={2} />
            </span>
            <span className="hidden text-left leading-tight sm:block">
              <span className="block text-[13px] font-semibold text-ink">ManualTec</span>
              <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
                Menu
              </span>
            </span>
          </button>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-black/5 bg-linen-deep">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 sm:px-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-serif text-3xl tracking-[0.3em] text-ink">ELTIEMPO</p>
            <p className="mt-2 max-w-sm text-sm text-muted">
              An editorial tribute to Chris Kyle — telling an American hero's story through
              time, with great pride.
            </p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
            {topLinks.map((l) => (
              <Link
                key={l.route}
                to={l.route}
                className="text-xs font-semibold uppercase tracking-[0.18em] text-muted transition hover:text-ink"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="border-t border-black/5 py-5">
          <p className="text-center text-xs text-muted">
            © {new Date().getFullYear()} ElTiempo — Designed by ManualTec. Legacy lives forever.
          </p>
        </div>
      </footer>

      <CommandPalette open={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
}
