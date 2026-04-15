import type { Metadata } from "next";
import { CtaSection } from "@/components/cta-section";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Mechanical engineering projects in vehicle packaging, sensor integration, bracket design, and test-driven refinement."
};

export default function ProjectsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="shell narrow-shell">
          <p className="eyebrow">Project Archive</p>
          <h1>Engineering work that connects concept, packaging, and real hardware.</h1>
          <p>
            This page highlights mechanical integration projects focused on reference layouts,
            sensor packaging, bracket design, load path thinking, and iterative validation.
          </p>
        </div>
      </section>

      <section className="section-block">
        <div className="shell">
          <SectionHeading
            eyebrow="Selected Case Studies"
            title="A project-first view of how I solve mechanical integration problems."
            description="Each example shows the problem context, the design or integration approach, and the outcome that made the system easier to build, test, or maintain."
          />

          <div className="project-stack">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-block section-tinted">
        <div className="shell">
          <CtaSection
            title="Want the high-level summary instead?"
            body="The resume page condenses experience, coursework, technical skills, and leadership into a recruiter-friendly format."
            primaryHref="/resume"
            primaryLabel="View Resume"
            secondaryHref="/contact"
            secondaryLabel="Contact"
          />
        </div>
      </section>
    </>
  );
}

