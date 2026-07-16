import { useState } from 'react';
import { SERVICE_AREAS } from '../data/content';
import SectionHeading from '../components/SectionHeading';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './ServiceAreas.css';

export default function ServiceAreas() {
  const [activeArea, setActiveArea] = useState('Pune');
  const [ref, visible] = useScrollAnimation(0.15);

  return (
    <section id="service-areas" className="section">
      <div className="container">
        <SectionHeading
          label="Coverage"
          title="Service Areas"
          subtitle="Serving Pune & nearby areas with fast, reliable tempo services."
        />

        <div
          ref={ref}
          className={`service-areas fade-up ${visible ? 'visible' : ''}`}
        >
          <div className="service-areas__map">
            <svg viewBox="0 0 100 80" className="service-areas__svg" aria-label="Maharashtra map highlighting Pune region">
              <defs>
                <linearGradient id="mapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0B5ED7" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#FF7A00" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <path
                d="M15,10 L85,8 L92,25 L88,45 L75,60 L55,72 L30,68 L12,50 L8,30 Z"
                fill="url(#mapGrad)"
                stroke="#0B5ED7"
                strokeWidth="0.5"
                strokeOpacity="0.3"
              />
              <ellipse cx="42" cy="52" rx="18" ry="14" fill="#0B5ED7" fillOpacity="0.12" stroke="#0B5ED7" strokeWidth="0.8" strokeDasharray="2,1" />
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
            <p className="service-areas__tagline">Serving Pune &amp; Nearby Areas</p>
          </div>

          <div className="service-areas__list">
            <h3>Areas We Cover</h3>
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
