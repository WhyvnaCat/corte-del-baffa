import { useLanguage } from "../context/LanguageContext";
import { Reveal } from "../components/Reveal";
import { useReveal } from "../utils/useReveal";
import { useCountUp } from "../utils/useCountUp";
import type { KeyFact } from "../data/content.types";
import styles from "./KeyFacts.module.css";

function formatNumber(value: number) {
  return value.toLocaleString("de-CH").replace(/[’‘]/g, "'");
}

function Fact({ fact }: { fact: KeyFact }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const value = useCountUp(fact.target, visible);

  return (
    <div ref={ref} className={styles.fact}>
      <p className={styles.value}>
        {fact.prefix}
        {formatNumber(value)}
        {fact.suffix}
      </p>
      <p className={styles.label}>{fact.label}</p>
    </div>
  );
}

export function KeyFacts() {
  const { content } = useLanguage();
  const { keyFacts } = content;

  return (
    <section className={styles.section} data-dark aria-label={keyFacts.heading}>
      <div className="container">
        <Reveal className={styles.header}>
          <p className="eyebrow">{keyFacts.eyebrow}</p>
          <h2 className={styles.heading}>{keyFacts.heading}</h2>
        </Reveal>

        <div className={styles.grid}>
          {keyFacts.facts.map((fact) => (
            <Fact key={fact.label} fact={fact} />
          ))}
        </div>
      </div>
    </section>
  );
}
