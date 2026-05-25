import { Paper, Title } from "@mantine/core";
import type { User } from "@models/user";

interface Props {
  chatId: User["id"] | string | undefined;
  chatName: User["name"] | string | undefined;
}

const ChatSection = ({ chatId, chatName }: Props) => (
  <Paper component="section" p="lg" radius="xs" shadow="lg">
    <Title order={2}>{chatName || "Error"}</Title>
    <section>ChatID: {chatId || "Error"}</section>
  </Paper>
);

export default ChatSection;
