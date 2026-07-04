<script lang="ts">
	import type { HeadingProps } from '../common/types';
	let heading: HeadingProps = $props();
</script>

<div class="flex items-start">
	<p class="bg-neutral-dark font-heading md:text-4xl text-xl px-5 py-2 grow-0">{heading.title}</p>
</div>
