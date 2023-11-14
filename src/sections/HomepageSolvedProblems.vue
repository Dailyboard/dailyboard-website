<template>
	<div class="mx-auto px-6 py-24 max-w-7xl sm:py-32 lg:px-8">
		<div class="mx-auto max-w-2xl lg:text-center" data-animate="animate-fade-left">
			<h2 class="text-base font-semibold leading-7 text-text-primary-weak">Benefits</h2>
			<p class="mt-2 text-3xl font-bold tracking-tight text-text sm:text-4xl">
				Rediscover teamwork
			</p>
			<p class="mt-6 text-lg leading-8 text-text-weak">
				Whether you are an onsite, hybrid, or remote team, Dailyboard will bring you
				closer than ever. Celebrate wins and take on challenges together!
			</p>
		</div>
		<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
			<dl
				class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3"
			>
				<div
					v-for="feature in primaryFeatures"
					:key="feature.name"
					class="flex flex-col"
					data-animate="animate-fade-left"
					data-delay="300"
				>
					<dt
						class="flex items-center gap-x-3 text-base font-extrabold leading-7 text-text"
					>
						<component
							:is="feature.icon"
							class="h-5 w-5 flex-none text-text-primary-weak"
							aria-hidden="true"
						/>
						{{ feature.name }}
					</dt>
					<dd
						class="mt-4 flex flex-auto flex-col text-base leading-7 text-text-weak"
					>
						<p class="flex-auto">{{ feature.description }}</p>
					</dd>
				</div>
			</dl>
		</div>
	</div>
</template>

<script setup>
	import {
		ArrowTrendingUpIcon,
		BoltIcon,
		ChevronDoubleUpIcon,
	} from '@heroicons/vue/20/solid';

	const primaryFeatures = [
		{
			name: 'Awaken the team spirit',
			description: 'Commit and succeed together. Celebrate your daily wins as a team.',
			icon: BoltIcon,
		},
		{
			name: 'Raise above willpower',
			description:
				'Boost your motivation with the power of a public commitment and peer accountability.',
			icon: ArrowTrendingUpIcon,
		},
		{
			name: 'Achieve sustainable productivity',
			description:
				'Maximize your outcomes by reducing wasted time, not compromising a healthy work culture.',
			icon: ChevronDoubleUpIcon,
		},
	];
</script>
