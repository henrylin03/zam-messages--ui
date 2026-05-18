import { Avatar, Group, Stack, Text } from "@mantine/core";
import type { Message } from "@models/messages";
import { Link } from "react-router";

interface Props {
  message: Message;
}

const MessagePreview = ({ message }: Props) => (
  <Link to={`/messages/${message.author.id}`}>
    <Group gap="sm">
      <Avatar
        src={message.author.avatarSrc}
        alt={`Avatar of ${message.author.name}`}
      />
      <Stack gap={0}>
        <Group justify="space-between">
          <Text fz="md" fw="bold">
            {message.author.name}
          </Text>
          {/* <Text c="dimmed" fz="sm">
            {String(message.sentTime)}
          </Text> */}
        </Group>
        <Text c="gray.6" fz="sm" lineClamp={1}>
          {message.text}
        </Text>
      </Stack>
    </Group>
  </Link>
);

export default MessagePreview;
