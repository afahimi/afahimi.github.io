import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

const socials = [
  { href: "https://github.com/afahimi", label: "GitHub", Icon: FaGithub },
  { href: "https://www.linkedin.com/in/aminfahiminia/", label: "LinkedIn", Icon: FaLinkedin },
  { href: "https://www.instagram.com/amin.guy/", label: "Instagram", Icon: FaInstagram },
];

const field =
  "themed w-full rounded-xl border border-line bg-surface px-4 py-3 text-ink placeholder:text-muted focus:border-accent focus:outline-none";

const Contact = () => {
  const form = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const onSubmit = (e) => {
    e.preventDefault();
    // Bots fill the hidden field; pretend success and send nothing.
    if (form.current.elements.website.value) {
      setStatus("success");
      return;
    }
    setStatus("sending");
    emailjs
      .sendForm("service_0bgpeia", "template_ocnsui8", form.current, "dJCK86fw67UJAlXpv")
      .then(() => {
        setStatus("success");
        form.current.reset();
      })
      .catch(() => setStatus("error"));
  };

  return (
    <section id="contact" className="mx-auto max-w-page px-5 py-20 md:px-8 md:py-28">
      <SectionHeading title="Let's keep in touch" />

      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <Reveal className="space-y-6">
          <h3 className="text-step-2">Get in touch</h3>
          <p className="max-w-md text-muted">
            Have a question, an idea, or just want to say hi? Send me a message here, or find me on socials.
          </p>
          <ul className="flex gap-3 pt-2">
            {socials.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="themed grid h-11 w-11 place-items-center rounded-full border border-line text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <form ref={form} onSubmit={onSubmit} className="space-y-4">
            <label className="block">
              <span className="sr-only">Your email</span>
              <input type="email" name="user_email" placeholder="Your email" required className={field} />
            </label>
            <label className="block">
              <span className="sr-only">Subject</span>
              <input type="text" name="user_name" placeholder="Subject" required className={field} />
            </label>
            <label className="block">
              <span className="sr-only">Message</span>
              <textarea name="message" placeholder="Message" rows={6} required className={field} />
            </label>
            {/* Honeypot: hidden from people, tempting to bots. */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden
              className="absolute left-[-9999px] h-0 w-0 opacity-0"
            />
            <div className="flex items-center gap-4">
              <Button type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Send message"}
              </Button>
              <p role="status" aria-live="polite" className="text-sm">
                {status === "success" && <span className="text-accent">Thanks! Your message is on its way.</span>}
                {status === "error" && (
                  <span className="text-muted">
                    Something went wrong. Please try again, or reach out on socials.
                  </span>
                )}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
