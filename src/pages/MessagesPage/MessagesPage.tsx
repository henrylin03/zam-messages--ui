import styles from "./MessagesPage.module.css";
import MessagesList from "./MessagesList/MessagesList";

const MessagesPage = () => {
  return (
    <main className={styles.main}>
      {/* expandable drawer */}
      <nav>m</nav>

      <MessagesList messages={[]} />

      {/* currently opened message */}
      <section>Brooklyn Simmons</section>
    </main>
  );
};

export default MessagesPage;
