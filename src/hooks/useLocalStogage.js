import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue) {
  const [currentValue, newValue] = useState(
    JSON.parse(localStorage.getItem(key)) || initialValue,
  );
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(currentValue));
  }, [currentValue, key]);
  return [currentValue, newValue];
}
