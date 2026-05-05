import CtaBanner from "@/components/CtaBanner";
import Navbar from "@/components/Navbar";

const projects = [
  {
    title: "Ecommerce Website",
    description: "A conversion-focused storefront layout for products, collections, carts, and customer checkout flows.",
    tag: "Online Store",
    color: "bg-pink-400",
  },
  {
    title: "Booking System",
    description: "A scheduling experience for reservations, availability, confirmations, and customer reminders.",
    tag: "Automation",
    color: "bg-[#bdecfd]",
  },
  {
    title: "Admin Dashboard",
    description: "A data-focused workspace for monitoring activity, managing records, and making faster decisions.",
    tag: "Operations",
    color: "bg-yellow-300",
  },
]

export default function Projects() {
  return (
    <main className="min-h-screen bg-yellow-300 text-black">
      <Navbar />

      <header className="mx-6 mt-4 grid gap-8 rounded-2xl border-4 border-black bg-white p-8 font-sans shadow-[8px_8px_0_#000] min-[1025px]:grid-cols-[1.1fr_1fr] max-[1024px]:mx-4 max-[1024px]:p-6 max-[500px]:mx-3 max-[500px]:p-4">
        <div>
          <h1 className="text-7xl font-black uppercase leading-none max-[1024px]:text-6xl max-[500px]:text-5xl">
            Featured
            <br />
            Projects
          </h1>
          <div className="mt-2 h-3 w-[320px] max-w-full rounded-full bg-pink-400" />

          <p className="mt-7 max-w-xl text-2xl font-bold leading-snug max-[1024px]:text-xl max-[500px]:text-lg">
            I build modern, responsive websites and powerful web systems that
            solve real problems and deliver real results.
          </p>

          <div className="mt-8 flex flex-wrap gap-5 max-[500px]:flex-col">
            <a
              href="#project-showcase"
              className="inline-flex items-center justify-center gap-3 rounded-lg border-3 border-black bg-yellow-300 px-6 py-3 text-base font-black uppercase shadow-[4px_4px_0_#000] transition-transform duration-200 hover:-translate-y-1"
            >
              View All Projects
              <ArrowIcon />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-lg border-3 border-black bg-pink-400 px-6 py-3 text-base font-black uppercase shadow-[4px_4px_0_#000] transition-transform duration-200 hover:-translate-y-1"
            >
              Let&apos;s Talk
              <ArrowIcon />
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border-4 border-black bg-white shadow-[8px_8px_0_#000]">
          <div className="flex h-12 items-center border-b-4 border-black bg-[#bdecfd] px-5">
            <BrowserDots />
          </div>
         
        </div>
      </header>

      <section id="project-showcase" className="mx-6 mt-8 rounded-2xl border-4 border-black bg-white px-8 pb-8 pt-5 font-sans shadow-[8px_8px_0_#000] max-[1024px]:mx-4 max-[1024px]:px-5 max-[500px]:mx-3 max-[500px]:p-3">
        <div className="mb-7 flex items-center gap-5 max-[650px]:gap-3">
          <div className="h-1 flex-1 rounded-full bg-black" />
          <h1 className="rounded-lg border-3 border-black bg-yellow-300 px-6 py-2 text-center text-2xl font-black uppercase shadow-[4px_4px_0_#000] max-[650px]:px-4 max-[650px]:text-base">
            Project Showcase
          </h1>
          <div className="h-1 flex-1 rounded-full bg-black" />
        </div>

        <div className="grid gap-5 min-[1025px]:grid-cols-3 max-[1024px]:grid-cols-2 max-[650px]:grid-cols-1">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <CtaBanner />
    </main>
  )
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className="overflow-hidden rounded-xl border-4 border-black bg-white shadow-[7px_7px_0_#000] transition-transform duration-200 hover:-translate-y-1">
      <div className={`flex h-10 items-center border-b-4 border-black px-4 ${project.color}`}>
        <BrowserDots />
      </div>

      <div className="p-4">
        <div className="project-img mb-4 min-h-[185px] rounded-lg border-3 border-black bg-[#f7f7f2]" />

        <h2 className="text-2xl font-black leading-tight max-[500px]:text-xl">
          {project.title}
        </h2>
        <p className="mt-3 min-h-[88px] text-lg font-bold leading-snug max-[500px]:min-h-0 max-[500px]:text-base">
          {project.description}
        </p>

        <div className={`mt-5 inline-flex rounded-md border-3 border-black px-4 py-1 text-sm font-black ${project.color}`}>
          {project.tag}
        </div>
      </div>
    </article>
  )
}

function BrowserDots() {
  return (
    <div className="flex gap-2">
      <span className="h-4 w-4 rounded-full bg-black" />
      <span className="h-4 w-4 rounded-full bg-black" />
      <span className="h-4 w-4 rounded-full bg-black" />
    </div>
  )
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="m13 6 6 6-6 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
