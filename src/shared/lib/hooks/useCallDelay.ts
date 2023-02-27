import React, { useEffect } from "react";

export function useCallDelay(fn: () => void, delay: number, deps: any[]) {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fn();
    }, delay);
    return () => clearTimeout(timeoutId);
  }, deps);
}
