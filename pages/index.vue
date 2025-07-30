<template>
  <div class="container">
    <div class="max-w-3xl min-h-screen px-4 py-20 md:py-24 mx-auto">
      <div class="flex justify-end pb-10">
        <pd-light-dark-toggle />
      </div>
      <div>
        <div class="flex lg:space-x-3 items-center title-section">
          <h1 class="font-semibold">
            <span class="text-highlight"> Cheryl </span>
            Mataitini
          </h1>
        </div>
        <div class="pt-10 space-y-4 text-md">
          <p>
            Software Engineer.
          </p>

          <p>
            Experienced in C# .NET, JavaScript and frameworks (React.js,
            Vue.js), and cloud platforms including AWS.
          </p>
        </div>
        <div class="flex gap-6 w-full mt-10">
          <pd-button
            icon-path="Dev.svg"
            href="https://dev.to/chewryl/"
            text="Dev.to Blog"
          />
          <pd-button
            icon-path="LinkedIn.svg"
            href="https://www.linkedin.com/in/cheryl-mataitini-566a812b4/"
            text="LinkedIn"
          />
        </div>
        <div class="pt-10 space-y-4">
          <blog-activity />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PdLightDarkToggle from '~/components/PdLightDarkToggle.vue'
import BlogActivity from '~/components/BlogActivity.vue'

export default {
  name: 'PersonalDev',
  components: { PdLightDarkToggle, BlogActivity }
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
  min-height: 100%;
  min-width: 100%;
  align-items: center;
  background-color: var(--background-color);
}

ol,
ul {
  list-style: circle;
  display: block;
  margin-top: 1em;
  margin-bottom: 1 em;
  margin-left: 0;
  margin-right: 0;
  padding-left: 40px;
}

.title-section {
  border-bottom: 1px solid #6d5612;
}

.title-section h1 {
  font-family: Tahoma, Geneva, Verdana, sans-serif;
  display: block;
  font-size: 2rem;
  color: var(--text-color);
}

.me-img {
  max-width: 6rem;
  height: 6rem;
  border-radius: 50%;
  border: 1px solid var(--highlight);
}

@media screen and (max-width: 860px) {
  #profile_img {
    visibility: hidden;
    display: none;
  }
}

@media screen and (max-width: 425px) {
  .title {
    font-size: 3.5rem;
  }
}
</style>
