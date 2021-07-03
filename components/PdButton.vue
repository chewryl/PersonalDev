<template>
  <div>
    <a
      :href="href"
      :class="buttonClass"
      rel="noopener noreferrer"
      target="_blank"
    >
      <span class="flex">
        <inline-svg
          v-if="iconPath"
          :src="require(`../assets/icons/${iconPath}`)"
          width="80"
          height="80"
          fill="true"
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
      default: 'button--purple',
      type: String
    },
    text: {
      required: true,
      type: String
    }
  }
}
</script>
