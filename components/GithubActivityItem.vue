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
			<p class="text-sm">{{ user }} pushed commit to
				<a :href="repoLink" target=”_blank” class="text-highlight-two link">{{ repo }}</a>
				on {{ createdAt }}</p>
		</div>
		<ul>
			<li class="text-sm">"{{ message  }}"</li>
		</ul>
	</div>
</template>

<script>
import InlineSvg from 'vue-inline-svg'

export default {
	name: 'GithubActivityItem',
	components: { InlineSvg },
	props: {
		commit: {
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
			const date = new Date(this.commit.created_at)
			return date.toLocaleString()
		},
		user() {
			return this.commit.payload.commits[0].author.name
		},
		message() {
			return this.commit.payload.commits[0].message
		}
	}
}
</script>

<style scoped>
.item-container {
	border-bottom: solid 3px var(--background-color);
}
.link {
	text-decoration: underline;
}
ol, ul {
	list-style: none;
	display: block;
	margin: 0;
	overflow: auto;
}
.icon {
	fill: var(--text-color);
	padding-top: 2px;
	margin-right: 5px;
}
</style>
