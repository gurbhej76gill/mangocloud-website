import React from 'react';

export default function RouterArchitectsLink({
  variant = 'inline',
  className = '',
  ...props
}) {
  const classNames = ['router-architects-link'];
  if (variant === 'pill' || variant === 'button' || variant === 'footer') {
    classNames.push('router-architects-pill');
  }
  if (variant === 'button') {
    classNames.push('button', 'button--primary', 'button--sm');
  }
  if (variant === 'footer') {
    classNames.push('button', 'button--secondary', 'button--lg', 'router-architects-footer');
  }
  if (variant === 'footer') {
    classNames.push('button', 'button--outline', 'button--lg');
  }
  if (className) {
    classNames.push(className);
  }
  return (
    <a
      className={classNames.join(' ')}
      href="https://www.routerarchitects.com"
      target="_blank"
      rel="noopener noreferrer"
      {...props}>
      Router Architects
    </a>
  );
}
