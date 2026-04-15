import Link from "next/link";
import { CtaSection } from "@/components/cta-section";
import { ProjectCard } from "@/components/project-card";
import { ResumeHighlights } from "@/components/resume-highlights";
import { SectionHeading } from "@/components/section-heading";
import { featuredProjects, portfolioDeck, resume, site, stats } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <h1>{site.tagline}</h1>
            <p className="hero-body">{site.shortBio}</p>

            <div className="hero-actions">
              <Link href={site.heroPrimaryCta.href} className="button button-primary">
                {site.heroPrimaryCta.label}
              </Link>
              <Link href={site.heroSecondaryCta.href} className="button button-secondary">
                {site.heroSecondaryCta.label}
              </Link>
            </div>

            <ul className="stat-grid" aria-label="Portfolio highlights">
              {stats.map((stat) => (
                <li key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hero-panel">
            <p className="eyebrow">Professional Summary</p>
            <h2>Design to installation, with documentation and testing in between.</h2>
            <p>{resume.summary}</p>
            <div className="hero-note-grid">
              <div>
                <span>Location</span>
                <strong>{site.location}</strong>
              </div>
              <div>
                <span>Focus</span>
                <strong>Mechanical integration and field-ready execution</strong>
              </div>
              <div>
                <span>Status</span>
                <strong>{site.availability}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="shell">
          <SectionHeading
            eyebrow="Featured Work"
            title="Projects that show mechanical thinking in real systems."
            description="These case studies focus on packaging, sensor integration, bracket design, and validation work that supports reliable vehicle builds."
          />

          <div className="project-stack">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-block section-tinted">
        <div className="shell story-grid">
          <div>
            <SectionHeading
              eyebrow="How I Work"
              title="Organized, hands-on, and comfortable where engineering meets reality."
              description="I enjoy the work that happens between concept and final use: measurements, fit checks, installation planning, documentation, troubleshooting, and making sure systems can actually be built and maintained."
            />
          </div>
          <div className="story-card-grid">
            <article className="info-card">
              <h3>Structured Documentation</h3>
              <p>
                I turn design intent into drawings, inspection steps, and technical summaries that
                make installation and review more repeatable.
              </p>
            </article>
            <article className="info-card">
              <h3>Field-Ready Thinking</h3>
              <p>
                I work with fitment, serviceability, cable routing, tolerance checks, and mounting
                details that show up in real hardware.
              </p>
            </article>
            <article className="info-card">
              <h3>Calm Under Iteration</h3>
              <p>
                I am comfortable refining designs through test cycles, troubleshooting issues, and
                carrying lessons learned back into the next revision.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="shell">
          <CtaSection
            title="See the visual portfolio directly on the site."
            body="The portfolio page now shows the actual work samples as a web gallery, and the resume page includes an embedded PDF so both can be reviewed without downloading first."
            primaryHref="/portfolio"
            primaryLabel="Open Portfolio"
            secondaryHref={portfolioDeck.href}
            secondaryLabel="Download Deck"
          />
        </div>
      </section>

      <section className="section-block">
        <div className="shell">
          <ResumeHighlights />
        </div>
      </section>

      <section className="section-block">
        <div className="shell">
          <CtaSection
            title="Looking for an engineering intern who can design, document, and help systems come together?"
            body="Explore the full project archive, review the resume, or head to the contact page to start a conversation."
            primaryHref="/contact"
            primaryLabel="Contact"
            secondaryHref="/projects"
            secondaryLabel="All Projects"
          />
        </div>
      </section>
    </>
  );
}
