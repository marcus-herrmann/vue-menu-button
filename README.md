# Vue Menu Button (Work in Progress)

Accessible menu button
![Short animation showing the component](https://media.giphy.com/media/2kLXAWlfgu5YwHcIG5/giphy.gif)

[**DEMO**](https://codesandbox.io/s/zqv3170qlp)

## Installation:
```bash
npm install vue-menu-button --save
```

## Usage

```js
import { MenuWrapper, MenuItem, MenuLink } from "vue-menu-button";
```

```xml
<menu-wrapper>
  <template slot="menu-button"
    >Click Me
  </template>
  <template slot="menu-content">
    <menu-link><a href="/foo">A link</a></menu-link>
    <menu-link><a href="/bar">Another link</a></menu-link>
    <menu-item @click="doSomething">A menu item</menu-item>
    <menu-item @click="doSomething">Another menu item</menu-item>
  </template>
</menu-wrapper>
```

### Background
* Why I built this component: https://marcus.io/blog/a11y-app-menu-button
* Short tutorial from W3C: https://www.w3.org/WAI/tutorials/menus/application-menus/