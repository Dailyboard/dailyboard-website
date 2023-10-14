<template>
	<div id="solutions" class="mx-auto pt-24 max-w-7xl px-6 sm:pt-32 lg:px-8">
		<div class="mx-auto max-w-2xl lg:text-center" data-animate="animate-fade-left">
			<h2 class="text-base font-semibold leading-7 text-text-primary-weak">
				Transform teamwork
			</h2>
			<p class="mt-2 text-3xl font-bold tracking-tight text-text sm:text-4xl">
				Solve your team's everyday problems
			</p>
			<p class="mt-6 text-lg leading-8 text-text-weak">
				All teams - being onsite, hybrid or remote - experience the same problems.
				Dailyboard is here to help you solve them once and for all!
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
		<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
			<dl
				class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3"
			>
				<div
					v-for="feature in secondaryFeatures"
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
		CakeIcon,
		ChevronDoubleUpIcon,
		ClockIcon,
		HeartIcon,
		QuestionMarkCircleIcon,
		SunIcon,
	} from '@heroicons/vue/20/solid';

	const primaryFeatures = [
		{
			name: 'Achieve sustainable productivity',
			description:
				'Maximise your outcomes by reducing waste, not compromising a healthy work culture.',
			icon: ChevronDoubleUpIcon,
		},
		{
			name: 'Raise above willpower',
			description:
				'Boost your motivation with the power of a public commitment and peer accoutability.',
			icon: ArrowTrendingUpIcon,
		},
		{
			name: 'Work in perfect sync',
			description:
				"Spot scheduling conflicts and don't waste time waiting for others when you need them.",
			icon: ClockIcon,
		},
	];

	const secondaryFeatures = [
		{
			name: 'Keep your promises',
			description: 'Forget about the question "What did we want to do yesterday?"',
			icon: QuestionMarkCircleIcon,
		},
		{
			name: 'Awaken the team spirit',
			description: 'Commit and succeed together. Celebrate your daily wins as a team.',
			icon: BoltIcon,
		},
		{
			name: 'Bring hidden work to the surface',
			description:
				"Every team is part of a larger organisation. Clearly see your team's commitments outside your team.",
			icon: SunIcon,
		},
	];
</script>
