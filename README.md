# zstore (wip)
Store web-client

## Installing

```
$ npm install
```

## Running

### Start universal mode (with node render layer running)
```
$ npm start
```

### Developement mode
```
$ npm run dev
```

### Production mode

```
$ npm run prod
```

## Building (production)
```
$ npm run build
```

## Code structure
```
.
├── LICENSE
├── README.md
├── package.json
└── src
    ├── client
    │   └── index.js
    ├── common
    │   ├── components
    │   │   ├── elements
    │   │   │   ├── buttons
    │   │   │   │   ├── buttons-style.scss
    │   │   │   │   ├── buttons.jsx
    │   │   │   │   ├── index.jsx
    │   │   │   │   └── readme.md
    │   │   │   └── icons
    │   │   │       └── store.svg
    │   │   ├── pages
    │   │   │   ├── home.jsx
    │   │   │   └── product.jsx
    │   │   ├── partials
    │   │   │   ├── card
    │   │   │   │   ├── card-style.scss
    │   │   │   │   ├── card.jsx
    │   │   │   │   ├── index.jsx
    │   │   │   │   └── readme.md
    │   │   │   └── shelf
    │   │   │       ├── index.jsx
    │   │   │       ├── readme.md
    │   │   │       ├── shelf-style.scss
    │   │   │       └── shelf.jsx
    │   │   ├── templates
    │   │   │   ├── home-default.jsx
    │   │   │   ├── home-event.jsx
    │   │   │   └── product.jsx
    │   │   └── utils
    │   │       ├── mask.js
    │   │       └── readme.md
    │   ├── flux
    │   │   ├── actions
    │   │   ├── containers
    │   │   ├── reducers
    │   │   └── store
    │   └── languages
    │       ├── i18n
    │       │   ├── de-DE.json
    │       │   ├── en-US.json
    │       │   └── pt-BR.json
    │       └── index.js
    └── server
        ├── index.js
        └── server.js
```
# License

[MIT](LICENSE)