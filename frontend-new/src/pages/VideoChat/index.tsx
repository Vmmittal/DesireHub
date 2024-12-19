import React from 'react';
import { Video } from 'lucide-react';
import Card from '../../components/ui/Card';

const VideoChat = () => {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <Video className="h-16 w-16 text-pink-500 mx-auto mb-6" />
        <h1 className="text-4xl font-bold mb-4">Video Chat Coming Soon</h1>
        <p className="text-xl text-gray-400 mb-8">
          Our video chat feature is currently under development. Check back soon!
        </p>
        <Card className="max-w-2xl mx-auto">
          <p className="text-gray-300">
            The video chat feature will include HD video calls, screen sharing, and
            advanced privacy controls to ensure a safe and enjoyable experience.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default VideoChat;