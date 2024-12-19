import { useState, useCallback } from 'react';

export const useAuth = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalView, setAuthModalView] = useState<'login' | 'register'>('login');

  const openAuthModal = useCallback((view: 'login' | 'register') => {
    setAuthModalView(view);
    setIsAuthModalOpen(true);
  }, []);

  const closeAuthModal = useCallback(() => {
    setIsAuthModalOpen(false);
  }, []);

  return {
    isAuthModalOpen,
    authModalView,
    openAuthModal,
    closeAuthModal
  };
};