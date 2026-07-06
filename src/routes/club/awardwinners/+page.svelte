<script lang="ts">
	import BasicPageWrapper from '../../../components/basicPageWrapper.svelte';
	import type { AwardWinnerProps } from '../../../common/types';
	const margAwards: AwardWinnerProps[] = [
		{
			name: 'Joe (Ozzy) Kilgallon',
			year: '2025',
			bio: "Ozzy is recognised for his long suport of Morley's artistic skating, and skaters."
		},
		{
			name: "Norman O'Rourke",
			year: '2025',
			bio: "Norman started skating here over 15 years ago. He did dance classes with his family, then was off around the world (Vietnam and UK) for 3 years. He returned in 2016 and began competing, making the state team on multiple occasions. He gained a national title in 2019, amongst many medals through the last few years. He served as team manager and all-round right hand man to Ozzy and Pam Young for the 2022 National Championships. Norman has represented Australia at the Oceania Championships, and is gaining officials' qualifications as he contributes to all aspects of the skating community."
		},
		{
			name: 'Diane Palmer',
			year: '2020',
			bio: 'Diane has given long service to skating in WA as a copetition calculator, taking over the position of chief calculator during the period of changeover to the Rollart scoring system.'
		},
		{
			name: 'Allan Wehlow',
			year: '2019',
			bio: "Allan was brought to WA by the Milletts in 1981 to enhance the standard of coaching, and was Morley's principal artistic coach until 2005. He competed in dance and figures in the 1980s, returning to dance competition for a time in the late 1990s. He also became a top-level judge, and continues to serve Australian skating in both judging and coaching roles. He is both a Morley and Skate Australia life member"
		}
	];

	const harryAwards: AwardWinnerProps[] = [
		{
			name: 'Tyler Robertson',
			year: '2025',
			bio: 'asdffdsfd'
		},
		{
			name: 'Tyler Robertson',
			year: '2020',
			bio: 'dsfaffdsdsf'
		}
	];
</script>

<BasicPageWrapper title="Margaret Hutchinson Award Winners">
	<table class="w-full my-10 text-left">
		<tbody>
			{#each margAwards as awardWinner, i (awardWinner.name)}
				<tr class:bg-neutral-medium={i % 2 == 0}>
					<td class="font-bold px-3">{awardWinner.name}</td>
					<td class="px-3">{awardWinner.year}</td>
					<td class="px-3 py-2">{awardWinner.bio} </td></tr
				>
			{/each}
		</tbody>
	</table>
</BasicPageWrapper>