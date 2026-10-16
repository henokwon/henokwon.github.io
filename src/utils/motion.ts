import type { TMotion } from "../types";
import { Variants } from "framer-motion";

export const textVariant = (): Variants => {
  return {
    hidden: {
      y: 20,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
};

export const fadeIn = (
  direction: TMotion["direction"],
  type: TMotion["type"],
  delay: TMotion["delay"],
  duration: TMotion["duration"]
): Variants => {
  return {
    hidden: {
      x: direction === "left" ? 28 : direction === "right" ? -28 : 0,
      y: direction === "up" ? 28 : direction === "down" ? -28 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type || "tween",
        delay: Math.min(delay, 0.3),
        duration: Math.min(duration, 0.65),
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
};

export const zoomIn = (delay: TMotion["delay"], duration: TMotion["duration"]) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (
  direction: TMotion["direction"],
  type: TMotion["type"],
  delay: TMotion["delay"],
  duration: TMotion["duration"]
) => {
  return {
    hidden: {
      x: direction === "left" ? -32 : direction === "right" ? 32 : 0,
      y: direction === "up" ? 32 : direction === "down" ? -32 : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
};
