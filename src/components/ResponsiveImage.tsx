import { getImage, widthsFor } from "../data/images";

interface ResponsiveImageProps {
  imageId: string;
  alt: string;
  sizes?: string;
  className?: string;
  priority?: boolean;
  onClick?: () => void;
  /** Absolutely fills its (positioned) parent with object-fit: cover, e.g. for hero/panorama backgrounds. */
  fill?: boolean;
}

export function ResponsiveImage({
  imageId,
  alt,
  sizes = "100vw",
  className,
  priority = false,
  onClick,
  fill = false,
}: ResponsiveImageProps) {
  const img = getImage(imageId);
  const widths = widthsFor(img.maxWidth);
  const base = `${import.meta.env.BASE_URL}images/${img.category}/${img.file}`;
  const webpSrcSet = widths.map((w) => `${base}-${w}.webp ${w}w`).join(", ");
  const jpgSrcSet = widths.map((w) => `${base}-${w}.jpg ${w}w`).join(", ");
  const largest = widths[widths.length - 1];
  const height = Math.round(largest / img.aspect);

  return (
    <picture
      className={className}
      onClick={onClick}
      style={fill ? { position: "absolute", inset: 0, display: "block" } : undefined}
    >
      <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
      <img
        src={`${base}-${largest}.jpg`}
        srcSet={jpgSrcSet}
        sizes={sizes}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        // @ts-expect-error fetchPriority is valid HTML but missing in older React DOM typings
        fetchpriority={priority ? "high" : "auto"}
        width={largest}
        height={height}
        style={
          fill
            ? { width: "100%", height: "100%", objectFit: "cover" }
            : { aspectRatio: `${img.aspect}`, width: "100%", height: "auto" }
        }
      />
    </picture>
  );
}
