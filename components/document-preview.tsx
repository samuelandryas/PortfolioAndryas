"use client";

import { useEffect, useState } from "react";
import { withBasePath } from "@/lib/with-base-path";

type DocumentPreviewProps = {
  title: string;
  src: string;
  description: string;
};

export function DocumentPreview({ title, src, description }: DocumentPreviewProps) {
  const assetSrc = withBasePath(src);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <>
      <section className="document-preview">
        <div className="document-preview-copy">
          <div className="document-preview-heading">
            <h2>{title}</h2>
            <a href={assetSrc} className="text-link document-download-link">
              Download
            </a>
          </div>
          {description ? <p>{description}</p> : null}
        </div>

        <button
          type="button"
          className="document-frame-wrap document-frame-button"
          aria-label={`Open ${title}`}
          onClick={() => setIsOpen(true)}
        >
          <iframe src={assetSrc} title={title} className="document-frame" />
          <span className="document-frame-hint">Click to expand</span>
        </button>
      </section>

      {isOpen ? (
        <div
          className="document-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onClick={() => setIsOpen(false)}
        >
          <div className="document-lightbox-shell" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="portfolio-lightbox-close"
              aria-label="Close resume preview"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
            <div className="document-lightbox-frame">
              <iframe src={assetSrc} title={`${title} expanded`} className="document-lightbox-iframe" />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
