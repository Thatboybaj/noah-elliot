import Image from "next/image";
import type { ImageAsset } from "@/lib/content";
import { Reveal } from "./Reveal";

/** Full-width showcase image. `phoneCrop` picks the reference's phone aspect. */
export function ProjectShowcase({ image, phoneCrop = "wide" }: { image: ImageAsset; phoneCrop?: "tall" | "wide" }) {
  return (
    <section className="pt-14">
      <Reveal
        className={`container-x relative ${phoneCrop === "tall" ? "aspect-[366/350]" : "aspect-[366/210]"} tablet:aspect-[1392/800]`}
      >
        <div className="absolute inset-y-0 inset-x-[var(--gutter)] overflow-hidden">
          <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1920px) 1872px, calc(100vw - 48px)" className="object-cover" />
        </div>
      </Reveal>
    </section>
  );
}
