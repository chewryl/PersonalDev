<template>
  <div class="container">
    <div class="max-w-3xl min-h-screen px-4 py-24 mx-auto">
      <div class="text-right pb-10">togglePlaceholder</div>
      <div>
        <div class="flex space-x-3 items-center">
          <img class="me-img" src="../assets/img/ProfileCircle.png" />
          <h1 class="title">
            <span class="text-lilac"> Cheryl </span>
            Mataitini
          </h1>
        </div>
        <div class="pt-10 space-y-4">
          <p>
            Software Engineer based in the UK. Focused on C# .NET development,
            the Web & client-side frameworks. Check out my GitHub profile to see
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
  background-color: var(--dark);
}

.title {
  font-family: 'Pacifico', cursive;
  display: block;
  font-size: 4.7rem;
  color: #bfbfbf;
}

.text-lilac {
  color: var(--neon-lilac);
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.me-img {
  max-width: 6.3rem;
  height: 6.3rem;
}
</style>
