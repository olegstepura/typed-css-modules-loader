# typed-css-modules-loader

Simplest webpack loader for https://github.com/Quramy/typed-css-modules

I suggest using it as preloader. Unless you change the options (see below), it
will generate `.css.d.ts` files near the `.css`. Please take a look at
[this discussion](https://github.com/Quramy/typed-css-modules/issues/2) to make a decision.

You can affect how `typed-css-modules` behaves by using query parameters. The loader
will pass on any query parameters you send give it to the constructor of the DtsCreator
class. For more info on available options, have a look at the
[DtsCreator constructor](https://github.com/Quramy/typed-css-modules#new-dtscreatoroption).


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
