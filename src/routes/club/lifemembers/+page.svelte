<script lang="ts">
	import BasicPageWrapper from '../../../components/basicPageWrapper.svelte';
	import type { LifeMemberProps } from '../../../common/types';
	const lifeMembers: LifeMemberProps[] = [
		{
			name: 'Eric Millett',
			year: '1988',
			image: '',
			bio: 'Eric founded the Morley Rollerdrome, helped establish competitive skating in WA in 1980, and established the strong working relationship between the rink and the club that persists to this day. Even after passing over management of the Rollerdome in 1992, he remained a strong supporter of skating in WA. He was made a life member of Skate Australia in 1991'
		},
		{
			name: 'Alma Millett',
			year: '1989',
			image: '',
			bio: 'With husband Eric, Alma founded the Morley Rollerdrome and along with it the Morley Panthers Roller Skating Club. She held many positions with the club committee, including club president in the early 1980s, through to Treasurer and Registar in 1994. She was the main source of skating costumes for artistic skaters, and continues to support the club in many ways.'
		},
		{
			name: 'Tom Clements',
			year: '1996',
			image: '',
			bio: 'Tom Clements was the inaugural Speed Coach for the Morley Club. Although Tom himself could not skate, he went on to coach the Morley Club to numerous Top Overall Club trophies which were awarded at the State Championships. He coached a number of State and National Champions.'
		},
		{
			name: 'Allan Wehlow',
			year: '2002',
			image: '',
			bio: "Allan was brought to WA by the Milletts in 1981 to enhance the standard of coaching, and was Morley's principal artistic coach until 2005. He also became a top-level judge, and continues to serve Australian skating in both roles."
		},
		{
			name: 'Pauline Robertson',
			year: '2008',
			image: '',
			bio: 'Pauline became involved in skating through her sons, who were highly successful speed skaters. She was club president for four years running, and has since been a very capable administrator for the WA chapter of Skate Australia. She was made a life member of Skate Australia in 2007.'
		},
		{
			name: 'Harry Adler',
			year: '2009',
			image: '',
			bio: "Harry first got involved in skating when his daughter commmenced speed skating at Morley in 1980. He became a competition referee, and officiated at National and Oceania championships from 1985 to 2016. He also headed the WA speed officials' committee, and the WA speed chapter of Skate Australia. He was made a life member of Skate Australia in 2006."
		},
		{
			name: 'Ron Martinez',
			year: '2018',
			image: '',
			bio: "Ron was involved in coaching at Morley almost from the establishment of the rink in 1980. He was forced to take a break in the late 1990s due to a road accident injury, but returned to coaching in 2004. He became Morley's principal artistic coach when Allan Wehlow reduced his involvement in 2005, and subsequently was a major force in the development of new talent in the club. "
		},
		{
			name: 'Barbara Rye',
			year: '2021',
			image: '',
			bio: 'Barbara has been a member of the club and an artistic competitor since 1994, and a commissioned official (calculator and judge) since 2001. She was club secretary for the longest period of any member, 16 years, from 2004 to 2020.'
		},
		{
			name: 'Joe (Ozzy) Kilgallon',
			year: '2023',
			image: '',
			bio: 'Ozzy is recognised for his long involvement and support of our club, his efforts to promote the sport of rollerskating for his valuable contribution to Skate WA, and his part in organising Art Nationals in Bunbury WA this year.'
		},
		{
			name: 'Peter Rye',
			year: '2024',
			image: '',
			bio: "Peter has served the club in numerous ways, starting with learn-to-skate classes in 1994, then Artistic Representative (twice, the first commencing 1996) and Club President. He manages the club web site, for a long period handled the artistic branch's music system, has judged at almost every competition since 2003, and is a qualified artistic coach. He has also competed at up to national level in figures, and in dance with his wife Barbara."
		}
	];
</script>

<!-- TODO: shaded for deceased life members only -->

<BasicPageWrapper title="Life Members">
	<table class="w-full my-10 text-left">
		<tbody>
			{#each lifeMembers as lifeMember, i (lifeMember.name)}
				<tr class:bg-neutral-medium={i % 2 == 0}>
					<td class="font-bold px-3">{lifeMember.name}</td>
					<td class="px-3">{lifeMember.year}</td>
					<td class="px-3 py-2">{lifeMember.bio} </td></tr
				>
			{/each}
		</tbody>
	</table>
</BasicPageWrapper>
