import React from 'react';
import { motion } from 'framer-motion';

interface ProfileStatsProps {
  stats: {
    followers: number;
    following: number;
    posts: number;
  };
}

const ProfileStats = ({ stats }: ProfileStatsProps) => {
  const statItems = [
    { label: 'Posts', value: stats.posts },
    { label: 'Followers', value: stats.followers },
    { label: 'Following', value: stats.following },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="grid grid-cols-3 gap-4 mb-8"
    >
      {statItems.map((item, index) => (
        <motion.div
          key={item.label}
          whileHover={{ scale: 1.05 }}
          className="bg-white/5 rounded-lg p-4 text-center backdrop-blur-sm"
        >
          <div className="text-2xl font-bold text-pink-500">{item.value}</div>
          <div className="text-sm text-gray-400">{item.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProfileStats;