import React from "react";
import { formatRangeNumber } from "../utils";
import { TimelineNavigationProps } from "../types";
import "./TimelineNavigation.scss";

export const TimelineNavigation: React.FC<TimelineNavigationProps> = ({
  currentIndex,
  total,
  onPrev,
  onNext,
  onDotClick,
}) => {
  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex === total - 1;

  return (
    <div className="timeline__navigation-top">
      <div className="timeline__pagination__inner">
        <div className="timeline__pagination__nav">
          <div className="timeline__pagination-info">
            <span className="timeline__current-slide">
              {formatRangeNumber(currentIndex + 1)}/{formatRangeNumber(total)}
            </span>
          </div>
          <div className="timeline__navigation-buttons">
            <button
              className={`timeline__nav-btn timeline__nav-btn--prev ${
                isPrevDisabled ? "timeline__nav-btn--disabled" : ""
              }`}
              onClick={onPrev}
              aria-label="Предыдущий период"
              disabled={isPrevDisabled}
            >
              <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
                <path
                  d="M8.5 1L2 7L8.5 13"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <button
              className={`timeline__nav-btn timeline__nav-btn--next ${
                isNextDisabled ? "timeline__nav-btn--disabled" : ""
              }`}
              onClick={onNext}
              aria-label="Следующий период"
              disabled={isNextDisabled}
            >
              <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
                <path
                  d="M1.5 1L8 7L1.5 13"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="timeline__pagination__dots">
          {Array.from({ length: total }).map((_, index) => (
            <button
              key={index}
              className={`timeline__pagination-dot ${
                index === currentIndex ? "timeline__pagination-dot--active" : ""
              }`}
              onClick={() => onDotClick(index)}
              aria-label={`Перейти к периоду ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
