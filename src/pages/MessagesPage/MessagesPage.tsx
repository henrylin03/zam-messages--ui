import styles from "./MessagesPage.module.css";
import MessagesList from "./MessagesList/MessagesList";
import { FAKE_MESSAGES } from "@/data/fakeData";
import { useParams } from "react-router";
import ChatSection from "./ChatSection";

const MessagesPage = () => {
  const { chatId } = useParams();
  const message = FAKE_MESSAGES.find((message) => message.author.id === chatId);

  return (
    <main className={styles.main}>
      {/* expandable drawer */}
      <nav>m</nav>

      <MessagesList messages={FAKE_MESSAGES} />

      {/* currently opened message */}
      <ChatSection chatId={chatId} chatName={message?.author.name} />
    </main>
  );
};

export default MessagesPage;
