import { useState } from 'react';
import { CONTACT_INFO, DIRECTOR, telHref } from '../data/content';
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
          subtitle="Book your vehicle or ask us anything — we're here 24×7 across India."
        />

        <div
          ref={ref}
          className={`contact fade-up ${visible ? 'visible' : ''}`}
        >
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-head">
              <h3>Book a Vehicle</h3>
              <p>Share pickup &amp; drop details — we&apos;ll confirm quickly.</p>
            </div>

            <div className="contact__row">
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
            </div>

            <div className="contact__row">
              <div className="contact__field">
                <label htmlFor="pickup">Pickup Location</label>
                <input
                  type="text"
                  id="pickup"
                  name="pickup"
                  value={formData.pickup}
                  onChange={handleChange}
                  required
                  placeholder="City / address for pickup"
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
                  placeholder="City / address for drop"
                />
              </div>
            </div>

            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={12}
                placeholder="Any special instructions..."
              />
            </div>

            <Button type="submit" variant="orange" className="contact__submit">
              {submitted ? 'Request Sent ✓' : 'Book Request'}
            </Button>
          </form>

          <div className="contact__aside">
            <div className="contact__map">
              <iframe
                title="Shree Sai Tempo Services location on Google Maps"
                src="https://maps.google.com/maps?q=Shivaji+Nagar+Pune+Maharashtra&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="contact__panel">
              <div className="contact__quick">
                <a className="contact__quick-item" href={telHref(CONTACT_INFO.tollFree)}>
                  <span className="contact__quick-label">Toll Free</span>
                  <strong>{CONTACT_INFO.tollFree}</strong>
                </a>
                <a className="contact__quick-item" href={telHref(CONTACT_INFO.phone)}>
                  <span className="contact__quick-label">Phone</span>
                  <strong>{CONTACT_INFO.phone}</strong>
                </a>
                <a className="contact__quick-item" href={`mailto:${CONTACT_INFO.email}`}>
                  <span className="contact__quick-label">Email</span>
                  <strong>{CONTACT_INFO.email}</strong>
                </a>
                <div className="contact__quick-item contact__quick-item--static">
                  <span className="contact__quick-label">Hours</span>
                  <strong>24×7 Available</strong>
                </div>
              </div>

              <div className="contact__meta">
                <div>
                  <span>Head Office</span>
                  <p>{CONTACT_INFO.address}</p>
                </div>
                <div className="contact__meta-row">
                  <div>
                    <span>GSTIN</span>
                    <p>{CONTACT_INFO.gst}</p>
                  </div>
                  <div>
                    <span>Director</span>
                    <p>
                      {DIRECTOR.name}
                      <em>{DIRECTOR.title}</em>
                    </p>
                  </div>
                </div>
              </div>

              <div className="contact__actions">
                <Button
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                  variant="whatsapp"
                  className="contact__action-btn"
                >
                  WhatsApp Us
                </Button>
                <Button
                  href={telHref(CONTACT_INFO.tollFree)}
                  variant="secondary"
                  className="contact__action-btn"
                >
                  Call Toll Free
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
