import Link from "next/link";
import { resume } from "@/data/site";

export function ResumeHighlights() {
  return (
    <section className="resume-highlight-panel">
      <div className="resume-highlight-copy">
        <p className="eyebrow">Resume Snapshot</p>
        <h2>Clear engineering experience, hands-on execution, and documented results.</h2>
        <p>{resume.summary}</p>
      </div>

      <div className="resume-highlight-grid">
        <div className="info-card">
          <h3>Experience</h3>
          <p>
            Research assistant work in autonomous systems plus instructional experience that
            sharpened communication and structured coaching.
          </p>
        </div>
        <div className="info-card">
          <h3>Coursework</h3>
          <p>{resume.education[0]?.coursework.slice(0, 5).join(", ")}.</p>
        </div>
        <div className="info-card">
          <h3>Skills</h3>
          <p>{resume.skills.slice(0, 6).join(", ")}.</p>
        </div>
      </div>

      <div className="cta-actions">
        <Link href="/resume" className="button button-primary">
          Explore Resume
        </Link>
        <a href={resume.resumePdfPath} className="button button-secondary">
          Download PDF
        </a>
      </div>
    </section>
  );
}

