import { useState, useEffect } from 'react';

const useLocalStorage = (localStorageKey, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = localStorage.getItem(localStorageKey);

      return value ? JSON.parse(value) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(storedValue));
  }, [storedValue, localStorageKey]);

  return { storedValue, setStoredValue };
};

export default useLocalStorage;
