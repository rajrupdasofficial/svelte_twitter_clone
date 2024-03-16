<script lang="ts">
	import Card from './Card.svelte';
	import Searchbar from './Searchbar.svelte';
	import Button from './ui/button/button.svelte';
</script>

<div class="px-5 flex-[0.6] hidden md:inline-block border py-2 space-y-4">
	<Searchbar />
	<Card let:Title>
		<Title>Subscribe to premium</Title>
		<!-- <CardTitle slot="title">This is a new title</CardTitle> -->
		<!-- <p slot="title">This is a slot component</p> -->
		<p slot="content">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
		<Button slot="action">Subscribe</Button>
	</Card>
	<Card let:Title>
		<Title>Trend for you</Title>
		<div slot="content">
			{#each { length: 20 } as _}
				<div class="space-y-1 cursor-pointer rounded py-2 hover:bg-gray-800">
					<div class="flex items-center gap-1 text-xs text-gray-500 capitalize">
						<p>music</p>
						<p>trending</p>
					</div>
					<p class="font-bold text-sm capitalize">davido</p>
					<p class="text-xs text-gray-500">255.5k</p>
				</div>
			{/each}
		</div>
	</Card>
</div>
