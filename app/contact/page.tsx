import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { site, socials } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact information and outreach options for Samuel Andryasian's engineering portfolio."
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="shell narrow-shell">
          <p className="eyebrow">Contact</p>
          <h1>Open to internships, research, and engineering conversations.</h1>
          <p>
            {site.availability} If you are interested in mechanical design, integration support,
            or hands-on engineering collaboration, this is the place to start.
          </p>
        </div>
      </section>

      <section className="section-block">
        <div className="shell contact-layout">
          <div>
            <SectionHeading
              eyebrow="Reach Out"
              title="Let&apos;s make the next step simple."
              description="Use the contact details below to reach out about internships, research opportunities, or mechanical engineering collaborations."
            />
          </div>

          <div className="contact-grid">
            {socials.map((social) => (
              <article key={social.label} className="info-card">
                <p className="eyebrow">{social.label}</p>
                <h2 className="contact-value">{social.value}</h2>
                {social.href ? (
                  <a href={social.href} target="_blank" rel="noreferrer" className="text-link">
                    Open {social.label}
                  </a>
                ) : (
                  <p className="muted-text">Contact details coming soon.</p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
