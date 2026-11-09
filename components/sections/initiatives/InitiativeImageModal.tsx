'use client';

import Image from 'next/image';
import { createPortal } from 'react-dom';
import { useEffect, useRef, useState, type RefObject } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperInstance } from 'swiper';
import type { InitiativeGalleryImage } from '@/lib/types/initiatives';

interface InitiativeImageModalProps {
  open: boolean;
  title: string;
  images: InitiativeGalleryImage[];
  initialIndex: number;
  onClose: () => void;
  returnFocusRef: RefObject<HTMLElement | null>;
}

const FOCUSABLE_SELECTOR =
  'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export const InitiativeImageModal = ({
  open,
  title,
  images,
  initialIndex,
  onClose,
  returnFocusRef,
}: InitiativeImageModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<SwiperInstance | null>(null);
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const titleId = 'initiative-image-modal-title';

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const focusTarget = returnFocusRef.current;
    document.body.style.overflow = 'hidden';
    setActiveIndex(initialIndex);

    const frame = window.requestAnimationFrame(() => closeButtonRef.current?.focus());
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== 'Tab' || !modalRef.current) return;

      const focusableElements = Array.from(
        modalRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
      );
      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.cancelAnimationFrame(frame);
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      focusTarget?.focus();
    };
  }, [initialIndex, onClose, open, returnFocusRef]);

  useEffect(() => {
    if (open && swiperRef.current && swiperRef.current.activeIndex !== initialIndex) {
      swiperRef.current.slideTo(initialIndex, 0);
    }
  }, [initialIndex, open]);

  if (!open || images.length === 0 || typeof document === 'undefined') return null;

  const activeImage = images[activeIndex] ?? images[0];

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-dark/80 p-4 backdrop-blur-sm sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onMouseDown={event => {
        if (event.target === event.currentTarget) onClose();
      }}>
      <div
        ref={modalRef}
        className="relative my-auto flex w-full max-w-5xl flex-col rounded-2xl bg-white p-4 shadow-2xl sm:p-6"
        onMouseDown={event => event.stopPropagation()}>
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-20 rounded-full p-2 text-dark/70 transition-colors hover:bg-primary-soft hover:text-primary sm:right-4 sm:top-4"
          aria-label="Close image viewer">
          <X className="h-5 w-5" aria-hidden />
        </button>

        <div className="mb-5 px-8 text-center sm:mb-6 sm:px-12">
          <h2
            id={titleId}
            className="font-montserrat text-lg font-bold leading-tight text-dark sm:text-2xl">
            {title}
          </h2>
          <p className="mt-2 font-roboto text-xs text-muted-foreground" aria-live="polite">
            Image {activeIndex + 1} of {images.length}
          </p>
        </div>

        <div className="relative h-[min(58vh,620px)] w-full overflow-hidden rounded-xl bg-dark/5">
          <Swiper
            onSwiper={instance => {
              swiperRef.current = instance;
              instance.slideTo(initialIndex, 0);
            }}
            onSlideChange={instance => setActiveIndex(instance.activeIndex)}
            modules={[Keyboard]}
            keyboard={{ enabled: true }}
            initialSlide={initialIndex}
            slidesPerView={1}
            spaceBetween={24}
            className="h-full w-full">
            {images.map((image, index) => (
              <SwiperSlide
                key={image.src}
                className="relative flex items-center justify-center p-2 sm:p-4">
                <Image
                  src={image.src}
                  alt={index === activeIndex ? image.alt : ''}
                  aria-hidden={index !== activeIndex}
                  fill
                  sizes="(max-width: 640px) calc(100vw - 3rem), min(80vw, 960px)"
                  className="object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => swiperRef.current?.slidePrev()}
                className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-3 text-primary shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:left-5"
                aria-label="Previous image">
                <ChevronLeft className="h-5 w-5" aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => swiperRef.current?.slideNext()}
                className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-3 text-primary shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:right-5"
                aria-label="Next image">
                <ChevronRight className="h-5 w-5" aria-hidden />
              </button>
            </>
          )}
        </div>

        <p
          className="mt-5 text-center font-montserrat text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:text-base"
          aria-live="polite">
          {activeImage.caption ?? activeImage.alt}
        </p>
      </div>
    </div>,
    document.body
  );
};
