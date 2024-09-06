'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Package, Share2, Menu, X } from 'lucide-react';

const Sidebar = () => {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Inventory', href: '/inventory', icon: Package },
    { name: 'Promotion', href: '/promotion', icon: Share2 },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  if (isMobile) {
    return (
      <>
        <nav className={`fixed inset-0 bg-white z-20 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
          <div className="p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">SuperteamMY GO</h1>
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-md hover:bg-gray-100"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <ul className="mt-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className={`flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 ${pathname === item.href ? 'bg-gray-200' : ''}`} onClick={() => setIsOpen(false)}>
                  <item.icon className="w-5 h-5 mr-2" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-10 p-2 bg-white rounded-md shadow-md"
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button> */}
        <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg md:hidden">
          <ul className="flex justify-around">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className={`flex flex-col items-center p-2 text-gray-700 hover:bg-gray-100 ${pathname === item.href ? 'text-blue-500' : ''}`}>
                  <item.icon className="w-6 h-6" />
                  <span className="text-xs mt-1">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </>
    );
  }

  return (
    <nav className="hidden md:block w-64 bg-white shadow-lg h-screen">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-800">SuperteamMY GO</h1>
      </div>
      <ul className="mt-4">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link href={item.href} className={`flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 ${pathname === item.href ? 'bg-gray-200' : ''}`}>
              <item.icon className="w-5 h-5 mr-2" />
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;