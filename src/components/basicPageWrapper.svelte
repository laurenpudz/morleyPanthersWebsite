<script lang="ts">
	import FeatureHeading from './featureHeading.svelte';
	let { title, children } = $props();
</script>

<FeatureHeading {title} />

<div class="px-5 xl:px-0 pb-10 flex flex-col items-start">
	{@render children?.()}
</div>
