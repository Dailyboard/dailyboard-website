<template>
	<div id="how-it-works" class="overflow-hidden relative isolate" ref="target">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div
				class="mx-auto max-w-2xl py-24 sm:py-32 lg:text-center"
				data-animate="animate-fade-left"
			>
				<h2 class="text-base font-semibold leading-7 text-text-primary-weak">
					Commit to succeed
				</h2>
				<p class="mt-2 text-3xl font-bold tracking-tight text-text sm:text-4xl">
					Rediscover teamwork
				</p>
				<p class="mt-6 text-lg leading-8 text-text-weak">
					Dailyboard provides a unique way to plan your day as a team,
					using&nbsp;the&nbsp;power&nbsp;of <strong>public&nbsp;commitments</strong>.
				</p>
			</div>

			<div
				v-for="feature in features"
				:key="feature.name"
				class="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center pb-32 sm:pb-48 relative"
			>
				<div
					class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
				>
					<svg
						class="relative left-[calc(50%-11rem)] -z-10 mt-80 h-[21.1875rem] max-w-none -translate-x-1/4 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
						viewBox="0 0 1155 678"
					>
						<path
							fill="url(#f4773080-2a16-4ab4-9fd7-579fec69a4f7)"
							fill-opacity=".2"
							d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
						></path>
						<defs>
							<linearGradient
								id="f4773080-2a16-4ab4-9fd7-579fec69a4f7"
								x1="1155.49"
								x2="-78.208"
								y1=".177"
								y2="474.645"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#34d399"></stop>
								<stop offset="1" stop-color="#0d9488"></stop>
							</linearGradient>
						</defs>
					</svg>
				</div>
				<div
					:class="{ 'lg:order-last': feature.reversed }"
					data-animate="animate-fade-left"
					:data-delay="feature.reversed ? 600 : 0"
				>
					<div class="lg:max-w-lg">
						<p
							class="mt-2 text-xl font-bold tracking-tight sm:text-3xl flex items-center gap-6"
						>
							<component
								class="h-6 w-6 text-text-primary-weak"
								:is="feature.icon"
								aria-hidden="true"
							/>
							{{ feature.name }}
						</p>
						<div
							class="mt-6 text-lg leading-8 text-text-weak flex flex-col gap-3"
							v-html="feature.description"
						/>
					</div>
				</div>
				<img
					:src="feature.imageUrl"
					alt="Dailyboard - Board screenshot"
					loading="lazy"
					decoding="async"
					data-animate="animate-fade-left"
					:data-delay="feature.reversed ? 0 : 600"
					width="576"
					height="864"
				/>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import {
		RocketLaunchIcon,
		SquaresPlusIcon,
		UserCircleIcon,
	} from '@heroicons/vue/20/solid';

	const features = [
		{
			name: 'Bring everyone together',
			description: `
					<p><strong>Everyone has to plan their day somehow</strong> - using a todo app, a piece of paper or just in their mind. Dailyboard simply provides a <strong>shared space</strong> for that.</p>
					<p>Collecting the scattered plans in one place is the first step to fully synchronize your work.</p>
				`,
			icon: SquaresPlusIcon,
			delay: 100,
			reversed: false,
			imageUrl:
				'https://res.cloudinary.com/dl5xtsolh/image/upload/v1698470048/KeyFeatures__Sync_bgyeh7.png',
		},
		{
			name: 'Design your day as a team',
			description: `<p>Your tasks only show where things <strong>are</strong>. Commitments reflect where you want them <strong>to be</strong>.</p>
				<p>Visually design the desired state of your tasks by the end of a day and be confident everyone's working towards it.</p>`,
			icon: RocketLaunchIcon,
			delay: 200,
			reversed: true,
			imageUrl:
				'https://res.cloudinary.com/dl5xtsolh/image/upload/v1698470047/KeyFeatures__Map_pf2nro.png',
		},
		{
			name: 'Focus on team goals',
			description: `
				<p>"How can we create <strong>the most value</strong> in the next 24h?" - it\'s&nbsp;the fundamental question of daily planning.</p>
				<p>With Dailyboard it\'s much easier to answer the question together - spotting roadblocks and opportunities for help.</p>
			`,
			icon: UserCircleIcon,
			delay: 300,
			reversed: false,
			imageUrl:
				'https://res.cloudinary.com/dl5xtsolh/image/upload/v1698470047/KeyFeatures__Team_khcxdj.png',
		},
	];
</script>
