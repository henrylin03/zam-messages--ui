import { Avatar, Group, Stack, Text } from "@mantine/core";
import type { Message } from "@models/messages";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";
import { Link } from "react-router";

interface Props {
  message: Message;
}

const MessagePreview = ({ message }: Props) => {
  const { author, text, sentTime } = message;

  dayjs.extend(relativeTime);
  dayjs.extend(updateLocale);

  dayjs.updateLocale("en", {
    relativeTime: {
      s: "Just now",
      m: "1m",
      mm: "%dm",
      h: "1h",
      d: "Yesterday",
    },
  });

  const timeSinceLastMessage = dayjs(sentTime).fromNow();

  return (
    <Link to={`/messages/${author.id}`}>
      <Group justify="space-between" wrap="nowrap">
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
              {timeSinceLastMessage}
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
