import Link from "next/link";
import { navItems, site, socials } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-block">
          <p className="eyebrow">Built For Opportunities</p>
          <h2>{site.name}</h2>
          <p>{site.shortBio}</p>
        </div>

        <div className="footer-block">
          <p className="eyebrow">Explore</p>
          <div className="footer-links">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="footer-block">
          <p className="eyebrow">Contact Details</p>
          <div className="footer-socials">
            {socials.map((social) =>
              social.href ? (
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                  {social.label}
                </a>
              ) : (
                <span key={social.label}>
                  {social.label}: {social.value}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

