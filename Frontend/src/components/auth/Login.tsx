import React from 'react';
import { Lock } from 'lucide-react';
import Button from '../ui/Button';

interface LoginProps {
  onSwitchToRegister: () => void;
}

const Login = ({ onSwitchToRegister }: LoginProps) => {
  return (
    <div className="bg-gray-900 rounded-xl p-6 shadow-xl">
      <div className="text-center mb-8">
        <Lock className="h-12 w-12 text-pink-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
        <p className="text-gray-400 mt-2">Sign in to continue to DesireHub</p>
      </div>

      {/* Google Sign In Button */}
      <button className="w-full bg-white text-gray-900 px-4 py-3 rounded-lg mb-4 flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors">
        <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
        <span className="font-medium">Continue with Google</span>
      </button>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-700"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 text-gray-400 bg-gray-900">Or continue with</span>
        </div>
      </div>

      <form className="space-y-4">
        <div>
          <input
            type="email"
            placeholder="Email address"
            className="w-full bg-white/5 border border-gray-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-pink-500"
          />
        </div>
        
        <div>
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-white/5 border border-gray-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-pink-500"
          />
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-800 bg-white/5 text-pink-500 focus:ring-pink-500"
            />
            <label htmlFor="remember-me" className="ml-2 text-gray-300">
              Remember me
            </label>
          </div>
          <button className="text-pink-500 hover:text-pink-400">Forgot password?</button>
        </div>

        <Button variant="primary" className="w-full">
          Sign In
        </Button>
      </form>

      <p className="mt-6 text-center text-gray-400 text-sm">
        Don't have an account?{' '}
        <button onClick={onSwitchToRegister} className="text-pink-500 hover:text-pink-400">
          Sign up
        </button>
      </p>
    </div>
  );
};

export default Login;