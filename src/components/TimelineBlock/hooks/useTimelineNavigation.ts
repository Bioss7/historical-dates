import { useState, useCallback } from "react";
import { TimeRange } from "../types";

export const useTimelineNavigation = (timeRanges: TimeRange[]) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isSwitching, setIsSwitching] = useState<boolean>(false);
  const [rotation, setRotation] = useState<number>(0);
  const [isRotationComplete, setIsRotationComplete] = useState<boolean>(true);

  const n = timeRanges.length;

  const handleSwitch = useCallback(
    (newIndex: number) => {
      if (!isRotationComplete) return;

      setIsRotationComplete(false);
      setIsSwitching(true);

      const angleStep = 360 / n;
      const newRotation = -newIndex * angleStep;
      setRotation(newRotation);
      setActiveIndex(newIndex);

      setTimeout(() => {
        setIsRotationComplete(true);
        setIsSwitching(false);
      }, 800);
    },
    [n, isRotationComplete]
  );

  const handlePrev = useCallback(() => {
    const newIndex = activeIndex === 0 ? n - 1 : activeIndex - 1;
    handleSwitch(newIndex);
  }, [activeIndex, n, handleSwitch]);

  const handleNext = useCallback(() => {
    const newIndex = activeIndex === n - 1 ? 0 : activeIndex + 1;
    handleSwitch(newIndex);
  }, [activeIndex, n, handleSwitch]);

  const handleDotClick = useCallback(
    (index: number) => {
      handleSwitch(index);
    },
    [handleSwitch]
  );

  return {
    activeIndex,
    isSwitching,
    rotation,
    handlePrev,
    handleNext,
    handleDotClick,
    isPrevDisabled: activeIndex === 0,
    isNextDisabled: activeIndex === n - 1,
  };
};
