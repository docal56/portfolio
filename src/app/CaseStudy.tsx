"use client";

import { ArrowRight } from "lucide-react";
import { type PointerEvent, type ReactNode, useRef, useState } from "react";
import styles from "./portfolio.module.css";

type ProjectCopy = {
  title: string;
  problem: string;
  solution: string[];
};

type DragState = {
  offset: number;
  x: number;
};

export function CaseStudy({
  className,
  copy,
  children,
}: {
  className: string;
  copy: ProjectCopy;
  children: ReactNode;
}) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragState = useRef<DragState | null>(null);
  const [offset, setOffset] = useState(0);

  function getBounds() {
    const carousel = carouselRef.current;
    const track = trackRef.current;

    if (!carousel || !track) {
      return { max: 0, min: 0 };
    }

    return {
      max: 0,
      min: Math.min(0, carousel.clientWidth - track.scrollWidth),
    };
  }

  function clamp(nextOffset: number) {
    const bounds = getBounds();

    return Math.max(bounds.min, Math.min(bounds.max, nextOffset));
  }

  function getStep() {
    const track = trackRef.current;
    const firstItem = track?.firstElementChild as HTMLElement | null;
    const trackStyles = track ? window.getComputedStyle(track) : null;
    const gap = trackStyles
      ? Number.parseFloat(trackStyles.columnGap || trackStyles.gap || "0")
      : 0;

    return firstItem ? firstItem.offsetWidth + gap : 0;
  }

  function move(direction: "previous" | "next") {
    const multiplier = direction === "next" ? -1 : 1;

    setOffset((currentOffset) => clamp(currentOffset + getStep() * multiplier));
  }

  function startDrag(event: PointerEvent<HTMLDivElement>) {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    event.preventDefault();
    dragState.current = {
      offset,
      x: event.clientX,
    };
    carousel.setPointerCapture(event.pointerId);
    carousel.dataset.dragging = "true";
  }

  function drag(event: PointerEvent<HTMLDivElement>) {
    const carousel = carouselRef.current;
    const state = dragState.current;

    if (!carousel || !state) {
      return;
    }

    event.preventDefault();
    setOffset(clamp(state.offset + event.clientX - state.x));
  }

  function stopDrag(event: PointerEvent<HTMLDivElement>) {
    const carousel = carouselRef.current;

    dragState.current = null;

    if (!carousel) {
      return;
    }

    if (carousel.hasPointerCapture(event.pointerId)) {
      carousel.releasePointerCapture(event.pointerId);
    }

    delete carousel.dataset.dragging;
  }

  return (
    <section className={`${styles.projectSection} ${className}`}>
      <div className={styles.projectDetails}>
        <div className={styles.projectText}>
          <h2>{copy.title}</h2>
          <div className={styles.copyBlock}>
            <h3>The Problem</h3>
            <p>{copy.problem}</p>
          </div>
          <div className={styles.copyBlock}>
            <h3>The Solution</h3>
            {copy.solution.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className={styles.arrows}>
          <button
            className={styles.arrowLeft}
            type="button"
            onClick={() => move("previous")}
            aria-label={`Show previous ${copy.title} image`}
          >
            <ArrowRight aria-hidden="true" size={20} strokeWidth={2} />
          </button>
          <button
            className={styles.arrowRight}
            type="button"
            onClick={() => move("next")}
            aria-label={`Show next ${copy.title} image`}
          >
            <ArrowRight aria-hidden="true" size={20} strokeWidth={2} />
          </button>
        </div>
      </div>
      <div
        className={styles.carousel}
        ref={carouselRef}
        onDragStart={(event) => event.preventDefault()}
        onPointerDown={startDrag}
        onPointerMove={drag}
        onPointerUp={stopDrag}
        onPointerCancel={stopDrag}
      >
        <div
          className={styles.mediaStrip}
          ref={trackRef}
          style={{ transform: `translate3d(${offset}px, 0, 0)` }}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
