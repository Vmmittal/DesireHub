import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

const Contact = () => {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <Mail className="h-16 w-16 text-pink-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-400">
            We're here to help! Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <Card>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-white/5 border border-gray-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-pink-500"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-white/5 border border-gray-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-pink-500"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full bg-white/5 border border-gray-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-pink-500"
                placeholder="Your message..."
              />
            </div>

            <Button variant="primary" className="w-full">
              Send Message
            </Button>
          </form>
        </Card>

        <div className="mt-12 text-center">
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <MessageSquare className="h-5 w-5" />
            <span>Typical response time: 24 hours</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;