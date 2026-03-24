"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { designMaster } from "../design/theme-master";

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname?.startsWith(`${href}/`);
  };

  return (
    <header>
      <nav className="dd-nav">
        <Link href="/" className="dd-nav__brand" onClick={() => setMenuOpen(false)}>
          <span>
            <span className="dd-nav__name">{designMaster.siteName}</span>
            <span className="dd-nav__tag">{designMaster.siteMark}</span>
          </span>
        </Link>

        <div className="dd-nav__desktop hidden md:flex">
          <div className="dd-nav__menu">
            <div className="dd-nav__primary">
              {designMaster.primaryNavigation.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="dd-nav__link"
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="dd-nav__secondary">
              {designMaster.secondaryNavigation.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="dd-nav__link dd-nav__link--secondary"
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/75 text-primary shadow-paper md:hidden"
          onClick={() => setMenuOpen((value) => !value)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Sluit menu" : "Open menu"}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {menuOpen ? (
        <div className="dd-shell mt-3 md:hidden">
          <div className="dd-panel dd-panel--glass rounded-[2rem] p-3 shadow-float">
            <div className="flex flex-col gap-2">
              {designMaster.primaryNavigation.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-[1.4rem] px-4 py-3 font-serif italic text-primary transition-colors hover:bg-white/70"
                  aria-current={isActive(link.href) ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 border-t border-[rgba(85,67,62,0.08)] pt-2">
                {designMaster.secondaryNavigation.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-[1.4rem] px-4 py-3 font-serif italic text-primary transition-colors hover:bg-white/70"
                    aria-current={isActive(link.href) ? "page" : undefined}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
