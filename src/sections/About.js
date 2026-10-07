import React from "react";
import Reveal from "../ui/Reveal";
import Chip from "../ui/Chip";

const interests = ["Hiking", "Basketball", "Biking", "New tech", "Reading"];

const About = () => (
  <section id="about" className="mx-auto max-w-page px-5 pb-16 pt-10 md:px-8 md:pb-24 md:pt-14">
    <Reveal>
      <div className="themed relative overflow-hidden rounded-3xl border border-line bg-surface p-7 shadow-soft md:p-12">
        {/* The old bubble motif, as a soft shape tucked into the corner. */}
        <span
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent-soft opacity-50"
        />

        <h2 className="relative text-step-3">About me</h2>

        <div className="relative mt-6 grid gap-8 md:grid-cols-[1.15fr_1fr] md:gap-14">
          <p className="font-display text-step-2 leading-snug">
            I'm a computer engineering student at the University of British Columbia, with a strong
            passion for both hardware and software.
          </p>
          <div className="space-y-4 text-muted">
            <p>
              I love to apply my creativity and analytical skills to create innovative solutions. I
              have worked on various projects that involve designing, building, testing, and
              debugging systems that integrate hardware, software, and firmware components.
            </p>
            <p>
              I'm always eager to learn new technologies and tools, and I aspire to become a
              versatile and competent engineer.
            </p>
          </div>
        </div>

        <div className="relative mt-8 border-t border-line pt-6">
          <p className="mb-3 text-muted">
            When I'm not coding or tinkering with digital circuits, you can find me exploring
            nature, playing basketball, biking, diving into new tech, and reading. I hope you enjoy
            browsing my website!
          </p>
          <ul className="flex flex-wrap gap-2">
            {interests.map((i) => (
              <li key={i}>
                <Chip>{i}</Chip>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  </section>
);

export default About;
