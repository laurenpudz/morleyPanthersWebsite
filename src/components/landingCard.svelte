<script lang="ts">
	import { ChevronRight } from 'lucide-svelte';
	import type { LandingCardProps } from '../common/types';
	import { ButtonColourScheme } from '../common/types';

	let card: LandingCardProps = $props();
</script>

<!-- <div class="flex items-center w-fit">
	<img src={card.image} alt={card.title} class="shrink-0 z-10 w-64 h-48 object-cover" />
	<div class="bg-neutral-dark max-w-md ps-20 pe-10 py-7 -ml-10"> -->

<div class="flex items-center flex-1 min-w-lg max-w-2xl">
	<img src={card.image} alt={card.title} class="shrink-0 z-10 w-64 h-48 object-cover" />
	<div class="bg-neutral-dark min-w-0 flex-1 ps-20 pe-10 py-7 -ml-10">
		<p class="font-heading text-3xl">{card.title}</p>
		<p class="mt-3">{card.description}</p>
		<!-- refactor button later -->
		{#if card.button}
			<div class="flex justify-end mt-5">
				<div
					class="{card.button.colourScheme == ButtonColourScheme.Blue
						? 'bg-blue-dark hover:bg-blue-darker'
						: 'bg-red-dark hover:bg-red-darker'} flex gap-2 text-white font-heading ps-5 pe-2 py-2 rounded-md w-fit"
				>
					<a href={card.button.href} class="">{card.button.text}</a>
					<ChevronRight />
				</div>
			</div>{/if}
	</div>
</div>
