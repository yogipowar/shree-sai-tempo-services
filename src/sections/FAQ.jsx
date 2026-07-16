import { useState } from 'react';
import { FAQ_ITEMS } from '../data/content';
import SectionHeading from '../components/SectionHeading';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './FAQ.css';

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
      <button
        className="faq-item__question"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <span className="faq-item__icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
      </button>
      <div className="faq-item__answer" role="region">
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [ref, visible] = useScrollAnimation(0.15);

  return (
    <section id="faq" className="section">
      <div className="container">
        <SectionHeading
          label="FAQ"
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our tempo services."
        />

        <div
          ref={ref}
          className={`faq fade-up ${visible ? 'visible' : ''}`}
        >
          {FAQ_ITEMS.map((item, index) => (
            <FAQItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
