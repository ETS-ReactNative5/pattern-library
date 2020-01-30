import { html, css, unsafeCSS } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

/* eslint-disable import/no-extraneous-dependencies */
import '@axa-ch/icon';

import { applyDefaults } from '../../../utils/with-react';
import defineOnce from '../../../utils/define-once';
import buttonCSS from './index.scss';
import childStyles from './child.scss';
import InlineStyles from '../../../utils/inline-styles';

const ARROW_RIGHT = 'arrow-right';

// eslint-disable-next-line no-undef
const isNativeShadowDOM = (window || global).ShadowRoot ? ShadowRoot.toString().indexOf('native code') > -1 : false;

// @TODO: REMOVE ONCE IE11 is deprecated!!!!
// equivalent to event.isTrusted. Unfortunately, IE11 does not support it
const eventIsTrusted = e => e.screenX || e.screenY || e.clientX || e.clientY;

class AXAButton extends InlineStyles {
  static get tagName() {
    return 'axa-button';
  }

  static get styles() {
    return css`
      ${unsafeCSS(buttonCSS)}
    `;
  }

  // Parent class InlineStyles needs a static method to retrive styles
  // name of such method is passed when calling: this.inlineStyles('resetHeadingCss');
  static get blockMouseEventsCss() {
    return childStyles;
  }

  static get properties() {
    return {
      // button, submit, reset
      type: { type: String, reflect: true, defaultValue: 'button' },
      // secondary, red,  inverted, inverted-blue-ocean, inverted-red-tosca, inverted-purple-logan, inverted-green-viridian, inverted-blue-teal
      variant: { type: String },
      icon: { type: String },
      size: { type: String },
      motionOff: { type: Boolean },
      disabled: { type: Boolean, reflect: true },
    };
  }

  constructor() {
    super();
    applyDefaults(this);
  }

  get isTypeSubmitOrReset() {
    return this.type === 'submit' || this.type === 'reset';
  }

  get showIcon() {
    return this.icon && this.icon !== ARROW_RIGHT;
  }

  get showArrow() {
    return this.icon === ARROW_RIGHT;
  }

  firstUpdated() {
    this.inlineStyles('blockMouseEventsCss');

    const { style } = this;

    // shadow dom submit btn workaround
    // only use fakeButton when shadowDom is natively supported
    if (isNativeShadowDOM && this.isTypeSubmitOrReset) {
      const fakeButton = document.createElement('button');
      fakeButton.type = this.type;
      fakeButton.style.display = 'none';
      this.appendChild(fakeButton);

      this.fakeButton = fakeButton;
    }

    style.appearance = 'none';
    style.mozAppearance = 'none';
    style.webkitAppearance = 'none';
    style.msAppearance = 'none';
    style.oAppearance = 'none';

    if (typeof this.onclick === 'function') {
      // cache original event so that we can fire it when internal button is pressed
      // We are going to override original event so that someone can manually trigger
      // onclick via function call
      this.originalOnclick = this.onclick;
    }

    // If someone fires a click on the button and its type is submit then trigger fake button
    // press
    this.onclick = e => {
      // call handle click and pass flag to be sure that handle click does not call
      // us back.
      this.handleClick(e, true);
    };
  }

  handleClick = (e, eventIsManuallyFunctionTriggered = false) => {
    // block propagation if event is not synthetic. We need only that
    // the event coming from fake button is fired so that default
    // form behaviour works (submit, reset, etc). The reason why it works with fake button is
    // that fake button is NOT inside a ShadowDOM. The event instead
    // bubbles out of ShadowDOM, hence the stop propagation trick
    if (eventIsTrusted(e) && isNativeShadowDOM && this.isTypeSubmitOrReset) {
      e.stopPropagation();
      this.fakeButton.click();
    }

    // If we are under react, onClick will be camel Case onClick. If so, use it
    // otherwise if a consumer defined a onclick="fn", call that instead
    const onclick = this.onClick || this.originalOnclick;

    // if click event is fired manually via javascript, the this.onclick = e => { function
    // will be called and therefore make sure to not trigger it again.
    if (!eventIsManuallyFunctionTriggered && typeof onclick === 'function') {
      onclick(e);
    }
  };

  render() {
    const {
      type,
      motionOff,
      disabled,
      variant = '',
      icon = '',
      size = '',
    } = this;

    const classes = {
      'a-button': true,
      'a-button--large': size === 'large',
      'a-button--small': size === 'small',
      'a-button--motion': !motionOff,
      'a-button--secondary': variant === 'secondary',
      'a-button--red': variant === 'red',
      'a-button--inverted': variant.includes('inverted'),
      'a-button--inverted-blue-ocean': variant === 'inverted-blue-ocean',
      'a-button--inverted-red-tosca': variant === 'inverted-red-tosca',
      'a-button--inverted-purple-logan': variant === 'inverted-purple-logan',
      'a-button--inverted-green-viridian':
        variant === 'inverted-green-viridian',
      'a-button--inverted-blue-teal': variant === 'inverted-blue-teal',
    };

    return html`
      <button
        type="${type}"
        class="${classMap(classes)}"
        ?disabled="${disabled}"
        @click="${this.handleClick}"
      >
        <span class="a-button__flex-wrapper">
          ${this.showIcon
            ? html`
                <axa-icon class="a-button__icon" icon="${icon}"></axa-icon>
              `
            : ''}
          <slot></slot>
          ${this.showArrow
            ? html`
                <axa-icon class="a-button__arrow" icon="arrow-right"></axa-icon>
              `
            : ''}
        </span>
      </button>
    `;
  }
}

defineOnce(AXAButton.tagName, AXAButton);

export default AXAButton;
