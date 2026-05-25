import { ActionIcon, Avatar, Paper, Textarea, Title } from "@mantine/core";
import type { User } from "@models/user";
import styles from "./ChatSection.module.css";
import type { Message } from "@models/messages";
import { IconSend2 } from "@tabler/icons-react";

interface Props {
  chatId: User["id"] | string | undefined;
  chatName: User["name"] | string | undefined;
  message: Message;
}

const ChatSection = ({ chatId, chatName, message }: Props) => {
  const avatarSrc = message.author.avatarSrc;

  return (
    <Paper
      component="section"
      p={0}
      radius="xs"
      shadow="lg"
      className={styles.wrapper}
    >
      <header className={styles.header}>
        <Avatar src={avatarSrc} />
        <Title order={2}>{chatName || "Error"}</Title>
      </header>

      {/* core chat section */}
      <section className={styles.messagesSection}></section>

      <section className={styles.inputSection}>
        <Textarea placeholder="Type your message" className={styles.input} />
        <ActionIcon size="xl" aria-label="Send message">
          <IconSend2 />
        </ActionIcon>
      </section>
    </Paper>
  );
};

export default ChatSection;
