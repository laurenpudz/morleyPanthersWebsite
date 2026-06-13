<script lang="ts">
	let currOpen: string | null = $state(null);
	const links = [
		{
			title: "What's New",
			link: 'whatsnew',
			children: [
				{ title: '2026 Nationals Figure Draws', link: '2026nationalsfiguredraw' },
				{ title: '2026 Leauge 3 Program', link: 'leauge3program' }
			]
		},
		{
			title: 'Club',
			link: 'club',
			children: [
				{ title: 'Classes', link: 'club/classes' },
				{ title: 'Committee', link: 'club/committee' },
				{ title: 'Life Members', link: 'club/lifemembers' },
				{ title: 'Award Winners', link: 'club/awardwinners' },
				{ title: 'Minutes', link: 'club/minutes' },
				{ title: 'Downloads', link: 'club/downloads' },
				{ title: 'Classes', link: 'club/classes' }
			]
		},
		{
			title: 'Artistic',
			link: 'artistic',
			children: [
				{ title: 'The Sport', link: 'artistic/thesport' },
				{ title: 'Calendar', link: 'artistic/calendar' },
				{ title: 'Skaters', link: 'artistic/skaters' },
				{ title: 'Videos', link: 'artistic/videos' },
				{ title: 'Downloads', link: 'artistic/downloads' }
			]
		},
		{
			title: 'Speed',
			link: 'speed',
			children: [
				{ title: 'The Sport', link: 'speed/thesport' },
				{ title: 'Calendar', link: 'speed/calendar' }
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
</script>

<nav class="bg-neutral-dark p-5">
	<div class="flex justify-between items-center px-10">
		<p class="font-heading text-xl">Morley Panthers</p>
		<div class="flex gap-5">
			{#each links as link (link.title)}
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<div
					class="hover:text-red-dark"
					onmouseenter={() => (currOpen = link.title)}
					onmouseleave={() => (currOpen = null)}
				>
					<button>{link.title}</button>
					{#if currOpen == link.title}
						<div class="bg-neutral-dark text-black flex flex-col gap-3 absolute p-5">
							{#each link.children as child (child.title)}
								<a class="hover:text-red-dark" href={child.link}>{child.title}</a>
							{/each}
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</nav>
