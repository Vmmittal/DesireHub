import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, MessageCircle, User, Compass } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-black/95 text-white z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-pink-500" />
            <span className="text-xl font-bold">DesireHub</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`hover:text-pink-500 transition ${isActive('/') ? 'text-pink-500' : ''}`}>
              Home
            </Link>
            <Link to="/explore" className={`hover:text-pink-500 transition ${isActive('/explore') ? 'text-pink-500' : ''}`}>
              Explore
            </Link>
            <Link to="/plans" className={`hover:text-pink-500 transition ${isActive('/plans') ? 'text-pink-500' : ''}`}>
              Plans
            </Link>
            <Link to="/chat" className={`hover:text-pink-500 transition ${isActive('/chat') ? 'text-pink-500' : ''}`}>
              Chat
            </Link>
            <Link to="/video" className={`hover:text-pink-500 transition ${isActive('/video') ? 'text-pink-500' : ''}`}>
              Video
            </Link>
            <Link to="/contact" className={`hover:text-pink-500 transition ${isActive('/contact') ? 'text-pink-500' : ''}`}>
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link 
              to="/explore" 
              className={`md:hidden p-2 hover:bg-pink-500/10 rounded-full transition ${isActive('/explore') ? 'text-pink-500' : ''}`}
            >
              <Compass className="h-6 w-6" />
            </Link>
            <Link to="/messages" className="p-2 hover:bg-pink-500/10 rounded-full transition">
              <MessageCircle className="h-6 w-6" />
            </Link>
            <Link to="/profile" className="p-2 hover:bg-pink-500/10 rounded-full transition">
              <User className="h-6 w-6" />
            </Link>
            <Link to="/login" className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;