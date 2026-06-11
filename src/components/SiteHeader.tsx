import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
const logo = "/yaarwin-logo.jpg";

const nav = [
  { to: "/", label: "Home" },
  { to: "/games", label: "Games" },
  { to: "/how-to-play", label: "How To Play" },
  { to: "/gift-code", label: "Gift Code" },
  { to: "/download-app", label: "Download App" },
  { to: "/blog", label: "Blog" },
  { to: "/faq", label: "FAQ" },
];

export const LOGIN_URL = "https://yaarwin.biz/#/register?invitationCode=44652714975";
export const REGISTER_URL = "https://yaarwin.biz/#/register?invitationCode=44652714975";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-border">
      <div className="container-page flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo.url} alt="YaarWin logo" width={36} height={36} className="rounded-full" />
          <span className="font-display font-bold text-lg text-foreground">Yaar<span className="text-brand">Win</span></span>
        </Link>
        <nav className="hidden lg:flex items-center gap-6">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="text-sm font-medium text-foreground hover:text-brand transition" activeProps={{ className: "text-brand" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-2">
          <a href={LOGIN_URL} className="btn-outline text-sm">Login</a>
          <a href={REGISTER_URL} className="btn-brand btn-brand-hover text-sm">Register</a>
        </div>
        <button onClick={() => setOpen(!open)} className="lg:hidden p-2" aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <div className="container-page py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="text-sm font-medium py-1">
                {n.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-2">
              <a href={LOGIN_URL} className="btn-outline flex-1 text-sm">Login</a>
              <a href={REGISTER_URL} className="btn-brand btn-brand-hover flex-1 text-sm">Register</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
