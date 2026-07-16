import SectionHeading from '../components/SectionHeading';
import SafeImage from '../components/SafeImage';
import { IMAGES } from '../data/images';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './About.css';

export default function About() {
  const [ref, visible] = useScrollAnimation(0.15);

  return (
    <section id="about" className="section">
      <div className="container">
        <div
          ref={ref}
          className={`about fade-up ${visible ? 'visible' : ''}`}
        >
          <div className="about__image">
            <SafeImage
              src={IMAGES.about}
              fallback={IMAGES.fallback}
              alt="Indian truck transporting goods on national highway"
            />
            <div className="about__experience">
              <strong>10+</strong>
              <span>Years of Experience</span>
            </div>
          </div>

          <div className="about__content">
            <SectionHeading
              label="About Us"
              title="Your Trusted Logistics Partner in Pune"
              subtitle=""
            />
            <div className="about__text">
              <p>
                Shree Sai Tempo Services is a leading transportation and logistics company based in Pune,
                Maharashtra. With years of experience serving individuals and businesses, we have built a
                reputation for reliability, affordability, and professional service.
              </p>
              <p>
                Our fleet of well-maintained tempos and trucks, combined with experienced drivers and
                24×7 customer support, ensures your goods reach their destination safely and on time —
                every time.
              </p>
            </div>
            <ul className="about__features">
              <li>Licensed &amp; Insured Operations</li>
              <li>Pan-Pune Coverage</li>
              <li>Transparent Pricing</li>
              <li>Dedicated Customer Support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
