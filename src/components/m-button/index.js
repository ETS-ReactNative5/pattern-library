import styles from './index.scss';
import template from './_template';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import wcdomready from '../../js/wcdomready';
import Button from './js/button';

class AXAButton extends BaseComponentGlobal {
  static get observedAttributes() { return ['arrow', 'classes', 'color', 'ghost', 'motion', 'size', 'tag', 'url']; }

  constructor() {
    super(styles, template);
  }

  didRenderCallback() {
    if (this.button) {
      this.button.destroy();
    }

    this.button = new Button(this);
  }

  disconnectedCallback() {
    if (this.button) {
      this.button.destroy();
      delete this.button;
    }
  }
}

wcdomready(() => {
  window.customElements.define('axa-button', AXAButton);

  BaseComponentGlobal.appendGlobalStyles(styles);
});

export default AXAButton;
