import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/common/Header";
import { EDUCATION } from "@/constants/education";
import { MoveLeft } from "lucide-react"

export default async function EducationLevel({ params }: { params: Promise<{ educationLevel: string }> }) {
    const { educationLevel } = await params;

    const entry = EDUCATION.find(
        (e) => e.level.toLowerCase() === educationLevel.toLowerCase()
    );
    
    if (!entry) notFound();

    return (
        <>
            <Header />
            <section className="px-16 grow flex justify-center mt-8">
                <div className="w-full max-w-md">
                    <Link href="/education" className="text-sm mb-6 inline-block opacity-60 hover:opacity-100 duration-[200ms]">
                        <MoveLeft className="inline mr-2" /> Back to Education
                    </Link>
                    <div className="text-4xl font-bold text-center mb-5">{entry.level}</div>
                    <div className="flex flex-col gap-4">
                        {entry.school.map((school) => (
                            <div key={school.id} className="border border-[#212807] rounded-lg p-5">
                                <div className="font-bold mb-1">{school.schoolName}</div>
                                <div className="opacity-60">{school.year}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
