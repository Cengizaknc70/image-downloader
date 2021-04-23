import html from './html.js';
import { ExternalLink } from './ExternalLink.js';

const years = new Date().getFullYear() - 2012;

export const SupportList = () => html`
  <p>
    If you're one of the 1,000,000+ people using this extension, over the
    past${' '} ${years} years marketing companies have been approaching me with
    offers to pay in exchange for <b>your private data</b> like:
  </p>

  <ul>
    <li>what websites you visit</li>
    <li>when you visit them</li>
    <li>where you visit them from.</li>
  </ul>

  <p>
    And how much do these companies think your data is worth?
    <b> 0.15¢ to 0.45¢ a month.</b><br />
    Less than a penny! Do you think that's worth compromising your privacy and
    trust for?
  </p>

  <p>My answer has always been a resounding <b>NO!</b></p>

  <p>
    If you agree, please consider supporting me and my work so I can keep this
    extension free, open-source, and without targeted ads or tracking algorithms
    - as it always has been.
  </p>

  <div class="tab-list">
    <div class="tab-item">
      <${SupportRadio} id="support_paypal" value="paypal" checked />

      <label class="tab-header" for="support_paypal">
        <img src="/images/paypal.png" />
        PayPal
      </label>

      <div class="tab-content centered">
        <${ExternalLink} href="https://www.paypal.me/vdsabev">
          <img src="/images/paypal-wordmark.jpg" />
          paypal.me/vdsabev
        <//>
      </div>
    </div>

    <div class="tab-item">
      <${SupportRadio} id="support_patreon" value="patreon" />

      <label class="tab-header" for="support_patreon">
        <img src="/images/patreon.png" />
        Patreon
      </label>

      <div class="tab-content centered">
        <${ExternalLink} href="https://www.patreon.com/vdsabev">
          <br /><br />
          <img src="/images/patreon-wordmark.png" />
          <br /><br />
          patreon.com/vdsabev
        <//>
      </div>
    </div>

    <div class="tab-item">
      <${SupportRadio} id="support_btc" value="btc" />

      <label class="tab-header" for="support_btc">
        <img src="/images/btc.png" />
        BTC
      </label>

      <div class="tab-content centered">
        <br />
        <${ExternalLink} href="bitcoin:3LGkKmET7sGzsJriW16mtM8Kmo2XN7258C">
          <img src="/images/btc-qr.png" />
        <//>
        <pre>3LGkKmET7sGzsJriW16mtM8Kmo2XN7258C</pre>
      </div>
    </div>

    <div class="tab-item">
      <${SupportRadio} id="support_eth" value="eth" />

      <label class="tab-header" for="support_eth">
        <img src="/images/eth.png" />
        ETH
      </label>

      <div class="tab-content centered">
        <br />
        <${ExternalLink}
          href="ethereum:0x49707Cb358e8B2F795C8FceF4D2DcfD2BADF7679"
        >
          <img src="/images/eth-qr.png" />
        <//>
        <pre>0x49707Cb358e8B2F795C8FceF4D2DcfD2BADF7679</pre>
      </div>
    </div>

    <div class="tab-item">
      <${SupportRadio} id="support_bat" value="bat" />

      <label class="tab-header" for="support_bat">
        <img src="/images/bat.png" />
        BAT
      </label>

      <div class="tab-content centered">
        <br />
        <${ExternalLink}
          href="ethereum:0x0d8775f648430679a709e98d2b0cb6250d2887ef/transfer?address=0xdb54EBD0eF147599050B3629d65a73d65ef344D2"
        >
          <img src="/images/bat-qr.png" />
        <//>
        <pre>0xdb54EBD0eF147599050B3629d65a73d65ef344D2</pre>
      </div>
    </div>
  </div>

  <p>
    The source code can be found on GitHub:${' '}
    <${ExternalLink}
      href="https://github.com/PactInteractive/image-downloader"
    />
  </p>
`;

const SupportRadio = (props) => html`
  <input type="radio" name="support" ...${props} />
`;