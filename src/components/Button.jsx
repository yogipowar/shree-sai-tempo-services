import './Button.css';

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  type = 'button',
  className = '',
  ariaLabel,
}) {
  const classes = `btn btn--${variant} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel}>
        <span className="btn__ripple" />
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} aria-label={ariaLabel}>
      <span className="btn__ripple" />
      {children}
    </button>
  );
}
