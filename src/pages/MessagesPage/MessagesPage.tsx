import styles from "./MessagesPage.module.css";
import MessagesList from "./MessagesList/MessagesList";
import { FAKE_MESSAGES } from "@/data/fakeData";

const MessagesPage = () => (
  <main className={styles.main}>
    {/* expandable drawer */}
    <nav>m</nav>

    <MessagesList messages={FAKE_MESSAGES} />

    {/* currently opened message */}
    <section>Brooklyn Simmons</section>
  </main>
);

export default MessagesPage;
