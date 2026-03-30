"use client";

import { useState } from "react";
import Section from "@/components/common/Section";
import { z } from "zod";
import { sendEmail } from "@/app/actions/contact";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
const schema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  message: z.string().trim().min(10, "Enter atleast 10 characters"),
});

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = schema.safeParse({ ...form, email: form.email.trim() });
    if (!result.success) {
      const fieldErrors: { [key: string]: string } = {};
      result.error.issues.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      console.log(errors);
      return;
    }
    setErrors({});
    try {
      setIsSubmitting(true);
      await sendEmail(result.data);
      setForm({ name: "", email: "", message: "" });
      toast.success("Message sent successfully!", { position: "bottom-right" });
    } catch {
      toast.error("Failed to send message. Please try again.", {
        position: "bottom-right",
      });
    } finally {
      setIsSubmitting(false);
    }
    return;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const inputClass =
    "w-full bg-transparent border border-border rounded-lg px-4 py-2.5 text-sm outline-none focus:border-foreground/40 transition-colors placeholder:opacity-40";

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
              className={`${inputClass} ${errors.name ? "border-red-400 focus:border-red-400" : ""}`}
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
              className={`${inputClass} ${errors.email ? "border-red-400 focus:border-red-400" : ""}`}
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
              className={`${inputClass} resize-none ${errors.message ? "border-red-400 focus:border-red-400" : ""}`}
            />
            {errors.message && (
              <p className="text-red-400 text-xs">{errors.message}</p>
            )}
          </div>
          <Button
            className="border border-border text-foreground hover:bg-muted bg-inherit transition-colors px-6 py-2.5 rounded-lg text-sm mt-2 cursor-pointer"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending Message..." : "Send Message"}
          </Button>
        </form>
      </div>
    </Section>
  );
}
