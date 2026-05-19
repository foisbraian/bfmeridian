import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

export function Navbar() {
  const { t, i18n } = useTheme() ? useTranslation() : useTranslation(); // ensure hook order
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'pt' : 'es';
    i18n.changeLanguage(newLang);
  };

  const navLinks = [
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.methodology'), href: '#methodology' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="container flex justify-between items-center navbar-content">
        <a href="#" className="logo">
          <svg className="logo-svg" viewBox="0 0 376 200" fill="currentColor">
            <path fillRule="evenodd" clipRule="evenodd" d="M 376 0 L 50 0 A 50 50 0 0 0 50 100 A 50 50 0 0 0 50 200 L 226 200 L 226 125 L 360 125 L 360 75 L 226 75 L 226 50 L 376 50 Z M 176 50 L 87.5 50 A 12.5 12.5 0 0 0 87.5 75 L 176 75 Z M 176 125 L 87.5 125 A 12.5 12.5 0 0 0 87.5 150 L 176 150 Z" />
          </svg>
          <span className="logo-meridian">MERIDIAN</span>
        </a>

        {/* Desktop Menu */}
        <div className="desktop-menu flex items-center gap-8">
          <ul className="flex items-center gap-8 nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="nav-link">{link.name}</a>
              </li>
            ))}
          </ul>
          <div className="actions flex items-center gap-4">
            <button onClick={toggleLanguage} className="icon-btn" aria-label="Toggle language">
              <Globe size={20} />
              <span className="lang-text">{i18n.language.toUpperCase()}</span>
            </button>
            <button onClick={toggleTheme} className="icon-btn" aria-label="Toggle theme">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-toggle icon-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu glass-panel">
          <ul className="flex-col gap-4 p-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="nav-link mobile-link"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="flex justify-between items-center pt-4 border-t">
              <button onClick={toggleLanguage} className="icon-btn flex items-center gap-2">
                <Globe size={20} />
                <span>{i18n.language === 'es' ? 'Português' : 'Español'}</span>
              </button>
              <button onClick={toggleTheme} className="icon-btn">
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
