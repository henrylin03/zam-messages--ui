import type { User } from "./user";

export type Message = {
  author: User;
  text: string;
  sentTime: Date;
  isRead: boolean;
};