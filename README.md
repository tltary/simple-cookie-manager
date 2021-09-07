# Simple cookie manager

## How to install

```bash
npm i simple-cookie-manager
```

or add this before close <body>

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/tltary/simple-cookie-manager/scm.js"></script>
```

## How to use

```js
SCM.getCookie() // get all cookie
SCM.getCookie('<name>') // get you group by name
SCM.setCookie('<name>', '<value>', '<options? optionally>') // set cookie
SCM.deleteCookie('<name>') // remove cookie
```


