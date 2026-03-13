import Link from "next/link";
import { Github, Mail, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#282C1D] px-5 sm:px-10 md:px-16 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-[#EBF2D9]/60">
      <span>
        &copy; {new Date().getFullYear()} Denious. All rights reserved.
      </span>

      <div className="flex gap-5 items-center">
        <Link
          href="https://github.com/LourdenB15"
          target="_blank"
          aria-label="GitHub"
          className="hover:text-[#EBF2D9] transition-colors"
        >
          <Github size={18} />
        </Link>
        <Link
          href="https://facebook.com/lourdenbaydal13"
          target="_blank"
          aria-label="LinkedIn"
          className="hover:text-[#EBF2D9] transition-colors"
        >
          <Facebook size={18} />
        </Link>
        <Link
          href="mailto:lourdenbaydal13@gmail.com"
          aria-label="Email"
          className="hover:text-[#EBF2D9] transition-colors"
        >
          <Mail size={18} />
        </Link>
      </div>
    </footer>
  );
}
