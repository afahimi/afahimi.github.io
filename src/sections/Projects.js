import React, { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import projects from "../data/projects";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import Chip from "../ui/Chip";
import Button from "../ui/Button";

const INITIAL = 6;
const spring = { type: "spring", stiffness: 320, damping: 32 };

const Cover = ({ project, className = "" }) =>
  project.img ? (
    <img
      src={project.img}
      alt=""
      loading="lazy"
      className={`h-full w-full ${project.fit === "contain" ? "object-contain p-6" : "object-cover"} ${className}`}
    />
  ) : (
    <div
      aria-hidden
      className={`grid h-full w-full place-items-center bg-accent-soft font-display text-step-4 text-accent ${className}`}
    >
      {project.title[0]}
    </div>
  );

const Card = ({ project, onOpen }) => (
  <motion.button
    type="button"
    layoutId={`card-${project.title}`}
    onClick={() => onOpen(project.title)}
    whileHover={{ y: -4 }}
    transition={spring}
    className="themed group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-line bg-surface text-left shadow-soft hover:shadow-lift"
  >
    <div className="aspect-[16/10] overflow-hidden" style={{ backgroundColor: "var(--band)" }}>
      <Cover project={project} className="transition-transform duration-500 group-hover:scale-105" />
    </div>
    <div className="flex flex-1 flex-col p-5">
      <h3 className="text-step-1 leading-snug">{project.title}</h3>
      <p className="mt-1 text-sm text-muted">{project.context}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.keywords.slice(0, 3).map((k) => (
          <Chip key={k}>{k}</Chip>
        ))}
        {project.keywords.length > 3 && <Chip>+{project.keywords.length - 3}</Chip>}
      </div>
    </div>
  </motion.button>
);

const Modal = ({ project, stepped, onClose, onStep }) => {
  const closeRef = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onStep(-1);
      if (e.key === "ArrowRight") onStep(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onStep]);

  return (
    <motion.div
      className="fixed inset-0 z-50 grid place-items-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className="absolute inset-0 backdrop-blur-sm"
        style={{ backgroundColor: "color-mix(in srgb, var(--bg) 70%, transparent)" }}
        onClick={onClose}
        aria-hidden
      />
      <motion.div
        layoutId={stepped ? undefined : `card-${project.title}`}
        transition={spring}
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        className="themed relative flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-line bg-surface shadow-lift"
      >
        <div className="relative h-40 shrink-0 sm:h-52" style={{ backgroundColor: "var(--band)" }}>
          <Cover project={project} />
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-surface text-ink shadow-soft"
          >
            <FaTimes aria-hidden />
          </button>
        </div>

        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: stepped ? 0 : 0.15 }}
          className="overflow-y-auto p-6 md:p-8"
        >
          <h3 className="text-step-2">{project.title}</h3>
          <p className="mt-1 text-muted">
            {[project.context, project.date, project.location].filter(Boolean).join(" · ")}
          </p>
          <p className="mt-5">{project.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.keywords.map((k) => (
              <Chip key={k}>{k}</Chip>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap items-center justify-between gap-3">
            {project.href ? (
              <Button href={project.href} target="_blank" rel="noreferrer">
                <FaGithub aria-hidden /> View on GitHub
              </Button>
            ) : (
              <span />
            )}
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => onStep(-1)}
                aria-label="Previous project"
                className="grid h-10 w-10 place-items-center rounded-full border border-line hover:border-accent hover:text-accent"
              >
                <FaChevronLeft aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => onStep(1)}
                aria-label="Next project"
                className="grid h-10 w-10 place-items-center rounded-full border border-line hover:border-accent hover:text-accent"
              >
                <FaChevronRight aria-hidden />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [stepped, setStepped] = useState(false);

  const visible = showAll ? projects : projects.slice(0, INITIAL);

  const open = (title) => {
    setStepped(false);
    setOpenIndex(projects.findIndex((p) => p.title === title));
  };
  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback((dir) => {
    setStepped(true);
    setOpenIndex((i) => (i === null ? i : (i + dir + projects.length) % projects.length));
  }, []);

  return (
    <section id="projects" className="themed border-y border-line" style={{ backgroundColor: "var(--band)" }}>
      <div className="mx-auto max-w-page px-5 py-20 md:px-8 md:py-28">
        <SectionHeading eyebrow="Things I've built" title="Projects" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 0.08}>
              <Card project={project} onOpen={open} />
            </Reveal>
          ))}
        </div>

        {projects.length > INITIAL && (
          <div className="mt-10 flex justify-center">
            <Button variant="secondary" onClick={() => setShowAll((s) => !s)}>
              {showAll ? "Show fewer" : `Show all ${projects.length}`}
            </Button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <Modal
            key="modal"
            project={projects[openIndex]}
            stepped={stepped}
            onClose={close}
            onStep={step}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
