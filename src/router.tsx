import { createBrowserRouter, redirect } from "react-router";
import LandingPage from "./pages/LandingPage";
import MessagesPage from "./pages/MessagesPage/MessagesPage";
import { FAKE_MESSAGES } from "./data/fakeData";

const routes = [
  {
    path: "/",
    element: <LandingPage />,
  },

  {
    path: "/messages",
    children: [
      {
        index: true,
        Component: MessagesPage,
        loader: () => {
          // get latest message ID - this would be await fetch when we have backend
          const latestMessageId = FAKE_MESSAGES[0].author.id;
          if (latestMessageId) return redirect(`/messages/${latestMessageId}`);
        },
      },
      { path: ":chatId", Component: MessagesPage },
    ],
  },
];

export const router = createBrowserRouter(routes);
