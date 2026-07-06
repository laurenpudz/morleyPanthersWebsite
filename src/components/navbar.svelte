<script lang="ts">
	import { Menu, ChevronDown, ChevronRight } from 'lucide-svelte';
	import { resolve } from '$app/paths';

	let currOpen: string | null = $state(null);
	let mobileMenu = $state(false);
	const links = [
		{
			title: "What's New",
			link: 'whatsnew',
			children: [
				{ title: '2026 Nationals Figure Draws', link: '/2026nationalsfiguredraw' },
				{ title: '2026 Leauge 3 Program', link: '/leauge3program' }
			]
		},
		{
			title: 'Club',
			link: 'club',
			children: [
				{ title: 'Classes', link: '/club/classes' },
				{ title: 'Committee', link: '/club/committee' },
				{ title: 'Life Members', link: '/club/lifemembers' },
				{ title: 'Award Winners', link: '/club/awardwinners' },
				{ title: 'Minutes', link: '/club/minutes' },
				{ title: 'Downloads', link: '/club/downloads' }
			]
		},
		{
			title: 'Artistic',
			link: 'artistic',
			children: [
				{ title: 'The Sport', link: '/artistic/thesport' },
				{ title: 'Calendar', link: '/artistic/calendar' },
				{ title: 'Skaters', link: '/artistic/skaters' },
				{ title: 'Coaches', link: '/artistic/coaches' },
				{ title: 'Videos', link: '/artistic/videos' },
				{ title: 'Downloads', link: '/artistic/downloads' }
			]
		},
		{
			title: 'Speed',
			link: 'speed',
			children: [
				{ title: 'The Sport', link: '/speed/thesport' },
				{ title: 'Calendar', link: '/speed/calendar' }
			]
		},
		{
			title: 'Links',
			link: 'links',
			children: [
				{ title: 'Artistic Nominations', link: '/' },
				{ title: 'Morley Rollerdrome', link: '/' },
				{ title: 'Skate WA', link: '/' },
				{ title: 'Skate Australia', link: '/' }
			]
		}
	];
	// TODO: probs include this in the code instead of defining here
	const topLevelLinkTitles = links.map((link) => link.title);
</script>

<nav class="bg-neutral-dark py-5 drop-shadow-xl">
	<div class="flex justify-between items-center px-10">
		<a class="font-heading text-xl" href={resolve('/')}>Morley Panthers</a>

		<!-- Hamburger (mobile) -->
		<Menu class="md:hidden" onclick={() => (mobileMenu = !mobileMenu)} />

		<!-- Main desktop nav -->
		<div class="hidden md:flex gap-5">
			{#each links as link (link.title)}
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<div
					class="hover:text-red-dark"
					onmouseenter={() => (currOpen = link.title)}
					onmouseleave={() => (currOpen = null)}
				>
					<button class="font-heading text-lg">{link.title}</button>
					{#if currOpen == link.title}
						<div class="bg-neutral-dark text-black flex flex-col gap-3 absolute p-5">
							{#each link.children as child (child.title)}
								<a class="hover:text-red-dark" href={resolve(child.link)}>{child.title}</a>
							{/each}
						</div>
					{/if}
				</div>
			{/each}
		</div>

		<!-- Main mobile nav -->
	</div>
	{#if mobileMenu}
		<div class="md:hidden flex-col px-5 py-2 absolute bg-neutral-dark w-full">
			{#each links as link (link.title)}
				<div
					class="flex gap-1 pt-2 items-center w-full {topLevelLinkTitles.indexOf(link.title) !=
					links.length - 1
						? 'border-b'
						: ''}"
				>
					<button
						onclick={() => (currOpen == link.title ? (currOpen = null) : (currOpen = link.title))}
						>{link.title}</button
					>
					{#if link.children && currOpen == link.title}
						<ChevronDown size={16} />
					{:else if link.children}
						<ChevronRight size={16} />
					{/if}
				</div>

				{#if currOpen == link.title}
					<div class="flex flex-col gap-2 py-2">
						{#each link.children as child (child.title)}
							<a class="hover:text-red-dark ps-5" href={resolve(child.link)}>{child.title}</a>
						{/each}
					</div>
				{/if}
			{/each}
		</div>
	{/if}
</nav>
