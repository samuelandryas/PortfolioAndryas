import { resume } from "@/data/site";

export function ResumeHighlights() {
  return (
    <section className="split-grid">
      <article className="info-card">
        <p className="eyebrow">Experience Snapshot</p>
        <h2>Recent roles</h2>
        <ul className="results-list">
          {resume.experience.map((item) => (
            <li key={`${item.company}-${item.role}`}>
              <strong>{item.role}</strong> at {item.company} ({item.period})
            </li>
          ))}
        </ul>
      </article>

      <article className="info-card">
        <p className="eyebrow">Skills Snapshot</p>
        <h2>Core tools and capabilities</h2>
        <ul className="tag-list">
          {resume.skills.slice(0, 8).map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </article>
    </section>
  );
}
