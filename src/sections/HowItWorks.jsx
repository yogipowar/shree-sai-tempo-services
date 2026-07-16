import { HOW_IT_WORKS } from '../data/content';
import SectionHeading from '../components/SectionHeading';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './HowItWorks.css';

export default function HowItWorks() {
  const [ref, visible] = useScrollAnimation(0.15);

  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          label="Process"
          title="How It Works"
          subtitle="Book your tempo in 5 simple steps — fast, easy, and hassle-free."
        />

        <div
          ref={ref}
          className={`timeline fade-up ${visible ? 'visible' : ''}`}
        >
          {HOW_IT_WORKS.map((step, index) => (
            <div key={step.step} className="timeline__step">
              <div className="timeline__icon">
                <span className="timeline__emoji">{step.icon}</span>
                <span className="timeline__number">{step.step}</span>
              </div>
              <h3 className="timeline__title">{step.title}</h3>
              {index < HOW_IT_WORKS.length - 1 && (
                <div className="timeline__connector" aria-hidden="true">
                  <span className="timeline__arrow">↓</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
