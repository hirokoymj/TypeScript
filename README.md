# TypeScript Tutorial

- [TypeScript in 5 minutes](http://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [Gulp](http://www.typescriptlang.org/docs/handbook/gulp.html)

## 1. Install necessary npm packages
1. **Initialize** the project folder and make package.json.

```js
npm init
```
2. Install **gulp** globally.

```js
npm install -g gulp-cli
```

3. Install **typescript**, **gulp**, **gulp-typescript** in your project’s dev dependencies.
```js
npm install --save-dev typescript gulp gulp-typescript
```

4. Install **Browserify**
- To move Node to the browser. Install browserify, tsify, and vinyl-source-stream.

```js
npm install --save-dev browserify tsify vinyl-source-stream
```
5. Install **Watchfy**

```js
npm install --save-dev watchify gulp-util
```

## 2. Create tsconfig.json

```js
{
    "files": [
        "src/main.ts",
        "src/greet.ts"
    ],
    "compilerOptions": {
        "noImplicitAny": true,
        "target": "es5"
    }
}
```

## 3. Create gulpfile.js

## 4. Run gulp
- Open Terminal and then move to project folder and type `gulp`.
- Change src/main.ts. Gulp is automatically compiled.
- Open dist/index.html.

```js
proj$ gulp
[10:34:20] Using gulpfile ~/src/proj/gulpfile.js
[10:34:20] Starting 'copy-html'...
[10:34:20] Finished 'copy-html' after 26 ms
[10:34:20] Starting 'default'...
[10:34:21] 2824 bytes written (0.13 seconds)
[10:34:21] Finished 'default' after 1.36 s
[10:35:22] 2261 bytes written (0.02 seconds)
[10:35:24] 2808 bytes written (0.05 seconds)
```