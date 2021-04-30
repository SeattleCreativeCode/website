import { rrulestr } from "rrule";

export type Event = {
  title: string;
  link: string;
  repetition?: string;
  date?: Date;
  time: string;
  description: string;
};

export const generateEventsFor = (e: Event): Event[] => {
  if (!e.repetition) {
    return [e];
  }

  const timeDate = timeFromStr(e.time);
  const rSet = rrulestr(e.repetition);
  const startDate = copyTimeFromDate(new Date(), timeDate);
  const endDate = addMonth(startDate, 2);
  return rSet.between(startDate, endDate).map((d) => ({
    ...e,
    // This is necessary because RRule does weird things
    // with time.
    date: copyTimeFromDate(d, timeDate),
  }));
};

const addMonth = (d: Date, cnt: number): Date => {
  let monthValue = d.getMonth() + cnt;
  let yearValue = d.getFullYear();
  let dayValue = d.getDay();

  if (monthValue > 12) {
    monthValue = (monthValue % 12) + 1;
    yearValue += 1;
  }

  return new Date(yearValue, monthValue, dayValue);
};

const timeFromStr = (t: string): Date => {
  const timeStr = `2021-01-01T${t}:00.00-0700`;
  return new Date(timeStr);
};

const copyTimeFromDate = (dst: Date, src: Date): Date => {
  dst.setHours(src.getHours());
  dst.setMinutes(src.getMinutes());
  dst.setSeconds(0);
  dst.setMilliseconds(0);
  return dst;
};
