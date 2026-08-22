"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="text-center py-10">
        <div className="w-16 h-16 rounded-full bg-success/10 text-success flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} />
        </div>
        <h3 className="font-bold text-primary text-xl mb-2">Message Sent</h3>
        <p className="text-muted">Thank you. We&apos;ll get back to you within 24 hours.</p>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="space-y-4"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <input
          required
          type="text"
          name="name"
          placeholder="Your Name *"
          className={inputClass}
          suppressHydrationWarning
        />
        <input
          required
          type="tel"
          name="phone"
          placeholder="Phone Number *"
          className={inputClass}
          suppressHydrationWarning
        />
      </div>
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        className={inputClass}
        suppressHydrationWarning
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        className={inputClass}
        suppressHydrationWarning
      />
      <textarea
        required
        name="message"
        rows={5}
        placeholder="Your Message *"
        className={`${inputClass} resize-none`}
        suppressHydrationWarning
      />
      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-full"
        suppressHydrationWarning
      >
        <Send size={18} /> Send Message
      </button>
    </form>
  );
}
