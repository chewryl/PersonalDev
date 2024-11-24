<template>
  <div v-if="!error && items.length" class="activity">
    <h4 class="tracking-wide font-semibold mb-2 text-md">Blog Posts</h4>
    <div class="activity-container overflow-y-auto max-h-96">
      <BlogActivityItem v-for="item in items" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogActivity',
  data() {
    return {
      error: null,
      items: []
    }
  },
  async mounted() {
    try {
      const results = await fetch(
        'https://dev.to/api/articles?username=chewryl',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      const data = await results.json()
      console.log(data)
      if (data !== null && data.length) {
        this.items = data.sort(
          (a, b) =>
            new Date(a.published_timestamp) - new Date(b.published_timestamp)
        )
      }
    } catch (err) {
      console.log(err)
      this.error = err.message
    }
  }
}
</script>

<style>
.activity-container div {
  background-color: var(--container-color);
}

.activity-container::-webkit-scrollbar {
  width: 3px;
}

/* Track */
.activity-container::-webkit-scrollbar-track {
  background: var(--scrollbar-track);
  margin-bottom: 3px;
}

/* Handle */
.activity-container::-webkit-scrollbar-thumb {
  background: var(--scrollbar-thumb);
}

.activity-container::-webkit-scrollbar {
  height: 0px; /* If value is 0px, the horizontal bar will disappear but still works*/
}
</style>
