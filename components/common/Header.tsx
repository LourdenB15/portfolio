"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/common/ModeToggle";
export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navClass = (href: string) => {
    const isActive =
      href === "/" ? pathname === href : pathname.startsWith(href);
    return `px-3 py-1 rounded-md transition-colors hover:bg-muted ${isActive ? "bg-muted" : ""}`;
  };

  return (
    <header className="sticky top-0 z-50 bg-background">
      <nav className="flex justify-between px-5 sm:px-10 md:px-16 py-5 border-b border-border">
        <Link className="text-3xl font-bold" href="/">
          Denious
        </Link>

        <div className="hidden sm:flex gap-5 items-center">
          <Link href="/" className={navClass("/")}>
            About
          </Link>
          <Link href="/projects" className={navClass("/projects")}>
            Projects
          </Link>
          <Link href="/contact" className={navClass("/contact")}>
            Contact
          </Link>
          <ModeToggle />
        </div>

        <div
          className="sm:hidden flex items-center gap-2"
          aria-label="Toggle menu"
        >
          <ModeToggle />
          <button
            className="cursor-pointer"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <div
        className={`sm:hidden absolute w-full flex flex-col px-5 gap-2 border-b border-border bg-background overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "py-4 max-h-48 opacity-100" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <Link href="/" className={navClass("/")} onClick={() => setOpen(false)}>
          About
        </Link>
        <Link
          href="/projects"
          className={navClass("/projects")}
          onClick={() => setOpen(false)}
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className={navClass("/contact")}
          onClick={() => setOpen(false)}
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
