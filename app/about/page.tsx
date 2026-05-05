import Image from "next/image";
import Navbar from "@/components/Navbar";

const workSteps = [
  {
    title: "1. Discover",
    description: "I learn about your goals, challenges, and audience to define the right solution.",
    icon: "search",
    color: "bg-pink-400",
  },
  {
    title: "2. Design",
    description: "I plan the structure, craft the UI/UX, and create clean user experiences.",
    icon: "pencil",
    color: "bg-[#bdecfd]",
  },
  {
    title: "3. Develop",
    description: "I bring the design to life with clean code, smart features, and integrations.",
    icon: "code",
    color: "bg-[#86efac]",
  },
  {
    title: "4. Launch",
    description: "I test, optimize, and launch your solution ready to make an impact.",
    icon: "rocket",
    color: "bg-yellow-300",
  },
] as const;



export default function About() {
  return (
    <main className="mb-5 min-h-screen bg-yellow-300 text-black">
      <Navbar />

      <section className="mx-6 mt-4 grid overflow-hidden rounded-2xl border-4 border-black bg-white font-sans shadow-[8px_8px_0_#000] max-[1024px]:mx-4 max-[500px]:mx-3 min-[1025px]:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <div className="min-w-0 px-9 py-10 max-[1024px]:p-7 max-[500px]:p-5">
          <div className="mb-7 inline-flex rounded-md border-3 border-black bg-pink-400 px-5 py-2 text-xl font-black uppercase shadow-[4px_4px_0_#000] max-[500px]:text-base">
            Who I Am
          </div>

          <div className="mb-7">
            <h1 className="text-7xl font-black uppercase leading-none max-[1024px]:text-6xl max-[500px]:text-5xl">
              About Me
            </h1>
            <div className="mt-3 h-3 w-full max-w-[420px] rounded-full bg-pink-400" />
          </div>

          <p className="max-w-2xl text-2xl font-bold leading-snug max-[1024px]:text-xl max-[500px]:text-lg">
            I&apos;m John Carlo Ramos, a web developer from Lucena City who builds websites and web systems for businesses that need practical, reliable tools.
          </p>
        </div>

        <div className="relative min-h-[460px] overflow-hidden border-black bg-[#bdecfd] max-[1024px]:min-h-[380px] max-[500px]:min-h-[300px] min-[1025px]:border-l-4 max-[1024px]:border-t-4">
          <Image
            src="/me1.png"
            alt="John Carlo Ramos"
            fill
            className="object-cover object-[center_20%]"
            priority
          />
        </div>
      </section>

      <section className="mx-6 mt-8 grid gap-6 font-sans max-[1024px]:mx-4 max-[500px]:mx-3 min-[1025px]:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <article className="relative min-w-0 rounded-2xl border-4 border-black bg-white p-6 shadow-[8px_8px_0_#000] max-[500px]:p-4">
          <h2 className="inline-flex rounded-md border-3 border-black bg-pink-400 px-5 py-2 text-2xl font-black uppercase shadow-[4px_4px_0_#000] max-[500px]:text-xl">
            My Story
          </h2>

          <p className="mt-7 text-xl font-bold leading-snug max-[500px]:text-lg">
            I have been fond of computers since I was a kid. That curiosity
            grew into a real interest in how technology works and how it can
            help people solve everyday problems.
          </p>

          <p className="mt-5 text-xl font-bold leading-snug max-[500px]:text-lg">
            I later graduated as a Computer Engineer, and now I work as a web
            developer building websites and systems that are practical,
            reliable, and easy to use.
          </p>

        </article>

        <section className="min-w-0 rounded-2xl border-4 border-black bg-[#bdecfd] p-5 shadow-[8px_8px_0_#000] max-[500px]:p-4">
          <h2 className="inline-flex rounded-md border-3 border-black bg-black px-4 py-1 text-2xl font-black uppercase text-white max-[500px]:text-xl">
            How I Work
          </h2>

          <div className="mt-5 grid gap-4 min-[700px]:grid-cols-2">
            {workSteps.map((step) => (
              <article
                key={step.title}
                className="grid min-h-[245px] justify-items-center rounded-xl border-4 border-black bg-white p-4 text-center shadow-[6px_6px_0_#000]"
              >
                <div
                  className={`grid h-20 w-20 place-items-center rounded-lg border-3 border-black ${step.color}`}
                >
                  <StepIcon name={step.icon} />
                </div>

                <h3 className="mt-4 text-xl font-black leading-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-base font-bold leading-snug">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </section>

  
    </main>
  );
}

function StepIcon({ name }: { name: (typeof workSteps)[number]["icon"] }) {
  switch (name) {
    case "search":
      return (
        <svg aria-hidden="true" className="h-12 w-12" viewBox="0 0 48 48" fill="none">
          <circle cx="21" cy="21" r="12" fill="white" stroke="black" strokeWidth="4" />
          <path d="m30 30 10 10" stroke="black" strokeWidth="5" strokeLinecap="round" />
        </svg>
      );
    case "pencil":
      return (
        <svg aria-hidden="true" className="h-12 w-12" viewBox="0 0 48 48" fill="none">
          <path d="M33 7 41 15 18 38 8 40l2-10z" fill="black" stroke="black" strokeWidth="3" strokeLinejoin="round" />
          <path d="m29 11 8 8" stroke="white" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case "code":
      return (
        <svg aria-hidden="true" className="h-12 w-12" viewBox="0 0 48 48" fill="none">
          <path d="m18 14-9 10 9 10M30 14l9 10-9 10" stroke="black" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="m27 10-6 28" stroke="black" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );
    case "rocket":
      return (
        <svg aria-hidden="true" className="h-12 w-12" viewBox="0 0 48 48" fill="none">
          <path d="M31 6c6 2 9 5 11 11-4 0-8 2-11 5l-5 5-6-6 5-5c3-3 5-7 6-10Z" fill="black" stroke="black" strokeWidth="3" strokeLinejoin="round" />
          <path d="M20 29 12 37M16 25 9 25 6 34l9-3M23 32l1 9 9-3v-7" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="33" cy="16" r="3" fill="white" />
        </svg>
      );
  }
}
