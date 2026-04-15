import type { Metadata } from "next";
import { CtaSection } from "@/components/cta-section";
import { DocumentPreview } from "@/components/document-preview";
import { SectionHeading } from "@/components/section-heading";
import { resume } from "@/data/site";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume overview for Samuel Andryasian, including education, experience, skills, and organizations."
};

export default function ResumePage() {
  return (
    <>
      <section className="page-hero">
        <div className="shell narrow-shell">
          <p className="eyebrow">Resume</p>
          <h1>Mechanical engineering experience presented directly on the page.</h1>
          <p>{resume.summary}</p>
          <div className="hero-actions">
            <a href="#resume-preview" className="button button-primary">
              View Full Resume
            </a>
            <a href="/projects" className="button button-secondary">
              View Projects
            </a>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="shell resume-grid">
          <div className="resume-column">
            <SectionHeading
              eyebrow="Education"
              title={resume.education[0].school}
              description={`${resume.education[0].degree} • ${resume.education[0].location} • ${resume.education[0].period}`}
            />
            <div className="info-card">
              <h3>Related Coursework</h3>
              <ul className="tag-list">
                {resume.education[0].coursework.map((course) => (
                  <li key={course}>{course}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="resume-column">
            <SectionHeading
              eyebrow="Experience"
              title="Hands-on work across research and instruction."
              description="I bring mechanical execution, clear communication, and repeatable process thinking into every role."
            />
            <div className="timeline">
              {resume.experience.map((item) => (
                <article key={`${item.company}-${item.role}`} className="timeline-item">
                  <div className="timeline-heading">
                    <h3>{item.role}</h3>
                    <p>
                      {item.company} • {item.period}
                    </p>
                  </div>
                  <ul className="results-list">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-block section-tinted">
        <div className="shell split-grid">
          <div className="info-card">
            <p className="eyebrow">Skills</p>
            <h2>Technical toolkit</h2>
            <ul className="tag-list">
              {resume.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="info-card">
            <p className="eyebrow">Leadership</p>
            <h2>Organizations</h2>
            <ul className="results-list">
              {resume.organizations.map((organization) => (
                <li key={organization}>{organization}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-block" id="resume-preview">
        <div className="shell">
          <DocumentPreview
            title="Resume"
            src={resume.resumePdfPath}
            description=""
          />
        </div>
      </section>

      <section className="section-block">
        <div className="shell">
          <CtaSection
            title="Need the visual work samples too?"
            body="The portfolio page pairs the resume with project visuals, deck assets, and image-based work samples for a fuller view of the engineering process."
            primaryHref="/portfolio"
            primaryLabel="Open Portfolio"
            secondaryHref="/contact"
            secondaryLabel="Contact"
          />
        </div>
      </section>
    </>
  );
}
