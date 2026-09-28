"use client";

import { useState } from "react";
import Image from "next/image";

type Img = { src: string; alt: string };

export function ArtworkGallery({ images }: { images: Img[] }) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  return (
    <div className="artwork-gallery">
      <button
        type="button"
        className="artwork-gallery__main"
        onClick={() => setLightbox(true)}
        aria-label="Ampliar imagen"
      >
        <Image
          src={images[active].src}
          alt={images[active].alt}
          width={1400}
          height={1600}
          className="artwork-gallery__img"
          priority
        />
      </button>
      {images.length > 1 ? (
        <div className="artwork-gallery__thumbs">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              className={i === active ? "is-active" : undefined}
              onClick={() => setActive(i)}
            >
              <Image src={img.src} alt={img.alt} width={160} height={160} />
            </button>
          ))}
        </div>
      ) : null}

      {lightbox ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox(false)}
        >
          <button
            type="button"
            className="lightbox__close"
            onClick={() => setLightbox(false)}
          >
            ×
          </button>
          <Image
            src={images[active].src}
            alt={images[active].alt}
            width={1800}
            height={2000}
            className="lightbox__img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      ) : null}
    </div>
  );
}
