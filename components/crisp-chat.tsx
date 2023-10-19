'use client';

import { useEffect } from 'react';
import { Crisp } from 'crisp-sdk-web';

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('162683ec-19e9-4b3e-929b-8208808c1995');
  }, []);

  return null;
};
