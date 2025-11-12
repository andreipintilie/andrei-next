'use client';

import { createContext, useContext, useState } from 'react';

const ContentContext = createContext();

export function ContentProvider({ children, initialContent }) {
  const [content] = useState(initialContent ?? null);
  const loading = false;
  const error = null;

  const value = {
    content,
    loading,
    error,
    refetch: undefined,
  };

  return (
    <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
}
