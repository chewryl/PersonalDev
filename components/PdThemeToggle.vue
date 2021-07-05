<template>
  <label class="toggle-wrapper" htmlFor="toggle">
    <div :class="className">
      <span class="hidden">
        {darkModeEnabled ? "Enable" : "Disable"}
      </span>
      <input
        id="toggle"
        name="toggle"
        type="checkbox"
        :checked="darkModeEnabled"
        @click="toggleTheme"
      />
    </div>
  </label>
</template>
<script>
export default {
  name: 'PdThemeToggle',
  data () {
    return {
      theme: '' // When empty, theme is set to the default dark mode
    }
  },
  mounted () {
    const localTheme = localStorage.getItem('theme')
    document.documentElement.setAttribute('data-theme', localTheme)
  },
  computed: {
    className () {
      return this.darkModeEnabled ? 'toggle enabled' : 'toggle disabled'
    },
    darkModeEnabled () {
      return this.theme === ''
    }
  },
  watch: {
    isEnabled (val) {
      this.darkModeEnabled = val
    }
  },
  methods: {
    toggleTheme () {
      this.theme = this.theme === 'lightMode' ? '' : 'lightMode'
      document.documentElement.setAttribute('data-theme', this.theme)
      localStorage.setItem('theme', this.theme)
    }
  }
}
</script>
<style scoped>
.hidden {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

.toggle-wrapper {
  width: 130px;
  display: block;
}

.toggle {
  height: 65px;
  width: 130px;
  background: var(--black);
  border-radius: 40px;
  padding: 12px;
  position: relative;
  margin: auto;
  cursor: pointer;
}

.toggle::before {
  content: "";
  display: block;
  height: 41px;
  width: 41px;
  border-radius: 30px;
  background: var(--white);
  position: absolute;
  z-index: 2;
  transform: translate(0);
  transition: transform var(--transition);
}

.toggle.enabled::before {
  transform: translateX(65px);
}

.toggle input {
  position: absolute;
  top: 0;
  opacity: 0;
}
</style>
