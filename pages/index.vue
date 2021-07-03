<template>
  <div class="container grid grid-cols-3">
    <div class="col-span-2 pl-44">
      <h1 class="title">
        <span class="text-purple"> Cheryl </span>
        Mataitini
      </h1>
      <div class="pt-10 space-y-4">
        <p>
          Software Engineer based in the UK. Focused on C# .NET development, the
          Web & client-side frameworks. <br />Check out my GitHub profile to see
          what projects I am working on.
        </p>
        <p>
          Outside of work, I enjoy spending time on music. At the moment I am
          learning to play the classical guitar.
        </p>
      </div>
      <div class="flex gap-1 pt-10">
        <pd-button
          href="mailto:cherylmataitini@gmail.com"
          text="Contact"
          icon-path="Email.svg"
        />
        <pd-button
          href="https://github.com/chewryl/"
          text="GitHub"
          icon-path="GitHub.svg"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PersonalDev'
}
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
  background-color: #1f1f20;
}

.title {
  font-family: 'Pacifico', cursive;
  display: block;
  font-weight: 300;
  font-size: 5.3rem;
  color: #bfbfbf;
}

.text-purple {
  color: var(--neon-lilac);
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
