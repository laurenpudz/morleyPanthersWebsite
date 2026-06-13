<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '../components/navbar.svelte';
	import Footer from '../components/footer.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div class="flex flex-col min-h-screen">
	<div class="sticky top-0 z-50">
		<Navbar />
	</div>
	<main class="flex-1 bg-neutral-light">
		<div class="max-w-screen-xl mx-auto">
			{@render children()}
		</div>
	</main>
	<Footer />
</div>
