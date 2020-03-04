<p align="center">
  <a title="Learn more about Quick Terminal" href="https://marketplace.visualstudio.com/items?itemName=fooxly.quick-terminal">
    <img src="https://assets.fooxly.com/extensions/quick_terminal/banner.jpg" alt="Quick Terminal" width="100%" />
  </a>
</p>

```sh
ext install fooxly.quick-terminal
```

[![Version](https://vsmarketplacebadge.apphb.com/version-short/fooxly.quick-terminal.svg)](https://marketplace.visualstudio.com/items?itemName=fooxly.quick-terminal)
[![Installs](https://vsmarketplacebadge.apphb.com/installs-short/fooxly.quick-terminal.svg)](https://marketplace.visualstudio.com/items?itemName=fooxly.quick-terminal)
[![Ratings](https://vsmarketplacebadge.apphb.com/rating-short/fooxly.quick-terminal.svg)](https://marketplace.visualstudio.com/items?itemName=fooxly.quick-terminal)
[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://github.com/Fooxly/quick-terminal/blob/master/LICENSE)

# What is Quick Terminal

> A package by [Fooxly](https://www.fooxly.com).

**Quick Terminal** is the easiest method to open a native console. By just a press of a button a terminal is created at the workspace base folder or the selected file its folder.

## Support us &nbsp;❤

> About **40%** of your donation goes to one of the charities we support. For further information or questions please visit [our website](https://www.fooxly.com/charity) or contact us via [charity@fooxly.com](mailto:charity@fooxly.com).

<p>
  <a title="BuyMeACoffee" href="https://www.buymeacoffee.com/fooxly">
    <img src="https://assets.fooxly.com/third_party/buymeacoffee.png" alt="BuyMeACoffee" width="180" height="43" />
  </a>&nbsp;&nbsp;
  <a title="Patreon" href="https://www.patreon.com/fooxly">
    <img src="https://assets.fooxly.com/third_party/patreon.png" alt="Patreon" width="180" height="43" />
  </a>&nbsp;&nbsp;
  <a title="PayPal" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=3GEYSYZFXV9GE">
    <img src="https://assets.fooxly.com/third_party/paypal.png" alt="PayPal" width="180" height="43" />
  </a>
</p>

<br/>

## ⚙️ &nbsp;Available Settings


* `quickterminal.priority`: The priority given to the statusbar button (`0` by default)

  ```json
  "quickterminal.priority": <number>
  ```

<br/>

<!-- markdownlint-disable MD026 -->
## Known issues

### My terminal won't open

Unfortunately, there are some cases where VS Code can't find the right terminal on your OS to use.

#### How do I fix it?

Configure `"terminal.explorerKind"` in your `settings.json`, and set one of the
following options based on your operating system:

> **Note**: Remember to replace the values below with your preferred Terminal app

##### macOS

`"terminal.external.osxExec": "Terminal.app"`

##### Windows

`"terminal.external.windowsExec": "‪C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe"`

##### Linux (eg. Ubuntu)

`"terminal.external.linuxExec": "xterm"`

## License

[MIT](https://github.com/Fooxly/quick-terminal/blob/master/LICENSE) &copy; Fooxly
