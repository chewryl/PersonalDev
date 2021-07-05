<template>
  <div>
    <a
      :href="href"
      :class="buttonClass"
      rel="noopener noreferrer"
      target="_blank"
    >
      <span class="flex space-x-1 items-center">
        <inline-svg
          v-if="iconPath"
          :src="require(`../assets/icons/${iconPath}`)"
          class="icon"
          width="22"
          height="22"
        />
        <div>{{ text }}</div>
      </span>
    </a>
  </div>
</template>
<script>
import InlineSvg from 'vue-inline-svg'

export default {
  name: 'PdButton',
  components: {
    InlineSvg
  },
  props: {
    iconPath: {
      required: false,
      type: String
    },
    href: {
      required: true,
      default: '/',
      type: String
    },
    buttonClass: {
      required: false,
      default: 'button--neon-fuchsia',
      type: String
    },
    text: {
      required: true,
      type: String
    }
  }
}
</script>
<style scoped>
.icon {
  fill: var(--neon-fuchsia);
  width: 22;
  height: 22;
}

a:hover .icon,
a:hover {
  fill: var(--background-color);
  color: var(--background-color);
}
</style>
