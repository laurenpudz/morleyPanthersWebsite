<script lang="ts">
	import BasicPageWrapper from '../../../components/basicPageWrapper.svelte';
	import type { CommMemberProps } from '../../../common/types';
	const commMembers: CommMemberProps[] = [
		{ role: 'Secretary', name: 'Michelle Lewis', email: 'MorleySecretary@outlook.com' },
		{ role: 'Treasurer', name: 'Karen Goronski', email: 'MorleyTreasurer@outlook.com' },
		{ role: 'Registrar', name: 'Vacant', email: '' },
		{ role: 'Fundraising Officer', name: 'Vacant', email: '' },
		{ role: 'Artistic Rep.', name: 'Kate Williams', email: 'MorleyArtRep@outlook.com' },
		{ role: 'Speed Rep.', name: 'Ashton Walden', email: 'MorleySpeedRep@outlook.com' }
	];
</script>

<BasicPageWrapper title="Committee">
	<table class="w-full my-10 text-left">
		<tbody>
			{#each commMembers as commMember, i (commMember.role)}
				<tr class:bg-neutral-medium={i % 2 == 0}>
					<td class="font-bold">{commMember.role}</td>
					<td>{commMember.name}</td>
					<td>
						{#if commMember.email}
							<a href={`mailto:${commMember.email}`} class="text-blue-800 hover:underline">
								{commMember.email.trim()}
							</a>
						{/if}
					</td></tr
				>
			{/each}
		</tbody>
	</table>
</BasicPageWrapper>
