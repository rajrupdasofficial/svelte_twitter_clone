<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import { ChatBubble, Heart, Share2, TwitterLogo } from 'svelte-radix';
</script>

<a href="/posts/post-1" class="flex gap-2 border-t p-3">
	<Avatar.Root class="Root">
		<Avatar.Image src="./x.svg" alt="image for loop" class="bg-white h-7 w-8 rounded-full mt-4">
			<Avatar.Fallback>US</Avatar.Fallback>
		</Avatar.Image>
	</Avatar.Root>
	<div class="w-full">
		<div class="flex items-center text-xs text-gray gap-1">
			<h3 class="capitalze text-sm font-semibold text-white">laracroft</h3>
			<p class="text-gray-600">@laracroft@outlook.com</p>
			.
			<p class="text-gray-600">22h</p>
		</div>
		<p class="text-sm mb-2">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe praesentium fugiat neque
			consequatur iusto dignissimos dolores, sequi consequuntur facilis vitae.
		</p>
		<img src="./glass.jpg" alt="glass" class="rounded-sm mt-2 object-contain w-full" />
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
</a>
