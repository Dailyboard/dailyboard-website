<template>
	<div class="overflow-hidden py-24 sm:py-32 relative isolate" ref="target">
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
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div
				class="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
			>
				<div class="lg:pr-8 lg:pt-4" data-animate="animate-fade-left">
					<div class="lg:max-w-lg">
						<h2 class="text-base font-semibold leading-7 text-text-primary-weak">
							Commit to succeed
						</h2>
						<p class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
							Rediscover teamwork
						</p>
						<p class="mt-6 text-lg leading-8 text-text-weak">
							Dailyboard provides a unique way to plan, monitor and synchronize
							your team's
							<strong>commitments</strong>.
						</p>
						<dl class="mt-10 max-w-xl space-y-8 text-base leading-7 lg:max-w-none">
							<div
								v-for="feature in features"
								:key="feature.name"
								class="relative pl-9"
							>
								<dt class="inline font-semibold">
									<component
										class="absolute top-1 left-1 h-5 w-5 text-text-primary-weak"
										:is="feature.icon"
										aria-hidden="true"
									/>
									{{ feature.name }}
								</dt>
								{{ ' ' }}
								<dd class="inline" v-html="feature.description"></dd>
							</div>
						</dl>
					</div>
				</div>
				<img
					src="https://dailyboard-io-website.s3.eu-central-1.amazonaws.com/dailyboard_homepage_hero_app_screenshot.png"
					alt="Product screenshot"
					class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
					data-animate="animate-fade-right"
					data-delay="300"
					width="2432"
					height="1442"
				/>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { RocketLaunchIcon, SquaresPlusIcon, SparklesIcon } from '@heroicons/vue/20/solid';

	const features = [
		{
			name: 'Focus on the future.',
			description:
				'Your tasks only tell you where things <strong><u>are</u></strong>. Commitments tell everyone, where you want them <strong><u>to be</u></strong>.',
			icon: RocketLaunchIcon,
		},
		{
			name: 'Plan together.',
			description:
				"See your teammates' commitments from all contexts and spot roadblocks ahead of time.",
			icon: SquaresPlusIcon,
		},
		{
			name: 'Collect data and improve.',
			description:
				'Use commitments history and analytics to improve and elevate your performance.',
			icon: SparklesIcon,
		},
	];
</script>
