<script lang="ts">
	import type { ChampionProps } from '../common/types';
	// import { Star } from 'lucide-svelte';
	let champion: ChampionProps = $props();
</script>

<div class="flex flex-col items-center gap-5">
	<img src={champion.image} alt={champion.name} class="h-96" />
	<div class="flex flex-col max-w-64 items-center bg-neutral-dark p-5">
		<div>
			<p class="font-heading text-2xl text-center">{champion.name}</p>
		</div>
		<p class="text-xs text-center">
			{#each champion.titles as title, i (title)}
				{title}
				{#if i != champion.titles.length - 1}
					{"  ★  "}
				{/if}
			{/each}
		</p>
	</div>
</div>
