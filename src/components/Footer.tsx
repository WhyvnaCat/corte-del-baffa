import { useLanguage } from "../context/LanguageContext";
import styles from "./Footer.module.css";

export function Footer() {
  const { content } = useLanguage();
  const { footer, nav } = content;
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <p className={styles.brand}>
            Corte del Baffa
            <span>Monti di Lego · Ticino</span>
          </p>

          <nav className={styles.links} aria-label="Footer">
            <a href="#kontakt">{nav.contact}</a>
            <a href="#top">{footer.backToTop}</a>
          </nav>
        </div>

        <div className={styles.meta}>
          <span>{footer.tagline}</span>
          <span>
            &copy; {year} Corte del Baffa &middot; {footer.rights}
          </span>
        </div>
      </div>
    </footer>
  );
}
