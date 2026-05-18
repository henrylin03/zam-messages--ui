import { Button, Group, ScrollArea, Stack, Title } from "@mantine/core";
import type { Message } from "@models/messages";
import styles from "./MessagesList.module.css";
import MessagePreview from "./MessagePreview";

interface Props {
  messages: Message[];
}

const MessagesList = ({ messages }: Props) => (
  <section className={styles.section}>
    <Group justify="space-between" component="header" p="lg">
      <Title order={2}>Messages</Title>
      <Button>New message</Button>
    </Group>
    <ScrollArea h="100%" type="auto" offsetScrollbars mt="lg">
      <Stack component="ul" gap="sm">
        {messages.map((message) => (
          <li>
            <MessagePreview message={message} />
          </li>
        ))}
      </Stack>
    </ScrollArea>
  </section>
);

export default MessagesList;
