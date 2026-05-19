import type { Message } from "@models/messages";
import styles from "./MessagesPage.module.css";
import MessagesList from "./MessagesList/MessagesList";

const MessagesPage = () => {
  const FAKE_MESSAGES: Message[] = [
    {
      author: {
        id: "CH",
        name: "Courtney Henry",
        avatarSrc: "https://i.pravatar.cc/100?img=1",
      },
      text: "What time do you close?",
      sentTime: new Date(2026, 4, 17),
      isRead: false,
    },
    {
      author: {
        id: "KW",
        name: "Kristin Watson",
        avatarSrc: "https://i.pravatar.cc/100?img=2",
      },
      text: "thank you for the reminder!",
      sentTime: new Date(2026, 4, 10),
      isRead: true,
    },
    {
      author: {
        id: "DJ",
        name: "Devon Johnson",
        avatarSrc: "https://i.pravatar.cc/100?img=3",
      },
      text: "Can I reschedule for tomorrow afternoon?",
      sentTime: new Date(2026, 4, 18, 14, 24),
      isRead: false,
    },
    {
      author: {
        id: "AS",
        name: "Annette Simmons",
        avatarSrc: "https://i.pravatar.cc/100?img=4",
      },
      text: "Loved the session today 🙌",
      sentTime: new Date(2026, 4, 16, 19, 42),
      isRead: true,
    },
    {
      author: {
        id: "RF",
        name: "Ronald Fields",
        avatarSrc: "https://i.pravatar.cc/100?img=5",
      },
      text: "Hey, are you available this weekend?",
      sentTime: new Date(2026, 4, 15, 9, 12),
      isRead: true,
    },
    {
      author: {
        id: "BM",
        name: "Brooklyn Miller",
        avatarSrc: "https://i.pravatar.cc/100?img=6",
      },
      text: "I just sent through the payment.",
      sentTime: new Date(2026, 4, 14, 11, 3),
      isRead: true,
    },
    {
      author: {
        id: "TC",
        name: "Theresa Coleman",
        avatarSrc: "https://i.pravatar.cc/100?img=7",
      },
      text: "Do you have any spots left for next week?",
      sentTime: new Date(2026, 4, 13, 17, 58),
      isRead: false,
    },
    {
      author: {
        id: "EH",
        name: "Esther Howard",
        avatarSrc: "https://i.pravatar.cc/100?img=8",
      },
      text: "Thanks again! My son really enjoyed the class.",
      sentTime: new Date(2026, 4, 12, 20, 14),
      isRead: true,
    },
    {
      author: {
        id: "WL",
        name: "Wade Logan",
        avatarSrc: "https://i.pravatar.cc/100?img=9",
      },
      text: "Sorry, I might be 10 mins late.",
      sentTime: new Date(2026, 4, 11, 8, 51),
      isRead: false,
    },
    {
      author: {
        id: "GN",
        name: "Grace Nguyen",
        avatarSrc: "https://i.pravatar.cc/100?img=10",
      },
      text: "Could you send me the homework notes?",
      sentTime: new Date(2026, 4, 9, 16, 5),
      isRead: true,
    },
    {
      author: {
        id: "BM",
        name: "Brooklyn Miller",
        avatarSrc: "https://i.pravatar.cc/100?img=6",
      },
      text: "I just sent through the payment.",
      sentTime: new Date(2026, 4, 14, 11, 3),
      isRead: true,
    },
    {
      author: {
        id: "TC",
        name: "Theresa Coleman",
        avatarSrc: "https://i.pravatar.cc/100?img=7",
      },
      text: "Do you have any spots left for next week?",
      sentTime: new Date(2026, 4, 13, 17, 58),
      isRead: false,
    },
    {
      author: {
        id: "EH",
        name: "Esther Howard",
        avatarSrc: "https://i.pravatar.cc/100?img=8",
      },
      text: "Thanks again! My son really enjoyed the class.",
      sentTime: new Date(2026, 4, 12, 20, 14),
      isRead: true,
    },
    {
      author: {
        id: "WL",
        name: "Wade Logan",
        avatarSrc: "https://i.pravatar.cc/100?img=9",
      },
      text: "Sorry, I might be 10 mins late.",
      sentTime: new Date(2026, 4, 11, 8, 51),
      isRead: false,
    },
    {
      author: {
        id: "GN",
        name: "Grace Nguyen",
        avatarSrc: "https://i.pravatar.cc/100?img=10",
      },
      text: "Could you send me the homework notes?",
      sentTime: new Date(2026, 4, 9, 16, 5),
      isRead: true,
    },
    {
      author: {
        id: "BM",
        name: "Brooklyn Miller",
        avatarSrc: "https://i.pravatar.cc/100?img=6",
      },
      text: "I just sent through the payment.",
      sentTime: new Date(2026, 4, 14, 11, 3),
      isRead: true,
    },
    {
      author: {
        id: "TC",
        name: "Theresa Coleman",
        avatarSrc: "https://i.pravatar.cc/100?img=7",
      },
      text: "Do you have any spots left for next week?",
      sentTime: new Date(2026, 4, 13, 17, 58),
      isRead: false,
    },
    {
      author: {
        id: "EH",
        name: "Esther Howard",
        avatarSrc: "https://i.pravatar.cc/100?img=8",
      },
      text: "Thanks again! My son really enjoyed the class.",
      sentTime: new Date(2026, 4, 12, 20, 14),
      isRead: true,
    },
    {
      author: {
        id: "WL",
        name: "Wade Logan",
        avatarSrc: "https://i.pravatar.cc/100?img=9",
      },
      text: "Sorry, I might be 10 mins late.",
      sentTime: new Date(2026, 4, 11, 8, 51),
      isRead: false,
    },
    {
      author: {
        id: "GN",
        name: "Grace Nguyen2",
        avatarSrc: "https://i.pravatar.cc/100?img=10",
      },
      text: "Could you send me the homework notes?",
      sentTime: new Date(2026, 4, 9, 16, 5),
      isRead: true,
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
