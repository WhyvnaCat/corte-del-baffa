import { useLanguage } from "../context/LanguageContext";
import { Reveal } from "../components/Reveal";
import styles from "./Price.module.css";

export function Price() {
  const { content } = useLanguage();
  const { price } = content;

  return (
    <section className={styles.section} aria-label={price.heading}>
      <div className="container">
        <Reveal className={styles.inner}>
          <p className="eyebrow">{price.eyebrow}</p>
          <h2 className={styles.heading}>{price.heading}</h2>
          <p className={styles.price}>{price.price}</p>
          <p className={styles.note}>{price.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
