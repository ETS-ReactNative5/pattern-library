import {boolean, radios, text, withKnobs} from '@storybook/addon-knobs';
import withNoBorder from '../../../../.storybook/addons/no-border';
import { html, render } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import './index';
import readme from './README.md';
import changelog from './CHANGELOG.md';

export default {
  title: 'Components/Notification',
  decorators: [withNoBorder, withKnobs],
  parameters: {
    readme,
    changelog,
  },
};

const ctxInverted = {
  'Success (default)': 'success',
  Informative: 'informative',
  Attention: 'attention',
  Error: 'error',
};

export const Notification = () => {
  const notifText = text('Text', 'In addition to cookies which are necessary for the proper functioning of websites, subject to your preferences, we use data or cookies on your browser');
  const contexts = radios('Level', ctxInverted, 'success');
  const buttontext = text('buttontext', 'Schaden melden');
  const buttonlink = text(
    'Button link',
    'https://axa.ch/de/informationen/datenschutz.html'
  );
  const noIcon = boolean(
    'no icon',
    false
  );

  const wrapper = document.createElement('div');

  const template = html`
    <axa-notification context="${contexts}" buttontext="${buttontext}" buttonlink="${buttonlink}" ?noicon="${noIcon}" >
      ${unsafeHTML(notifText)}
    </axa-notification>
    <h1>Real heading</h1>
    <h1>Heading</h1>
    <h2>Subheading</h2>
    <p>Lorem ipsum</p>
    <h2>Subheading</h2>
    <p>Lorem ipsum</p>
    <h2>Subheading</h2>
    <p>Lorem ipsum</p>
    <h2>Subheading</h2>
    <p>Lorem ipsum</p>
    <h2>Subheading</h2>
    <p>Lorem ipsum</p>
  `;
  render(template, wrapper);
  return wrapper;
};
