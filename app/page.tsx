import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

// Breakpoints: mobile 0-500px, tablet 501-1024px, desktop 1025px+.
export default function Home() {
  return (
    <main className="mb-10 min-h-screen bg-yellow-300">
      <Navbar />

      <section className="mx-6 mt-4 grid gap-8 rounded-2xl border-4 border-black bg-white p-8 text-black shadow-[8px_8px_0_#000] min-[1025px]:grid-cols-2 max-[1024px]:mx-4 max-[1024px]:p-6 max-[500px]:mx-3 max-[500px]:p-4">
        <div className="font-sans">
          <div className="mb-6 inline-block rounded-lg border-3 border-black bg-pink-400 px-5 py-2 text-2xl font-black uppercase shadow-[4px_4px_0_#000] max-[500px]:text-xl">
            HI, I&apos;M A
          </div>

          <h1 className="text-7xl font-black uppercase leading-none [-webkit-text-stroke:2px_black] max-[1024px]:text-6xl max-[500px]:text-5xl">
            WEB
            <br />
            DEVELOPER
          </h1>

          <p className="mt-6 max-w-xl text-2xl font-bold leading-snug max-[1024px]:text-xl max-[500px]:text-lg">
            I build reliable web services that help businesses grow, 
            operate smoothly, and serve their customers better.
          </p>

          <div className="mt-10 flex gap-8 max-[500px]:flex-col max-[500px]:gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-3 rounded-lg border-3 border-black bg-pink-400 px-8 py-4 text-xl font-black uppercase shadow-[6px_6px_0_#000] transition-transform duration-200 hover:-translate-y-1 max-[500px]:px-0 max-[500px]:py-4 max-[500px]:text-base"
            >
              <EyeIcon />
              <span>VIEW PROJECTS</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-lg border-3 border-black bg-yellow-300 px-8 py-4 text-xl font-black uppercase shadow-[6px_6px_0_#000] transition-transform duration-200 hover:-translate-y-1 max-[500px]:px-0 max-[500px]:py-4 max-[500px]:text-base"
            >
              <PhoneIcon />
              <span>BOOK A CALL</span>
            </Link>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-xl border-4 border-black bg-[#bdecfd] max-[1024px]:min-h-[420px] max-[500px]:min-h-[320px]">
          <Image
            src="/me1.png"
            alt="Web developer illustration"
            fill
            className="object-cover max-[500px]:object-[center_30%]"
            priority
          />
        </div>
      </section>
    </main>
  )
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" className="h-13 w-13 max-[500px]:h-8 max-[500px]:w-8" viewBox="0 0 32 32" fill="none">
      <path d="M10 5 6 9c1 9 8 16 17 17l4-4-5-5-3 3c-3-1-6-4-7-7l3-3z" fill="black" stroke="black" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  )
}

function EyeIcon() {
  return (
    <svg aria-hidden="true" className="h-10 w-10 max-[500px]:h-8 max-[500px]:w-8" viewBox="0 0 32 32" fill="none">
      <path d="M3 16s5-8 13-8 13 8 13 8-5 8-13 8S3 16 3 16Z" fill="white" stroke="black" strokeWidth="3" strokeLinejoin="round" />
      <circle cx="16" cy="16" r="4" fill="white" stroke="black" strokeWidth="3" />
    </svg>
  )
}
