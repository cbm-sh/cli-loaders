// Object to store a buttonVariants for different button types
export const BUTTON_VARIANTS = {
	primary: {
		className: 'relative top-0 left-0 border border-neutral-800 p-2',
	},
	secondary: {
		className: 'absolute top-0 right-0 border border-t-0 border-b-neutral-800 border-l-neutral-800 border-r-0 p-2',
	},
	tertiary: {
		className: 'relative top-0 left-0 border border-neutral-800 p-2',
	},
	quaternary: {
		className: 'relative top-0 right-0 border-l border-l-neutral-800 p-2',
	},
	quinary: {
		className: 'relative top-0 right-0 border border-neutral-800 p-2',
	},
};

// Object to store a motion variants for toast
export const TOAST_VARIANTS = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { duration: 0.5, stiffness: 30, type: 'spring', ease: 'easeIn' },
		},
	},
	closed: {
		y: 20,
		opacity: 0,
		transition: {
			y: { duration: 0.5, stiffness: 30, type: 'spring', ease: 'easeOut' },
		},
	},
};
