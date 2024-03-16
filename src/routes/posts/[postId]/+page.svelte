<script lang="ts">
	import { ArrowBottomLeft } from 'svelte-radix';
	import * as Avatar from '$lib/components/ui/avatar';
	import Button from '$lib/components/ui/button/button.svelte';
	import { ChatBubble, Heart, Share2, TwitterLogo } from 'svelte-radix';
	import TweetCard from '$lib/components/TweetCard.svelte';
</script>

<header class="p-4 flex items-center gap-3">
	<ArrowBottomLeft />
	<h1 class="capitalize font-semibold text-lg">post</h1>
</header>
<div>
	<div class="px-4">
		<div class="flex justify-between">
			<div class="flex gap-2">
				<Avatar.Root class="Root">
					<Avatar.Image
						src="../../x.svg"
						alt="hello world"
						class="bg-white  h-7 w-9 rounded-full mt-4"
					>
						<Avatar.Fallback>US</Avatar.Fallback>
					</Avatar.Image>
				</Avatar.Root>
				<div>
					<p class="capitalize font-semibold">Lara Croft</p>
					<p class="text-sm text-gray-800">@laracroft@outlook.com</p>
				</div>
			</div>
			<Button variant="secondary">Follow</Button>
		</div>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eligendi, repellat illum
			ea cupiditate unde reprehenderit nobis aperiam, nihil dolorum, ullam nisi! Enim, eaque atque.
		</p>
		<img src="../../glass.jpg" alt="glass" />
		<div class="flex justify-between text-sm mt-2">
			<button class="flex transition-all group gap-2 text-gray-800">
				<div class="p-1 group-hover:bg-blue-500/20 rounded-full">
					<Heart class="group-hover:text-blue-600" />
				</div>
				<span class="flex justify-center items-center group-hover:text-blue-500">5</span>
			</button>
			<button class="flex transition-all group gap-2 text-gray-800">
				<div class="p-1 group-hover:bg-blue-500/20 rounded-full">
					<ChatBubble class="group-hover:text-blue-600" />
				</div>
				<span class="flex justify-center items-center group-hover:text-blue-500">5</span>
			</button>
			<button class="flex transition-all group gap-2 text-gray-800">
				<div class="p-1 group-hover:bg-blue-500/20 rounded-full">
					<TwitterLogo class="group-hover:text-blue-600" />
				</div>
				<span class="flex justify-center items-center group-hover:text-blue-500">5</span>
			</button>
			<button class="flex transition-all group gap-2 text-gray-800">
				<div class="p-1 group-hover:bg-blue-500/20 rounded-full">
					<Share2 class="group-hover:text-blue-600" />
				</div>
				<span class="flex justify-center items-center group-hover:text-blue-500">5</span>
			</button>
		</div>
	</div>
	<div class="flex gap-2 px-4 py-3">
		<Avatar.Root>
			<Avatar.Image
				src="../../x.svg"
				alt="image for loop"
				class="bg-white h-7 w-8 rounded-full mt-4"
			>
				<Avatar.Fallback>US</Avatar.Fallback>
			</Avatar.Image>
		</Avatar.Root>
		<input type="text" class="bg-transparent flex-1" placeholder="Post your reply" />
		<Button>Comment</Button>
	</div>
	<div>
		<TweetCard />
		<TweetCard />
		<TweetCard />
		<TweetCard />
	</div>
</div>
