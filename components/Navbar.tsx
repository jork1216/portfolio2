"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Breakpoints: mobile 0-500px, tablet 501-1024px, desktop 1025px+.
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar-container sticky top-0 z-50 w-full bg-[linear-gradient(to_bottom,#fff_0_50%,transparent_50%_100%)] px-6 py-1 text-black max-[1024px]:px-4 max-[500px]:px-3">
      {/* Desktop and mobile navbar shell */}
      <div className="navbar flex flex-wrap items-center justify-between gap-4 rounded-2xl border-4 border-black bg-white px-8 py-2 font-sans font-black uppercase shadow-[8px_8px_0_#000] max-[1024px]:px-5 max-[500px]:px-3">
        {/* Logo */}
        <div className="h-11 w-24 overflow-hidden">
          <Image
            src="/mylogo.png"
            alt="Site logo"
            width={96}
            height={40}
            className="h-full w-full object-cover"
            priority
          />
        </div>


        {/* Desktop links */}
        <div className="flex flex-wrap items-center gap-16 text-base max-[1024px]:hidden">
          <section className="flex flex-wrap items-center gap-16 max-[1024px]:gap-8 max-[500px]:gap-4">
            <Link href="/">HOME</Link>
            <Link href="/services">SERVICES</Link>
            <Link href="/projects">PROJECTS</Link>
            <Link href="/about">ABOUT</Link>
            <Link href="/contact">CONTACT</Link>
          </section>
        </div>

        {/* Tablet and mobile hamburger */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(true)}
          className="hidden rounded-lg border-3 border-black bg-white px-3 py-2 shadow-[4px_4px_0_#000] max-[1024px]:block"
        >
          <span className="block h-1 w-8 rounded-full bg-black" />
          <span className="mt-1.5 block h-1 w-8 rounded-full bg-black" />
          <span className="mt-1.5 block h-1 w-8 rounded-full bg-black" />
        </button>
      </div>

      {/* Tablet and mobile full-screen menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#bdecfd] p-5 font-sans font-black uppercase text-black min-[1025px]:hidden">
          {/* Close button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            className="absolute right-5 top-5"
          >
            <CloseIcon />
          </button>

          {/* Menu links */}
          <div className="mt-16 flex flex-col gap-3">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-between rounded-lg border-3 border-black bg-white px-5 py-4 text-xl shadow-[4px_4px_0_#000]"
            >
              <span className="flex items-center gap-4">
                <HomeIcon />
                <span>HOME</span>
              </span>
              <ArrowIcon />
            </Link>
            <Link
              href="#services"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-between rounded-lg border-3 border-black bg-white px-5 py-4 text-xl shadow-[4px_4px_0_#000]"
            >
              <span className="flex items-center gap-4">
                <ServicesIcon />
                <span>SERVICES</span>
              </span>
              <ArrowIcon />
            </Link>
            <Link
              href="#projects"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-between rounded-lg border-3 border-black bg-white px-5 py-4 text-xl shadow-[4px_4px_0_#000]"
            >
              <span className="flex items-center gap-4">
                <ProjectsIcon />
                <span>PROJECTS</span>
              </span>
              <ArrowIcon />
            </Link>
            <Link
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-between rounded-lg border-3 border-black bg-white px-5 py-4 text-xl shadow-[4px_4px_0_#000]"
            >
              <span className="flex items-center gap-4">
                <AboutIcon />
                <span>ABOUT</span>
              </span>
              <ArrowIcon />
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-between rounded-lg border-3 border-black bg-white px-5 py-4 text-xl shadow-[4px_4px_0_#000]"
            >
              <span className="flex items-center gap-4">
                <ContactIcon />
                <span>CONTACT</span>
              </span>
              <ArrowIcon />
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 flex items-center justify-center rounded-lg border-3 border-black bg-yellow-300 px-5 py-4 text-xl shadow-[4px_4px_0_#000]"
            >
              <span className="flex items-center gap-4">
                <PhoneIcon />
                <span>BOOK A CALL</span>
              </span>
            </Link>
            <Link
              href="#projects"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center rounded-lg border-3 border-black bg-white px-5 py-4 text-xl shadow-[4px_4px_0_#000]"
            >
              <span className="flex items-center gap-4">
                <EyeIcon />
                <span>VIEW PROJECTS</span>
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="h-7 w-7" viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="m13 6 6 6-6 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg aria-hidden="true" className="h-12 w-12" viewBox="0 0 48 48" fill="none">
      <path d="M12 12 36 36M36 12 12 36" stroke="black" strokeWidth="12" strokeLinecap="round" />
      <path d="M12 12 36 36M36 12 12 36" stroke="#f472b6" strokeWidth="6" strokeLinecap="round" />
    </svg>
  )
}

function HomeIcon() {
  return (
    <svg aria-hidden="true" className="h-8 w-8" viewBox="0 0 32 32" fill="none">
      <path d="M4 15 16 5l12 10v12h-8v-7h-8v7H4z" fill="#f472b6" stroke="black" strokeWidth="3" strokeLinejoin="round" />
    </svg>
  )
}

function ServicesIcon() {
  return (
    <svg aria-hidden="true" className="h-8 w-8" viewBox="0 0 32 32" fill="none">
      <rect x="5" y="6" width="22" height="16" rx="2" fill="#bdecfd" stroke="black" strokeWidth="3" />
      <path d="M16 22v5M11 27h10" stroke="black" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

function ProjectsIcon() {
  return (
    <svg aria-hidden="true" className="h-8 w-8" viewBox="0 0 32 32" fill="none">
      <path d="M4 10h10l3 4h11v13H4z" fill="#fde047" stroke="black" strokeWidth="3" strokeLinejoin="round" />
    </svg>
  )
}

function AboutIcon() {
  return (
    <svg aria-hidden="true" className="h-8 w-8" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="9" r="5" fill="#86efac" stroke="black" strokeWidth="3" />
      <path d="M6 28c1-7 5-11 10-11s9 4 10 11z" fill="#86efac" stroke="black" strokeWidth="3" strokeLinejoin="round" />
    </svg>
  )
}

function ContactIcon() {
  return (
    <svg aria-hidden="true" className="h-8 w-8" viewBox="0 0 32 32" fill="none">
      <rect x="4" y="8" width="24" height="17" rx="2" fill="#f9a8d4" stroke="black" strokeWidth="3" />
      <path d="m5 10 11 9 11-9" stroke="black" strokeWidth="3" strokeLinejoin="round" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" className="h-8 w-8" viewBox="0 0 32 32" fill="none">
      <path d="M10 5 6 9c1 9 8 16 17 17l4-4-5-5-3 3c-3-1-6-4-7-7l3-3z" fill="black" stroke="black" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  )
}

function EyeIcon() {
  return (
    <svg aria-hidden="true" className="h-8 w-8" viewBox="0 0 32 32" fill="none">
      <path d="M3 16s5-8 13-8 13 8 13 8-5 8-13 8S3 16 3 16Z" fill="#f9a8d4" stroke="black" strokeWidth="3" strokeLinejoin="round" />
      <circle cx="16" cy="16" r="4" fill="white" stroke="black" strokeWidth="3" />
    </svg>
  )
}
