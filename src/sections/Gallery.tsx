import { useMemo, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Reveal } from "../components/Reveal";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { Lightbox } from "../components/Lightbox";
import { images, imagesByTag } from "../data/images";
import styles from "./Gallery.module.css";

// Full-width banner treatment. These must stay first in data/images.ts so
// each one opens its own row without leaving gaps in the grid behind it.
const BANNER_IMAGE_IDS = new Set(["panorama", "exterior-main"]);

export function Gallery() {
  const { content, lang } = useLanguage();
  const { gallery } = content;
  const [activeTag, setActiveTag] = useState("alle");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const allLabel = lang === "de" ? "Alle" : "Tutte";

  const visibleImages = useMemo(
    () => (activeTag === "alle" ? images : imagesByTag(activeTag)),
    [activeTag]
  );

  return (
    <section className={styles.section} id="impressionen">
      <div className="container">
        <Reveal className={styles.header}>
          <p className="eyebrow">{gallery.eyebrow}</p>
          <h2 className={styles.heading}>{gallery.heading}</h2>
          <p className={styles.intro}>{gallery.intro}</p>
        </Reveal>

        <div className={styles.tabs} role="group" aria-label={gallery.heading}>
          <button
            type="button"
            className={styles.tab}
            aria-pressed={activeTag === "alle"}
            onClick={() => setActiveTag("alle")}
          >
            {allLabel}
          </button>
          {gallery.categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={styles.tab}
              aria-pressed={activeTag === cat.id}
              onClick={() => setActiveTag(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {visibleImages.length === 0 ? (
          <p className={styles.empty}>{gallery.emptyState}</p>
        ) : (
          <div className={styles.grid}>
            {visibleImages.map((img, i) => (
              <Reveal
                key={img.id}
                delay={(i % 4) * 60}
                className={BANNER_IMAGE_IDS.has(img.id) ? styles.large : ""}
              >
                <button type="button" className={styles.item} onClick={() => setLightboxIndex(i)}>
                  <ResponsiveImage
                    imageId={img.id}
                    alt={gallery.imageAlt[img.id]}
                    sizes={
                      BANNER_IMAGE_IDS.has(img.id)
                        ? "100vw"
                        : "(min-width: 1000px) 24vw, (min-width: 640px) 50vw, 100vw"
                    }
                  />
                  <span className={styles.caption} aria-hidden="true">
                    {gallery.imageAlt[img.id]}
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        )}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={visibleImages}
          index={lightboxIndex}
          altMap={gallery.imageAlt}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
          closeLabel={gallery.lightboxClose}
          prevLabel={gallery.lightboxPrev}
          nextLabel={gallery.lightboxNext}
          counterLabel={gallery.imageCounter}
        />
      )}
    </section>
  );
}
