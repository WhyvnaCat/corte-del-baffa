import { useLanguage } from "../context/LanguageContext";
import { Reveal } from "../components/Reveal";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { useParallax } from "../utils/useParallax";
import styles from "./Outside.module.css";

export function Outside() {
  const { content } = useLanguage();
  const { outside, gallery } = content;
  const { ref, offset } = useParallax<HTMLDivElement>(0.08);

  return (
    <section className={styles.section} aria-label={outside.heading}>
      <div className={styles.imageWrap} ref={ref}>
        <div style={{ transform: `translateY(${offset}px)`, position: "absolute", inset: 0 }}>
          <ResponsiveImage imageId="panorama" alt={gallery.imageAlt.panorama} fill sizes="100vw" />
        </div>
      </div>
      <div className={styles.overlay} />

      <div className="container">
        <Reveal className={styles.content}>
          <p className="eyebrow">{outside.eyebrow}</p>
          <h2 className={styles.heading}>{outside.heading}</h2>
          <div className={styles.paragraphs}>
            {outside.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
