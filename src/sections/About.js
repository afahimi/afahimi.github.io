import React from "react";
import Reveal from "../ui/Reveal";

const About = () => (
  <section
    id="about"
    className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-page items-center px-5 py-20 md:px-8"
  >
    <div className="grid w-full gap-8 md:grid-cols-[auto_1fr] md:gap-20">
      <Reveal>
        <h2 className="text-step-3 md:sticky md:top-28">About me</h2>
      </Reveal>
      <Reveal delay={0.1} className="max-w-2xl space-y-6">
        <p className="font-display text-step-2 leading-snug">
          I'm a computer engineering student at the University of British Columbia. I have a strong
          passion for both hardware and software development, and I love to apply my creativity and
          analytical skills to create innovative solutions.
        </p>
        <p className="text-muted">
          I have worked on various projects that involve designing, building, testing, and
          debugging systems that integrate hardware, software, and firmware components. I'm always
          eager to learn new technologies and tools, and I aspire to become a versatile and
          competent engineer.
        </p>
        <p className="text-muted">
          When I'm not coding or tinkering with digital circuits, you can find me exploring nature
          by hiking, playing basketball, biking, diving into new tech, and reading. I hope you
          enjoy browsing my website!
        </p>
      </Reveal>
    </div>
  </section>
);

export default About;
