'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { getAllContent } from '../lib/contentful';
import LoadingSpinner from '../components/LoadingSpinner';

const ContentContext = createContext();

export function ContentProvider({ children }) {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchContent() {
      try {
        setLoading(true);
        setError(null);

        const contentData = await getAllContent();
        setContent(contentData);
      } catch (err) {
        setError(err.message);
        console.error('Failed to fetch content:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchContent();
  }, []);

  const refetch = async () => {
    try {
      setLoading(true);
      setError(null);
      const contentData = await getAllContent();
      setContent(contentData);
    } catch (err) {
      setError(err.message);
      console.error('Failed to refetch content:', err);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    content,
    loading,
    error,
    refetch,
  };

  if (loading) {
    return <LoadingSpinner text='Loading...' />;
  }

  if (error) throw new Error(error);

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
