import type { Message } from "@models/messages";
import dayjs, { type OpUnitType as TimeUnit } from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";
import isYesterday from "dayjs/plugin/isYesterday";

dayjs.extend(relativeTime);
dayjs.extend(updateLocale);
dayjs.extend(isYesterday);

dayjs.updateLocale("en", {
  relativeTime: {
    s: "Just now",
    m: "1m",
    mm: "%dm",
    h: "1h",
    d: "1d",
    dd: "%dd",
    M: "1mth",
    MM: "%dmth",
    y: "1y",
    yy: "%dy",
  },
});

const getDateTimeString = (
  inputTime: Message["sentTime"],
  relativeTimeCutoff: { unitOfMeasurement: TimeUnit; value: number },
): string => {
  const now = dayjs();
  const messageSentTime = dayjs(inputTime);

  if (messageSentTime.isYesterday()) return "Yesterday";
  if (now.diff(messageSentTime, "minute") < 1) return "Just now";

  const isRecent =
    now.diff(messageSentTime, relativeTimeCutoff.unitOfMeasurement) <
    relativeTimeCutoff.value;
  if (isRecent) return messageSentTime.fromNow();
  return messageSentTime.format("D MMM YYYY");
};

export { dayjs, getDateTimeString };
