'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { label: 'Для бизнеса', href: '#' },
    { label: 'Скачать приложение', href: '#' },
    { label: 'Цифровой ID', href: '#' },
  ];

  const mobileLinks = [
    { label: 'Главная', href: '#' },
    { label: 'Для бизнеса', href: '#' },
    { label: 'Цифровой ID', href: '#' },
    { label: 'Помощь', href: '#' },
    { label: 'Скачать для компьютера', href: '#' },
    { label: 'Скачать для всех устройств', href: '#' },
  ];

  return (
    <>
      {/* Desktop & Mobile Header */}
      <header className={`nav-container ${isScrolled ? 'nav-scrolled' : ''}`}>
        <div className="nav-wrapper">
          <div className="nav-content">
            {/* Logo */}
            <a href="#" className="nav-logo">
              <div className="logo-icon">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="16" fill="white"/>
                  <path d="M16 8C12 8 9 11 9 15C9 19 12 22 16 24C20 22 23 19 23 15C23 11 20 8 16 8Z" fill="#2d2640"/>
                </svg>
              </div>
              <span className="logo-text">WispApp</span>
            </a>
            
            {/* Desktop Links */}
            <nav className="nav-links desktop-only">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="nav-link">
                  {link.label}
                </a>
              ))}
            </nav>
            
            {/* CTA with Sticker */}
            <div className="nav-cta-wrapper">
              <a href="#" className="nav-cta">
                Открыть веб-версию
              </a>
              <span className="sticker-soon">Скоро</span>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="menu-toggle mobile-only" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
        <div className="mobile-menu-header">
          <a href="#" className="nav-logo">
            <div className="logo-icon">
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="16" fill="white"/>
                <path d="M16 8C12 8 9 11 9 15C9 19 12 22 16 24C20 22 23 19 23 15C23 11 20 8 16 8Z" fill="#2d2640"/>
              </svg>
            </div>
            <span className="logo-text">WispApp</span>
          </a>
          <button className="menu-close" onClick={toggleMenu} aria-label="Close menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <nav className="mobile-menu-nav">
          {mobileLinks.map((link) => (
            <a key={link.label} href={link.href} className="mobile-menu-link" onClick={toggleMenu}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mobile-menu-footer">
          <span>MAX © 2026</span>
        </div>
      </div>

      {/* Overlay backdrop */}
      {isMenuOpen && <div className="menu-backdrop" onClick={toggleMenu}></div>}
    </>
  );
}