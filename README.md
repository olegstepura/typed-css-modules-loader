# typed-css-modules-loader

Simplest webpack loader for https://github.com/Quramy/typed-css-modules

I suggest using it as preloader. Unless you change the options (see below), it
will generate `.css.d.ts` files near the `.css`. Please take a look at
[this discussion](https://github.com/Quramy/typed-css-modules/issues/2) to make a decision.

It has one option - noEmit, which turns off emitting files to the output path of webpack.

You can affect how `typed-css-modules` behaves by using query parameters. The loader
will pass any query parameters you specify (excluding noEmit) to the constructor of the `DtsCreator`
class. For more info on available options, please take a look here:
[DtsCreator constructor](https://github.com/Quramy/typed-css-modules#new-dtscreatoroption).


```js

const settings = {
  // ...
  module: {
    loaders: [
      // ...
      {
        enforce: 'pre',
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'typed-css-modules-loader'
        // or in case you want to use parameters:
        // loader: 'typed-css-modules?outDir=/tmp'
        // or in case you want to use noEmit:
        // loader: 'typed-css-modules?noEmit'
      }
    ],
  }
  // ...
}
```
