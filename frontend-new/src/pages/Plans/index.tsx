import React from 'react';
import { motion } from 'framer-motion';
import PlanCard from './PlanCard';
import { Plan } from '../../types';

const Plans = () => {
  const plans: Plan[] = [
    {
      id: 'free',
      name: 'Free Trial',
      price: 0,
      duration: '7 days',
      features: [
        '10 Free Messages',
        'Browse Profiles',
        'Basic Match Suggestions',
        'Limited Chat Access'
      ]
    },
    {
      id: 'basic',
      name: 'Basic',
      price: 5,
      duration: 'month',
      features: [
        'Unlimited Messages',
        'Advanced Match Suggestions',
        'Full Chat Access',
        'Photo Sharing'
      ],
      popular: true
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 10,
      duration: 'month',
      features: [
        'All Basic Features',
        'Video Chat',
        'Priority Support',
        'Profile Highlighting',
        'Read Receipts'
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
          <p className="text-xl text-gray-400">
            Find the perfect plan for your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <PlanCard plan={plan} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plans;