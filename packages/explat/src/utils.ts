/**
 * Boolean determining if environment is development.
 */
export const isDevelopmentMode = process.env.NODE_ENV === 'development';

interface generalSettings {
	woocommerce_default_country: string;
}

interface preloadSettings {
	general: generalSettings;
}
interface admin {
	preloadSettings: preloadSettings;
}

interface wcSettings {
	admin: admin;
}

declare global {
	interface Window {
		wcSettings: wcSettings;
	}
}
