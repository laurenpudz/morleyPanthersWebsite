<script lang="ts">
	import { FileText } from 'lucide-svelte';
	import BasicPageWrapper from '../../../components/basicPageWrapper.svelte';
	import type { CoachProps } from '../../../common/types';

	const downloadList: CoachProps[] = [
		{
			name: 'Placeholder Coach One',
			bio: 'Placeholder coach one bio. Some more information about placeholder coach one.',
            certifications: ['Example international certification', 'Example national certification']
		},
		{
			name: 'Elecia Shaw',
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
<BasicPageWrapper title="Artistic Coaches">
	{#each downloadList as download (download.name)}
		<div class="flex gap-3 items-center hover:text-red-dark">
			<FileText size="17" />
			<a href={download.link}>{download.name}</a>
		</div>
	{/each}
</BasicPageWrapper>
