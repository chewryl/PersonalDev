<template>
  <inline-svg
    v-if="iconPath"
    :src="require(`../assets/icons/${iconPath}`)"
    class="icon"
    width="22"
    height="22"
    @click="toggleTheme"
  />
</template>
<script>
import InlineSvg from 'vue-inline-svg'

export default {
  name: 'PdLightDarkToggle',
  components: {
    InlineSvg
  },
  data() {
    return {
      theme: '' // When empty, theme is set to the default dark mode
    }
  },
  mounted() {
    const localTheme = localStorage.getItem('theme')
    document.documentElement.setAttribute('data-theme', localTheme)
  },
  computed: {
    darkModeEnabled() {
      return this.theme === ''
    },
    iconPath() {
      return this.darkModeEnabled ? 'Sun.svg' : 'Moon.svg'
    }
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === 'lightMode' ? '' : 'lightMode'
      document.documentElement.setAttribute('data-theme', this.theme)
      localStorage.setItem('theme', this.theme)
    }
  }
}
</script>
<style scoped>
.icon {
  fill: var(--text-color);
  width: 22;
  height: 22;
}

.icon:hover {
  cursor: pointer;
}
</style>