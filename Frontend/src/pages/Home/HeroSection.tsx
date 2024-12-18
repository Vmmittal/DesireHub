import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
// import { TypeAnimation } from 'react-type-animation';
import ExampleComponent from './TypingAnimation';
import Typewriter from "typewriter-effect";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative w-full h-full"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black z-10" />
          <motion.img 
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Background"
            className="w-full h-full object-cover"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          />
        </motion.div>
      </div>

      {/* Floating Hearts Background */}
      <div className="absolute inset-0 z-1 overflow-hidden">
        <FloatingHearts />
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1,x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Heart className="h-16 w-16 text-pink-500 mx-auto mb-6" />
        </motion.div>  */}

        {/* <motion.h1 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500"
        >
          Where Fantasies Meet Reality
        </motion.h1> */}
        <div className="text-3xl sm:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
          <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Welcome to DesireHub")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Where Fantasies Meet Reality")
                        .start();
                }}
                
            /> 
        </div>
        <div className="text-lg sm:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
        <ExampleComponent />

        </div>
        
        {/* <motion.p 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
        >
          Join our global community and explore meaningful connections in a safe, secure environment.
        </motion.p> */}
        
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <Link 
            to="/register" 
            className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white text-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(236,72,153,0.5)]"
          >
            <span className="relative z-10">Start Free Trial</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
          
          <Link 
            to="/plans" 
            className="group px-8 py-4 rounded-full border-2 border-white text-white text-lg font-semibold transition-all duration-300 hover:border-pink-500 hover:text-pink-500 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]"
          >
            View Plans
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-white/30 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

// Floating Hearts Animation Component
const FloatingHearts = () => {
  const hearts = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 20 + 10,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 5 + 10
  }));

  return (
    <>
      {hearts.map(heart => (
        <motion.div
          key={heart.id}
          initial={{ y: '100vh', x: `${heart.left}vw`, opacity: 0 }}
          animate={{ 
            y: '-100vh',
            opacity: [0, 1, 1],
            x: `calc(${heart.left}vw + ${Math.sin(heart.id) * 100}px)`
          }}
          transition={{ 
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute text-pink-500/20"
        >
          <Heart size={heart.size} />
        </motion.div>
      ))}
    </>
  );
};

export default HeroSection;