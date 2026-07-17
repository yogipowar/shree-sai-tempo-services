import { useState } from 'react';
import { SERVICE_AREAS } from '../data/content';
import SectionHeading from '../components/SectionHeading';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './ServiceAreas.css';

export default function ServiceAreas() {
  const [activeArea, setActiveArea] = useState('Mumbai');
  const [ref, visible] = useScrollAnimation(0.15);

  return (
    <section id="service-areas" className="section">
      <div className="container">
        <SectionHeading
          label="Coverage"
          title="Service Areas"
          subtitle="Pan-India tempo and logistics services across major cities and beyond."
        />

        <div
          ref={ref}
          className={`service-areas fade-up ${visible ? 'visible' : ''}`}
        >
          <div className="service-areas__map">
            <svg viewBox="0 0 100 90" className="service-areas__svg" aria-label="India map highlighting service cities">
              <defs>
                <linearGradient id="mapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0B5ED7" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#FF7A00" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <path
                d="M35,8 L48,6 L58,12 L70,18 L78,28 L82,40 L78,48 L72,52 L68,58 L62,70 L55,82 L48,86 L42,80 L38,72 L32,78 L28,70 L30,58 L24,52 L18,48 L16,38 L20,28 L28,18 Z"
                fill="url(#mapGrad)"
                stroke="#0B5ED7"
                strokeWidth="0.5"
                strokeOpacity="0.3"
              />
              <ellipse cx="45" cy="48" rx="28" ry="32" fill="#0B5ED7" fillOpacity="0.08" stroke="#0B5ED7" strokeWidth="0.6" strokeDasharray="2,1" />
              {SERVICE_AREAS.map((area) => (
                <g key={area.name}>
                  <circle
                    cx={area.x}
                    cy={area.y}
                    r={activeArea === area.name ? 3 : 2}
                    fill={activeArea === area.name ? '#FF7A00' : '#0B5ED7'}
                    className="service-areas__dot"
                    onMouseEnter={() => setActiveArea(area.name)}
                    onFocus={() => setActiveArea(area.name)}
                    tabIndex={0}
                    role="button"
                    aria-label={area.name}
                  />
                  {activeArea === area.name && (
                    <text x={area.x} y={area.y - 4} textAnchor="middle" className="service-areas__label">
                      {area.name}
                    </text>
                  )}
                </g>
              ))}
            </svg>
            <p className="service-areas__tagline">Serving Pan-India</p>
          </div>

          <div className="service-areas__list">
            <h3>Cities We Cover</h3>
            <ul>
              {SERVICE_AREAS.map((area) => (
                <li key={area.name}>
                  <button
                    className={activeArea === area.name ? 'active' : ''}
                    onMouseEnter={() => setActiveArea(area.name)}
                    onFocus={() => setActiveArea(area.name)}
                    onClick={() => setActiveArea(area.name)}
                  >
                    <span className="service-areas__pin">📍</span>
                    {area.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
