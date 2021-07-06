<template>
  <div class="container">
    <div class="max-w-3xl min-h-screen px-4 py-24 mx-auto">
      <div class="flex justify-end pb-10">
        <pd-light-dark-toggle/>
      </div>
      <div>
        <div class="flex lg:space-x-3 items-center">
          <img id="profile_img" class="me-img" src="../assets/img/ProfileCircle.png" />
          <h1 class="title">
            <span class="text-lilac"> Cheryl </span>
            Mataitini
          </h1>
        </div>
        <div class="pt-10 space-y-4">
          <p>
            Software Engineer based in the UK. Focused on C# .NET / ASP.NET Core
            development & client-side frameworks. Check out my GitHub profile to
            see what projects I am working on.
          </p>
          <p>
            In my free time, I enjoy spending time on music & clay work. At the
            moment I am learning to play the classical guitar.
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
import PdLightDarkToggle from '~/components/PdLightDarkToggle.vue'

export default {
  components: { PdLightDarkToggle },
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
  background-color: var(--background-color);
}

h1 {
	margin: 0px;
}

.title {
  font-family: 'Pacifico', cursive;
  display: block;
  font-size: 5rem;
  color: var(--text-color);
}

.text-lilac {
  color: var(--neon-fuchsia);
}

.me-img {
  max-width: 6rem;
  height: 6rem;
}

@media screen and (max-width: 860px) {
  #profile_img {
    visibility: hidden;
    display: none;
  }
	.title {
		font-size: 4rem;
	}
}
</style>
