import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export default function CtaBanner() {
  return (
    <section className="mx-6 mb-8 mt-6 font-sans text-black max-[1024px]:mx-4 max-[500px]:mx-3">
      <div className="grid overflow-hidden rounded-2xl border-4 border-black bg-[#bdecfd] shadow-[8px_8px_0_#000] min-[1025px]:grid-cols-[140px_1fr] max-[1024px]:grid-cols-[120px_1fr] max-[650px]:grid-cols-1">
        <div className="relative min-h-[130px] border-black bg-[#bdecfd] min-[651px]:border-r-4 max-[650px]:min-h-[220px] max-[650px]:border-b-4">
          <Image
            src="/me1.png"
            alt="John Carlo Ramos"
            fill
            className="object-cover object-[center_20%]"
          />
        </div>

        <div className="flex items-center justify-between gap-6 px-6 py-5 max-[1024px]:flex-wrap max-[500px]:gap-5 max-[500px]:px-4">
          <div className="min-w-[245px] max-[500px]:min-w-0">
            <h2 className="text-2xl font-black leading-tight max-[500px]:text-2xl">
              Have a project in mind?
            </h2>
            <p className="mt-1 text-base font-bold leading-snug max-[500px]:text-base">
              Let&apos;s build something awesome together.
            </p>

            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-3 rounded-lg border-3 border-black bg-white px-7 py-2 text-base font-black uppercase shadow-[4px_4px_0_#000] transition-transform duration-200 hover:-translate-y-1 max-[500px]:w-full max-[500px]:justify-center"
            >
              Let&apos;s Talk
              <ArrowIcon />
            </Link>
          </div>

          <div className="grid flex-1 grid-cols-3 divide-x-3 divide-black/25 max-[1024px]:min-w-full max-[650px]:grid-cols-1 max-[650px]:divide-x-0 max-[650px]:divide-y-3">
            <CtaFeature
              icon={<LightningIcon />}
              title="Fast Delivery"
              description="On-time, every time."
            />
            <CtaFeature
              icon={<CheckIcon />}
              title="Clean Code"
              description="Scalable & maintainable."
            />
            <CtaFeature
              icon={<HeartIcon />}
              title="Client Focused"
              description="Your goals, my priority."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaFeature({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-center gap-4 px-4 py-2 max-[1024px]:px-4 max-[650px]:px-0 max-[650px]:py-4">
      {icon}
      <div>
        <h3 className="text-lg font-black leading-tight max-[500px]:text-lg">
          {title}
        </h3>
        <p className="mt-1 text-xs font-bold leading-snug">{description}</p>
      </div>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="m13 6 6 6-6 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LightningIcon() {
  return (
    <svg aria-hidden="true" className="h-14 w-14 shrink-0" viewBox="0 0 56 56" fill="none">
      <circle cx="28" cy="28" r="24" fill="#f472b6" stroke="black" strokeWidth="4" />
      <path d="M31 10 19 30h9l-3 16 13-22h-9z" fill="black" stroke="black" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" className="h-14 w-14 shrink-0" viewBox="0 0 56 56" fill="none">
      <circle cx="28" cy="28" r="24" fill="#86efac" stroke="black" strokeWidth="4" />
      <path d="m17 28 7 8 16-18" stroke="black" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg aria-hidden="true" className="h-14 w-14 shrink-0" viewBox="0 0 56 56" fill="none">
      <circle cx="28" cy="28" r="24" fill="#fde047" stroke="black" strokeWidth="4" />
      <path d="M28 41S15 34 15 24c0-5 3-8 8-8 3 0 5 2 5 4 0-2 2-4 5-4 5 0 8 3 8 8 0 10-13 17-13 17Z" fill="black" stroke="black" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}
