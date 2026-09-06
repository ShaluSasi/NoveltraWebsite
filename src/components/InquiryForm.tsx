"use client";

import { useMemo, useState } from "react";

const initialState = {
  name: "",
  company: "",
  email: "",
  projectType: "",
  timeframe: "",
  message: "",
};

export default function InquiryForm() {
  const [formData, setFormData] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const mailtoLink = useMemo(() => {
    const subject = encodeURIComponent("Noveltra Technologies Inquiry");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nProject type: ${formData.projectType}\nPreferred start timeframe: ${formData.timeframe}\n\nMessage:\n${formData.message}`
    );

    return `mailto:noveltratechnologies@gmail.com?subject=${subject}&body=${body}`;
  }, [formData]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    window.location.href = mailtoLink;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-[#0F172A]">
          <span>Name</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#0F172A] outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#EFF6FF]"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-[#0F172A]">
          <span>Company</span>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#0F172A] outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#EFF6FF]"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-[#0F172A]">
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#0F172A] outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#EFF6FF]"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-[#0F172A]">
          <span>Project type</span>
          <input
            type="text"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#0F172A] outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#EFF6FF]"
          />
        </label>
      </div>

      <label className="space-y-2 text-sm font-medium text-[#0F172A]">
        <span>Preferred start timeframe</span>
        <input
          type="text"
          name="timeframe"
          value={formData.timeframe}
          onChange={handleChange}
          className="w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#0F172A] outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#EFF6FF]"
        />
      </label>

      <label className="space-y-2 text-sm font-medium text-[#0F172A]">
        <span>Brief description</span>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#0F172A] outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#EFF6FF]"
          placeholder="Describe your project, audience, and what success looks like."
        />
      </label>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-full bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1D4ED8]"
      >
        Send inquiry
      </button>

      {submitted && (
        <p className="rounded-2xl border border-[#D1D5DB] bg-[#ECFDF5] px-4 py-3 text-sm text-[#047857]">
          Your inquiry is ready to send. If your email client did not open,
          please contact us directly at noveltratechnologies@gmail.com.
        </p>
      )}
    </form>
  );
}
