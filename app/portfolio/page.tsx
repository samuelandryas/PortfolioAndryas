import type { Metadata } from "next";
import Link from "next/link";
import { CtaSection } from "@/components/cta-section";
import { PortfolioGallery } from "@/components/portfolio-gallery";
import { SectionHeading } from "@/components/section-heading";
import { portfolioDeck } from "@/data/site";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Visual project portfolio featuring CAD, mechanical integration, mounting systems, and hands-on manufacturing work."
};

export default function PortfolioPage() {
  return (
    <>
      <section className="page-hero">
        <div className="shell narrow-shell">
          <p className="eyebrow">Portfolio</p>
          <h1>Visual proof of mechanical design, integration, and manufacturing work.</h1>
          <p>
            This page adapts your original portfolio deck into a website format with project images,
            short explanations, and an optional download for the original PowerPoint version.
          </p>
          <div className="hero-actions">
            <a href={portfolioDeck.href} className="button button-primary">
              Download Deck
            </a>
            <Link href="/projects" className="button button-secondary">
              Open Project Summaries
            </Link>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="shell">
          <SectionHeading
            eyebrow="Portfolio Gallery"
            title="Work samples presented in a format built for the web."
            description="Each section below uses images from your slide deck and reframes them into a cleaner browsing experience for recruiters, teammates, and hiring managers, so the work is visible immediately without opening a separate file."
          />
          <PortfolioGallery />
        </div>
      </section>

      <section className="section-block section-tinted">
        <div className="shell">
          <CtaSection
            title="Want the concise version too?"
            body=""
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
