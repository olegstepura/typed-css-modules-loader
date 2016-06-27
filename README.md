# typed-css-modules-loader

Simplest webpack loader for https://github.com/Quramy/typed-css-modules
Has no configuration atm.

I suggest using it as preloader. It will generate `.css.d.ts` files near the `.css`
Please take a look at [this discussion](https://github.com/Quramy/typed-css-modules/issues/2) to make a decision.

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
