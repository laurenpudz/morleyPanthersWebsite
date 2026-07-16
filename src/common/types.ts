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
	year: string;
};

type DownloadDocProps = {
	name: string;
	link: string;
};

type VideoProps = {
	name: string;
	link: string;
};

type VideoGroupProps = {
	name: string;
	videos: VideoProps[];
};

type CoachProps = {
	name: string;
	bio: string;
	certifications: string[];
	image: string;
};

type CalendarClassProps = {
	day: CalendarDay;
	startTime: string;
	endTime: string;
	name: string;
	coaches?: string;
	tooltipNote?: string;
	colour: string;
};

export enum CalendarDay {
	Monday = 0,
	Tuesday,
	Wednesday,
	Thursday,
	Friday,
	Saturday,
	Sunday
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
	DownloadDocProps,
	VideoGroupProps,
	CoachProps,
	CalendarClassProps
};
