import { useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Home, GalleryVertical, Library, Mail, X } from "lucide-react";

interface NavItem {
  label: string;
  hint: string;
  route: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}

const navItems: NavItem[] = [
  { label: "Home", hint: "Landing & pillars", route: "/", icon: Home },
  { label: "Portfolio", hint: "Biography", route: "/biography", icon: GalleryVertical },
  { label: "Catalog", hint: "Literature & legacy", route: "/literature", icon: Library },
  { label: "Contact", hint: "The organization", route: "/organization", icon: Mail },
];

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
}

export default function CommandPalette({ open, onClose }: CommandPaletteProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const isActive = (route: string) =>
    route === "/" ? location.pathname === "/" : location.pathname === route;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-24 sm:pt-28"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      {/* Backdrop grouping */}
      <button
        aria-label="Close menu"
        onClick={onClose}
        className="absolute inset-0 bg-ink/25 backdrop-blur-sm"
      />

      <div
        ref={panelRef}
        className="animate-scale-in relative w-full max-w-md overflow-hidden rounded-3xl border border-black/5 bg-white shadow-[0_30px_80px_-20px_rgba(28,29,31,0.35)]"
      >
        <div className="flex items-center justify-between border-b border-black/5 px-6 py-4">
          <div>
            <p className="font-serif text-2xl leading-none text-ink">ManualTec</p>
            <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
              Menu — Jump to section
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="grid h-9 w-9 place-items-center rounded-full text-muted transition hover:bg-linen-deep hover:text-ink"
          >
            <X className="h-4 w-4" strokeWidth={2} />
          </button>
        </div>

        <nav className="p-3" aria-label="Primary">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const active = isActive(item.route);
              const Icon = item.icon;
              return (
                <li key={item.label}>
                  <Link
                    to={item.route}
                    onClick={onClose}
                    aria-current={active ? "page" : undefined}
                    className={`group flex items-center gap-4 rounded-2xl px-4 py-3 transition ${
                      active
                        ? "bg-sage/15 text-ink"
                        : "text-ink hover:bg-linen-deep"
                    }`}
                  >
                    <span
                      className={`grid h-10 w-10 place-items-center rounded-xl border transition ${
                        active
                          ? "border-sage/40 bg-sage/25 text-ink"
                          : "border-black/5 bg-linen text-muted group-hover:text-ink"
                      }`}
                    >
                      <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                    </span>
                    <span className="flex-1">
                      <span className="block text-sm font-semibold tracking-wide">
                        {item.label}
                      </span>
                      <span className="block text-xs text-muted">{item.hint}</span>
                    </span>
                    {active && (
                      <span
                        aria-hidden="true"
                        className="h-2 w-2 rounded-full bg-sage"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="border-t border-black/5 px-6 py-3">
          <p className="text-[11px] text-muted">
            Press{" "}
            <kbd className="rounded bg-linen-deep px-1.5 py-0.5 font-sans text-[10px] font-semibold text-ink">
              Esc
            </kbd>{" "}
            to close
          </p>
        </div>
        {/* keep navigate referenced for potential shortcut use */}
        <span className="hidden">{String(!!navigate)}</span>
      </div>
    </div>
  );
}
