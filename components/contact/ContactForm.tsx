"use client";

import { useState } from "react";
import Section from "@/components/common/Section";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(form);
  }

  const inputClass =
    "w-full bg-transparent border border-[#212807] rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#EBF2D9]/40 transition-colors placeholder:opacity-40";

  return (
    <Section className="grow">
      <div className="max-w-xl mx-auto flex flex-col gap-6">
        <div className="text-4xl font-bold text-center">Send a Message</div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-sm opacity-70">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
              className={inputClass}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm opacity-70">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={handleChange}
              required
              className={inputClass}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-sm opacity-70">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="What's on your mind?"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className={`${inputClass} resize-none`}
            />
          </div>

          <button
            type="submit"
            className="border border-[#212807] hover:bg-[#212807] transition-colors px-6 py-2.5 rounded-lg text-sm mt-2 cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </Section>
  );
}
