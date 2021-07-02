<template>
  <div class="container grid grid-cols-3">
    <div class="col-span-2 pl-32">
      <h1 class="title">
        <span class="text-purple"> Cheryl </span>
        Mataitini
      </h1>
      <div class="pt-10">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, est
        ipsam. Repellat nulla ipsum quia minus aliquam dicta molestias
        repellendus illum, sequi velit veniam quisquam id, assumenda sunt alias
        adipisci!
      </div>
      <div class="flex gap-1 pt-10">
        <pd-button
          href="https://nuxtjs.org/"
          button-class="button--purple"
          text="Contact"
          icon-path="/"
        />
        <pd-button
          href="https://nuxtjs.org/"
          button-class="button--purple"
          text="GitHub"
          icon-path="/"
        />
      </div>
    </div>
  </div>
</template>
<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  min-width: 100vw;
  align-items: center;
  background-color: #222222;
}

.title {
  font-family: 'Pacifico', cursive;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #bfbfbf;
  letter-spacing: 1px;
}

.text-purple {
  color: #ceafff;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
