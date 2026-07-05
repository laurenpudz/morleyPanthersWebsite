<script lang="ts">
	import FeatureHeading from '../../../components/featureHeading.svelte';
	import type { ChampionProps } from '../../../common/types';
	import ChampionCard from '../../../components/championCard.svelte';
	const championsInfo: ChampionProps[] = [
		{
			name: 'Matthew Williams',
			image: '/matthewwilliams.jpg',
			titles: [
				'2025 National Preliminary Mens Figures',
				'2025 National Cadet Mens Solo Dance',
				'2025 State Preliminary Mens Figures',
				'2025 State Cadet Mens Solo Dance'
			]
		},
		{
			name: 'Charlotte McGee',
			image: '/charlottemcgee.jpg',
			titles: ['2025 State Preliminary Ladies Figures']
		},
		{
			name: 'Elecia Shaw',
			image: '/eleciashaw.jpg',
			titles: [
				'2025 State Intermediate Ladies Figures',
				'2025 State Intermediate Ladies Solo Style Dance',
				'2025 State Intermediate Ladies Solo Free Dance'
			]
		},
		{
			name: 'Peter Rye and Barbara Rye',
			image: '/peterryeandbarbararye.jpg',
			titles: ['2024 State Masters Couples Dance', '2025 State Masters Couples Style Dance']
		},
		{
			name: 'Kayla Lewis',
			image: '/kaylalewis.jpg',
			titles: ['2025 State Cadet Ladies Freeskating']
		},
		{
			name: 'Mary Rutherford',
			image: '/maryrutherford.jpg',
			titles: ['2025 National Senior Ladies Freeskating', '2025 State Senior Ladies Freeskating']
		},
		{
			name: 'Willow Burr',
			image: '/willowburr.jpg',
			titles: ['2024 National Youth Ladies Solo Dance', '2024 State Youth Ladies Solo Dance']
		}
	];
</script>

<FeatureHeading title="Artistic Champions Gallery" />
<div class="flex gap-5 gap-y-12 flex-wrap items-baseline pt-10 pb-16 justify-center px-5 xl:px-0">
	{#each championsInfo as champion (champion.name)}
		<ChampionCard {...champion} />
	{/each}
</div>
