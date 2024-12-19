import React from 'react';
import { motion } from 'framer-motion';
import { Check, CheckCheck } from 'lucide-react';
import { Chat } from './types';

interface ChatPreviewProps {
  chat: any;
  index: number;
  onClick: () => void;
}

const ChatPreview = ({ chat, index, onClick }: ChatPreviewProps) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
      className="p-4 border-b border-gray-800 cursor-pointer transition-colors"
      onClick={onClick}
    >
      <div className="flex items-center gap-4">
        <motion.div 
          className="relative"
          whileHover={{ scale: 1.1 }}
        >
          <img
            src={chat.user.avatar}
            alt={chat.user.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          {chat.user.online && (
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900"></span>
          )}
        </motion.div>

        <div className="flex-1">
          <div className="flex justify-between items-start mb-1">
            <motion.h3 
              className="font-semibold"
              whileHover={{ color: '#ec4899' }}
            >
              {chat.user.name}
            </motion.h3>
            <span className="text-sm text-gray-400">{chat.timestamp}</span>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-400 truncate max-w-[200px]">
              {/* {chat.unread === 0 && (
                <CheckCheck className="inline-block h-4 w-4 mr-1 text-pink-500" />
              )}  */}
              {chat.lastMessage}
            </p>
            {chat.unread > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
              >
                {chat.unread}
              </motion.span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ChatPreview;