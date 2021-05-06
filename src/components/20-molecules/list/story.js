import { text, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';

export default {
  title: 'Components',
  decorators: [withKnobs],
};

export const List = () => {
  const textknob = text('This is a knob', 'Value of text knob');

  const wrapper = document.createElement('div');
  // const template = html`
  //   <axa-list>${html([textknob])}</axa-list>
  // `;
  const template = html`
    <axa-list>
      <li>
        hello hello hello hello hello hello hello hello hello hello hello hello
        hello hello hello hello hello hello hello hello hello hello hello hello
        hello hello hello hello hello hello hello hello hello hello hello hello
        hello hello hello hello hello hello hello hello hello hello hello hello
        hello hello hello hello hello hello hello hello hello hello hello hello
        hello hello
      </li>
      <li>world</li>
    </axa-list>
    <axa-list variant="ordered">
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>hello</li>
      <li>
        world world world world world world world world world world world world
        world world world world world world world world world world world world
        world world world world world world world world world world world world
        world world world world world world world world world world world world
        world world world world world
      </li>
    </axa-list>
    <axa-list
      variant="icon"
      icon='<svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.79508 10.8749L1.62508 6.70492L0.205078 8.11492L5.79508 13.7049L17.7951 1.70492L16.3851 0.294922L5.79508 10.8749Z" fill="green"/></svg>'
    >
      <li>
        hello hello hello hello hello hello hello hello hello hello hello hello
        hello hello hello hello hello hello hello hello hello hello hello hello
        hello hello hello hello hello hello hello hello hello hello hello hello
        hello hello hello hello hello hello hello hello hello hello hello hello
        hello hello hello
      </li>
      <li>world</li>
    </axa-list>
    <axa-list variant="unstyled">
      <li>hello</li>
      <li>world</li>
    </axa-list>
  `;

  render(template, wrapper);
  return wrapper;
};
