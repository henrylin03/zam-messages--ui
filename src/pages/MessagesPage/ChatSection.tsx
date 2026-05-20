import { Title } from "@mantine/core";
import type { User } from "@models/user";

interface Props {
  chatId: User["id"] | string | undefined;
  chatName: User["name"] | string | undefined;
}

const ChatSection = ({ chatId, chatName }: Props) => (
  <section>
    <Title order={2}>{chatName || "Error"}</Title>
    <section>ChatID: {chatId || "Error"}</section>
  </section>
);

export default ChatSection;
