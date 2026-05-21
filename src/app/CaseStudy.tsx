"use client";

import { ArrowRight } from "lucide-react";
import {
  type PointerEvent,
  type ReactNode,
  type TouchEvent,
  useRef,
  useState,
} from "react";
import styles from "./portfolio.module.css";

type ProjectCopy = {
  title: string;
  problem: string;
  solution: string[];
};

type DragState = {
  deltaX: number;
  offset: number;
  x: number;
  y: number;
  mode: "pending" | "horizontal" | "vertical";
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

  function settleSwipe(state: DragState | null) {
    if (!state || state.mode !== "horizontal") {
      return;
    }

    const step = getStep();
    const threshold = Math.min(90, step * 0.18);

    if (Math.abs(state.deltaX) < threshold) {
      setOffset(clamp(state.offset));
      return;
    }

    setOffset(clamp(state.offset + (state.deltaX < 0 ? -step : step)));
  }

  function startDrag(event: PointerEvent<HTMLDivElement>) {
    const carousel = carouselRef.current;

    if (!carousel || event.pointerType === "touch") {
      return;
    }

    event.preventDefault();
    dragState.current = {
      deltaX: 0,
      offset,
      x: event.clientX,
      y: event.clientY,
      mode: "pending",
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

    const deltaX = event.clientX - state.x;
    const deltaY = event.clientY - state.y;
    state.deltaX = deltaX;

    if (state.mode === "pending") {
      state.mode = Math.abs(deltaX) > Math.abs(deltaY) ? "horizontal" : "vertical";
    }

    if (state.mode === "vertical") {
      return;
    }

    event.preventDefault();
    setOffset(clamp(state.offset + deltaX));
  }

  function stopDrag(event: PointerEvent<HTMLDivElement>) {
    const carousel = carouselRef.current;
    const state = dragState.current;

    if (!carousel) {
      dragState.current = null;
      return;
    }

    if (carousel.hasPointerCapture(event.pointerId)) {
      carousel.releasePointerCapture(event.pointerId);
    }

    delete carousel.dataset.dragging;
    settleSwipe(state);
    dragState.current = null;
  }

  function startTouchDrag(event: TouchEvent<HTMLDivElement>) {
    const touch = event.touches[0];

    if (!touch) {
      return;
    }

    dragState.current = {
      deltaX: 0,
      offset,
      x: touch.clientX,
      y: touch.clientY,
      mode: "pending",
    };

    if (carouselRef.current) {
      carouselRef.current.dataset.dragging = "true";
    }
  }

  function touchDrag(event: TouchEvent<HTMLDivElement>) {
    const touch = event.touches[0];
    const state = dragState.current;

    if (!touch || !state) {
      return;
    }

    const deltaX = touch.clientX - state.x;
    const deltaY = touch.clientY - state.y;
    state.deltaX = deltaX;

    if (state.mode === "pending") {
      if (Math.abs(deltaX) < 6 && Math.abs(deltaY) < 6) {
        return;
      }

      state.mode = Math.abs(deltaX) > Math.abs(deltaY) ? "horizontal" : "vertical";
    }

    if (state.mode === "vertical") {
      return;
    }

    event.preventDefault();
    setOffset(clamp(state.offset + deltaX));
  }

  function stopTouchDrag() {
    const state = dragState.current;

    if (carouselRef.current) {
      delete carouselRef.current.dataset.dragging;
    }

    settleSwipe(state);
    dragState.current = null;
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
      </div>
      <div className={styles.carouselShell}>
        <button
          className={`${styles.carouselButton} ${styles.carouselButtonLeft}`}
          type="button"
          onClick={() => move("previous")}
          aria-label={`Show previous ${copy.title} image`}
        >
          <ArrowRight aria-hidden="true" size={20} strokeWidth={2} />
        </button>
        <div
          className={styles.carousel}
          ref={carouselRef}
          onDragStart={(event) => event.preventDefault()}
          onPointerDown={startDrag}
          onPointerMove={drag}
          onPointerUp={stopDrag}
          onPointerCancel={stopDrag}
          onTouchStart={startTouchDrag}
          onTouchMove={touchDrag}
          onTouchEnd={stopTouchDrag}
          onTouchCancel={stopTouchDrag}
        >
          <div
            className={styles.mediaStrip}
            ref={trackRef}
            style={{ transform: `translate3d(${offset}px, 0, 0)` }}
          >
            {children}
          </div>
        </div>
        <button
          className={`${styles.carouselButton} ${styles.carouselButtonRight}`}
          type="button"
          onClick={() => move("next")}
          aria-label={`Show next ${copy.title} image`}
        >
          <ArrowRight aria-hidden="true" size={20} strokeWidth={2} />
        </button>
      </div>
    </section>
  );
}
