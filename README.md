JavaScript勉強用プロジェクト
---

## プロジェクト開始

```
> npm init -y
```

## 初回構築

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


## git から取得した後

```
> npm install
```

## Jenkins

- 以下の3コマンドを個別にコマンド実行  
  ※Windows版Jekinsだと3つの「Windowsバッチコマンドの実行」でそれぞれ実行するイメージ
  ```
  > npm install
  > npm run test
  > npm run build
  ```
- Windowsで「Windowsバッチコマンドの実行」内で `npm` コマンドを使用する際の注意
  - `npm` コマンドは `npm.cmd` で実現されており、作りが悪く、`npm.cmd` の終了時に呼び出し元のバッチコマンド自体も終了してしまう。
  - そのため、`call npm ～` のように記載する必要あり。
  - `npm` コマンドが最後のコマンド場合は `call` は不要。
