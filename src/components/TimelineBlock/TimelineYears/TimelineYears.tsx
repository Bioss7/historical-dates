import React from "react";
import { TimelineYearsProps } from "../types";

export const TimelineYears: React.FC<TimelineYearsProps> = ({
  startYear,
  endYear,
}) => {
  return (
    <div className="timeline__years">
      <div className="tl-big-year">
        <span>{startYear}</span>
      </div>
      <div className="tl-big-year tl-big-year--right">
        <span>{endYear}</span>
      </div>
    </div>
  );
};
