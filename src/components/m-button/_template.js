import html from 'nanohtml';
import raw from 'nanohtml/raw';
import classnames from 'classnames';

export default function ({
  tag = 'button',
  color,
  url = '#',
  size,
  ghost,
  classes,
  motion,
  gpu,
  arrow,
}, childrenFragment) {
  const buttonClasses = classnames('m-button', 'js-button', classes, {
    [`m-button--${color}`]: color,
    [`m-button--${size}`]: size,
    'm-button--ghost': ghost,
    'm-button--motion': motion,
    'm-button--gpu': gpu,
    'm-button--arrow': arrow,
  });

  const arrowIcon = raw('<axa-icon icon="arrow" classes="m-button__arrow"></axa-icon>');

  if (tag.toLowerCase() === 'a') {
    return html`<a href="${url}" class="${buttonClasses}">
      ${childrenFragment}
      ${arrow && arrowIcon}
    </a>`;
  }

  return html`<button type="button" class="${buttonClasses}">
      ${childrenFragment}
      ${arrow && arrowIcon}
    </button>`;
}
