'use client';

import React, { useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function EmailJSProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init('9VaiECe9UQ02-2pZi');
  }, []);

  return <>{children}</>;
} 