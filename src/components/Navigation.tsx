import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import styles from "./Navigation.module.css";

const LINKS: { id: string; key: "rustico" | "impressions" | "details" | "location" | "access" | "contact" }[] = [
  { id: "rustico", key: "rustico" },
  { id: "impressionen", key: "impressions" },
  { id: "details", key: "details" },
  { id: "lage", key: "location" },
  { id: "anreise", key: "access" },
  { id: "kontakt", key: "contact" },
];

export function Navigation() {
  const { lang, setLang, content } = useLanguage();
  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setSolid(window.scrollY > 60);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const LangSwitch = () => (
    <div className={styles.langToggle} role="group" aria-label="Sprache / Lingua">
      <button
        type="button"
        className={styles.langButton}
        aria-pressed={lang === "de"}
        onClick={() => setLang("de")}
      >
        DE
      </button>
      <button
        type="button"
        className={styles.langButton}
        aria-pressed={lang === "it"}
        onClick={() => setLang("it")}
      >
        IT
      </button>
    </div>
  );

  return (
    <header className={styles.nav} data-solid={solid}>
      <div className={styles.inner}>
        <a href="#top" className={styles.logo}>
          Corte del Baffa
          <span>Monti di Lego · Ticino</span>
        </a>

        <nav className={styles.links} aria-label="Hauptnavigation">
          {LINKS.map((link) => (
            <a key={link.id} href={`#${link.id}`}>
              {content.nav[link.key]}
            </a>
          ))}
        </nav>

        <div className={styles.right}>
          <LangSwitch />
          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Menü schliessen" : "Menü öffnen"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={styles.mobileMenu} data-open={menuOpen} id="mobile-menu">
        {LINKS.map((link) => (
          <a key={link.id} href={`#${link.id}`} onClick={() => setMenuOpen(false)}>
            {content.nav[link.key]}
          </a>
        ))}
        <LangSwitch />
      </div>
    </header>
  );
}
