<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Red Hat Text', sans-serif;
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
  --neon-fuchsia: #ca9be0;
  --background-color: #1d1d1d;
  --text-color: #bfbfbf;
  /* Dark/Light Mode toggle */
  --black: #333333;
  --white: #f5f5f5f5;
  --transition: 0.5s ease;
}

[data-theme="darkMode"] {
  --background-color: #1d1d1d;
  --text-color: #bfbfbf;
}

[data-theme="lightMode"] {
  --background-color: #FCFCFC;
  --text-color: #525252;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--neon-fuchsia {
  display: inline-block;
  border-radius: 20px;
  border: 1.5px solid var(--neon-fuchsia);
  color: var(--neon-fuchsia);
  text-decoration: none;
  padding: 5px 15px;
}

.button--neon-fuchsia:hover {
  font-weight: bold;
  color: var(--background-color);
  background-color: var(--neon-fuchsia);
}
</style>
