import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Modal from '../ui/Modal';
import Login from './Login';
import Register from './Register';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialView?: 'login' | 'register';
}

const AuthModal = ({ isOpen, onClose, initialView = 'login' }: AuthModalProps) => {
  const [view, setView] = useState<'login' | 'register'>(initialView);

  return (
    <AnimatePresence>
      <Modal isOpen={isOpen} onClose={onClose}>
        {view === 'login' ? (
          <Login onSwitchToRegister={() => setView('register')} />
        ) : (
          <Register onSwitchToLogin={() => setView('login')} />
        )}
      </Modal>
    </AnimatePresence>
  );
};

export default AuthModal;