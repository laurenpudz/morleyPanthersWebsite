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
			day: CalendarDay.Sunday
		},
		{
			name: 'Development Class',
			startTime: '09:00:00',
			endTime: '09:30:00',
			day: CalendarDay.Sunday
		},
		{
			name: 'Learn to Skate Class',
			startTime: '09:30:00',
			endTime: '10:00:00',
			day: CalendarDay.Sunday
		},
		{
			name: 'Artistic Training - sunday',
			startTime: '15:30:00',
			endTime: '18:30:00',
			day: CalendarDay.Sunday
		},
		// SATURDAY ----------------------------
		{
			name: 'Artistic Training',
			startTime: '07:00:00',
			endTime: '09:00:00',
			day: CalendarDay.Saturday
		},
		{
			name: 'Development Class',
			startTime: '09:00:00',
			endTime: '09:30:00',
			day: CalendarDay.Saturday
		},
		{
			name: 'Learn to Skate Class',
			startTime: '09:30:00',
			endTime: '10:00:00',
			day: CalendarDay.Saturday
		},
		{
			name: 'Artistic Training',
			startTime: '15:30:00',
			endTime: '18:30:00',
			day: CalendarDay.Saturday
		},
		{
			name: 'Artistic Training',
			startTime: '15:30:00',
			endTime: '18:00:00',
			day: CalendarDay.Monday
		},
		{
			name: 'Dance Skills Class',
			startTime: '18:00:00',
			endTime: '18:30:00',
			day: CalendarDay.Monday
		},
		{
			name: 'Compulsory Dance Class',
			startTime: '18:30:00',
			endTime: '19:00:00',
			day: CalendarDay.Monday
		},
		{
			name: 'Learn to Skate Class',
			startTime: '16:00:00',
			endTime: '16:45:00',
			day: CalendarDay.Tuesday
		},
		{
			name: 'Development Class',
			startTime: '16:45:00',
			endTime: '17:30:00',
			day: CalendarDay.Tuesday
		},
		{
			name: 'Speed Class',
			startTime: '17:30:00',
			endTime: '19:00:00',
			day: CalendarDay.Tuesday
		},
		{
			name: 'Artistic Training',
			startTime: '15:30:00',
			endTime: '18:00:00',
			day: CalendarDay.Wednesday
		},
		{
			name: 'Figures Class',
			startTime: '18:00:00',
			endTime: '18:30:00',
			day: CalendarDay.Wednesday
		},
		{
			name: 'Artistic Training',
			startTime: '15:30:00',
			endTime: '18:00:00',
			day: CalendarDay.Thursday
		},
		{
			name: 'Artistic Training',
			startTime: '15:30:00',
			endTime: '18:00:00',
			day: CalendarDay.Friday
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

	console.log(allDays);

	function findColsForClass(c: CalendarClassProps): number {
		return (
			Temporal.PlainTime.from(c.startTime)
				.until(Temporal.PlainTime.from(c.endTime))
				.total({ unit: 'minutes' }) / 15
		);
	}

	console.log(skip);
</script>

<BasicPageWrapper title="Class Timetable">
	<table class="w-full my-10 text-left">
		<tbody>
			{#each allTimes as time (time)}
				{#if time === '10:00:00'}
					<tr><td colspan={7} class="pt-6"><hr class="border-t-2 border-dashed " /></td></tr>
				{/if}
				{#if shouldRenderTime(time)}
					<tr>
						{#each allDays as day (day)}
							{#if partitions[time] && partitions[time][day]}
								<td
									class="font-bold bg-blue-400 px-3 border-2"
									rowspan={findColsForClass(partitions[time][day])}
								>
									{partitions[time][day].name}</td
								>
							{:else if !isSkipped(day, time)}
								<td class="p-3"></td>
							{/if}
						{/each}
					</tr>
				{/if}
			{/each}
		</tbody>
	</table>
</BasicPageWrapper>
