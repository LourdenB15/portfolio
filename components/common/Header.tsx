"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/common/ModeToggle";
export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background">
      <nav className="flex justify-between px-5 sm:px-10 md:px-16 py-5 border-b border-border">
        <Link className="text-3xl font-bold" href="/">
          Denious
        </Link>

        <div className="hidden sm:flex gap-5 items-center">
          <Link href="/">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
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

      {open && (
        <div className="sm:hidden absolute w-full flex flex-col px-5 py-4 gap-4 border-b border-border bg-background">
          <Link href="/" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link href="/projects" onClick={() => setOpen(false)}>
            Projects
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
