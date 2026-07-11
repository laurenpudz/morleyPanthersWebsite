export enum ButtonColourScheme {
	Red,
	Blue
}

type ButtonProps = {
	text: string;
	href: string;
	colourScheme: ButtonColourScheme;
};

type LandingCardProps = {
	title: string;
	description: string;
	image: string;
	button?: ButtonProps;
};

type HeadingProps = {
	title: string;
};

type ChampionProps = {
	name: string;
	image: string;
	titles: string[];
};

type CalendarEventProps = {
	startDate: string;
	endDate: string;
	name: string;
	venue?: string;
};

type CommMemberProps = {
	role: string;
	name: string;
	email: string;
};

type LifeMemberProps = {
	name: string;
	year: string;
	image: string;
	bio: string;
};

type MinutesDocProps = {
	displayName: string;
	link: string;
	date: string;
}

type AwardWinnerProps = Omit<LifeMemberProps, 'image'>;

export type {
	LandingCardProps,
	HeadingProps,
	ChampionProps,
	CalendarEventProps,
	CommMemberProps,
	LifeMemberProps,
	AwardWinnerProps,
	MinutesDocProps,
};
