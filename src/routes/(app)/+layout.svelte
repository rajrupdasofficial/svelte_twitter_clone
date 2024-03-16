<script lang="ts">
	import RightSide from '$lib/components/RightSide.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import '../../app.css';
</script>

<div class="flex border w-full max-w-6xl mx-auto">
	<!---side bar-->
	<Sidebar />
	<main class="min-h-screen flex-1">
		<!--Slot is for showing global styling effect inside a layout.svelte file -->
		<slot />
	</main>
	<!--right side-->
	<RightSide />
</div>
