<template>
  <div class="container">
    <div class="max-w-3xl min-h-screen px-4 py-20 mx-auto">
      <div class="flex justify-end pb-10">
        <pd-light-dark-toggle />
      </div>
      <div>
        <div class="flex lg:space-x-3 items-center title-section">
          <h1>
            <span class="text-highlight"> Cheryl </span>
            Mataitini
          </h1>
        </div>
        <div class="pt-10 space-y-4">
          <p>
            Software Engineer based in the UK.
          </p>
					<p>
						Experience with:
					</p>
					<ul>
						<li>JavaScript & frameworks including Vue JS</li>
						<li>C# (.NET Framework & .NET Core)</li>
					</ul>
        </div>
        <div class="flex gap-1 pt-10">
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
  name: 'PersonalDev',
  components: { PdLightDarkToggle }
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

.container p {
	font-size: 1.2rem;
}

h1 {
	margin: 0px;
}

ol, ul {
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
	font-family: Times, serif;
  display: block;
  font-size: 5rem;
  color: var(--text-color);
}

.text-highlight {
  color: var(--highlight);
}

.me-img {
  max-width: 6rem;
  height: 6rem;
	border-radius: 50%;
	border: 1.6px solid var(--highlight);
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

@media screen and (max-width: 425px) {
	.title {
		font-size: 3.5rem;
	}
}
</style>
