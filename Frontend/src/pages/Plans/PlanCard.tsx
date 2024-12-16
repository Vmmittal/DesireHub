import React from 'react';
import { Check } from 'lucide-react';
import Button from '../../components/ui/Button';
import { Plan } from '../../types';
import AuthModal from '../../components/auth/AuthModal';

import { useAuth } from '../../components/auth/hooks/useAuth';

interface PlanCardProps {
  plan: Plan;
}

const PlanCard = ({ plan }: PlanCardProps) => {
   const { isAuthModalOpen, authModalView, openAuthModal, closeAuthModal } = useAuth();
  return (
    <div className={`relative ${plan.popular ? 'border-2 border-pink-500' : 'border border-gray-800'} rounded-xl p-6`}>
      {plan.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-pink-500 text-white px-4 py-1 rounded-full text-sm">
          Most Popular
        </span>
      )}
      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold">${plan.price}</span>
        <span className="text-gray-400">/{plan.duration}</span>
      </div>
      <ul className="space-y-3 mb-6">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="h-5 w-5 text-pink-500" />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <Button onClick={() => openAuthModal('login')} variant={plan.popular ? 'primary' : 'secondary'} className="w-full">
        Get Started
      </Button>
       <AuthModal
        isOpen={isAuthModalOpen}
        onClose={closeAuthModal}
        initialView={authModalView}
      />
    </div>
  );
};

export default PlanCard;