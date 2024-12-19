import React from 'react';
import { Heart, Instagram, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black/95 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-6 w-6 text-pink-500" />
              <span className="text-xl font-bold">DesireHub</span>
            </div>
            <p className="text-gray-400">Where Fantasies Meet Reality. Connect, share, and explore in a safe and secure environment.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-pink-500 transition">About Us</Link></li>
              <li><Link to="/plans" className="text-gray-400 hover:text-pink-500 transition">Plans</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-pink-500 transition">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-pink-500 transition">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-gray-400 hover:text-pink-500 transition">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-pink-500 transition">Contact Us</Link></li>
              <li><Link to="/help" className="text-gray-400 hover:text-pink-500 transition">Help Center</Link></li>
              <li><Link to="/safety" className="text-gray-400 hover:text-pink-500 transition">Safety Tips</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-pink-500 transition">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} DesireHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;