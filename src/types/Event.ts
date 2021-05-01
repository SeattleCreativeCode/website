import RRule, { RRuleSet, rrulestr } from "rrule";

export type Event = {
  title: string;
  link: string;
  repetition?: RRule | RRuleSet;
  date?: Date;
  time: Date;
  description: string;
};

export const generateEventsFor = (e: Event): Event[] => {
  if (!e.repetition) {
    return [e];
  }

  const startDate = copyTimeFromDate(new Date(), e.time);
  const endDate = addMonth(startDate, 2);
  return e.repetition.between(startDate, endDate).map((d) => ({
    ...e,
    // This is necessary because RRule does weird things
    // with time.
    date: copyTimeFromDate(d, e.time),
  }));
};

export const fromQuery = (e: any): Event => {
  const repetition = e.frontmatter.repetition
    ? rrulestr(e.frontmatter.repetition)
    : undefined;
  return {
    ...e.frontmatter,
    description: e.body,
    time: timeFromStr(e.frontmatter.time),
    // This is necessary because Gatsby assumes UTC, but we want to assume Pacific Time
    date: fixTimezone(e.frontmatter.date),
    repetition,
  };
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
  const timeStr = `2021-01-01T${t}:00.00-0800`;
  return new Date(timeStr);
};

const fixTimezone = (d: string): Date | undefined => {
  if (!d) {
    return undefined;
  }
  const dateStr = d.replace("Z", "-0800");
  return new Date(dateStr);
};

const copyTimeFromDate = (dst: Date, src: Date): Date => {
  dst.setHours(src.getHours());
  dst.setMinutes(src.getMinutes());
  dst.setSeconds(0);
  dst.setMilliseconds(0);
  return dst;
};
