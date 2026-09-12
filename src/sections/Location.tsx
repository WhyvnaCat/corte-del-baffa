import { useLanguage } from "../context/LanguageContext";
import { Reveal } from "../components/Reveal";
import { GOOGLE_MAPS_URL, OSM_EMBED_URL } from "../data/contact";
import styles from "./Location.module.css";

export function Location() {
  const { content } = useLanguage();
  const { location } = content;

  return (
    <section className={styles.section} id="lage">
      <div className="container">
        <div className={styles.layout}>
          <Reveal>
            <p className="eyebrow">{location.eyebrow}</p>
            <h2 className={styles.heading}>{location.heading}</h2>
            <div className={styles.paragraphs}>
              {location.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <a
              className={styles.mapLink}
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noreferrer noopener"
            >
              {location.mapLinkLabel} &rarr;
            </a>
          </Reveal>

          <Reveal delay={100}>
            <div className={styles.mapWrap}>
              <iframe
                title={location.heading}
                src={OSM_EMBED_URL}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className={styles.mapCaption}>{location.mapCaption}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
