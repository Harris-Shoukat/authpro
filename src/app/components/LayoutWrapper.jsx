'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

const LayoutWrapper = ({ children }) => {
  const pathname = usePathname();

  // Define the paths where Navbar should NOT appear
  const hideNavbarPaths = ['/login', '/signup','/screens/login', '/screens/signup'];

  const shouldShowNavbar = !hideNavbarPaths.includes(pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      {children}
    </>
  );
};

export default LayoutWrapper;
