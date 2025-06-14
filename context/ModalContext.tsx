"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import RequestModal from '@/components/RequestModal';

type ModalType = 'demo' | 'contact' | 'getStarted' | 'expert';

interface ModalContextType {
  openModal: (type: ModalType) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<ModalType>('contact');

  const openModal = (type: ModalType) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Modal will reset its state when closed through the isOpen prop
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <RequestModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        formType={modalType} 
      />
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}
