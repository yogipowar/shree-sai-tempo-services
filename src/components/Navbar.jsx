import { useState, useEffect } from 'react';
import { NAV_LINKS } from '../data/content';
import { IMAGES } from '../data/images';
import { useNavbarScroll } from '../hooks/useScrollAnimation';
import Button from './Button';
import './Navbar.css';

export default function Navbar() {
  const scrolled = useNavbarScroll();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollY);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${menuOpen ? 'navbar--menu-open' : ''}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__logo" onClick={closeMenu}>
          <img src={IMAGES.logo} alt="Shree Sai Tempo Services" className="navbar__logo-img" />
        </a>

        <button
          className={`navbar__toggle ${menuOpen ? 'navbar__toggle--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`} aria-label="Main navigation">
        <ul className="navbar__links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <Button href="#contact" variant="orange" className="navbar__cta" onClick={closeMenu}>
          Book Now
        </Button>
      </nav>
    </header>
  );
}
