import React from "react";
import experience from "../data/experience";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import Chip from "../ui/Chip";

const Logo = ({ company, logo }) =>
  logo ? (
    <img
      src={logo}
      alt=""
      loading="lazy"
      width="56"
      height="56"
      className="h-14 w-14 shrink-0 rounded-xl border border-line object-cover"
    />
  ) : (
    <div
      aria-hidden
      className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-accent-soft font-display text-step-2 text-accent"
    >
      {company[0]}
    </div>
  );

const Experience = () => (
  <section id="experience" className="mx-auto max-w-page px-5 py-20 md:px-8 md:py-28">
    <SectionHeading title="Experience" />

    <ol className="relative ml-3 border-l border-line md:ml-4">
      {experience.map((job) => (
        <li key={`${job.company}-${job.role}`} className="relative pb-10 pl-8 last:pb-0 md:pl-12">
          <span
            aria-hidden
            className={`absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full border-2 ${
              job.upcoming
                ? "border-dashed border-accent bg-bg"
                : "border-accent bg-accent"
            }`}
          />
          <Reveal>
            {job.upcoming ? (
              <div className="rounded-2xl border border-dashed border-accent/60 px-6 py-5">
                <h3 className="text-step-2">{job.role}</h3>
              </div>
            ) : (
              <article className="themed rounded-2xl border border-line bg-surface p-6 shadow-soft md:p-8">
                <div className="flex items-start gap-4">
                  <Logo company={job.company} logo={job.logo} />
                  <div>
                    <h3 className="text-step-1 leading-snug">{job.company}</h3>
                    <p className="text-muted">{job.role}</p>
                    <p className="text-sm text-muted">
                      {job.dates} · {job.location}
                    </p>
                  </div>
                </div>
                <ul className="mt-5 list-disc space-y-2 pl-5 marker:text-accent">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {job.skills.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>
              </article>
            )}
          </Reveal>
        </li>
      ))}
    </ol>
  </section>
);

export default Experience;
