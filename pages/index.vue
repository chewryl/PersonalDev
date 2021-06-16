<template>
  <div class="container grid grid-cols-3">
    <div class="col-span-2 pl-48">
      <h1 class="title">
        <span class="enhance-text">
          Cheryl
        </span>
        Mataitini
      </h1>
      <div class="pt-10">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, est ipsam. Repellat nulla ipsum quia minus aliquam dicta molestias repellendus illum, sequi velit veniam quisquam id, assumenda sunt alias adipisci!
      </div>
      <div class="pt-10">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Contact
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

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
  background-color: #262626;
}

.title {
  font-family: 'Pacifico', cursive;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #BFBFBF;
  letter-spacing: 1px;
}

.enhance-text {
  color: #CEAFFF;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
