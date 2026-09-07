'use client';

import Image from 'next/image';
import { useCallback, useRef, useState } from 'react';
import { ScrollReveal } from '@/components/general/ScrollReveal';
import { InitiativeImageModal } from './InitiativeImageModal';
import type { InitiativeGalleryImage } from '@/lib/types/initiatives';

interface InitiativeGalleryProps {
  title: string;
  images: InitiativeGalleryImage[];
}

export const InitiativeGallery = ({ title, images }: InitiativeGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const lastTriggerRef = useRef<HTMLElement | null>(null);
  const closeModal = useCallback(() => setSelectedIndex(null), []);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <ScrollReveal key={image.src} delay={index * 0.06} amount={0.1}>
            <button
              type="button"
              className="group relative block aspect-[4/3] w-full overflow-hidden rounded-xl bg-primary-soft text-left shadow-soft shadow-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4"
              onClick={event => {
                lastTriggerRef.current = event.currentTarget;
                setSelectedIndex(index);
              }}
              aria-label={`Open image ${index + 1}: ${image.alt}`}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) calc(50vw - 3rem), 360px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-dark/0 transition-colors duration-300 group-hover:bg-dark/15" />
              <span className="absolute bottom-3 right-3 rounded-full bg-white/90 px-3 py-1 font-roboto text-xs font-semibold text-primary opacity-0 shadow transition-opacity duration-300 group-hover:opacity-100">
                Open image
              </span>
            </button>
          </ScrollReveal>
        ))}
      </div>

      <InitiativeImageModal
        open={selectedIndex !== null}
        title={title}
        images={images}
        initialIndex={selectedIndex ?? 0}
        onClose={closeModal}
        returnFocusRef={lastTriggerRef}
      />
    </>
  );
};
