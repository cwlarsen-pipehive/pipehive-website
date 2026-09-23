import Image from "next/image";
import type { ReactNode } from "react";

// The header and footer the landing page uses, without its anchor-only navigation —
// these pages are linked directly from the App Store and Play Console listings, so a
// visitor may arrive here first and needs a way back to the site.
export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <main>
      <header className="site-header">
        <a className="brand-logo" href="/" aria-label="PipeHive home">
          <Image src="/pipehive-logo.png" alt="PipeHive" width={96} height={96} priority />
        </a>
        <nav aria-label="Primary navigation">
          <a href="/">Home</a>
          <a href="/privacy">Privacy</a>
          <a href="/support">Support</a>
        </nav>
      </header>

      <section className="section" aria-labelledby="legal-heading">
        <div className="section-label">{updated}</div>
        <div className="section-content">
          <h2 id="legal-heading">{title}</h2>
          <div className="prose">{children}</div>
        </div>
      </section>

      <footer>
        <span>PIPEHIVE TECH LTD. © 2026</span>
        <div>
          <a href="/privacy">Privacy</a>
          <a href="/support">Support</a>
          <a href="/#contact">Contact</a>
        </div>
      </footer>
    </main>
  );
}
