'use client';

import { useEffect, useState } from 'react';

import { ProModal } from './pro-modal';

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  // To prevent hydration mismatch, we don't render the modal on the server
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <ProModal />
    </>
  );
};
