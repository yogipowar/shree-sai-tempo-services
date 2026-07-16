import { useState } from 'react';
import { CONTACT_INFO } from '../data/content';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickup: '',
    drop: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [ref, visible] = useScrollAnimation(0.15);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', phone: '', pickup: '', drop: '', message: '' });
  };

  return (
    <section id="contact" className="section section--light">
      <div className="container">
        <SectionHeading
          label="Contact"
          title="Get In Touch"
          subtitle="Book your tempo or ask us anything — we're here 24×7."
        />

        <div
          ref={ref}
          className={`contact fade-up ${visible ? 'visible' : ''}`}
        >
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__field">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
            </div>
            <div className="contact__field">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+91 98765 43210"
              />
            </div>
            <div className="contact__field">
              <label htmlFor="pickup">Pickup Location</label>
              <input
                type="text"
                id="pickup"
                name="pickup"
                value={formData.pickup}
                onChange={handleChange}
                required
                placeholder="Enter pickup address"
              />
            </div>
            <div className="contact__field">
              <label htmlFor="drop">Drop Location</label>
              <input
                type="text"
                id="drop"
                name="drop"
                value={formData.drop}
                onChange={handleChange}
                required
                placeholder="Enter drop address"
              />
            </div>
            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Any special instructions..."
              />
            </div>
            <Button href="#contact" variant="orange">
              {submitted ? 'Request Sent ✓' : 'Book Request'}
            </Button>
          </form>

          <div className="contact__info">
            <div className="contact__map">
              <iframe
                title="Shree Sai Tempo Services location on Google Maps"
                src="https://maps.google.com/maps?q=Shivaji+Nagar+Pune+Maharashtra&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="contact__details">
              <div className="contact__detail">
                <span className="contact__detail-icon">📍</span>
                <div>
                  <strong>Address</strong>
                  <p>{CONTACT_INFO.address}</p>
                </div>
              </div>
              <div className="contact__detail">
                <span className="contact__detail-icon">📞</span>
                <div>
                  <strong>Phone</strong>
                  <p>
                    <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}>
                      {CONTACT_INFO.phone}
                    </a>
                  </p>
                </div>
              </div>
              <div className="contact__detail">
                <span className="contact__detail-icon">✉️</span>
                <div>
                  <strong>Email</strong>
                  <p>
                    <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
                  </p>
                </div>
              </div>
              <div className="contact__detail">
                <span className="contact__detail-icon">🕐</span>
                <div>
                  <strong>Working Hours</strong>
                  <p>{CONTACT_INFO.hours}</p>
                </div>
              </div>
              <Button
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                variant="whatsapp"
                className="contact__whatsapp"
              >
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
