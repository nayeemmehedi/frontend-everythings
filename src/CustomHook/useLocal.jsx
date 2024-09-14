import { useState, useEffect } from 'react';

export const useLocal = (key, defaultValue = "") => {
  const [value, setValue] = useState(() => {
    // Initialize state with value from localStorage or defaultValue
    return localStorage.getItem(key) || defaultValue;
  });

  useEffect(() => {
    // Function to handle storage event (other tabs/windows)
    const handleStorageChange = () => {
      const storedValue = localStorage.getItem(key);
      if (storedValue) {
        setValue(storedValue);
      }
    };

    // Attach storage event listener
    window.addEventListener("storage", handleStorageChange);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [key]);

  // Update localStorage when value changes
  const setLocalStorageValue = (newValue) => {
    setValue(newValue);
    if (newValue) {
      localStorage.setItem(key, newValue);
    } else {
      localStorage.removeItem(key); // Clean up when no value is provided
    }
  };

  return [value, setLocalStorageValue];
};
