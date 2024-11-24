<template>
  <div class="p-6 item-container item">
    <p class="text-md font-bold">{{ item.title }}</p>
    <p class="text-sm darken">
      Published on: {{ formatDate(item.published_timestamp) }}
    </p>

    <div>
      <p class="text-sm mt-4">
        {{ trimStart(item.description, item.title) }}
        <a
          :href="item.canonical_url"
          target="”_blank”"
          class="text-highlight-two link underline"
          >Read more
        </a>
      </p>
    </div>
    <span v-for="tag in getTagsArray(item.tags)" :key="tag" class="tag darken">
      {{ tag }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'BlogActivityItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    getTagsArray(tags) {
      return tags.split(',').map(tag => `#${tag.trim()}`)
    },
    trimStart(str, length) {
      return str.substring(length)
    },
    formatDate(date) {
      date = new Date(date)
      return date.toLocaleDateString()
    }
  }
}
</script>

<style scoped>
.item {
  margin-bottom: 4px;
}
.darken {
  color: var(--text-color-secondary);
}
.tag {
  display: inline-flex;
  margin-right: 8px;
  font-size: 0.85rem;
}
</style>
