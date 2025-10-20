import { Point } from "../types";

export const calculatePoints = (n: number): Point[] => {
  const radius = 265;
  const arr: Point[] = [];

  for (let i = 0; i < n; i++) {
    const angle = (i / n) * Math.PI * 2 - Math.PI / 2 - Math.PI / n;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    const displayIndex = (i + n - 1) % n;
    arr.push({
      left: `calc(50% + ${x}px)`,
      top: `calc(50% + ${y}px)`,
      i: displayIndex,
    });
  }
  return arr;
};

export const formatRangeNumber = (num: number): string => {
  return num.toString().padStart(2, "0");
};
