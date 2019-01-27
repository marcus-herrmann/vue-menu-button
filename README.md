# Vue Menu Button

Accessible menu button

[Demo](https://codesandbox.io/s/zqv3170qlp)

## Installation:
```bash
npm install vue-meu-button --save
```

## Usage
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