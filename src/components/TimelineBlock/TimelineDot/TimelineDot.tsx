import React from "react";
import { TimeRange } from "../types";
import "./TimelineDot.scss";

interface TimelineDotProps {
  point: {
    left: string;
    top: string;
    i: number;
  };
  isActive: boolean;
  timeRange: TimeRange;
  rotation: number;
  onClick: (index: number) => void;
}

export const TimelineDot: React.FC<TimelineDotProps> = ({
  point,
  isActive,
  timeRange,
  rotation,
  onClick,
}) => {
  return (
    <button
      className={`timeline__dot ${isActive ? "timeline__dot--active" : ""}`}
      style={{
        left: point.left,
        top: point.top,
        transform: `translate(-50%, -50%) rotate(${-rotation}deg)`,
      }}
      onClick={() => onClick(point.i)}
    >
      <span className="timeline__dot-number">{point.i + 1}</span>
      <span className="timeline__dot-name">{timeRange.name}</span>
    </button>
  );
};
