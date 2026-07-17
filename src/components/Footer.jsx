import { NAV_LINKS, SERVICES, CONTACT_INFO, telHref } from '../data/content';
import { IMAGES } from '../data/images';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <a href="#home" className="footer__logo">
              <img src={IMAGES.logo} alt="Shree Sai Tempo Services" className="footer__logo-img" />
            </a>
            <p className="footer__tagline">Delivering Trust, On Time.</p>
            <p className="footer__desc">
              Trusted tempo and logistics services pan-India. Fast, reliable, and affordable transportation for all your needs.
            </p>
            <div className="footer__social">
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Instagram">in</a>
              <a href="#" aria-label="Twitter">𝕏</a>
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                W
              </a>
            </div>
          </div>

          <div className="footer__col">
            <h4>Quick Links</h4>
            <ul>
              {NAV_LINKS.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4>Services</h4>
            <ul>
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.title}>
                  <a href="#services">{service.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4>Contact</h4>
            <ul className="footer__contact">
              <li>{CONTACT_INFO.address}</li>
              <li>
                <a href={telHref(CONTACT_INFO.tollFree)}>Toll Free: {CONTACT_INFO.tollFree}</a>
              </li>
              <li>
                <a href={telHref(CONTACT_INFO.phone)}>{CONTACT_INFO.phone}</a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
              </li>
              <li>GSTIN: {CONTACT_INFO.gst}</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {currentYear} Shree Sai Tempo Services. All rights reserved.</p>
          <p>Serving Pan-India</p>
        </div>
      </div>
    </footer>
  );
}
