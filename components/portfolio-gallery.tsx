import Image from "next/image";
import { portfolioDeck, portfolioEntries } from "@/data/site";
import { withBasePath } from "@/lib/with-base-path";

export function PortfolioGallery() {
  return (
    <div className="portfolio-stack">
      {portfolioEntries.map((entry) => (
        <article key={entry.title} className="portfolio-card">
          <div className={entry.images.length > 1 ? "portfolio-media-grid" : "portfolio-media-single"}>
            {entry.images.map((image) => (
              <div key={image} className="portfolio-image-wrap">
                <Image
                  src={withBasePath(image)}
                  alt={entry.title}
                  fill
                  sizes="(max-width: 960px) 100vw, 50vw"
                  className="portfolio-image"
                />
              </div>
            ))}
          </div>

          <div className="portfolio-body">
            <h2>{entry.title}</h2>
            <p>{entry.summary}</p>

            <ul className="tag-list">
              {entry.focus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}

      <section className="deck-download-card">
        <div>
          <h2>{portfolioDeck.title}</h2>
          <p>Prefer the original slide deck? Download the PowerPoint version directly from the site.</p>
        </div>
        <a href={withBasePath(portfolioDeck.href)} className="button button-primary">
          Download Portfolio Deck
        </a>
      </section>
    </div>
  );
}
