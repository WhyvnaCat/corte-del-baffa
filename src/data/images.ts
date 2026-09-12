export type ImageCategory = "hero" | "exterior" | "interior" | "view" | "garden" | "details";

export interface ImageAsset {
  id: string;
  category: ImageCategory;
  /** Gallery filter categories this image should appear under. */
  galleryTags: string[];
  file: string;
  maxWidth: number;
  aspect: number;
}

const BASE_WIDTHS = [480, 768, 1200, 1600, 2200];

/** Mirrors the width selection logic in scripts/process-images.mjs. */
export function widthsFor(maxWidth: number): number[] {
  const widths = BASE_WIDTHS.filter((w) => w <= maxWidth);
  if (widths.length === 0 || widths[widths.length - 1] !== maxWidth) {
    widths.push(maxWidth);
  }
  return widths;
}

// Order matters for the gallery's "Alle" grid: full-width banner images are
// listed first so they each start a fresh row without leaving gaps behind
// them (see Gallery.tsx BANNER_IMAGE_IDS).
export const images: ImageAsset[] = [
  {
    id: "panorama",
    category: "view",
    galleryTags: ["aussicht", "garten"],
    file: "lake-view-panorama",
    maxWidth: 2048,
    aspect: 2048 / 856,
  },
  {
    id: "exterior-main",
    category: "exterior",
    galleryTags: ["aussen"],
    file: "rustico-exterior-main",
    maxWidth: 1959,
    aspect: 1959 / 903,
  },
  {
    id: "living-room",
    category: "interior",
    galleryTags: ["innen"],
    file: "living-room-lake-view",
    maxWidth: 1986,
    aspect: 1986 / 828,
  },
  {
    id: "kitchen",
    category: "interior",
    galleryTags: ["innen"],
    file: "forster-kitchen",
    maxWidth: 1652,
    aspect: 1652 / 848,
  },
  {
    id: "dining-stove",
    category: "interior",
    galleryTags: ["innen"],
    file: "schwedenofen-dining",
    maxWidth: 1832,
    aspect: 1832 / 921,
  },
  {
    id: "bedroom",
    category: "interior",
    galleryTags: ["innen"],
    file: "bedroom",
    maxWidth: 1689,
    aspect: 1689 / 856,
  },
  {
    id: "kids-room",
    category: "interior",
    galleryTags: ["innen"],
    file: "kids-room-bunkbed",
    maxWidth: 1608,
    aspect: 1608 / 816,
  },
];

export function getImage(id: string): ImageAsset {
  const img = images.find((i) => i.id === id);
  if (!img) {
    throw new Error(`Unknown image id: ${id}`);
  }
  return img;
}

export function imagesByTag(tag: string): ImageAsset[] {
  return images.filter((img) => img.galleryTags.includes(tag));
}
