# Large, small, and dynamic viewport units polyfill

This is a "polyfill" which adds support for svh, dvh and lvh viewport units. It's mainly useful when dealing with iOS and Android mobile devices.

## How it works

It adds CSS custom properties (variables) `--1svh`, `--1dvh` and `--1lvh` using JavaScript. These correspond to 1 svh, 1 dvh and 1lvh unit respectively. You can use CSS `calc()` function to multiply them to your desired size.

## How to use

### Import script

Include script tag or import the script using a bundler.

#### Script tag

```html
<script src="https://unpkg.com/large-small-dynamic-viewport-units-polyfill@0.0.1/dist/large-small-dynamic-viewport-units-polyfill.min.js"></script>
```

#### Bundler

Install the package.

```shell
npm install large-small-dynamic-viewport-units-polyfill
```

Import the package.

```js
import 'large-small-dynamic-viewport-units-polyfill';
```

### Write CSS

Add the following CSS:

```css
.my-small-hero-element {
    width: 100%;
    height: 100vh; /* For browsers that don't support CSS variables */
    height: calc(var(--1svh, 1vh) * 100); /* This is the "polyfill" */
    height: 100svh; /* This is for future browsers that support dynamic viewport units */
}

.my-dynamic-hero-element {
    width: 100%;
    height: 100vh; /* For browsers that don't support CSS variables */
    height: calc(var(--1dvh, 1vh) * 100); /* This is the "polyfill" */
    height: 100dvh; /* This is for future browsers that support dynamic viewport units */
}

.my-large-hero-element {
    width: 100%;
    height: 100vh; /* For browsers that don't support CSS variables */
    height: calc(var(--1lvh, 1vh) * 100); /* This is the "polyfill" */
    height: 100lvh; /* This is for future browsers that support dynamic viewport units */
}
```

Note: lvh unit is only included for the sake of completeness. It currently behaves exactly like vh unit. This may break in a future version of iOS or Android.

## Compatibility

I've tested this with the following operating systems:

* iOS 15
* Android X with Chrome Y

## Todo

* Test with Android
* Test with iPad
* Add some feature detection to run the code only on devices without native support

## Further reading

* [The Large, Small, and Dynamic Viewports – Bram.us](https://www.bram.us/2021/07/08/the-large-small-and-dynamic-viewports/)
* [The trick to viewport units on mobile – CSS-Tricks](https://css-tricks.com/the-trick-to-viewport-units-on-mobile/)
