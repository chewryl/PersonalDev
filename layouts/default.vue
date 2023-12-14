<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family: Times, serif;
  color: var(--text-color);
  font-size: 1.2rem;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

:root {
	--highlight: #9e7e1c;
	--highlight-two: #cb2e55;
  --background-color: #252321;
  --text-color: #bfbfbf;
	--container-color: #322e2e;
	--scrollbar-track: #1e1c1b;
	--scrollbar-thumb: #444141;
}

[data-theme="darkMode"] {
  --background-color: #1d1d1d;
  --text-color: #bfbfbf;
	--scrollbar-track: #1e1c1b;
	--scrollbar-thumb: #444141;
}

[data-theme="lightMode"] {
  --background-color: #fef0e9;
  --text-color: #525252;
	--container-color: #ededed;
	--scrollbar-track: #f7eae4;
	--scrollbar-thumb: #d8d8d8;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

::selection {
  background: #ca9be062;
}
::-moz-selection {
  background: #ca9be062;
}

.text-highlight {
  color: var(--highlight);
}

.text-highlight-two {
  color: var(--highlight-two);
}

.button--highlight {
  display: inline-block;
  border-radius: 20px;
  border: 1.5px solid var(--highlight);
  color: var(--highlight);
  text-decoration: none;
  padding: 5px 15px;
}

.button--highlight:hover {
  font-weight: bold;
  color: var(--background-color);
  background-color: var(--highlight);
}
</style>
