<template>
  <div>
    <a
      :href="href"
      :class="buttonClass"
      rel="noopener noreferrer"
      target="_blank"
    >
      {{ text }}
    </a>
  </div>
</template>
<script>
export default {
  name: 'PdButton',
  props: {
    iconPath: {
      required: false,
      type: String,
      default: '/'
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
