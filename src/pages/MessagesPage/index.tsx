import type { Message } from "@models/messages";
import styles from "./MessagesPage.module.css";
import MessagesList from "./MessagesList";

const MessagesPage = () => {
  const FAKE_MESSAGES: Message[] = [
    {
      author: {
        id: "CH",
        name: "Courtney Henry",
        avatarSrc: "https://i.pravatar.cc/100",
      },
      text: "What time do you close?",
      sentTime: new Date(2026, 4, 17),
      isRead: false,
    },
  ];

  return (
    <main className={styles.main}>
      {/* expandable drawer */}
      <nav>m</nav>

      <MessagesList messages={FAKE_MESSAGES} />

      {/* currently opened message */}
      <section>Brooklyn Simmons</section>
    </main>
  );
};

export default MessagesPage;
