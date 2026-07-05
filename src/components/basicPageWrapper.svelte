<script>
	import FeatureHeading from './featureHeading.svelte';

	let { title, children } = $props();
</script>

<FeatureHeading {title} />

<div class="px-5 xl:px-0 flex flex-col items-start">
	{@render children?.()}
</div>
