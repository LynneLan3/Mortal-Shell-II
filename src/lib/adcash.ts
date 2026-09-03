/** Adcash Autotag zone for the site-wide Auto revenue experiment. */
export const ADCASH_AUTOTAG_ZONE_ID = 'dauo8wyodz';

export const ADCASH_LIB_SRC = 'https://acscdn.com/script/aclib.js';

/** Autotag is on for this Auto revenue test site. */
export function isAdcashAutotagEnabled(): boolean {
	return true;
}

/**
 * Emit Autotag only in production builds.
 * Client-side hostname check still skips non-production hosts.
 */
export function isAdcashAutotagRuntimeEnabled(): boolean {
	return isAdcashAutotagEnabled() && import.meta.env.PROD;
}
