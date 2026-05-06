import Navbar from "@/components/Navbar";

const services = [
  {
    title: "Ecommerce Website",
    description: "Online stores that convert visitors into loyal customers.",
    icon: "cart",
    color: "bg-pink-400",
  },
  {
    title: "Business Website",
    description: "Professional websites that build trust and showcase your brand.",
    icon: "monitor",
    color: "bg-[#bdecfd]",
  },
  {
    title: "Booking or Reservation System",
    description: "Smart booking systems that save time and avoid double bookings.",
    icon: "calendar",
    color: "bg-yellow-300",
  },
  {
    title: "Inventory System",
    description: "Track stock, manage products, and never run out again.",
    icon: "box",
    color: "bg-yellow-300",
  },
  {
    title: "Website Redesign",
    description: "Modern, fresh redesigns that improve UX and boost conversions.",
    icon: "brush",
    color: "bg-pink-400",
  },
  {
    title: "Automation Services",
    description: "Automate repetitive tasks and focus on what truly matters.",
    icon: "gear",
    color: "bg-[#bdecfd]",
  },
] as const

export default function Services() {
  return (
    <main className="mb-10 min-h-screen bg-yellow-300 text-black">
      <Navbar />

      <section className="mx-6 mt-4 rounded-2xl border-4 border-black bg-white p-8 font-sans shadow-[8px_8px_0_#000] max-[1024px]:mx-4 max-[1024px]:p-6 max-[500px]:mx-3 max-[500px]:p-4">
        <h1 className="mb-6 text-6xl font-black leading-none max-[1024px]:text-4xl max-[500px]:mb-4 max-[500px]:text-3xl">
          Services That Help
          <br />
          Your Business Grow
        </h1>

        <div className="grid gap-5 min-[1025px]:grid-cols-3 max-[1024px]:grid-cols-2 max-[500px]:grid-cols-1">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex min-h-[235px] flex-col rounded-lg border-3 border-black bg-[#fff0f0] p-5 shadow-[6px_6px_0_#000] transition-transform duration-200 hover:-translate-y-1 max-[500px]:min-h-[220px]"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`grid h-20 w-20 shrink-0 place-items-center rounded-lg border-3 border-black ${service.color}`}
                >
                  <ServiceIcon name={service.icon} />
                </div>

                <h2 className="text-2xl font-black leading-tight max-[500px]:text-xl">
                  {service.title}
                </h2>
              </div>

              <p className="mt-5 text-xl font-bold leading-snug max-[500px]:text-lg">
                {service.description}
              </p>

              <div className="mt-auto flex justify-end pt-4">
                <ArrowIcon />
              </div>
            </article>
          ))}
        </div>
      </section>

    </main>
  )
}

function ServiceIcon({ name }: { name: (typeof services)[number]["icon"] }) {
  switch (name) {
    case "cart":
      return (
        <svg aria-hidden="true" className="h-12 w-12" viewBox="0 0 48 48" fill="none">
          <path d="M9 10h5l5 21h18l5-15H17" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="21" cy="38" r="3" fill="black" />
          <circle cx="36" cy="38" r="3" fill="black" />
        </svg>
      )
    case "monitor":
      return (
        <svg aria-hidden="true" className="h-12 w-12" viewBox="0 0 48 48" fill="none">
          <rect x="8" y="10" width="32" height="24" rx="2" fill="white" stroke="black" strokeWidth="4" />
          <path d="M24 34v6M17 40h14" stroke="black" strokeWidth="3" strokeLinecap="round" />
        </svg>
      )
    case "calendar":
      return (
        <svg aria-hidden="true" className="h-12 w-12" viewBox="0 0 48 48" fill="none">
          <rect x="8" y="12" width="32" height="28" rx="3" fill="white" stroke="black" strokeWidth="3" />
          <path d="M16 8v8M32 8v8M8 21h32" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <path d="M16 28h3M23 28h3M30 28h3M16 34h3M23 34h3M30 34h3" stroke="black" strokeWidth="3" strokeLinecap="round" />
        </svg>
      )
    case "box":
      return (
        <svg aria-hidden="true" className="h-12 w-12" viewBox="0 0 48 48" fill="none">
          <path d="m24 7 16 9-16 9-16-9z" fill="white" stroke="black" strokeWidth="3" strokeLinejoin="round" />
          <path d="M8 16v17l16 8 16-8V16M24 25v16" stroke="black" strokeWidth="3" strokeLinejoin="round" />
        </svg>
      )
    case "brush":
      return (
        <svg aria-hidden="true" className="h-12 w-12" viewBox="0 0 48 48" fill="none">
          <path d="M31 7 41 17 22 36l-10-10z" fill="white" stroke="black" strokeWidth="3" strokeLinejoin="round" />
          <path d="m28 10 10 10" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <path d="M12 26c-5 3-6 8-5 14 6 1 11 0 14-5" fill="black" stroke="black" strokeWidth="3" strokeLinejoin="round" />
          <path d="M13 32c2 0 3 1 3 3" stroke="white" strokeWidth="3" strokeLinecap="round" />
        </svg>
      )
    case "gear":
      return (
        <svg aria-hidden="true" className="h-12 w-12" viewBox="0 0 48 48" fill="none">
          <path d="M31 7a10 10 0 0 0-11 13L8 32l8 8 12-12A10 10 0 0 0 41 17l-8 8-7-7z" fill="white" stroke="black" strokeWidth="3" strokeLinejoin="round" />
          <path d="M13 33 19 39" stroke="black" strokeWidth="3" strokeLinecap="round" />
        </svg>
      )
  }
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="h-9 w-9" viewBox="0 0 36 36" fill="none">
      <path d="M6 18h24" stroke="black" strokeWidth="3" strokeLinecap="round" />
      <path d="m22 10 8 8-8 8" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
