<template>
	<nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
		<div class="flex lg:flex-1">
			<a href="#" class="-m-1.5 p-1.5 flex items-center">
				<span class="sr-only">Dailyboard</span>
				<img class="h-6 sm:h-8 lg:h-10 w-auto" :src="logoUrl" alt="" />
				<h1 class="ml-4 text-xl font-extrabold sm:text-2xl lg:text-3xl">Dailyboard</h1>
			</a>
		</div>
		<div class="flex lg:hidden">
			<button
				type="button"
				class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
				@click="mobileMenuOpen = true"
			>
				<span class="sr-only">Open main menu</span>
				<Bars3Icon class="h-6 w-6" aria-hidden="true" />
			</button>
		</div>
		<div class="hidden lg:flex lg:gap-x-12">
			<a
				v-for="item in navigation"
				:key="item.name"
				:href="item.href"
				class="text-sm font-semibold leading-6 text-text"
				>{{ item.name }}</a
			>
		</div>
		<div class="hidden lg:flex lg:flex-1 lg:justify-end">
			<a href="#" class="text-sm font-semibold leading-6 text-text"
				>Log in <span aria-hidden="true">&rarr;</span></a
			>
		</div>
	</nav>
	<Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
		<div class="fixed inset-0 z-50" />
		<DialogPanel
			class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10"
		>
			<div class="flex items-center justify-between">
				<a href="#" class="-m-1.5 p-1.5 flex items-center sm:hidden">
					<span class="sr-only">Dailyboard</span>
					<img class="h-6 sm:h-8 lg:h-10 w-auto" :src="logoUrl" alt="" />
					<h1 class="ml-4 text-xl font-extrabold">Dailyboard</h1>
				</a>
				<span class="hidden sm:block text-xl font-extrabold">Menu</span>
				<button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-400" @click="mobileMenuOpen = false">
					<span class="sr-only">Close menu</span>
					<XMarkIcon class="h-6 w-6" aria-hidden="true" />
				</button>
			</div>
			<div class="mt-6 flow-root">
				<div class="-my-6 divide-y divide-gray-500/25">
					<div class="space-y-2 py-6">
						<a
							v-for="item in navigation"
							:key="item.name"
							:href="item.href"
							class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 hover:bg-gray-800"
							>{{ item.name }}</a
						>
					</div>
					<div class="py-6">
						<a
							href="#"
							class="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 hover:bg-gray-800"
							>Log in</a
						>
					</div>
				</div>
			</div>
		</DialogPanel>
	</Dialog>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import { Dialog, DialogPanel } from '@headlessui/vue';
	import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';

	const navigation = [
		{ name: 'Product', href: '#' },
		{ name: 'Features', href: '#' },
		{ name: 'Marketplace', href: '#' },
		{ name: 'Company', href: '#' },
	];

	const mobileMenuOpen = ref(false);

	const logoUrl = ref('https://dailyboard-io-website.s3.eu-central-1.amazonaws.com/dailyboard-logo.svg');
</script>
