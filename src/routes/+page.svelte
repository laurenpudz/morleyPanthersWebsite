<script lang="ts">
	import type { LandingCardProps } from '../common/types';
	import LandingCard from '../components/landingCard.svelte';
	import { ButtonColourScheme } from '../common/types';

	const landingCards: LandingCardProps[] = [
		{
			title: 'Lessons',
			description:
				'We run a variety of classes for skaters of all ages and abilities! Whether you’re interested in artistic, speed, or something more general, we have a class for you!',
			image: 'lessons.png',
			button: { text: 'See more', href: 'club/classes', colourScheme: ButtonColourScheme.Blue }
		},
		{
			title: 'The Club',
			description:
				'As a club, we run fundraisers, social events, and much more to support our skaters. Learn about what we do as an organization and what goes on behind the scenes.',
			image: 'club.jpg',
			button: { text: 'See more', href: 'club', colourScheme: ButtonColourScheme.Red }
		},
		{
			title: 'Artistic',
			description:
				'As a club, we run fundraisers, social events, and much more to support our skaters. Learn about what we do as an organization and what goes on behind the scenes.',
			image: 'artistic.png',
			button: { text: 'See more', href: 'club', colourScheme: ButtonColourScheme.Blue }
		},
		{
			title: 'Speed',
			description:
				'As a club, we run fundraisers, social events, and much more to support our skaters. Learn about what we do as an organization and what goes on behind the scenes.',
			image: 'speed.jpg',
			button: { text: 'See more', href: 'club', colourScheme: ButtonColourScheme.Red }
		}
	];
</script>

<div class="relative w-full ps-10 pb-15">
	<img src="art1-expanded.png" alt="Artistic roller skater in a purple dress." class="w-full" />
	<div class="absolute bottom-0 left-0 flex flex-col items-start">
		<div class="bg-neutral-dark font-heading text-8xl px-5 pt-2">Morley Panthers</div>
		<div class="bg-neutral-dark font-heading text-8xl px-5 pb-2">Rollerskating Club</div>
	</div>
</div>

<div class="py-5 flex flex-wrap gap-10 mt-12 mb-12 items-start">
	{#each landingCards as card (card.title)}
		<LandingCard {...card} />
	{/each}
</div>

<!-- TODO: refactor contact us section -->
<!-- <div class="bg-blue-dark min-h-10 w-full"></div> -->
<!-- <div class="bg-neutral-dark/70 p-8 rounded-3xl">
	<p class="font-heading text-5xl">Contact us!</p>
	<p class="text-2xl underline font-bold text-red-dark">morleypresident@outlook.com</p>
</div>
<div class="p-8 mb-10">
	<p class="font-heading text-2xl">Have a question about classes?</p>
    <p>Many of our classes are held at the Morley Rollerdrome. You can contact them at:</p>
    <p class="font-heading text-2xl text-red-dark">(08) 9276 9870</p>
</div>
<img src="cut-out-skater-1.png"> -->
<div class="relative">
	<div class="bg-neutral-dark/70 p-8">
		<p class="font-heading text-5xl">Contact us!</p>
		<p class="text-2xl underline font-bold text-red-dark">morleypresident@outlook.com</p>
	</div>

	<img src="cut-out-skater-1.png" class="absolute -bottom-1/2 right-1/5 z-10 h-38 w-auto" />
	<img src="cut-out-skater-2.png" class="absolute -bottom-3/4 right-3/8 z-10 h-64 w-auto" />
</div>

<div class="p-8 mb-10">
	<p class="font-heading text-2xl">Have a question about classes?</p>
	<p>Many of our classes are held at the Morley Rollerdrome. You can contact them at:</p>
	<p class="font-heading text-2xl text-red-dark">(08) 9276 9870</p>
</div>
