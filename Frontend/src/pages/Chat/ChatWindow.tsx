import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, ArrowLeft, Phone, Video, MoreVertical } from 'lucide-react';
import { Chat, Message } from './types';

interface ChatWindowProps {
  chat: Chat;
  onClose: () => void;
}

const mockMessages: Message[] = [
  {
    id: '1',
    senderId: 'other',
    text: 'Hey! How are you doing?',
    timestamp: '10:00 AM',
    status: 'read'
  },
  {
    id: '2',
    senderId: 'me',
    text: 'I\'m good! Just finished work. How about you?',
    timestamp: '10:02 AM',
    status: 'read'
  },
  {
    id: '3',
    senderId: 'other',
    text: 'Great! I was wondering if you\'d like to grab coffee sometime?',
    timestamp: '10:05 AM',
    status: 'read'
  }
];

const ChatWindow = ({ chat, onClose }: ChatWindowProps) => {
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState(mockMessages);

  const handleSend = () => {
    if (!newMessage.trim()) return;

    const newMsg: Message = {
      id: Date.now().toString(),
      senderId: 'me',
      text: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sent'
    };

    setMessages([...messages, newMsg]);
    setNewMessage('');
  };

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      className="fixed inset-0 bg-gray-900 z-50 lg:relative lg:flex-1"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        <div className="flex items-center gap-4">
          <button 
            onClick={onClose}
            className="lg:hidden p-2 hover:bg-white/5 rounded-full"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={chat.user.avatar}
                alt={chat.user.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              {chat.user.online && (
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900" />
              )}
            </div>
            <div>
              <h3 className="font-semibold">{chat.user.name}</h3>
              {/* <span className="text-sm text-gray-400">
                {chat.user.online ? 'Online' : 'Offline'}
              </span> */}
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-white/5 rounded-full">
            <Phone className="h-5 w-5" />
          </button>
          <button className="p-2 hover:bg-white/5 rounded-full">
            <Video className="h-5 w-5" />
          </button>
          <button className="p-2 hover:bg-white/5 rounded-full">
            <MoreVertical className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="h-[calc(100vh-8rem)] overflow-y-auto p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${message.senderId === 'me' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[70%] rounded-lg p-3 ${
                  message.senderId === 'me'
                    ? 'bg-pink-500 text-white'
                    : 'bg-white/5 text-white'
                }`}
              >
                <p>{message.text}</p>
                <div className="flex items-center justify-end gap-1 mt-1">
                  <span className="text-xs opacity-70">{message.timestamp}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-900 border-t border-gray-800">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 bg-white/5 border border-gray-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-pink-500"
          />
          <button
            type="submit"
            className="p-2 bg-pink-500 rounded-lg hover:bg-pink-600 transition-colors"
          >
            <Send className="h-5 w-5" />
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default ChatWindow;