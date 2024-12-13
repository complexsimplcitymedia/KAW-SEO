import { useState, useEffect } from 'react';
import { WINDOW_CONFIG } from '../constants';

interface WindowDimensions {
  width: number;
  height: number;
  left: number;
  top: number;
}

export function useWindowDimensions(): WindowDimensions {
  const [dimensions, setDimensions] = useState<WindowDimensions>({
    width: 0,
    height: 0,
    left: 0,
    top: 0
  });

  useEffect(() => {
    const calculateDimensions = () => {
      const width = Math.min(
        WINDOW_CONFIG.minWidth,
        window.innerWidth * WINDOW_CONFIG.widthRatio
      );
      const height = Math.min(
        WINDOW_CONFIG.minHeight,
        window.innerHeight * WINDOW_CONFIG.heightRatio
      );
      const left = (window.innerWidth - width) / 2;
      const top = (window.innerHeight - height) / 2;

      setDimensions({ width, height, left, top });
    };

    calculateDimensions();
    window.addEventListener('resize', calculateDimensions);
    return () => window.removeEventListener('resize', calculateDimensions);
  }, []);

  return dimensions;
}