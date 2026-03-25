'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './header.module.css';

const navLinks = [
  { label: 'Возможности', href: '#features' },
  { label: 'Скачать', href: '#download' },
  { label: 'О нас', href: '#about' },
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

  return (
    <header className={styles.container} ref={menuRef}>
      <nav className={styles.nav}>
        <a href="/" className={styles.logo}>
          <div className={styles.logoIcon}>
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 12 L28 22 L24 32 L20 22 L24 12 Z" fill="url(#gradW)"/>
              <path d="M32 18 L36 28 L32 38 L28 28 L32 18 Z" fill="url(#gradW)" opacity="0.7"/>
              <path d="M16 18 L20 28 L16 38 L12 28 L16 18 Z" fill="url(#gradW)" opacity="0.7"/>
              <defs>
                <linearGradient id="gradW" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00d4ff"/>
                  <stop offset="100%" stopColor="#a855f7"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className={styles.logoText}>
            <span className={styles.bold}>Wisp</span>
            <span className={styles.light}>App</span>
          </div>
        </a>
        
        <div className={styles.navLinks}>
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
          <a href="#" className={styles.btnPrimary}>Войти</a>
        </div>
        
        <button 
          className={styles.menuButton} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </nav>

      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
        {navLinks.map((link) => (
          <a key={link.label} href={link.href} className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>
            {link.label}
          </a>
        ))}
        <a href="#" className={styles.btnPrimary}>Войти</a>
      </div>
    </header>
  );
}
