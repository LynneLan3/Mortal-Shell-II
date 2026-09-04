/**
 * Adsterra / Profitablerate Native Banner — soft runtime switch.
 * Keep ADSTERRA_ENABLED=false to soft-offline; flip true to restore
 * without rewriting script URL, unit/container IDs, or placement wiring.
 *
 * This tree has no Social Bar / global AdScript entry; Native Banner via
 * NativeAd.astro is the only Adsterra / Profitablerate runtime path.
 */

/** Soft offline switch. false = no script, no AdSlot render. */
export const ADSTERRA_ENABLED = false;

/** Preserved Native Banner invoke.js (Zone pl31017060 / unit c6910232…). */
export const ADSTERRA_INVOKE_SRC =
	'https://pl31017060.profitableratecpmnetwork.com/c6910232957079784045cb952f04febc/invoke.js';

/** Preserved Native Banner container id. */
export const ADSTERRA_CONTAINER_ID = 'container-c6910232957079784045cb952f04febc';

/** Preserved AdSlot name / data-ad-slot value. */
export const ADSTERRA_SLOT_NAME = 'adsterra-native-banner';

/** Preserved mid-article placement fraction for AdSlot. */
export const ADSTERRA_PLACEMENT = 0.35;

/** Soft switch only — restore by setting ADSTERRA_ENABLED=true. */
export function isAdsterraEnabled(): boolean {
	return ADSTERRA_ENABLED;
}

/**
 * Emit Native Banner only when the soft switch is on.
 * Production builds with ADSTERRA_ENABLED=false must not load Profitablerate.
 */
export function isAdsterraRuntimeEnabled(): boolean {
	return isAdsterraEnabled();
}
