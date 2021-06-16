<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Red Hat Text', sans-serif;
  color: #BFBFBF;
  font-size: 1.125rem;
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

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #CEAFFF;
  color: #CEAFFF;
  text-decoration: none;
  padding: 10px 25px;
}

.button--green:hover {
  color: #CEAFFF;
  background-color: #ceafff46;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
