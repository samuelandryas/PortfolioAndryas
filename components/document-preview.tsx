type DocumentPreviewProps = {
  title: string;
  src: string;
  description: string;
};

export function DocumentPreview({ title, src, description }: DocumentPreviewProps) {
  return (
    <section className="document-preview">
      <div className="document-preview-copy">
        <div className="document-preview-heading">
          <h2>{title}</h2>
          <a href={src} className="text-link document-download-link">
            Download
          </a>
        </div>
        {description ? <p>{description}</p> : null}
      </div>

      <div className="document-frame-wrap">
        <iframe src={src} title={title} className="document-frame" />
      </div>
    </section>
  );
}
