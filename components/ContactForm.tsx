"use client";

import { FormEvent } from "react";

export default function ContactForm({
  includeSubject = false,
  buttonLabel = "Send",
}: {
  includeSubject?: boolean;
  buttonLabel?: "Send" | "Submit";
}) {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const firstName = String(form.get("firstName") || "");
    const lastName = String(form.get("lastName") || "");
    const email = String(form.get("email") || "");
    const submittedSubject = String(form.get("subject") || "");
    const message = String(form.get("message") || "");
    const name = `${firstName} ${lastName}`.trim();
    const subject = submittedSubject || `Website enquiry from ${name || "website visitor"}`;
    const subjectLine = includeSubject ? `Subject: ${submittedSubject}\n` : "";
    const body = `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\n${subjectLine}\n${message}`;
    window.location.href = `mailto:hanna@nightingalelawyers.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="field-grid">
        <label><span>First Name</span><input name="firstName" required autoComplete="given-name" /></label>
        <label><span>Last Name</span><input name="lastName" required autoComplete="family-name" /></label>
      </div>
      <label><span>Email</span><input name="email" required type="email" autoComplete="email" inputMode="email" /></label>
      {includeSubject ? <label><span>Subject</span><input name="subject" required /></label> : null}
      <label><span>Message</span><textarea name="message" required rows={7} /></label>
      <button className="button button-primary form-button" type="submit">{buttonLabel} <i aria-hidden="true">↗</i></button>
    </form>
  );
}
