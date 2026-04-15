import { Project } from "@/data/site";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-visual" aria-hidden="true">
        <span>{project.images[0]}</span>
      </div>

      <div className="project-body">
        <p className="eyebrow">Project</p>
        <h3>{project.title}</h3>
        <p className="project-summary">{project.summary}</p>

        <div className="project-copy">
          <div>
            <h4>Challenge</h4>
            <p>{project.problem}</p>
          </div>
          <div>
            <h4>Approach</h4>
            <p>{project.solution}</p>
          </div>
          <div>
            <h4>Role</h4>
            <p>{project.role}</p>
          </div>
        </div>

        <ul className="tag-list" aria-label={`${project.title} tools`}>
          {project.techStack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <ul className="results-list">
          {project.results.map((result) => (
            <li key={result}>{result}</li>
          ))}
        </ul>

        <div className="project-links">
          {project.links.map((link) =>
            link.href ? (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="text-link">
                {link.label}
              </a>
            ) : (
              <span key={link.label} className="muted-text">
                {link.label}
              </span>
            )
          )}
        </div>
      </div>
    </article>
  );
}
