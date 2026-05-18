import { describe, expect, it } from "vitest";
import { getDateTimeString, dayjs } from "./dayjs";

describe("The getDateTimeString helper function", () => {
  const TIME_BEFORE_FULL_DATE_OF_MESSAGE_IS_SHOWN = {
    unitOfMeasurement: "day",
    value: 2,
  }; // anything less than 2 days shows relative time

  it("If message was sent 1 second ago, should return 'just now'", () => {
    const oneSecondAgo = new Date(Date.now() - 1000); // milliseconds
    expect(
      getDateTimeString(
        dayjs(oneSecondAgo),
        TIME_BEFORE_FULL_DATE_OF_MESSAGE_IS_SHOWN,
      ),
    ).toEqual("Just now");
  });

  it("If message was sent 5 minutes ago, return '5m ago'", () => {
    const fiveMinutesAgo = dayjs().subtract(5, "minute");
    expect(
      getDateTimeString(
        dayjs(fiveMinutesAgo),
        TIME_BEFORE_FULL_DATE_OF_MESSAGE_IS_SHOWN,
      ),
    ).toEqual("5m ago");
  });

  it("If message was sent yesterday, return 'yesterday'", () => {
    const yesterday = dayjs().subtract(1, "day");
    expect(
      getDateTimeString(
        dayjs(yesterday),
        TIME_BEFORE_FULL_DATE_OF_MESSAGE_IS_SHOWN,
      ),
    ).toEqual("Yesterday");
  });

  it("If message was sent on 1 January 2021, display the full date, formatted, and not the relative date", () => {
    const someDistantDateInThePast = new Date("January 1, 2021 03:24:00");
    expect(
      getDateTimeString(
        dayjs(someDistantDateInThePast),
        TIME_BEFORE_FULL_DATE_OF_MESSAGE_IS_SHOWN,
      ),
    ).toEqual("1 Jan 2021");
  });
});
