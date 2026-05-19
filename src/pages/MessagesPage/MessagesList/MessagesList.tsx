import { Button, Group, ScrollArea, Stack, Title } from "@mantine/core";
import type { Message } from "@models/messages";
import styles from "./MessagesList.module.css";
import MessagePreview from "./MessagePreview/MessagePreview";

interface Props {
  messages: Message[];
}

const MessagesList = ({ messages }: Props) => (
  <section className={styles.section}>
    <Group justify="space-between" component="header" p="lg">
      <Title order={2}>Messages</Title>
      <Button>New message</Button>
    </Group>
    <ScrollArea.Autosize
      offsetScrollbars
      pl="xs"
      type="always"
      component="ul"
      scrollbarSize={12}
      mah={1100}
    >
      <Stack component="ul" gap={0}>
        {messages.map((message) => (
          <li>
            <MessagePreview message={message} />
          </li>
        ))}
      </Stack>
    </ScrollArea.Autosize>
  </section>
);

export default MessagesList;
