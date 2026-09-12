import { useLanguage } from "../context/LanguageContext";
import { Reveal } from "../components/Reveal";
import styles from "./Amenities.module.css";

export function Amenities() {
  const { content } = useLanguage();
  const { amenities } = content;

  return (
    <section className={styles.section} aria-label={amenities.heading}>
      <div className="container">
        <Reveal className={styles.header}>
          <p className="eyebrow">{amenities.eyebrow}</p>
          <h2 className={styles.heading}>{amenities.heading}</h2>
          <p className={styles.intro}>{amenities.intro}</p>
        </Reveal>

        <Reveal delay={80}>
          <ul className={styles.list}>
            {amenities.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
