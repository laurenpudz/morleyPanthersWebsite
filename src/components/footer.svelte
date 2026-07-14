<script lang="ts">
	import { IconBrandInstagram } from '@tabler/icons-svelte';
	import { IconBrandFacebook } from '@tabler/icons-svelte';
	const links = [
		// {
		// 	title: "What's New",
		// 	link: 'whatsnew',
		// 	children: [
		// 		{ title: '2026 Nationals Figure Draws', link: '/2026nationalsfiguredraw' },
		// 		{ title: '2026 Leauge 3 Program', link: '/leauge3program' }
		// 	]
		// },
		{
			title: 'Club',
			link: 'club',
			children: [
				{ title: 'Classes', link: '/club/classes' },
				{ title: 'Committee', link: '/club/committee' },
				{ title: 'Life Members', link: '/club/lifemembers' },
				{ title: 'Award Winners', link: '/club/awardwinners' },
				{ title: 'Minutes', link: '/club/minutes' }
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
</script>

<div class="bg-blue-dark px-10 pt-20">
	<div class="flex-col gap-3 max-w-7xl mx-auto">
		<div class="flex gap-12 justify-between">
			<div class="flex gap-1 pe-4 self-centre">
				<img src="morleypanthers.png" class="w-32 sm:w-64 xl:w-72 shrink-0" alt="Morley Panthers">
				<img src="panther.svg" class="w-24 sm:w-48 xl:w-64 shrink-0" alt="Morley Panthers' panther logo"/>
			</div>
			{#each links as link (link.title)}
				<div class="hidden lg:block">
					<button class="font-heading text-2xl text-white pb-3">{link.title}</button>
					<div class="text-white flex flex-col gap-2">
						{#each link.children as child (`${child.title}${link.title}`)}
							<a class="hover:underline" href={child.link}>{child.title}</a>
						{/each}
					</div>
				</div>
			{/each}
		</div>

		<div class="flex justify-between pb-5 pt-12">
			<p class="text-white">© 2026 Morley Panthers</p>
			<div class="flex">
				<IconBrandInstagram stroke={2} size={32} class="text-white" />
				<IconBrandFacebook stroke={2} size={32} class="text-white" />
			</div>
		</div>
	</div>
</div>
