import styles from "./MessagesPage.module.css";
import MessagesList from "./MessagesList/MessagesList";
import { FAKE_MESSAGES } from "@/data/fakeData";
import { useParams } from "react-router";

const MessagesPage = () => {
  const { chatId } = useParams();

  return (
    <main className={styles.main}>
      {/* expandable drawer */}
      <nav>m</nav>

      <MessagesList messages={FAKE_MESSAGES} />

      {/* currently opened message */}
      <section>THIS IS MESSAGESPAGE - {chatId} </section>
    </main>
  );
};

export default MessagesPage;
