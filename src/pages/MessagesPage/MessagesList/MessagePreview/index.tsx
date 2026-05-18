import { getDateTimeString } from "@/lib/dayjs";
import { Avatar, Group, Stack, Text } from "@mantine/core";
import type { Message } from "@models/messages";
import type { OpUnitType as TimeUnit } from "dayjs";
import { Link } from "react-router";
import styles from "./MessagePreview.module.css";

interface Props {
  message: Message;
}

const MessagePreview = ({ message }: Props) => {
  const { author, text, sentTime } = message;

  const TIME_BEFORE_ABSOLUTE_DATE_SHOWN: {
    unitOfMeasurement: TimeUnit;
    value: number;
  } = {
    unitOfMeasurement: "day",
    value: 2,
  };
  const messageSentTimeDisplayed = getDateTimeString(
    sentTime,
    TIME_BEFORE_ABSOLUTE_DATE_SHOWN,
  );

  return (
    <Link to={`/messages/${author.id}`}>
      <Group
        justify="space-between"
        wrap="nowrap"
        className={styles.inner}
        p="sm"
      >
        <Avatar
          src={message.author.avatarSrc}
          alt={`Avatar of ${author.name}`}
        />
        <Stack gap={0} w="100%">
          <Group justify="space-between" grow wrap="nowrap">
            <Text fz="md" fw="bold" lineClamp={1}>
              {author.name}
            </Text>
            <Text c="dimmed" fz="sm" ta="right">
              {messageSentTimeDisplayed}
            </Text>
          </Group>
          <Text c="gray.6" fz="sm" lineClamp={1}>
            {text}
          </Text>
        </Stack>
      </Group>
    </Link>
  );
};

export default MessagePreview;
