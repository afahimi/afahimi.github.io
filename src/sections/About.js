import React from "react";
import Reveal from "../ui/Reveal";

const About = () => (
  <section id="about">
    <div className="mx-auto grid max-w-page gap-8 px-5 pb-16 pt-6 md:grid-cols-[auto_1fr] md:gap-16 md:px-8 md:pb-24 md:pt-8">
      <Reveal>
        {/* The speech-bubble motif, kept as a quiet label. */}
        <div className="themed relative inline-block rounded-2xl border border-line bg-surface px-6 py-3 font-display text-step-2 shadow-soft after:absolute after:-bottom-2 after:left-8 after:h-4 after:w-4 after:rotate-45 after:border-b after:border-r after:border-line after:bg-surface after:content-['']">
          About me
        </div>
      </Reveal>
      <Reveal delay={0.1} className="max-w-prose space-y-5 text-step-0">
        <p>
          I'm a computer engineering student at the University of British Columbia. I have a strong
          passion for both hardware and software development, and I love to apply my creativity and
          analytical skills to create innovative solutions.
        </p>
        <p>
          I have worked on various projects that involve designing, building, testing, and
          debugging systems that integrate hardware, software, and firmware components. I'm always
          eager to learn new technologies and tools, and I aspire to become a versatile and
          competent engineer.
        </p>
        <p>
          When I'm not coding or tinkering with digital circuits, you can find me exploring nature
          by hiking, playing basketball, biking, diving into new tech, and reading. I hope you
          enjoy browsing my website!
        </p>
      </Reveal>
    </div>
  </section>
);

export default About;
