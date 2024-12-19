import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface ProfileInfoProps {
  user: {
    bio: string;
    interests: string[];
  };
}

const ProfileInfo = ({ user }: ProfileInfoProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="mb-8"
    >
      <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm mb-6">
        <h2 className="text-xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-300">{user.bio}</p>
      </div>

      <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
        <h2 className="text-xl font-semibold mb-4">Interests</h2>
        <div className="flex flex-wrap gap-2">
          {user.interests.map((interest, index) => (
            <motion.span
              key={interest}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-pink-500/20 text-pink-500"
            >
              <Heart size={12} />
              {interest}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileInfo;