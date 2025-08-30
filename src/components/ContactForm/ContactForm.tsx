import cls from './ContactForm.module.css'

import { useState } from "react"

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!res.ok) throw new Error("Failed request");
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className={cls.form}  onSubmit={handleSubmit}>
      <input name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Your email" value={form.email} onChange={handleChange} required />
      <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} required />
      <button type="submit" disabled={status==="loading"}>
        {status==="loading" ? "Sending..." : "Send"}
      </button>
      {status==="success" ? <p>Message sent!</p> : <p></p>}
      {status==="error" && <p>Something went wrong. Try later.</p>}
    </form>
  );
}
