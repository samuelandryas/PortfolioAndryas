"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { withBasePath } from "@/lib/with-base-path";

type DocumentPreviewProps = {
  title: string;
  src: string;
  description: string;
};

export function DocumentPreview({ title, src, description }: DocumentPreviewProps) {
  const assetSrc = withBasePath(src);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 720px)");
    const updateMobileState = () => setIsMobile(mediaQuery.matches);

    updateMobileState();
    mediaQuery.addEventListener("change", updateMobileState);

    return () => {
      mediaQuery.removeEventListener("change", updateMobileState);
    };
  }, []);

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

  const openPreview = () => {
    if (isMobile) {
      window.open(assetSrc, "_blank", "noopener,noreferrer");
      return;
    }

    setIsOpen(true);
  };

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
          className={`document-frame-wrap document-frame-button${isMobile ? " document-frame-mobile" : ""}`}
          aria-label={`Open ${title}`}
          onClick={openPreview}
        >
          <div className={`document-mobile-card${isMobile ? "" : " document-desktop-card"}`}>
            <div className="document-mobile-preview">
              <Image
                src={withBasePath("/resume-preview.png")}
                alt={`${title} preview`}
                fill
                sizes="100vw"
                className="document-mobile-image"
              />
            </div>
            <strong>{isMobile ? "Open Resume" : "Resume Preview"}</strong>
            <span>
              {isMobile
                ? "Tap to open the full PDF without the moving preview box."
                : "Click to expand the resume or use Download to open the full PDF."}
            </span>
          </div>
          <span className="document-frame-hint">{isMobile ? "Tap to open" : "Click to expand"}</span>
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
              <Image
                src={withBasePath("/resume-preview.png")}
                alt={`${title} expanded preview`}
                fill
                sizes="100vw"
                className="document-lightbox-image"
                priority
              />
            </div>
            <div className="document-lightbox-actions">
              <a href={assetSrc} className="button button-primary" target="_blank" rel="noopener noreferrer">
                Open Full PDF
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
