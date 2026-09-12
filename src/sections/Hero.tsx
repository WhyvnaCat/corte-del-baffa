import { useLanguage } from "../context/LanguageContext";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { Button } from "../components/Button";
import styles from "./Hero.module.css";

export function Hero() {
  const { content } = useLanguage();
  const { hero } = content;

  return (
    <section className={styles.hero} id="top" aria-label={hero.title}>
      <div className={styles.imageWrap}>
        <ResponsiveImage
          imageId="exterior-main"
          alt={content.gallery.imageAlt["exterior-main"]}
          fill
          priority
          sizes="100vw"
        />
      </div>
      <div className={styles.overlay} />

      <div className={styles.content}>
        <p className={styles.kicker}>{hero.kicker}</p>
        <h1 className={styles.title}>{hero.title}</h1>
        <p className={styles.subtitle}>{hero.subtitle}</p>
        <p className={styles.quote}>{hero.quote}</p>
        <div className={styles.ctas}>
          <Button href="#impressionen" variant="primary">
            {hero.ctaPrimary}
          </Button>
          <Button href="#kontakt" variant="secondary">
            {hero.ctaSecondary}
          </Button>
        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <span>{hero.scrollHint}</span>
        <span className={styles.scrollLine} />
      </div>
    </section>
  );
}
