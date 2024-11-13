<template>
  <div v-if="!error && pushEvents.length" class="activity">
    <h4 class="my-3 tracking-wide font-semibold">GitHub Activity</h4>
    <div class="activity-container overflow-y-auto h-64">
      <GithubActivityItem
        v-for="event in pushEvents"
        :key="event.id"
        :event="event"
        :repo="event.repoName"
      />
    </div>
  </div>
</template>

<script>
import GithubActivityItem from '@/components/GithubActivityItem.vue'

export default {
  name: 'GithubActivity',
  components: {
    GithubActivityItem
  },
  data() {
    return {
      error: null,
      pushEvents: []
    }
  },
  async mounted() {
    try {
      const results = await fetch(
        'https://api.github.com/users/chewryl/events/public',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + process.env.NUXT_ENV_GITHUB_TOKEN
          }
        }
      )
      const data = await results.json()
      if (data !== null && data.length) {
        const pushEvents = data
          .filter(event => event.type === 'PushEvent')
          .map(event => {
            return {
              id: event.id,
              repoName: event.repo.name,
              created_at: event.created_at,
              commits: [...event.payload.commits]
            }
          })
        this.pushEvents = pushEvents
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
