<template>
	<a
		:href="href"
		class="rounded-md bg-background-primary px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-background-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
		target="_blank"
	>
		Get early access
	</a>
</template>
<script setup>
	import { ref } from 'vue';

	const config = {
		email: 'beta@dailyboard.io',
		subject: `I want to join!`,
		body: `Tell us a bit about your company and/or team!`,
	};

	const href = ref(
		`mailto:${config.email}?subject=${encodeURIComponent(
			config.subject
		)}&body=${encodeURIComponent(config.body)}`
	);
</script>
