import type { Message } from "@models/messages";
import { Link } from "react-router";

interface Props {
  message: Message;
}

const MessagePreview = ({ message }: Props) => (
  <Link to={`/messages/${message.author.id}`}>{message.author.name}</Link>
);

export default MessagePreview;
