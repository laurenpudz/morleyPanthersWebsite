export enum ButtonColourScheme {
	Red,
	Blue
}

interface ButtonProps {
	text: string;
	href: string;
	colourScheme: ButtonColourScheme;
}

interface LandingCardProps {
	title: string;
	description: string;
	image: string;
	button?: ButtonProps;
}

interface HeadingProps {
	title: string;
}

interface ChampionProps {
	name: string;
	image: string;
	titles: string[];
}

interface CalendarEventProps {
	startDate: string;
    endDate: string;
	name: string;
	venue?: string;
}

interface CommMemberProps {
	role: string;
	name: string;
	email: string;
}

export type { LandingCardProps, HeadingProps, ChampionProps, CalendarEventProps, CommMemberProps };
