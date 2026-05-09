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
          <div className="mb-5 flex items-center gap-3">
            <div className="inline-flex -rotate-3 items-center gap-3 rounded-md border-4 border-black bg-pink-400 px-5 py-2 text-2xl font-black uppercase shadow-[5px_5px_0_#000] max-[500px]:text-xl">
              <span>HI, I&apos;M A</span>
            
            </div>
            <LightningBurstIcon />
          </div>

          <h1 className="flex flex-col items-start gap-2 text-7xl font-black uppercase leading-none tracking-normal max-[1024px]:text-6xl max-[500px]:text-6xl max-[370px]:text-5xl">
            <span className="inline-block -rotate-2 border-4 border-black bg-yellow-300 px-5 py-2 shadow-[7px_7px_0_#000] [-webkit-text-stroke:2px_black] max-[500px]:px-3">
              WEB
            </span>
            <span className="inline-block rotate-[-1deg] border-4 border-black bg-pink-400 px-5 py-2 shadow-[7px_7px_0_#000] [-webkit-text-stroke:2px_black] max-[500px]:px-3 max-[500px]:text-5xl max-[370px]:text-4xl">
              DEVELOPER
            </span>
          </h1>

          <p className="mt-7 max-w-xl -rotate-1 border-4 border-black bg-white px-5 py-4 text-xl font-black leading-snug shadow-[6px_6px_0_#000] max-[1024px]:text-lg max-[500px]:text-base">
            I build reliable web services that help businesses grow, 
            operate smoothly, and serve their customers better.
          </p>

          <div className="mt-11 flex gap-7 max-[500px]:flex-col max-[500px]:gap-4">
            <Link
              href="/projects"
              className="inline-flex min-h-18 items-center justify-center gap-4 rounded-lg border-4 border-black bg-pink-400 px-7 py-4 text-xl font-black uppercase shadow-[8px_8px_0_#000] transition-transform duration-200 hover:-translate-x-1 hover:-translate-y-1 max-[500px]:min-h-16 max-[500px]:px-4 max-[500px]:text-base"
            >
              <EyeIcon />
              <span>VIEW PROJECTS</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-18 items-center justify-center gap-4 rounded-lg border-4 border-black bg-yellow-300 px-7 py-4 text-xl font-black uppercase shadow-[8px_8px_0_#000] transition-transform duration-200 hover:-translate-x-1 hover:-translate-y-1 max-[500px]:min-h-16 max-[500px]:px-4 max-[500px]:text-base"
            >
              <PhoneIcon />
              <span>BOOK A CALL</span>
            </Link>
          </div>
        </div>

        <div className="relative min-h-[500px] overflow-hidden rounded-2xl border-4 border-black bg-[#bdecfd] shadow-[8px_8px_0_#000] max-[1024px]:min-h-[420px] max-[500px]:min-h-[320px]">
          <Image
            src="/me1.png"
            alt="Web developer illustration"
            fill
            sizes="(max-width: 500px) calc(100vw - 56px), (max-width: 1024px) calc(100vw - 80px), calc((100vw - 112px) / 2)"
            className="object-cover contrast-105 saturate-130 max-[500px]:object-[center_30%]"
            loading="eager"
          />
          <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[0.75rem_0_0_0.75rem] border-b-4 border-l-4 border-t-4 border-white" />
        </div>
      </section>
    </main>
  )
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" className="h-12 w-12 shrink-0 max-[500px]:h-8 max-[500px]:w-8" viewBox="0 0 32 32" fill="none">
      <path d="M10 5 6 9c1 9 8 16 17 17l4-4-5-5-3 3c-3-1-6-4-7-7l3-3z" fill="black" stroke="black" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  )
}

function EyeIcon() {
  return (
    <svg aria-hidden="true" className="h-10 w-10 shrink-0 max-[500px]:h-8 max-[500px]:w-8" viewBox="0 0 32 32" fill="none">
      <path d="M3 16s5-8 13-8 13 8 13 8-5 8-13 8S3 16 3 16Z" fill="white" stroke="black" strokeWidth="3" strokeLinejoin="round" />
      <circle cx="16" cy="16" r="4" fill="white" stroke="black" strokeWidth="3" />
    </svg>
  )
}

function LightningIcon() {
  return (
    <svg aria-hidden="true" className="h-10 w-10 shrink-0 max-[500px]:h-8 max-[500px]:w-8" viewBox="0 0 32 32" fill="none">
      <path d="M18 2 6 18h9l-2 12 13-17h-9z" fill="#fde047" stroke="black" strokeWidth="3" strokeLinejoin="round" />
    </svg>
  )
}

function LightningBurstIcon() {
  return (
    <svg aria-hidden="true" className="-ml-1 h-12 w-7 shrink-0 max-[500px]:h-10 max-[500px]:w-6" viewBox="41 2 23 44" fill="none">
      <path d="M45 12 56 5" stroke="black" strokeWidth="4" strokeLinecap="round" />
      <path d="M48 24h12" stroke="black" strokeWidth="4" strokeLinecap="round" />
      <path d="M45 35 56 42" stroke="black" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}
