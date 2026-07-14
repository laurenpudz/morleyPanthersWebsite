<script lang="ts">
	import { FileText } from 'lucide-svelte';
	import BasicPageWrapper from '../../../components/basicPageWrapper.svelte';
	import type { DownloadDocProps } from '../../../common/types';

	const downloadList: DownloadDocProps[] = [
		{
			name: '2026 Australian Championships Notice',
			link: ''
		},
		{
			name: '2026 Development Competitions Handbook',
			link: ''
		},
        		{
			name: '2026 Nationals Figure Draws',
			link: ''
		},
        		{
			name: 'Proficiency Test Schedule Solo Dance',
			link: ''
		},
        		{
			name: 'Skate Australia Artistic (external link)',
			link: ''
		},
	];
</script>
<BasicPageWrapper title="Artistic Documents">
	{#each downloadList as download (download.name)}
		<div class="flex gap-3 items-center hover:text-red-dark">
			<FileText size="17" />
			<a href={download.link}>{download.name}</a>
		</div>
	{/each}
</BasicPageWrapper>
