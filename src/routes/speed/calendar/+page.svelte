<script lang="ts">
	import { SvelteDate } from 'svelte/reactivity';
	import BasicPageWrapper from '../../../components/basicPageWrapper.svelte';
	import type { CalendarEventProps } from '../../../common/types';
	let currTab: string = $state('upcoming');

	const events: CalendarEventProps[] = [
		{
			startDate: '11-12-21',
			endDate: '11-12-21',
			name: 'Leauge 8',
			venue: ''
		},
		{
			startDate: '20-11-21',
			endDate: '20-11-21',
			name: 'Leauge 7',
			venue: ''
		},
	];
	function parseEventDate(dateStr: string): Date {
		const [day, month, year] = dateStr.split('-').map(Number);
		return new SvelteDate(year, month - 1, day);
	}

	function isPastEvent(endDate: string): boolean {
		const today = new SvelteDate();
		today.setHours(0, 0, 0, 0);
		return parseEventDate(endDate) < today;
	}

	const upcomingEvents: CalendarEventProps[] = $derived(
		events.filter((event) => !isPastEvent(event.endDate))
	);

	const pastEvents: CalendarEventProps[] = $derived(
		events.filter((event) => isPastEvent(event.endDate))
	);
</script>

<!-- TODO: Pagination -->
<BasicPageWrapper title="Speed Calendar">
	<!-- tab toggle -->
	<div class="bg-blue-dark flex items-center rounded-md">
		{#if currTab == 'upcoming'}
			<div class="bg-neutral-light font-heading m-1 ps-3 pe-2 py-3 rounded-md">upcoming</div>
			<button
				class="text-white font-heading m-1 py-3 p-3 hover:bg-blue-darker rounded-md"
				onclick={() => {
					currTab = 'past';
				}}>past</button
			>
		{/if}
		{#if currTab == 'past'}
			<button
				class="text-white font-heading m-1 py-3 p-3 hover:bg-blue-darker rounded-md"
				onclick={() => {
					currTab = 'upcoming';
				}}>upcoming</button
			>
			<div class="bg-neutral-light font-heading m-1 ps-3 pe-2 py-3 rounded-md">past</div>
		{/if}
	</div>
	<table class="w-full my-10 text-left">
		<thead>
			<tr>
				<th scope="col">Dates</th>
				<th scope="col">Events</th>
				<th scope="col">Venue</th>
			</tr>
		</thead>
		<tbody>
			<!-- upcoming events -->
			<!-- TODO: refactor to reuse component in past events tab -->
			{#if currTab == 'upcoming'}
				{#each upcomingEvents as event, i (event.name)}
					<!-- <tr class:bg-neutral-dark={i % 2 == 0}> -->
					<tr class:bg-neutral-medium={i % 2 == 0}>
						<th scope="row">
							{#if event.startDate != event.endDate}{event.startDate}-{/if}{event.endDate}</th
						>
						<td>{event.name}</td>
						<td
							>{#if event.venue}{event.venue}{/if}</td
						>
					</tr>
				{/each}
			{/if}
			<!-- past events -->
			{#if currTab == 'past'}
				{#each pastEvents as event, i (event.name)}
					<!-- <tr class:bg-neutral-dark={i % 2 == 0}> -->
					<tr class:bg-neutral-medium={i % 2 == 0}>
						<th scope="row">
							{#if event.startDate != event.endDate}{event.startDate}<span class="font-medium">
									{' to '}
								</span>{/if}{event.endDate}</th
						>
						<td>{event.name}</td>
						<td
							>{#if event.venue}{event.venue}{/if}</td
						>
					</tr>
				{/each}
			{/if}
		</tbody>
	</table>
</BasicPageWrapper>
