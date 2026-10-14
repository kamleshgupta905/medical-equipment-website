import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type RouterCtx = {
  path: string;
  navigate: (to: string) => void;
};

const Ctx = createContext<RouterCtx>({ path: "/", navigate: () => {} });

function readHash() {
  const raw = window.location.hash.replace(/^#/, "");
  if (!raw || raw === "") return "/";
  return raw.startsWith("/") ? raw : `/${raw}`;
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState(readHash);

  useEffect(() => {
    const sync = () => setPath(readHash());
    window.addEventListener("hashchange", sync);
    if (!window.location.hash) window.location.hash = "/";
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const navigate = (to: string) => {
    const next = to.startsWith("/") ? to : `/${to}`;
    const prevBase = readHash().split("?")[0];
    const nextBase = next.split("?")[0];
    if (window.location.hash !== `#${next}`) window.location.hash = next;
    if (prevBase !== nextBase) window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  };

  return <Ctx.Provider value={{ path, navigate }}>{children}</Ctx.Provider>;
}

export function useRouter() {
  return useContext(Ctx);
}

export function Link({
  to,
  className,
  children,
  onClick,
}: {
  to: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}) {
  const { navigate, path } = useRouter();
  return (
    <a
      href={`#${to}`}
      className={className}
      aria-current={path === to ? "page" : undefined}
      onClick={(e) => {
        e.preventDefault();
        onClick?.();
        navigate(to);
      }}
    >
      {children}
    </a>
  );
}

export function match(path: string) {
  const clean = path.split("?")[0];
  if (clean === "/" || clean === "") return { page: "home" as const };
  if (clean === "/about") return { page: "about" as const };
  if (clean === "/products") return { page: "products" as const };
  if (clean.startsWith("/products/")) return { page: "product" as const, slug: clean.slice(10) };
  if (clean === "/services") return { page: "services" as const };
  if (clean === "/installation") return { page: "installation" as const };
  if (clean === "/insights") return { page: "insights" as const };
  if (clean.startsWith("/insights/")) return { page: "article" as const, slug: clean.slice(10) };
  if (clean === "/contact") return { page: "contact" as const };
  if (clean === "/faq") return { page: "faq" as const };
  return { page: "home" as const };
}
