import React from 'react';
import { motion } from 'framer-motion';
import ChatPreview from './ChatPreview';
import { MessageSquare } from 'lucide-react';
import { Chat } from './types';

const mockChats: Chat[] = [
  {
    id: '1',
    user: {
      name: 'Ravi Kumar',
      avatar: 'https://cdn.dnaindia.com/sites/default/files/2024/01/16/2623166-shakti-kapoor-1.jpg?im=FitAndFill=(1200,900)',
      online: true
    },
    lastMessage: 'Hey! How are you doing?',
    timestamp: '2 min ago',
    unread: 2
  },
  {
    id: '2',
    user: {
      name: 'Vipul',
      avatar: 'https://images.news18.com/webstories/uploads/2024/07/FotoJet-2024-07-29T120355.501-2024-07-6087bd9151cfb6a8d27083ae2a98605e.jpg  ',
      online: false
    },
    lastMessage: 'The meeting went great!',
    timestamp: '1 hour ago',
    unread: 0
  },
  {
    id: '3',
    user: {
      name: 'Pratham',
      avatar: 'https://static-gi.asianetnews.com/images/01j6ewkaa79m1hjchr0xmnxm23/Shakti-Kapoor-Sting-Operation-Casting-Couch-Case11-1724929124679.jpg?impolicy=Q-50&im=Resize=(420,746)',
      online: true
    },
    lastMessage: 'Looking forward to our date 😊',
    timestamp: '3 hours ago',
    unread: 1
  }
];

interface ChatListProps {
  onChatSelect: (chat: Chat) => void;
}

const ChatList = ({ onChatSelect }: ChatListProps) => {
  return (
    <div className="max-w-2xl mx-auto bg-white/5 rounded-xl backdrop-blur-sm">
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-pink-500" />
            Messages
          </h2>
          <span className="text-sm text-gray-400">{mockChats.length} conversations</span>
        </div>
        <input
          type="text"
          placeholder="Search conversations..."
          className="w-full bg-white/5 border border-gray-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-pink-500"
        />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {mockChats.map((chat, index) => (
          <ChatPreview 
            key={chat.id} 
            chat={chat} 
            index={index}
            onClick={() => onChatSelect(chat)}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ChatList;