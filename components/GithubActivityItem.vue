<template>
  <div class="py-2 px-3 item-container">
    <div class="flex items-center">
      <span>
        <inline-svg
          :src="require(`../assets/icons/line_end.svg`)"
          class="icon hidden lg:block"
          width="20"
          height="20"
        />
      </span>
      <p class="text-sm">
        {{ event.commits.length }} {{ commitsText }} pushed to
        <a :href="repoLink" target="”_blank”" class="text-highlight-two link">{{
          repo
        }}</a>
        on {{ createdAt }}
      </p>
    </div>
    <ul v-for="commit in event.commits" :key="commit.sha">
      <li class="text-sm">"{{ commit.message }}"</li>
    </ul>
  </div>
</template>

<script>
import InlineSvg from 'vue-inline-svg'

export default {
  name: 'GithubActivityItem',
  components: { InlineSvg },
  props: {
    event: {
      type: Object,
      required: true
    },
    repo: {
      type: String,
      default: 'repository'
    }
  },
  computed: {
    repoLink() {
      return 'https://github.com/' + this.repo
    },
    createdAt() {
      const date = new Date(this.event.created_at)
      return date.toLocaleDateString()
    },
    commitsText() {
      return this.event.commits.length === 1 ? 'commit' : 'commits'
    }
  }
}
</script>

<style scoped>
.item-container {
  margin-bottom: 3px;
}
.link {
  text-decoration: underline;
}
ol,
ul {
  list-style: none;
  display: block;
  margin: 0;
  overflow-y: auto;
}
.icon {
  fill: var(--text-color);
  padding-top: 2px;
  margin-right: 5px;
}
</style>
