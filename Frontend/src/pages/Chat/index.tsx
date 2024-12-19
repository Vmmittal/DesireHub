import React from 'react';
import { MessageCircle } from 'lucide-react';
import Card from '../../components/ui/Card';

const Chat = () => {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <MessageCircle className="h-16 w-16 text-pink-500 mx-auto mb-6" />
        <h1 className="text-4xl font-bold mb-4">Chat Coming Soon</h1>
        <p className="text-xl text-gray-400 mb-8">
          Our chat feature is currently under development. Check back soon!
        </p>
        <Card className="max-w-2xl mx-auto">
          <p className="text-gray-300">
            The chat feature will include real-time messaging, photo sharing, and end-to-end encryption
            to ensure your conversations remain private and secure.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Chat;