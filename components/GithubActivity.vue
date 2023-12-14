<template>
	<div v-if="!error && commits.length" class="activity">
		<h4 class="my-3 tracking-wide font-bold">Recent GitHub Activity</h4>
		<div class="activity-container overflow-y-auto h-64">
			<GithubActivityItem v-for="commit in commits" :key="commit.id" :commit="commit" :repo="commit.repo.name"/>
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
			commits: []
		}
	},
	async mounted() {
		try {
			const results = await fetch('https://api.github.com/users/chewryl/events/public', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'Bearer ' + process.env.NUXT_ENV_GITHUB_TOKEN
				}
			})
			const data = await results.json()
			if (data !== null && data.length) {
				this.commits = data.filter(event => event.type === 'PushEvent')
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
