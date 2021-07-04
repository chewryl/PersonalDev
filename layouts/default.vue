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
  --neon-lilac: #ceafff;
  --dark: #1f1f20;
  --off-white: #bfbfbf;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--neon-lilac {
  display: inline-block;
  border-radius: 5px;
  border: 1px solid var(--neon-lilac);
  color: var(--neon-lilac);
  text-decoration: none;
  padding: 5px 15px;
}

.button--neon-lilac:hover {
  font-weight: bold;
  color: var(--dark);
  background-color: var(--neon-lilac);
}
</style>
