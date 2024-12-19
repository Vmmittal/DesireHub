export interface User {
  id?: string;
  name: string;
  avatar: string;
  online: boolean;
}

export interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
  status: 'sent' | 'delivered' | 'read';
}

export interface Chat {
  id: string;
  user: User;
  lastMessage: string;
  timestamp: string;
  unread: number;
  messages?: Message[];
}