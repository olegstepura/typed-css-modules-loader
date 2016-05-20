# typed-css-modules-loader

Simplest webpack loader for https://github.com/Quramy/typed-css-modules
Has no configuration atm.

Use it as preloader. It will generate `.css.d.ts` files near the `.css`

```js

const settings = {
  // ...
  module: {
    preLoaders: [
      // ...
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'typed-css-modules'
      }
    ],
  }
  // ...
}
```
