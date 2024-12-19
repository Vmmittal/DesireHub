import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ChatList from './ChatList';
import ChatWindow from './ChatWindow';
import { Chat } from './types';

const AllChats = () => {
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex gap-6">
          <div className={`${selectedChat ? 'hidden lg:block lg:w-96' : 'w-full'}`}>
            <ChatList onChatSelect={setSelectedChat} />
          </div>
          {selectedChat && (
            <ChatWindow 
              chat={selectedChat} 
              onClose={() => setSelectedChat(null)} 
            />
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default AllChats;