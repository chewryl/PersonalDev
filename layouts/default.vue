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
  --highlight: #ca9be0;
	--highlight: #9e7e1c;
  --background-color: #252321;
  --text-color: #bfbfbf;
}

[data-theme="darkMode"] {
  --background-color: #1d1d1d;
  --text-color: #bfbfbf;
}

[data-theme="lightMode"] {
  --background-color: #fefefe;
  --text-color: #525252;
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
