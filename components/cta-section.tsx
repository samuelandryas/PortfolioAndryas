import Link from "next/link";

type CtaSectionProps = {
  title: string;
  body: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
};

export function CtaSection({
  title,
  body,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel
}: CtaSectionProps) {
  return (
    <section className="cta-panel">
      <div>
        <h2>{title}</h2>
        {body ? <p>{body}</p> : null}
      </div>

      <div className="cta-actions">
        <Link href={primaryHref} className="button button-primary">
          {primaryLabel}
        </Link>
        <Link href={secondaryHref} className="button button-secondary">
          {secondaryLabel}
        </Link>
      </div>
    </section>
  );
}
