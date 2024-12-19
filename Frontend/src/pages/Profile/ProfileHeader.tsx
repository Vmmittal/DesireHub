import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Edit2 } from 'lucide-react';

interface ProfileHeaderProps {
  user: {
    name: string;
    age: number;
    location: string;
    imageUrl: string;
  };
}

const ProfileHeader = ({ user }: ProfileHeaderProps) => {
  return (
    <div className="relative mb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col sm:flex-row items-center gap-6"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative group"
        >
          <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-white ring-offset-4 ring-offset-gray-900">
            <img
              src={user.imageUrl}
              alt={user.name}
              className="w-full h-full object-cover"
            />
          </div>
          <button className="absolute bottom-0 right-0 p-2 bg-pink-500 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
            <Edit2 size={16} />
          </button>
        </motion.div>

        <div className="text-center sm:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold mb-2"
          >
            {user.name}, {user.age}
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center sm:justify-start text-gray-400 gap-2"
          >
            <MapPin size={16} className="text-pink-500" />
            <span>{user.location}</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfileHeader;