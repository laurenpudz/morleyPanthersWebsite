export enum ButtonColourScheme {
    Red,
    Blue
}

interface ButtonProps {
    text: string;
    href: string;
    colourScheme: ButtonColourScheme
}

interface LandingCardProps {
    title: string;
    description: string;
    image: string;
    button?: ButtonProps
}

interface HeadingProps {
    title: string;
}

interface ChampionProps {
    name: string;
    image: string;
    titles: string[];
}

export type {LandingCardProps, HeadingProps, ChampionProps}