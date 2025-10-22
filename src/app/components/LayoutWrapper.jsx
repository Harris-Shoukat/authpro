'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

const LayoutWrapper = ({ children }) => {
  const pathname = usePathname();

  const showNavbar = 
  pathname !== '/login' && pathname !== '/signup';

  return (
    <>
      {showNavbar && <Navbar/>}
      {children}
    </>
  );
};

export default LayoutWrapper;
