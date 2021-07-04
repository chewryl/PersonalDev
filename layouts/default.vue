<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Red Hat Text', sans-serif;
  color: var(--off-white);
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
  --dark: #1d1d1d;
  --off-white: #bfbfbf;
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
  border: 1px solid var(--neon-fuchsia);
  color: var(--neon-fuchsia);
  text-decoration: none;
  padding: 5px 15px;
}

.button--neon-fuchsia:hover {
  font-weight: bold;
  color: var(--dark);
  background-color: var(--neon-fuchsia);
}
</style>
