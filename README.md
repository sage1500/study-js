
### プロジェクト開始

```
> npm init -y
```

### Webpack
```
> npm install webpack webpack-cli -D
```

### ESLint
```
> npm install eslint eslint-loader -D
> npx eslint --init
```

- jest を使う場合
  ```
  > npm install eslint-plugin-jest -D
  ```

### CSSをバンドルする

```
> npm install css-loader style-loader -D
```

> CSS中にURLがあるケースがWindowsだと（？）、うまく動かない。

### 画像をバンドルする

```
> npm install url-loader -D
> npm install file-loader -D
```

> CSS中にURLがあるケースがWindowsだと（？）、うまく動かない。


### Babel を使う場合

```
> npm install babel-loader @babel/core @babel/preset-env -D
```

- jest を使う場合
  ```
  > npm install babel-jest regenerator-runtime -D
  ```

### Jest を使う場合
```
> npm install jest -D
```

- Babel を使う場合
  ```
  > npm install babel-plugin-transform-es2015-modules-commonjs -D
  ```
  `.babelrc`
  ```
  {
      "env": {
          "test": {
              "plugins": [
                  "transform-es2015-modules-commonjs"
              ]
          }
      }
  }
  ```

### Windowsでやる場合の注意
- webpack4 では、webpack.config.js がなくても動くらしいが、
  Windows だとファイルパスの表現の問題で結局必要になる。
