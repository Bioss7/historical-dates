import { useEffect, useState } from "react";
import gsap from "gsap";
import { TimeRange } from "../types";

export const useTimelineAnimation = (activeRange: TimeRange) => {
  const [animatedStart, setAnimatedStart] = useState<number>(activeRange.start);
  const [animatedEnd, setAnimatedEnd] = useState<number>(activeRange.end);

  useEffect(() => {
    const duration = 0.8;

    gsap.to(
      { val: animatedStart },
      {
        val: activeRange.start,
        duration,
        ease: "power2.out",
        onUpdate: function () {
          setAnimatedStart(Math.round(this.targets()[0].val));
        },
      }
    );

    gsap.to(
      { val: animatedEnd },
      {
        val: activeRange.end,
        duration,
        ease: "power2.out",
        onUpdate: function () {
          setAnimatedEnd(Math.round(this.targets()[0].val));
        },
      }
    );
  }, [activeRange, animatedStart, animatedEnd]);

  return { animatedStart, animatedEnd };
};

export const useYearAnimation = (
  activeIndex: number,
  containerRef: React.RefObject<HTMLDivElement>
) => {
  useEffect(() => {
    if (!containerRef.current) return;
    const bigNums = containerRef.current.querySelectorAll(".tl-big-year");
    gsap.fromTo(
      bigNums,
      { y: 15, scale: 0.96 },
      { y: 0, scale: 1, duration: 0.45, stagger: 0.05 }
    );
  }, [activeIndex, containerRef]);
};
