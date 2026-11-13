import Image from "next/image";
import type { ImageAsset } from "@/lib/content";

type Props = {
  image: ImageAsset;
  sizes: string;
  preload?: boolean;
  className?: string;
  /** Overlay tint drawn over the image (reference uses #1e1e1e at 20–50 %). */
  overlay?: "light" | "default" | "strong";
};

const overlayClass = {
  light: "bg-overlay-light",
  default: "bg-overlay",
  strong: "bg-overlay-strong",
};

/** Image that covers its positioned parent, with an optional tint on top. */
export function CoverImage({ image, sizes, preload, className = "", overlay }: Props) {
  return (
    <>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        preload={preload}
        className={`object-cover ${className}`}
      />
      {overlay && <div aria-hidden className={`absolute inset-0 ${overlayClass[overlay]}`} />}
    </>
  );
}
