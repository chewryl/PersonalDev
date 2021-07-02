<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Red Hat Text', sans-serif;
  color: #bfbfbf;
  font-size: 1.2rem;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--purple {
  display: inline-block;
  border-radius: 5px;
  border: 2px solid #ceafff;
  color: #ceafff;
  text-decoration: none;
  padding: 5px 15px;
}

.button--purple:hover {
  font-weight: bold;
  color: #222222;
  background-color: #ceafff;
}
</style>
