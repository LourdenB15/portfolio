"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav className="flex justify-between px-5 sm:px-10 md:px-16 py-5 border-b border-[#282C1D]">
        <Link className="text-3xl font-bold" href="/">
          Denious
        </Link>

        <div className="hidden sm:flex gap-5 items-center">
          <Link href="/">About</Link>
          <Link href="/education">Education</Link>
          <div>Gallery</div>
          <div>Projects</div>
        </div>

        <button
          className="sm:hidden flex items-center cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="sm:hidden flex flex-col px-5 sm:px-10 md:px-16 py-4 gap-4 border-b border-[#282C1D]">
          <Link href="/" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link href="/education" onClick={() => setOpen(false)}>
            Education
          </Link>
          <div>Gallery</div>
          <div>Projects</div>
        </div>
      )}
    </header>
  );
}
