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
    emailjs.init({
      publicKey: '9VaiECe9UQ02-2pZi',
      limitRate: {
        // Optional rate limiting
        throttle: 2000, // 2 seconds
      },
    });
  }, []);

  return <>{children}</>;
} 