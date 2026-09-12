import { useLanguage } from "../context/LanguageContext";
import { Reveal } from "../components/Reveal";
import styles from "./Access.module.css";

export function Access() {
  const { content } = useLanguage();
  const { access } = content;

  return (
    <section className={styles.section} id="anreise">
      <div className="container">
        <Reveal className={styles.header}>
          <p className="eyebrow">{access.eyebrow}</p>
          <h2 className={styles.heading}>{access.heading}</h2>
          <p className={styles.intro}>{access.intro}</p>
        </Reveal>

        <Reveal delay={80}>
          <ol className={styles.route}>
            {access.steps.map((step) => (
              <li key={step.label} className={styles.step}>
                <span className={styles.dot} aria-hidden="true" />
                <span className={styles.stepLabel}>{step.label}</span>
              </li>
            ))}
          </ol>
        </Reveal>

        <div className={styles.footerGrid}>
          <Reveal delay={120}>
            <p className={styles.note}>{access.note}</p>
          </Reveal>
          <Reveal delay={180}>
            <p className={styles.quote}>{access.quote}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
