import React from 'react';
import { motion } from 'framer-motion';
import ProfileHeader from './ProfileHeader';
import ProfileInfo from './ProfileInfo';
import ProfileGallery from './ProfileGallery';
import ProfileStats from './ProfileStats';
import { MessageCircle } from 'lucide-react';
import Card from '../../components/ui/Card';
import { Heart, User } from 'lucide-react';


// Mock user data (replace with actual user data from your backend)
const userData = {
  id: '1',
  name: 'John',
  age: 28,
  location: 'New York, USA',
  bio: 'Adventure seeker, coffee lover, and hopeless romantic. Looking for genuine connections and meaningful conversations.',
  imageUrl: 'https://images-cdn.ubuy.co.in/63de81f7e8d54d0e2d5362e2-lad-studio-johnny-sins-is-thinking-about.jpg',
  stats: {
    followers: 1234,
    following: 567,
    posts: 42
  },
  interests: ['Travel', 'Photography', 'Music', 'Food', 'Art'],
  gallery: [
    'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'
  ]
};

const Profile = () => {
  const isProfile = false;
  return (
    isProfile ? (
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* <MessageCircle className="h-16 w-16 text-pink-500 mx-auto mb-6" /> */}
         <User className="h-16 w-16 text-pink-500 mx-auto mb-6" />

        <h1 className="text-4xl font-bold mb-4">Profile Coming Soon</h1>
        <p className="text-xl text-gray-400 mb-8">
          Profile currently under development. Check back soon!
        </p>
        {/* <Card className="max-w-2xl mx-auto">
          <p className="text-gray-300">
            The chat feature will include real-time messaging, photo sharing, and end-to-end encryption
            to ensure your conversations remain private and secure.
          </p>
        </Card> */}
      </div>
    </div>
    ):
      <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-16"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProfileHeader user={userData} />
        {/* <ProfileStats stats={userData.stats} /> */}
        <ProfileInfo user={userData} />
        <ProfileGallery images={userData.gallery} />
      </div>
    </motion.div>
  );
};

export default Profile;