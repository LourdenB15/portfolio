import Link from "next/link";

export default function Header() {
    return (
        <header>
            <nav className="flex justify-between px-16 py-5 border-b border-[#282C1D]">
                <Link className="text-3xl font-bold" href="/">Denious</Link>
                <div className="flex gap-5 items-center">
                    <Link href="/">About</Link>
                    <Link href="/education">Education</Link>
                    <div>Gallery</div>
                    <div>Projects</div>
                </div>
            </nav>
        </header>
    )
}