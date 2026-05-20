import { createBrowserRouter } from "react-router";
import LandingPage from "./pages/LandingPage";
import MessagesPage from "./pages/MessagesPage/MessagesPage";

const routes = [
  {
    path: "/",
    element: <LandingPage />,
  },

  {
    path: "messages",
    children: [
      { index: true, Component: MessagesPage },
      { path: ":chatId", Component: MessagesPage },
    ],
  },
];

export const router = createBrowserRouter(routes);
