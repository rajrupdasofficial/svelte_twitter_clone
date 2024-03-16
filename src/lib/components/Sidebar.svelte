<script lang="ts">
	import {
		Bell,
		DoubleArrowLeft,
		EnvelopeClosed,
		Home,
		Icon,
		MagnifyingGlass,
		Pencil1,
		Person,
		Plus,
		Reader
	} from 'svelte-radix';
	import Button from './ui/button/button.svelte';
	import * as Avatar from '$lib/components/ui/avatar';
	const sidebarOptions = [
		{
			icon: Home,
			title: 'Home',
			href: '/'
		},
		{
			icon: MagnifyingGlass,
			title: 'Explorer',
			href: '/search'
		},
		{
			icon: Bell,
			title: 'notification',
			href: '/'
		},

		{
			icon: EnvelopeClosed,
			title: 'messages',
			href: '/'
		},
		{
			icon: Reader,
			title: 'lists',
			href: '/'
		},
		{
			icon: Person,
			title: 'communities',
			href: '/'
		},
		{
			icon: Plus,
			title: 'premium',
			href: '/'
		},
		{
			icon: DoubleArrowLeft,
			title: 'logout',
			href: '/login'
		}
	];
</script>

<div
	class="px-3 md:flex-[0.2] h-screen md:px-2 border flex justify-between flex-col sticky z-10 top-0 left-0"
>
	<div class="mt-10">
		{#each sidebarOptions as { href, icon, title }}
			<a {href} class="flex gap-[22px] hover:bg-white/10 p-2 w-fit rounded-full">
				<svelte:component this={icon} class="w-7 h-7" />
				<p class="text-lg capitalize hidden md:inline-block pr-5">{title}</p>
			</a>
		{/each}
	</div>
	<Button class="md:py-6 md:w-full">
		<Pencil1 class="md:mr-2 h-4 w-4" />
		<span class="hidden md:inline">Post</span>
	</Button>
	<div class="flex gap-2 items-center justify-center">
		<Avatar.Root class="Root">
			<Avatar.Image src="./x.svg" alt="hello world" class="bg-white  h-7 w-9 rounded-full mt-4">
				<Avatar.Fallback>US</Avatar.Fallback>
			</Avatar.Image>
		</Avatar.Root>
		<div class="hidden md:inline-block">
			<p class="font-medium capitalize">Lara Croft</p>
			<p class="text-gray-800">laracroft@equinix.com</p>
		</div>
	</div>
</div>
