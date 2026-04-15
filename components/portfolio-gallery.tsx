"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { portfolioDeck, portfolioEntries } from "@/data/site";

export function PortfolioGallery() {
  const [activeImage, setActiveImage] = useState<{
    src: string;
    title: string;
  } | null>(null);

  useEffect(() => {
    if (!activeImage) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveImage(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeImage]);

  return (
    <>
      <div className="portfolio-stack">
        {portfolioEntries.map((entry) => (
          <article key={entry.title} className="portfolio-card">
            <div className={entry.images.length > 1 ? "portfolio-media-grid" : "portfolio-media-single"}>
              {entry.images.map((image) => (
                <button
                  key={image}
                  type="button"
                  className="portfolio-image-wrap portfolio-image-button"
                  aria-label={`Open ${entry.title} image`}
                  onClick={() => setActiveImage({ src: image, title: entry.title })}
                >
                  <Image
                    src={image}
                    alt={entry.title}
                    fill
                    sizes="(max-width: 960px) 100vw, 50vw"
                    className="portfolio-image"
                  />
                </button>
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
          <a href={portfolioDeck.href} className="button button-primary">
            Download Portfolio Deck
          </a>
        </section>
      </div>

      {activeImage ? (
        <div className="lightbox-overlay" role="dialog" aria-modal="true" aria-label={activeImage.title}>
          <button
            type="button"
            className="lightbox-close"
            aria-label="Close image"
            onClick={() => setActiveImage(null)}
          >
            X
          </button>

          <button
            type="button"
            className="lightbox-backdrop"
            aria-label="Close image viewer"
            onClick={() => setActiveImage(null)}
          />

          <div className="lightbox-content">
            <Image
              src={activeImage.src}
              alt={activeImage.title}
              fill
              sizes="100vw"
              className="lightbox-image"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
