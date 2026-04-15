"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { portfolioDeck, portfolioEntries } from "@/data/site";
import { withBasePath } from "@/lib/with-base-path";

export function PortfolioGallery() {
  const [activeImage, setActiveImage] = useState<{
    src: string;
    title: string;
  } | null>(null);

  useEffect(() => {
    if (!activeImage) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveImage(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeImage]);

  return (
    <>
      <div className="portfolio-stack">
        {portfolioEntries.map((entry) => (
          <article key={entry.title} className="portfolio-card">
            <div className={entry.images.length > 1 ? "portfolio-media-grid" : "portfolio-media-single"}>
              {entry.images.map((image) => {
                const src = withBasePath(image);

                return (
                  <button
                    key={image}
                    type="button"
                    className="portfolio-image-wrap portfolio-image-button"
                    aria-label={`Open ${entry.title} image`}
                    onClick={() => setActiveImage({ src, title: entry.title })}
                  >
                    <Image
                      src={src}
                      alt={entry.title}
                      fill
                      sizes="(max-width: 960px) 100vw, 50vw"
                      className="portfolio-image"
                    />
                  </button>
                );
              })}
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

      {activeImage ? (
        <div
          className="portfolio-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.title}
          onClick={() => setActiveImage(null)}
        >
          <div className="portfolio-lightbox-shell" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="portfolio-lightbox-close"
              aria-label="Close image"
              onClick={() => setActiveImage(null)}
            >
              Close
            </button>
            <div className="portfolio-lightbox-frame">
              <Image
                src={activeImage.src}
                alt={activeImage.title}
                fill
                sizes="100vw"
                className="portfolio-lightbox-image"
                priority
              />
            </div>
            <p className="portfolio-lightbox-caption">{activeImage.title}</p>
          </div>
        </div>
      ) : null}
    </>
  );
}
