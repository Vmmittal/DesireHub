import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin } from 'lucide-react';
import { User } from '../../types';
import { followUser, unfollowUser } from '../../services/api';
import toast from 'react-hot-toast';

interface UserCardProps {
  user: User;
}

const UserCard = ({ user }: UserCardProps) => {
  const [isFollowing, setIsFollowing] = useState(user.isFollowing);
  const [isLoading, setIsLoading] = useState(false);

  const handleFollowToggle = async () => {
    setIsLoading(true);
    try {
      if (isFollowing) {
        await unfollowUser(user.id);
        toast.success(`Unfollowed ${user.name}`);
      } else {
        await followUser(user.id);
        toast.success(`Following ${user.name}`);
      }
      setIsFollowing(!isFollowing);
    } catch (error) {
      toast.error('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white/5 rounded-lg overflow-hidden backdrop-blur-sm border border-gray-800 hover:border-pink-500/50 transition-colors">
      <Link to={`/profile/${user.id}`} className="block relative aspect-square">
        <img
          src={user.imageUrl}
          alt={user.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </Link>
      
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <Link to={`/profile/${user.id}`}>
            <h3 className="text-lg font-semibold hover:text-pink-500 transition-colors">
              {user.name}, {user.age}
            </h3>
          </Link>
          <button
            onClick={handleFollowToggle}
            disabled={isLoading}
            className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium transition-all ${
              isFollowing
                ? 'bg-pink-500/20 text-pink-500 hover:bg-pink-500/30'
                : 'bg-pink-500 text-white hover:bg-pink-600'
            }`}
          >
            <Heart className={`h-4 w-4 ${isFollowing ? 'fill-pink-500' : ''}`} />
            {isFollowing ? 'Following' : 'Follow'}
          </button>
        </div>
        
        <div className="flex items-center text-sm text-gray-400 mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          {user.location}
        </div>
        
        <p className="text-sm text-gray-300 line-clamp-2">{user.bio}</p>
        
        {user.interests && user.interests.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {user.interests.slice(0, 3).map((interest, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-300"
              >
                {interest}
              </span>
            ))}
            {user.interests.length > 3 && (
              <span className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-300">
                +{user.interests.length - 3}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCard;