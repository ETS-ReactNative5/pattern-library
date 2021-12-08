import { css, html, unsafeCSS } from 'lit-element';
import { defineVersioned } from '../../../utils/component-versioning';
import styles from './index.scss';
import { applyDefaults } from '../../../utils/with-react';
import InlineStyles from '../../../utils/inline-styles';
import childStyles from './child.scss';

const elTagName = 'axa-notification';

class AXANotification extends InlineStyles {

  static get tagName() {
    return elTagName;
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  static get properties() {
    return {
      ntype: { type: String },
      context: { type: String },
      buttontext: { type: String },
      buttonlink: { type: String },
      noicon: { type: Boolean },
    };
  }

  static get childStyles() {
    return childStyles;
  }

  firstUpdated() {
    this.inlineStyles('childStyles');
  }

  constructor() {
    super();
    applyDefaults(this);

    document.onclick = (e) => {
      if (e.target.tagName.toLowerCase() !== elTagName) {
        this.onClose();
      }
    };
  }

  handleButtonClick() {
    location.href = this.buttonlink;
  }

  getIcon(ctx) {
    if (!ctx) {
      return null;
    }

    const contextsInverted = {
      success: 'check',
      informative: 'info-outline',
      attention: 'cloud-queue',
      error: 'warning',
    };
    return contextsInverted[ctx];
  }

  onClose() {
    const notifContent = this.shadowRoot.querySelector(
      '.a-notif'
    );

    notifContent.style.maxHeight = 0;
    setTimeout(() => {
      notifContent.style.display = 'none';
    }, 300);
  }

  render() {
    const { ntype, context, buttontext, buttonlink, noicon } = this;
    const icon = this.getIcon(context);

    return html`
      <div class="a-notif context-${context} type-${ntype}">
        <div class="a-notif-flex">
          <div></div>
          <div class="a-notif-content">
            
            ${ !noicon
              ? html`
              <div class="a-notif-icon">
                <axa-icon icon="${icon}"></axa-icon>
              </div>
            `
              : html`
                <div class="a-notif-icon-empty"></div>
              `
            }
            
            <div class="a-notif-content-text">
              <slot></slot>
            </div>
            ${ buttontext && buttonlink
              ? html`
              <div class="a-notif-content-button">
                <axa-button size="small" variant="inverted" @click="${this.handleButtonClick}">${buttontext}</axa-button>
              </div>
            `
              : null
            }
          </div>
          <div class="a-notif-close"
               @click="${this.onClose}"
          >
            <axa-icon icon="close"></axa-icon>
          </div>          
        </div>

        ${ buttontext && buttonlink
          ? html`
              <div class="a-notif-content-button-mobile">
                <axa-button size="small" variant="inverted" @click="${this.handleButtonClick}">${buttontext}</axa-button>
              </div>
            `
          : null
        }        
        
      </div>
    `;
  }
}

defineVersioned([AXANotification], __VERSION_INFO__);

export default AXANotification;
