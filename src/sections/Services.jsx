import { SERVICES } from '../data/content';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Services.css';

export default function Services() {
  const [ref, visible] = useScrollAnimation(0.1);

  return (
    <section id="services" className="section section--light">
      <div className="container">
        <SectionHeading
          label="Our Services"
          title="Complete Transportation Solutions"
          subtitle="From local deliveries to industrial logistics, we handle every transport need with care and professionalism."
        />

        <div
          ref={ref}
          className={`services__grid fade-up ${visible ? 'visible' : ''}`}
        >
          {SERVICES.map((service, index) => (
            <article
              key={service.title}
              className="service-card"
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <span className="service-card__icon" aria-hidden="true">
                {service.icon}
              </span>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.description}</p>
              <Button href="#contact" variant="secondary" className="btn--sm service-card__btn">
                Learn More
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
