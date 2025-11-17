'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import devSculptLogo from '../../public/assets/dev-sculpt.svg';

interface HeaderProps {
  hideGetStarted?: boolean;
}

const Header = ({ hideGetStarted = false }: HeaderProps) => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Services', path: '/services' },
    { name: 'Process', path: '/process' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="w-full bg-white border-b-[0.2px] border-[#130f78] rounded-tl-[11px] rounded-tr-[11px] sticky top-0 z-[1000]">
      <div className="max-w-[1728px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-2 sm:py-2.5 lg:py-3 flex items-center justify-between gap-4 sm:gap-6 md:gap-8 lg:gap-12">
        <Link href="/" className="flex-shrink-0">
          <Image
            src={devSculptLogo}
            alt="Dev Sculpt"
            width={48}
            height={48}
            className="w-12 h-12 object-contain transition-transform duration-200 hover:scale-105"
            priority
          />
        </Link>

        <nav className="hidden sm:flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 flex-1 justify-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.path || (link.path === '/about-us' && pathname?.startsWith('/about-us')) || (link.path === '/services' && pathname?.startsWith('/services')) || (link.path === '/process' && pathname?.startsWith('/process'));
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
        className={`sm:hidden w-full bg-white border-t-[0.2px] border-[#130f78] shadow-lg overflow-hidden transition-[max-height,opacity] duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isMobileMenuOpen 
            ? 'max-h-[600px] opacity-100 pointer-events-auto' 
            : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col px-4 gap-3 py-4">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.path || (link.path === '/about-us' && pathname?.startsWith('/about-us')) || (link.path === '/services' && pathname?.startsWith('/services')) || (link.path === '/process' && pathname?.startsWith('/process'));
            if (link.path.startsWith('/#')) {
              return (
                <a
                  key={link.name}
                  href={link.path}
                  className={`text-base font-medium font-lato transition-all duration-300 ease-out py-3 border-b border-[#f0f0f0] last:border-b-0 hover:pl-2 hover:bg-[#f8f8f8] ${
                    isActive 
                      ? 'text-[#130f78] font-semibold bg-[#f0f0f8]' 
                      : 'text-black hover:text-[#130f78]'
                  } ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}
                  style={{ transitionDelay: `${index * 60}ms` }}
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
                className={`text-base font-medium font-lato transition-all duration-300 ease-out py-3 border-b border-[#f0f0f0] last:border-b-0 hover:pl-2 hover:bg-[#f8f8f8] ${
                  isActive 
                    ? 'text-[#130f78] font-semibold bg-[#f0f0f8]' 
                    : 'text-black hover:text-[#130f78]'
                } ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}
                style={{ transitionDelay: `${index * 60}ms` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
          {!hideGetStarted && (
            <button 
              type="button"
              className={`bg-[#daff35] text-[#130f78] border-none rounded-[4px] px-5 py-3 text-lg font-bold font-lato cursor-pointer transition-all duration-300 ease-out mt-2 hover:bg-[#c4ef00] hover:shadow-md active:scale-95 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}
              style={{ transitionDelay: `${navLinks.length * 60}ms` }}
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
