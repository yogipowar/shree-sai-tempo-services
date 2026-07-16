import { WHY_CHOOSE_US } from '../data/content';
import { IMAGES } from '../data/images';
import SectionHeading from '../components/SectionHeading';
import SafeImage from '../components/SafeImage';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './WhyChooseUs.css';

export default function WhyChooseUs() {
  const [ref, visible] = useScrollAnimation(0.15);

  return (
    <section id="why-us" className="section section--light">
      <div className="container">
        <SectionHeading
          label="Why Choose Us"
          title="Why Shree Sai Tempo Services?"
          subtitle="We go the extra mile to ensure your goods are transported safely, quickly, and affordably."
        />

        <div
          ref={ref}
          className={`why-us fade-up ${visible ? 'visible' : ''}`}
        >
          <div className="why-us__visual">
            <SafeImage
              src={IMAGES.whyUs}
              fallback={IMAGES.fallback}
              alt="Tata Ace tempo for commercial goods transport in India"
            />
            <div className="why-us__overlay">
              <span>📦</span>
              <span>🚚</span>
              <span>✅</span>
            </div>
          </div>

          <div className="why-us__features">
            {WHY_CHOOSE_US.map((feature, index) => (
              <div
                key={feature}
                className="why-us__card"
                style={{ transitionDelay: `${index * 0.06}s` }}
              >
                <span className="why-us__check">✔</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
