import React, { useMemo, useRef } from "react";
import { timeRanges } from "./data/timeRanges";
import { TimelineCircle } from "./TimelineCircle";
import { TimelineYears } from "./TimelineYears";
import { TimelineNavigation } from "./TimelineNavigation";
import { TimelineEventsSlider } from "./TimelineEventsSlider";
import {
  useTimelineAnimation,
  useYearAnimation,
  useTimelineNavigation,
} from "./hooks";
import { calculatePoints } from "./utils";

import "./timeline.scss";

export const Timeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const {
    activeIndex,
    isSwitching,
    rotation,
    handlePrev,
    handleNext,
    handleDotClick,
  } = useTimelineNavigation(timeRanges);

  const activeRange = timeRanges[activeIndex];
  const { animatedStart, animatedEnd } = useTimelineAnimation(activeRange);
  useYearAnimation(activeIndex, containerRef);

  const points = useMemo(
    () => calculatePoints(timeRanges.length),
    [timeRanges.length]
  );

  return (
    <section className="timeline" ref={containerRef}>
      <div className="timeline__title">Исторические даты</div>

      <TimelineYears startYear={animatedStart} endYear={animatedEnd} />

      <div className="timeline__content">
        <div className="timeline__top">
          <TimelineCircle
            points={points}
            activeIndex={activeIndex}
            rotation={rotation}
            onDotClick={handleDotClick}
            timeRanges={timeRanges}
          />
        </div>

        <div className="timeline__bottom">
          <TimelineNavigation
            currentIndex={activeIndex}
            total={timeRanges.length}
            onPrev={handlePrev}
            onNext={handleNext}
            onDotClick={handleDotClick}
          />

          <TimelineEventsSlider
            events={activeRange.events}
            rangeName={activeRange.name}
            isSwitching={isSwitching}
          />
        </div>
      </div>
    </section>
  );
};
