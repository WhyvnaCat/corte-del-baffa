import { useLanguage } from "../context/LanguageContext";
import { Reveal } from "../components/Reveal";
import { ResponsiveImage } from "../components/ResponsiveImage";
import styles from "./TheRustico.module.css";

export function TheRustico() {
  const { content } = useLanguage();
  const { rustico, gallery } = content;

  return (
    <section className={styles.section} id="details">
      <div className="container">
        <div className={styles.layout}>
          <Reveal className={styles.textCol}>
            <div>
              <p className="eyebrow">{rustico.eyebrow}</p>
              <h2 className={styles.heading}>{rustico.heading}</h2>
            </div>
            <div className={styles.paragraphs}>
              {rustico.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <ul className={styles.features}>
              {rustico.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className={styles.imageCol}>
            <ResponsiveImage
              imageId="dining-stove"
              alt={gallery.imageAlt["dining-stove"]}
              sizes="(min-width: 960px) 46vw, 92vw"
            />
            <ResponsiveImage
              imageId="kitchen"
              alt={gallery.imageAlt.kitchen}
              sizes="(min-width: 960px) 23vw, 46vw"
            />
            <ResponsiveImage
              imageId="bedroom"
              alt={gallery.imageAlt.bedroom}
              sizes="(min-width: 960px) 23vw, 46vw"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
