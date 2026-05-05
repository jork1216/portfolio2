import Image from "next/image";
import Navbar from "@/components/Navbar";

// Breakpoints: mobile 0-500px, tablet 501-1024px, desktop 1025px+.
export default function Home() {
  return (
    <main className="min-h-screen bg-yellow-300">
      <Navbar />

      <section className="mx-6 mt-4 grid rounded-2xl border-4 border-black bg-white text-black shadow-[8px_8px_0_#000] min-[1025px]:grid-cols-2 max-[1024px]:mx-4 max-[500px]:mx-3">
        <div className="px-10 py-5 font-sans max-[1024px]:px-8 max-[500px]:px-5">
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
            <button className="rounded-lg border-3 border-black bg-pink-400 px-8 py-4 text-xl font-black uppercase shadow-[6px_6px_0_#000] max-[500px]:px-0 max-[500px]:py-4 max-[500px]:text-base">
              VIEW PROJECTS
            </button>
            <button className="rounded-lg border-3 border-black bg-yellow-300 px-8 py-4 text-xl font-black uppercase shadow-[6px_6px_0_#000] max-[500px]:px-0 max-[500px]:py-4 max-[500px]:text-base">
              BOOK A CALL
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-b-xl border-t-4 border-black bg-[#bdecfd] min-[1025px]:rounded-b-none min-[1025px]:rounded-r-xl min-[1025px]:border-l-4 min-[1025px]:border-t-0 max-[1024px]:min-h-[420px] max-[500px]:min-h-[320px]">
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
