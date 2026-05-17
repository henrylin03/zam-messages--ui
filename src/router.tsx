import { createBrowserRouter } from "react-router";
import LandingPage from "./pages/LandingPage";
import MessagesPage from "./pages/MessagesPage";

const routes = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/messages",
    element: <MessagesPage />,
  },
];

export const router = createBrowserRouter(routes);
