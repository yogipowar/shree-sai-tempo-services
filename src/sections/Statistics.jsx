import { STATS } from '../data/content';
import { useScrollAnimation, useCounter } from '../hooks/useScrollAnimation';
import './Statistics.css';

function StatItem({ value, suffix, label, start }) {
  const count = useCounter(value, 2000, start);

  return (
    <div className="stat-item">
      <span className="stat-item__value">
        {count}
        {suffix}
      </span>
      <span className="stat-item__label">{label}</span>
    </div>
  );
}

export default function Statistics() {
  const [ref, visible] = useScrollAnimation(0.2);

  return (
    <section className="statistics section">
      <div className="container">
        <div
          ref={ref}
          className={`statistics__grid fade-up ${visible ? 'visible' : ''}`}
        >
          {STATS.map((stat) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              start={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
