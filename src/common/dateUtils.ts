import { SvelteDate } from 'svelte/reactivity';
import type { CalendarEventProps } from './types';

function parseEventDate(dateStr: string): Date {
	const [day, month, year] = dateStr.split('-').map(Number);
	return new SvelteDate(year, month - 1, day);
}

// Split events into past and future for calendar pages
function isPastEvent(endDate: string): boolean {
	const today = new SvelteDate();
	today.setHours(0, 0, 0, 0);
	return parseEventDate(endDate) < today;
}

export function findUpcomingEvents(events: CalendarEventProps[]) {
	return events.filter((event) => !isPastEvent(event.endDate));
}

export function findPastEvents(events: CalendarEventProps[]) {
	return events.filter((event) => isPastEvent(event.endDate));
}
