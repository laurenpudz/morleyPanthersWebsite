<script lang="ts">
	import BasicPageWrapper from '../../../components/basicPageWrapper.svelte';
	import type { CalendarClassProps } from '../../../common/types';
	import { CalendarDay } from '../../../common/types';
	import { Temporal } from 'temporal-polyfill';

	const classes: CalendarClassProps[] = [
		// SUNDAY ----------------------------
		{
			name: 'Artistic Training',
			startTime: '07:00:00',
			endTime: '09:00:00',
			day: CalendarDay.Sunday,
			colour: '#99d1db'
		},
		{
			name: 'Development Class',
			startTime: '09:00:00',
			endTime: '09:30:00',
			day: CalendarDay.Sunday,
			colour: '#babbf1'
		},
		{
			name: 'Learn to Skate Class',
			startTime: '09:30:00',
			endTime: '10:00:00',
			day: CalendarDay.Sunday,
			colour: '#81c8be'
		},
		{
			name: 'Artistic Training',
			startTime: '15:30:00',
			endTime: '18:30:00',
			day: CalendarDay.Sunday,
			colour: '#99d1db'
		},
		// SATURDAY ----------------------------
		{
			name: 'Artistic Training',
			startTime: '07:00:00',
			endTime: '09:00:00',
			day: CalendarDay.Saturday,
			colour: '#99d1db'
		},
		{
			name: 'Development Class',
			startTime: '09:00:00',
			endTime: '09:30:00',
			day: CalendarDay.Saturday,
			colour: '#babbf1'
		},
		{
			name: 'Learn to Skate Class',
			startTime: '09:30:00',
			endTime: '10:00:00',
			day: CalendarDay.Saturday,
			colour: '#81c8be'
		},
		{
			name: 'Artistic Training',
			startTime: '15:30:00',
			endTime: '18:30:00',
			day: CalendarDay.Saturday,
			colour: '#99d1db'
		},
		{
			name: 'Artistic Training',
			startTime: '15:30:00',
			endTime: '18:00:00',
			day: CalendarDay.Monday,
			colour: '#99d1db'
		},
		{
			name: 'Dance Skills Class',
			startTime: '18:00:00',
			endTime: '18:30:00',
			day: CalendarDay.Monday,
			colour: '#ea999c'
		},
		{
			name: 'Compulsory Dance Class',
			startTime: '18:30:00',
			endTime: '19:00:00',
			day: CalendarDay.Monday,
			colour: '#ea999c'
		},
		{
			name: 'Learn to Skate Class',
			startTime: '16:00:00',
			endTime: '16:45:00',
			day: CalendarDay.Tuesday,
			colour: ''
		},
		{
			name: 'Development Class',
			startTime: '16:45:00',
			endTime: '17:30:00',
			day: CalendarDay.Tuesday,
			colour: ''
		},
		{
			name: 'Speed Class',
			startTime: '17:30:00',
			endTime: '19:00:00',
			day: CalendarDay.Tuesday,
			colour: '#a6d189'
		},
		{
			name: 'Artistic Training',
			startTime: '15:30:00',
			endTime: '18:00:00',
			day: CalendarDay.Wednesday,
			colour: '#99d1db'
		},
		{
			name: 'Figures Class',
			startTime: '18:00:00',
			endTime: '18:30:00',
			day: CalendarDay.Wednesday,
			colour: '#ea999c'
		},
		{
			name: 'Artistic Training',
			startTime: '15:30:00',
			endTime: '18:00:00',
			day: CalendarDay.Thursday,
			colour: '#99d1db'
		},
		{
			name: 'Artistic Training',
			startTime: '15:30:00',
			endTime: '18:00:00',
			day: CalendarDay.Friday,
			colour: '#99d1db'
		}
	];

	const allDays = Object.values(CalendarDay).filter((v): v is CalendarDay => typeof v === 'number');
	// Generate array of all times as strings
	const allTimes: string[] = [];
	let t = Temporal.PlainTime.from('07:00');
	while (Temporal.PlainTime.compare(t, Temporal.PlainTime.from('20:00')) <= 0) {
		allTimes.push(t.toString());
		t = t.add({ minutes: 15 });
	}

	// Record storing all classes and class details by start time.
	let partitions: Record<string, Partial<Record<CalendarDay, CalendarClassProps>>> = {};

	// Record storing all pairs of numbers and times that should be
	// skipped when rendering as a class is already in progress.
	let skip: [CalendarDay, string][] = [];

	function isSkipped(day: CalendarDay, time: string): boolean {
		return skip.some(([d, t]) => d === day && t === time);
	}

	// Decide if we should render a time or not
	// Should not render if it is between 10:00 and 15:30
	function shouldRenderTime(timeString: string): boolean {
		const time = Temporal.PlainTime.from(timeString);
		return !(
			Temporal.PlainTime.compare(time, Temporal.PlainTime.from('10:00')) > 0 &&
			Temporal.PlainTime.compare(time, Temporal.PlainTime.from('15:30')) < 0
		);
	}

	allTimes.forEach((time) => {
		const classesAtTime = classes.filter((c) => c.startTime == time);
		// Create dictionary mapping days to events.
		const classesByDay = Object.fromEntries(classesAtTime.map((cls) => [cls.day, cls]));
		partitions[time] = classesByDay;
		// Add skipped timeslots into list
		classesAtTime.forEach((c) => {
			for (let i = 1; i < findColsForClass(c); i++) {
				skip.push([
					c.day,
					Temporal.PlainTime.from(c.startTime)
						.add({ minutes: 15 * i })
						.toString()
				]);
			}
		});
	});

	function findColsForClass(c: CalendarClassProps): number {
		return (
			Temporal.PlainTime.from(c.startTime)
				.until(Temporal.PlainTime.from(c.endTime))
				.total({ unit: 'minutes' }) / 15
		);
	}

	function formatTime(timeString: string): string {
		return Temporal.PlainTime.from(timeString).toLocaleString('en-AU', {
			hour: 'numeric',
			minute: '2-digit'
		});
	}
</script>

<BasicPageWrapper title="Class Timetable">
	<!-- <table class="w-full my-10 text-left border-spacing-1 border-separate"> -->
	<table class="w-full my-10 text-left border-4 border-neutral-light">
		<thead>
			<tr>
				<th></th>
				{#each allDays as day (day)}
					<th
						class="px-2 pb-2 w-48 text-center font-heading text-lg"
						style="border: 2px solid rgba(0,0,0, 0.10);">{CalendarDay[day]}</th
					>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each allTimes as time (time)}
				{#if time === '10:00:00'}
					<tr><td colspan={7} class="pt-6"><hr class="border-t-3 border-dashed" /></td></tr>
				{/if}
				{#if shouldRenderTime(time)}
					<tr>
						<td class="p-1 h-8" style="border: 2px solid rgba(0,0,0, 0.10);"></td>
						{#each allDays as day (day)}
							{#if partitions[time] && partitions[time][day]}
								<td
									rowspan={findColsForClass(partitions[time][day])}
									class="relative p-0"
									style="border: 2px solid rgba(0,0,0, 0.10);"
								>
									<div
										class=" px-3 absolute inset-1 flex flex-col justify-center rounded-xs"
										style="background-color: {partitions[time][day].colour};"
									>
										<p class="font-semibold text-sm text-center opacity-75">
											{partitions[time][day].name}
										</p>
										<p class="text-center text-xs ppacity-75">{formatTime(partitions[time][day].startTime)}-{formatTime(partitions[time][day].endTime)}</p>
									</div>
								</td>
							{:else if !isSkipped(day, time)}
								<td class="p-3 h-8" style="border: 2px solid rgba(0,0,0, 0.10);"></td>
							{/if}
						{/each}
						<td class="p-1 h-8" style="border: 2px solid rgba(0,0,0, 0.10);"></td>
					</tr>
				{/if}
			{/each}
		</tbody>
	</table>
</BasicPageWrapper>
