import { useLanguage } from "../context/LanguageContext";
import { Reveal } from "../components/Reveal";
import styles from "./Intro.module.css";

export function Intro() {
  const { content } = useLanguage();
  const { intro } = content;
  const [lead, ...rest] = intro.paragraphs;

  return (
    <section className={styles.section} id="rustico">
      <div className="container">
        <Reveal>
          <p className="eyebrow">{intro.eyebrow}</p>
          <h2 className={styles.heading}>{intro.heading}</h2>
        </Reveal>

        <div className={styles.text}>
          <Reveal delay={80}>
            <p className={styles.lead}>{lead}</p>
          </Reveal>
          <Reveal delay={160}>
            <div className={styles.paragraphs}>
              {rest.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
