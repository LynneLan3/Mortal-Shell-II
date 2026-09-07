/**
 * Adsterra / Profitablerate monetization — soft runtime switches.
 *
 * Native Banner (mid-article): soft-offline via ADSTERRA_ENABLED.
 * Social Bar / global AdScript: controlled by ADSTERRA_SOCIAL_BAR_ENABLED.
 * Keep switches independent so one format can run without restoring the other.
 */

/** Soft offline switch for Native Banner. false = no invoke.js, no AdSlot render. */
export const ADSTERRA_ENABLED = false;

/** Soft switch for Social Bar / global placement script (AdScript.astro). */
export const ADSTERRA_SOCIAL_BAR_ENABLED = true;

/** Preserved Native Banner invoke.js (Zone pl31017060 / unit c6910232…). */
export const ADSTERRA_INVOKE_SRC =
	'https://pl31017060.profitableratecpmnetwork.com/c6910232957079784045cb952f04febc/invoke.js';

/** Preserved Native Banner container id. */
export const ADSTERRA_CONTAINER_ID = 'container-c6910232957079784045cb952f04febc';

/** Preserved AdSlot name / data-ad-slot value. */
export const ADSTERRA_SLOT_NAME = 'adsterra-native-banner';

/** Preserved mid-article placement fraction for AdSlot. */
export const ADSTERRA_PLACEMENT = 0.35;

/** Social Bar / global AdScript (Zone pl31231223). */
export const ADSTERRA_SOCIAL_BAR_SRC =
	'https://pl31231223.profitableratecpmnetwork.com/9e/cc/61/9ecc61bdbbe70430be21e6e6ab3d4be9.js';

/** Soft switch only — restore Native Banner by setting ADSTERRA_ENABLED=true. */
export function isAdsterraEnabled(): boolean {
	return ADSTERRA_ENABLED;
}

/**
 * Emit Native Banner only when the soft switch is on.
 * Production builds with ADSTERRA_ENABLED=false must not load Native Banner Profitablerate.
 */
export function isAdsterraRuntimeEnabled(): boolean {
	return isAdsterraEnabled();
}

export function isAdsterraSocialBarEnabled(): boolean {
	return ADSTERRA_SOCIAL_BAR_ENABLED;
}

/**
 * Emit Social Bar only in production builds when the soft switch is on.
 * Client-side hostname check in AdScript still skips non-production hosts.
 */
export function isAdsterraSocialBarRuntimeEnabled(): boolean {
	return isAdsterraSocialBarEnabled() && import.meta.env.PROD;
}
