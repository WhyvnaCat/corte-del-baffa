import { useLanguage } from "../context/LanguageContext";
import { Reveal } from "../components/Reveal";
import { Button } from "../components/Button";
import { CONTACT_TEL_URL, CONTACT_WHATSAPP_URL } from "../data/contact";
import styles from "./Contact.module.css";

export function Contact() {
  const { content } = useLanguage();
  const { contact } = content;

  return (
    <section className={styles.section} id="kontakt" data-dark>
      <div className="container">
        <Reveal className={styles.inner}>
          <p className="eyebrow">{contact.eyebrow}</p>
          <h2 className={styles.heading}>{contact.heading}</h2>
          <p className={styles.paragraph}>{contact.paragraph}</p>
          <p className={styles.person}>{contact.person}</p>

          <div className={styles.actions}>
            <Button
              href={CONTACT_WHATSAPP_URL}
              variant="whatsapp"
              target="_blank"
              rel="noreferrer noopener"
            >
              {contact.whatsappLabel}
            </Button>
            <Button href={CONTACT_TEL_URL} variant="secondary">
              {contact.callLabel}
            </Button>
          </div>

          <p className={styles.availability}>{contact.availability}</p>
        </Reveal>
      </div>
    </section>
  );
}
