import { text, select, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';
import changelog from './CHANGELOG.md';
import readme from './README.md';

export default {
  title: 'Components',
  decorators: [withKnobs],
  parameters: {
    readme,
    changelog,
  },
};

export const InputPhone = () => {
  const lang = select('lang', ['de', 'en', 'it', 'fr'], 'de');
  const label = text('label', 'Phone Number');
  const error = text('error', 'Invalid Phone Number');
  const countrycode = text('countrycode', '+41');
  const value = text('value', '');

  const wrapper = document.createElement('div');
  const template = html`
    <axa-input-phone
      lang="${lang}"
      label="${label}"
      error="${error}"
      countrycode="${countrycode}"
      value="${value}"
    ></axa-input-phone>
  `;

  render(template, wrapper);
  return wrapper;
};
