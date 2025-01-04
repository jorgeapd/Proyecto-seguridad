'use client'

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa6';

interface FloatingButtonProps {
  onClick?: () => void;
  icon?: React.ReactNode;
  phoneNumber: string;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ onClick, icon, phoneNumber }) => {

  const handleClick = () => {
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(url, '_blank');
  }

  return (
    <div
      className='bg-green-600 w-12 h-12 p-3 rounded-full fixed bottom-6 right-4 cursor-pointer md:right-8 md:w-16 md:h-16 shadow-lg flex items-center justify-center'
      onClick={onClick || handleClick}
    >
      {icon || <FaWhatsapp color='white' className='w-6 h-6 md:w-8 md:h-8' />}
    </div>
  );
}

export default FloatingButton;