'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  hideGetStarted?: boolean;
}

const Header = ({ hideGetStarted = false }: HeaderProps) => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Services', path: '/#services' },
    { name: 'Process', path: '/#process' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <header className="w-full bg-white border-b-[0.2px] border-[#130f78] rounded-tl-[11px] rounded-tr-[11px] sticky top-0 z-[1000]">
      <div className="max-w-[1728px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-2 sm:py-2.5 lg:py-3 flex items-center justify-between gap-4 sm:gap-6 md:gap-8 lg:gap-12">
        <div className="flex-shrink-0">
          <Link href="/">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#130f78] rounded-[4px] flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-105">
              <span className="text-white text-lg md:text-xl font-bold font-lato tracking-tight">DS</span>
            </div>
          </Link>
        </div>

        <nav className="hidden sm:flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 flex-1 justify-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.path || (link.path === '/about-us' && pathname?.startsWith('/about-us'));
            if (link.path.startsWith('/#')) {
              return (
                <a
                  key={link.name}
                  href={link.path}
                  className={`text-sm sm:text-base md:text-lg font-semibold font-lato transition-colors duration-200 relative py-2 whitespace-nowrap ${
                    isActive 
                      ? 'text-[#130f78]' 
                      : 'text-black hover:text-[#130f78]'
                  }`}
                >
                  {link.name}
                </a>
              );
            }
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`text-sm sm:text-base md:text-lg font-semibold font-lato transition-colors duration-200 relative py-2 whitespace-nowrap ${
                  isActive 
                    ? 'text-[#130f78]' 
                    : 'text-black hover:text-[#130f78]'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="sm:hidden relative w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 z-[1001] bg-[#130f78] hover:bg-[#0d0b5a] cursor-pointer active:scale-95"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsMobileMenuOpen(prev => !prev);
          }}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <div className="w-6 h-6 relative flex flex-col justify-center items-center pointer-events-none">
            <span className={`absolute w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
            }`}></span>
            <span className={`absolute w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
            }`}></span>
            <span className={`absolute w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
            }`}></span>
          </div>
        </button>

        {!hideGetStarted && (
          <div className="flex-shrink-0 hidden sm:block">
            <button className="bg-[#daff35] text-[#130f78] border-none rounded-[4px] px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-2.5 lg:px-6 lg:py-3 text-sm sm:text-base md:text-lg font-bold font-lato cursor-pointer transition-all duration-200 whitespace-nowrap hover:bg-[#c4ef00] hover:-translate-y-0.5 hover:shadow-[0_4px_8px_rgba(218,255,53,0.3)] active:translate-y-0">
              Get Started
            </button>
          </div>
        )}
      </div>

      <div 
        className={`sm:hidden w-full bg-white border-t-[0.2px] border-[#130f78] shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-[600px] opacity-100' 
            : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col px-4 gap-3 py-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.path || (link.path === '/about-us' && pathname?.startsWith('/about-us'));
            if (link.path.startsWith('/#')) {
              return (
                <a
                  key={link.name}
                  href={link.path}
                  className={`text-base font-medium font-lato transition-all duration-200 py-3 border-b border-[#f0f0f0] last:border-b-0 hover:pl-2 hover:bg-[#f8f8f8] ${
                    isActive 
                      ? 'text-[#130f78] font-semibold bg-[#f0f0f8]' 
                      : 'text-black hover:text-[#130f78]'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              );
            }
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`text-base font-medium font-lato transition-all duration-200 py-3 border-b border-[#f0f0f0] last:border-b-0 hover:pl-2 hover:bg-[#f8f8f8] ${
                  isActive 
                    ? 'text-[#130f78] font-semibold bg-[#f0f0f8]' 
                    : 'text-black hover:text-[#130f78]'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
          {!hideGetStarted && (
            <button 
              type="button"
              className="bg-[#daff35] text-[#130f78] border-none rounded-[4px] px-5 py-3 text-lg font-bold font-lato cursor-pointer transition-all duration-200 mt-2 hover:bg-[#c4ef00] hover:shadow-md active:scale-95"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
