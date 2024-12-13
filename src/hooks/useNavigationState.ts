import { useState, useEffect } from 'react';

export type Page = 
  | 'home'
  | 'services'
  | 'wrap-brands'
  | 'configurator'
  | 'pricing'
  | 'car-care'
  | 'gallery'
  | 'faq'
  | 'faqai'
  | 'about'
  | 'contact'
  | 'privacy';

export function useNavigationState() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isDark, setIsDark] = useState(true);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  useEffect(() => {
    const handleNavigation = (e: CustomEvent<Page>) => {
      setCurrentPage(e.detail);
    };

    window.addEventListener('navigate' as any, handleNavigation);
    return () => window.removeEventListener('navigate' as any, handleNavigation);
  }, []);

  return {
    currentPage,
    isDark,
    isAppointmentOpen,
    setCurrentPage,
    setIsDark,
    setIsAppointmentOpen
  };
}