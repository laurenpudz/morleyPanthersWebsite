<script lang="ts">
	import { FileText } from 'lucide-svelte';
	import BasicPageWrapper from '../../../components/basicPageWrapper.svelte';
	import type { MinutesDocProps } from '../../../common/types';
	import type { DownloadDocProps } from '../../../common/types';

	const minutesList: MinutesDocProps[] = [
		{
			displayName: 'January 2024',
			link: '',
			year: '2024'
		},
		{
			displayName: 'January 2024 Treasurers Report',
			link: '',
			year: '2024'
		},
		{
			displayName: 'January 2024 President & Registrar Reports',
			link: '',
			year: '2024'
		},
		{
			displayName: 'January 2024 Artistic Report',
			link: '',
			year: '2024'
		},
		{
			displayName: 'January 2023',
			link: '',
			year: '2023'
		},
		{
			displayName: 'January 2023 Treasurers Report',
			link: '',
			year: '2023'
		},
		{
			displayName: 'January 2023 President & Registrar Reports',
			link: '',
			year: '2023'
		},
		{
			displayName: 'January 2023 Artistic Report',
			link: '',
			year: '2023'
		}
	];

	const downloadList: DownloadDocProps[] = [
		{
			name: 'Morley Panthers Club By-Laws',
			link: ''
		},
		{
			name: 'January 2024 Treasurers Report',
			link: ''
		}
	];

	const minutesByYear: Record<string, MinutesDocProps[]> = minutesList.reduce(
		(acc, minute) => {
			if (!acc[minute.year]) {
				acc[minute.year] = [];
			}
			acc[minute.year].push(minute);
			console.log(acc);
			return acc;
		},
		{} as Record<string, MinutesDocProps[]>
	);
</script>

<BasicPageWrapper title="Club Meeting Minutes">
	<p>Previous monthly and Annual General meetings in reverse date order:</p>
	<div class="flex-col pt-5">
		{#each Object.keys(minutesByYear) as year (year)}
			<p class="font-heading text-2xl pt-5">{year}</p>
			{#each minutesByYear[year] as minutes (minutes.displayName)}
				<div class="flex gap-3 items-center hover:text-red-dark">
					<FileText size="17" />
					<a href={minutes.link}>{minutes.displayName}</a>
				</div>
			{/each}
		{/each}
	</div>
</BasicPageWrapper>
<BasicPageWrapper title="Club Documents">
	{#each downloadList as download (download.name)}
		<div class="flex gap-3 items-center hover:text-red-dark">
			<FileText size="17" />
			<a href={download.link}>{download.name}</a>
		</div>
	{/each}
</BasicPageWrapper>
