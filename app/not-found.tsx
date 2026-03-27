import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grow flex flex-col items-center justify-center gap-4">
      <div className="text-6xl font-bold">404</div>
      <div className="text-xl">Page not found</div>
      <Link
        href="/"
        className="border border-[#212807] hover:bg-[#212807] transition-colors px-6 py-2.5 rounded-lg text-sm"
      >
        Go home
      </Link>
    </div>
  );
}
