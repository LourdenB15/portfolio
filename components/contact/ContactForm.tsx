"use client";

import { useState } from "react";
import Section from "@/components/common/Section";
import { z } from "zod";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const schema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email"),
    message: z.string().min(10, "Enter atleast 10 characters"),
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      console.log(errors);
      return;
    }
    setErrors({});
    console.log(result.data);
    return;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
              className={inputClass}
              spellCheck={false}
              autoComplete="off"
            />
            {errors.name && (
              <p className="text-red-400 text-xs">{errors.name}</p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm opacity-70">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="your@email.com"
              value={form.email}
              onChange={handleChange}
              className={inputClass}
              spellCheck={false}
              autoComplete="off"
            />
            {errors.email && (
              <p className="text-red-400 text-xs">{errors.email}</p>
            )}
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
              rows={5}
              className={`${inputClass} resize-none`}
            />
            {errors.message && (
              <p className="text-red-400 text-xs">{errors.message}</p>
            )}
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
