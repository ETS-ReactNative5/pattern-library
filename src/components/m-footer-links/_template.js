import bel from 'bel';
import chunk from '../../js/array-chunk';

export default function ({ title, items, cols = 1 }) {
  return bel`<div class="m-footer-links__block">
    <strong class="m-footer-links__category">${title}</strong>

    <div class="m-footer-links__cols m-footer-links__cols-${cols}">
      ${chunk(items, cols).map(col => bel`
        <ul class="m-footer-links__list">
          ${col.map(({ name, url }) => bel`
            <li class="m-footer-links__list-item">
              <a class="m-footer-links__link" href="${url}">${name}</a>
            </li>
          `)}
        </ul>
      `)}
    </div>
  </div>`;
}
