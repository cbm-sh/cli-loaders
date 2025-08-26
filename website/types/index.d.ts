export type ButtonProps = ButtonAsButton | (ButtonAsSpan & ButtonBaseProps);

export type ButtonBaseProps = {
	className?: string;
	icon?: React.ReactElement<SVGElement>;
	iconAlt?: React.ReactElement<SVGElement>;
	variant: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary';
};

export type ButtonAsButton = ButtonBaseProps &
	Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
		as?: 'button';
	};

export type ButtonAsSpan = ButtonBaseProps &
	Omit<SpanProps, keyof ButtonBaseProps> & {
		as: 'span';
	};

export type CardProps = {
	children: React.ReactNode;
	slug: string;
	name: string;
};

export type ChangeLogProps = {
	v: string | number;
	change: { type: string; notes: string[] }[];
};

export type CodeProps = {
	title: string;
	lang: string;
	code: string;
};

export type CodeBlockProps = {
	code?: string;
	keyframes?: string[];
	lang: string;
	title: string;
	isV2?: boolean;
	children?: React.ReactNode;
};

export type CopyButtonProps = {
	code: string | string[];
	copyText: string;
	className?: string;
	variant: ButtonProps['variant'];
};

export type FilterProps = {
	category: string;
	onFilterChange: (filteredLoaders: Props[]) => void;
};

export type HeroProps = {
	title: string;
	description: string;
};

export type IconComponents = {
	default: React.ReactElement<SVGElement>;
	hovered: React.ReactElement<SVGElement>;
	clicked?: React.ReactElement<SVGElement>;
};

export type IconProps = React.SVGProps<SVGSVGElement>;

export type LoaderCategories =
	| 'arrows'
	| 'bars'
	| 'circles'
	| 'dots'
	| 'emojis'
	| 'lines'
	| 'numbers'
	| 'squares'
	| 'symbols'
	| 'togglers';

export type LoaderProps = {
	name?: string;
	category: LoaderCategories;
	speed: number;
	keyframes: string[];
};

export type NavProps = { isOpen: boolean; onToggle: () => void };

export type RendererProps = {
	speed: number;
	keyframes: string[];
	className?: string;
};

export type SpanProps = JSX.IntrinsicElements['span'];

export type ShareProps = {
	className?: string;
	title: string;
	url: string;
	description: string;
};

export type TabsProps = {
	activeTab: string;
	setActiveTab: (tab: string) => void;
};

export type ToastContextProps = {
	toasts: ToastProps[];
	addToast: (message: string) => void;
	removeToast: (id: number) => void;
};

export type ToastMessageProps = {
	message: string;
};

export type ToastProps = {
	id: number;
	message: string;
	onClose?: () => void;
	isOpen?: boolean;
};
