'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './header.module.css';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Feature', href: '#' },
  { label: 'Support', href: '#' },
  { label: 'Marketplace', href: '#' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={styles.container} ref={menuRef}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <a href="/" className={styles.logo}>
            <div className={styles.logoIcon}>
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="8" fill="#22c55e"/>
                <path d="M8 16L14 22L24 10" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className={styles.logoText}>Tarulata</span>
          </a>
          
          <nav className={styles.nav}>
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className={styles.link}>
                {link.label}
              </a>
            ))}
          </nav>
          
          <div className={styles.ctaWrapper}>
            <a href="#" className={styles.ctaOutline}>Get started</a>
            <a href="#" className={styles.ctaFilled}>Get started</a>
            
            <button 
              className={styles.menuButton} 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="3" y1="12" x2="21" y2="12"/>
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <line x1="3" y1="18" x2="21" y2="18"/>
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <div className={styles.mobileMenuHeader}>
            <a href="/" className={styles.logo} onClick={() => setIsMenuOpen(false)}>
              <div className={styles.logoIcon}>
                <svg viewBox="0 0 32 32" fill="none" width="32" height="32">
                  <rect width="32" height="32" rx="8" fill="#22c55e"/>
                  <path d="M8 16L14 22L24 10" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className={styles.logoText}>Tarulata</span>
            </a>
            <button className={styles.menuButton} onClick={() => setIsMenuOpen(false)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
          <nav className={styles.mobileNav}>
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className={styles.mobileFooter}>
            <a href="#" className={styles.ctaOutline}>Get started</a>
            <a href="#" className={styles.ctaFilled}>Get started</a>
          </div>
        </div>
      </div>
    </header>
  );
}
