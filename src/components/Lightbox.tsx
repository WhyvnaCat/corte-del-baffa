import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import type { ImageAsset } from "../data/images";
import { ResponsiveImage } from "./ResponsiveImage";
import styles from "./Lightbox.module.css";

interface LightboxProps {
  images: ImageAsset[];
  index: number;
  altMap: Record<string, string>;
  onClose: () => void;
  onNavigate: (index: number) => void;
  closeLabel: string;
  prevLabel: string;
  nextLabel: string;
  counterLabel: (current: number, total: number) => string;
}

export function Lightbox({
  images,
  index,
  altMap,
  onClose,
  onNavigate,
  closeLabel,
  prevLabel,
  nextLabel,
  counterLabel,
}: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const image = images[index];

  useEffect(() => {
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % images.length);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, images.length, onClose, onNavigate]);

  if (!image) return null;

  return createPortal(
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label={altMap[image.id]}
      onClick={onClose}
    >
      <figure className={styles.figure} onClick={(e) => e.stopPropagation()}>
        <button ref={closeRef} type="button" className={styles.closeButton} onClick={onClose} aria-label={closeLabel}>
          &times;
        </button>
        <div className={styles.imageBox}>
          <ResponsiveImage imageId={image.id} alt={altMap[image.id]} sizes="92vw" priority />
        </div>
        <figcaption className={styles.caption}>{altMap[image.id]}</figcaption>
        <p className={styles.counter}>{counterLabel(index + 1, images.length)}</p>
      </figure>

      {images.length > 1 && (
        <>
          <button
            type="button"
            className={`${styles.navButton} ${styles.prev}`}
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index - 1 + images.length) % images.length);
            }}
            aria-label={prevLabel}
          >
            &#8249;
          </button>
          <button
            type="button"
            className={`${styles.navButton} ${styles.next}`}
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index + 1) % images.length);
            }}
            aria-label={nextLabel}
          >
            &#8250;
          </button>
        </>
      )}
    </div>,
    document.body
  );
}
