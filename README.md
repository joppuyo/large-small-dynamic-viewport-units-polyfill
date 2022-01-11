# CSS dynamic viewport units polyfill

This is a "polyfill" which adds support for svh and cvh dynamic viewport units.

## How it works

It adds CSS variables `--1svh` and `--1cvh` using JavaScript. These correspond to 1 svh and 1 cvh unit respectively. You can use CSS `calc()` function to multiply them to your desired size.

## How to use

### Include script tag or import the script using a bundler

### Add CSS

```css
.my-static-hero-element {
    width: 100%;
    height: 100vh; /* For browsers that don't support CSS variables */
    height: calc(var(--1svh, 1vh) * 100); /* This is the "polyfill" */
    height: 100svh; /* This is for future browsers that support dynamic viewport units */
}

.my-dynamic-hero-element {
    width: 100%;
    height: 100vh; /* For browsers that don't support CSS variables */
    height: calc(var(--1cvh, 1vh) * 100); /* This is the "polyfill" */
    height: 100cvh; /* This is for future browsers that support dynamic viewport units */
}
```

