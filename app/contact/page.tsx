import Navbar from "@/components/Navbar";

const contactItems = [
  {
    label: "Email",
    value: "ramosjohncarlo16@gmail.com",
    color: "bg-pink-400",
    icon: <EmailIcon />,
  },
  {
    label: "Phone",
    value: "+63 930 3318 627",
    color: "bg-[#86efac]",
    icon: <PhoneIcon />,
  },
  {
    label: "Location",
    value: "Lucena City, Philippines",
    color: "bg-yellow-300",
    icon: <LocationIcon />,
  },
  {
    label: "Availability",
    value: "Mon - Fri, 9AM - 6PM",
    color: "bg-[#bdecfd]",
    icon: <ClockIcon />,
  },
];

const contactStats = [
  {
    title: "Response Time",
    value: "Within 24 hours",
    icon: <ResponseIcon />,
  },
  {
    title: "Working Hours",
    value: "9AM - 6PM",
    icon: <PinkClockIcon />,
  },
  {
    title: "Remote Friendly",
    value: "100% Remote",
    icon: <GlobeIcon />,
  },
];

export default function Contact() {
  return (
    <main className="mb-5 min-h-screen bg-yellow-300 text-black">
      <Navbar />

      <section className="mx-6 mt-4 grid gap-6 font-sans max-[1024px]:mx-4 max-[500px]:mx-3 min-[1025px]:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        <div className="min-w-0 rounded-2xl border-4 border-black bg-white p-7 shadow-[8px_8px_0_#000] max-[500px]:p-4">
          <div className="mb-5 inline-block">
            <h1 className="text-3xl font-black uppercase max-[500px]:text-2xl">
              Send a Message
            </h1>
            <div className="mt-2 h-3 w-full rounded-full bg-pink-400"></div>
          </div>

          <form className="grid gap-5">
            <label className="grid gap-2 text-xl font-black max-[500px]:text-lg">
              Your Name
              <input
                type="text"
                placeholder="Enter your name"
                className="h-14 rounded-lg border-3 border-black bg-white px-5 text-lg font-bold outline-none placeholder:text-black/45"
              />
            </label>

            <label className="grid gap-2 text-xl font-black max-[500px]:text-lg">
              Email
              <input
                type="email"
                placeholder="Enter your email"
                className="h-14 rounded-lg border-3 border-black bg-white px-5 text-lg font-bold outline-none placeholder:text-black/45"
              />
            </label>

            <div className="grid gap-5 min-[650px]:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
              <label className="grid min-w-0 gap-2 text-xl font-black max-[500px]:text-lg">
                Project Type
                <select
                  defaultValue=""
                  className="h-14 w-full min-w-0 rounded-lg border-3 border-black bg-white px-5 text-lg font-bold text-black/50 outline-none"
                >
                  <option value="" disabled>
                    Select project type
                  </option>
                  <option>Ecommerce Website</option>
                  <option>Business Website</option>
                  <option>Booking or Reservation System</option>
                  <option>Inventory System</option>
                  <option>Website Redesign</option>
                  <option>Automation Services</option>
                  <option>Other</option>
                </select>
              </label>

              <label className="grid min-w-0 gap-2 text-xl font-black max-[500px]:text-lg">
                Budget
                <select
                  defaultValue=""
                  className="h-14 w-full min-w-0 rounded-lg border-3 border-black bg-white px-5 text-lg font-bold text-black/50 outline-none"
                >
                  <option value="" disabled>
                    Select budget
                  </option>
                  <option>&#8369;5,000 - &#8369;10,000</option>
                  <option>&#8369;10,000 - &#8369;20,000</option>
                  <option>&#8369;20,000+</option>
                </select>
              </label>
            </div>

            <label className="grid gap-2 text-xl font-black max-[500px]:text-lg">
              Message
              <textarea
                placeholder="Tell me about your project..."
                className="min-h-28 resize-y rounded-lg border-3 border-black bg-white px-5 py-4 text-lg font-bold outline-none placeholder:text-black/45"
              />
            </label>

            <button
              type="button"
              className="mt-1 inline-flex items-center justify-center gap-4 rounded-lg border-3 border-black bg-pink-400 px-6 py-4 text-3xl font-black uppercase shadow-[6px_6px_0_#000] transition-transform duration-200 hover:-translate-y-1 max-[500px]:text-2xl"
            >
              <SendIcon />
              Send Message
            </button>
          </form>
        </div>

        <div className="relative min-w-0 rounded-2xl border-4 border-black bg-[#bdecfd] p-7 shadow-[8px_8px_0_#000] max-[500px]:p-4">
          <h2 className="mb-5 inline-block rounded-lg border-3 border-black bg-black px-5 py-2 text-2xl font-black uppercase text-white max-[500px]:text-xl">
            Contact Information
          </h2>

          <div className="grid gap-2">
            {contactItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between gap-4 rounded-xl border-3 border-black bg-white px-5 py-4 shadow-[2px_2px_0_#000] max-[500px]:px-4"
              >
                <div className="flex items-center gap-5 max-[500px]:gap-3">
                  <div
                    className={`grid h-16 w-16 shrink-0 place-items-center rounded-lg border-3 border-black ${item.color}`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black leading-tight max-[500px]:text-xl">
                      {item.label}
                    </h3>
                    <p className={`text-xl font-bold leading-tight max-[500px]:text-base ${item.label === "Email" ? "max-[600px]:text-sm" : ""}`}>
                      {item.value}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-4 min-[650px]:grid-cols-3">
            {contactStats.map((stat) => (
              <div
                key={stat.title}
                className="grid justify-items-center rounded-xl border-3 border-black bg-white px-4 py-5 text-center shadow-[3px_3px_0_#000]"
              >
                {stat.icon}
                <h3 className="mt-3 text-lg font-black leading-tight">
                  {stat.title}
                </h3>
                <p className="mt-1 text-base font-bold leading-snug">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function EmailIcon() {
  return (
    <svg aria-hidden="true" className="h-10 w-10" viewBox="0 0 40 40" fill="none">
      <rect x="6" y="10" width="28" height="20" rx="2" fill="none" stroke="black" strokeWidth="4" />
      <path d="m8 12 12 10 12-10" stroke="black" strokeWidth="4" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" className="h-10 w-10" viewBox="0 0 40 40" fill="none">
      <path d="M13 7 8 12c2 11 9 18 20 20l5-5-7-7-4 4c-3-1-6-4-7-7l4-4z" fill="black" stroke="black" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg aria-hidden="true" className="h-11 w-11" viewBox="0 0 44 44" fill="none">
      <path d="M22 39s12-12 12-23c0-7-5-12-12-12S10 9 10 16c0 11 12 23 12 23Z" fill="black" stroke="black" strokeWidth="2" />
      <circle cx="22" cy="16" r="5" fill="#fde047" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg aria-hidden="true" className="h-11 w-11" viewBox="0 0 44 44" fill="none">
      <circle cx="22" cy="22" r="16" fill="none" stroke="black" strokeWidth="4" />
      <path d="M22 11v12l8 5" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg aria-hidden="true" className="h-9 w-9" viewBox="0 0 36 36" fill="none">
      <path d="M31 5 14 31l-3-12-10-4z" fill="none" stroke="black" strokeWidth="3" strokeLinejoin="round" />
      <path d="m11 19 9-5" stroke="black" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function ResponseIcon() {
  return (
    <svg aria-hidden="true" className="h-14 w-14" viewBox="0 0 56 56" fill="none">
      <circle cx="27" cy="27" r="20" fill="#86efac" stroke="black" strokeWidth="4" />
      <path d="M31 10 19 30h9l-3 16 13-22h-9z" fill="black" stroke="black" strokeLinejoin="round" />
    </svg>
  );
}

function PinkClockIcon() {
  return (
    <svg aria-hidden="true" className="h-14 w-14" viewBox="0 0 56 56" fill="none">
      <circle cx="28" cy="28" r="20" fill="#f472b6" stroke="black" strokeWidth="4" />
      <path d="M28 16v13l9 5" stroke="black" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg aria-hidden="true" className="h-14 w-14" viewBox="0 0 56 56" fill="none">
      <circle cx="28" cy="28" r="20" fill="#fde047" stroke="black" strokeWidth="4" />
      <path d="M8 28h40M28 8c6 5 9 12 9 20s-3 15-9 20M28 8c-6 5-9 12-9 20s3 15 9 20M13 18h30M13 38h30" stroke="black" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

