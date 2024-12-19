import React from 'react';
import { Link } from 'react-router-dom';
import { UserPlus } from 'lucide-react';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

const Register = () => {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <UserPlus className="h-12 w-12 text-pink-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold">Create Account</h1>
          <p className="text-gray-400 mt-2">Join DesireHub and start connecting</p>
        </div>

        <Card>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-white/5 border border-gray-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-pink-500"
                placeholder="John Doe"
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
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full bg-white/5 border border-gray-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-pink-500"
                placeholder="••••••••"
              />
            </div>

            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-300 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                className="w-full bg-white/5 border border-gray-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-pink-500"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-800 bg-white/5 text-pink-500 focus:ring-pink-500"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-300">
                I agree to the{' '}
                <Link to="/terms" className="text-pink-500 hover:text-pink-400">
                  Terms of Service
                </Link>
                {' '}and{' '}
                <Link to="/privacy" className="text-pink-500 hover:text-pink-400">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <Button variant="primary" className="w-full">
              Create Account
            </Button>
          </form>
        </Card>

        <p className="mt-8 text-center text-gray-400">
          Already have an account?{' '}
          <Link to="/login" className="text-pink-500 hover:text-pink-400">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;