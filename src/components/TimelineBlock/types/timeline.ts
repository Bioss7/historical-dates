export type EventItem = {
  id: number;
  year: number;
  title: string;
  text: string;
};

export type TimeRange = {
  id: number;
  name: string;
  start: number;
  end: number;
  events: EventItem[];
};

export type Point = {
  left: string;
  top: string;
  i: number;
};

export type TimelineNavigationProps = {
  currentIndex: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onDotClick: (index: number) => void;
};

export type TimelineCircleProps = {
  points: Point[];
  activeIndex: number;
  rotation: number;
  onDotClick: (index: number) => void;
  timeRanges: TimeRange[];
};

export type TimelineYearsProps = {
  startYear: number;
  endYear: number;
};

export type TimelineEventsSliderProps = {
  events: EventItem[];
  rangeName: string;
  isSwitching: boolean;
};
