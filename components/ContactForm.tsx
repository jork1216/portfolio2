"use client";

import { useEffect, useState, type FormEvent } from "react";

export default function ContactForm() {
  const [responseMessage, setResponseMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [cooldownSeconds, setCooldownSeconds] = useState(0);
  const isSubmitDisabled = isSending || cooldownSeconds > 0;

  useEffect(() => {
    if (cooldownSeconds === 0) {
      return;
    }

    const timer = window.setTimeout(() => {
      setCooldownSeconds((seconds) => Math.max(seconds - 1, 0));
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [cooldownSeconds]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitDisabled) {
      return;
    }

    setResponseMessage("");
    setIsSending(true);

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      setResponseMessage(result.message ?? "Successfully sent!");
      setCooldownSeconds(30);
    } finally {
      setIsSending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <label className="grid gap-2 text-xl font-black max-[500px]:text-lg">
        Your Name
        <input
          name="name"
          type="text"
          required
          placeholder="Enter your name"
          className="h-14 rounded-lg border-3 border-black bg-white px-5 text-lg font-bold outline-none placeholder:text-black/45"
        />
      </label>

      <label className="grid gap-2 text-xl font-black max-[500px]:text-lg">
        Email
        <input
          name="email"
          type="email"
          required
          placeholder="Enter your email"
          className="h-14 rounded-lg border-3 border-black bg-white px-5 text-lg font-bold outline-none placeholder:text-black/45"
        />
      </label>

      <div className="grid gap-5 min-[650px]:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <label className="grid min-w-0 gap-2 text-xl font-black max-[500px]:text-lg">
          Project Type
          <select
            name="project type"
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
            name="budget"
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
          name="message"
          placeholder="Tell me about your project..."
          className="min-h-28 resize-y rounded-lg border-3 border-black bg-white px-5 py-4 text-lg font-bold outline-none placeholder:text-black/45"
        />
      </label>

      <button
        type="submit"
        disabled={isSubmitDisabled}
        className="mt-1 inline-flex items-center justify-center gap-4 rounded-lg border-3 border-black bg-pink-400 px-6 py-4 text-3xl font-black shadow-[6px_6px_0_#000] transition-transform duration-200 hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 max-[500px]:text-2xl"
      >
        <SendIcon />
        {isSending ? "Sending..." : cooldownSeconds > 0 ? `WAIT ${cooldownSeconds}s` : "Send Message"}
      </button>

      {responseMessage ? (
        <p
          role="status"
          className="px-5 py-2 text-center text-xl font-black uppercase text-green-800"
        >
          {responseMessage}
        </p>
      ) : null}
    </form>
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
