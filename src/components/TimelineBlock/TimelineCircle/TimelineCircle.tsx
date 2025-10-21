import React from "react";
import { TimelineDot } from "../TimelineDot";
import { TimelineCircleProps } from "../types";
import "./TimelineCircle.scss";

export const TimelineCircle: React.FC<TimelineCircleProps> = ({
  points,
  activeIndex,
  rotation,
  onDotClick,
  timeRanges,
}) => {
  return (
    <div className="timeline__circle-wrapper">
      <div className="timeline__cross" />
      <div
        className="timeline__circle"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {points.map((point) => (
          <div key={point.i} className="timeline__dot-wrapper">
            <TimelineDot
              point={point}
              isActive={point.i === activeIndex}
              timeRange={timeRanges[point.i]}
              rotation={rotation}
              onClick={onDotClick}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
