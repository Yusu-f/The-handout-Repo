// AppContext.js
import React, { createContext, useContext, useState } from 'react';

// Create a context
const AppContext = createContext();

// Create a provider component
export function AppProvider({ children }) {
  const [appState, setAppState] = useState({
    showUploadModal: false
  });

  return (
    <AppContext.Provider value={{ appState, setAppState }}>
      {children}
    </AppContext.Provider>
  );
}

// Custom hook to use the context
export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
