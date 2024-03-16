<script lang="ts">
	import { MagnifyingGlass } from 'svelte-radix';
</script>

<div class="rounded-md h-fit flex items-center px-2 bg-gray-600">
	<MagnifyingGlass class="h-5 w-5" />
	<input
		type="text"
		placeholder="search"
		class="outline-none bg-transparent flex-1 h-10 rounded-md"
	/>
</div>
