// ================================================================
// ZIONA VOYAGES — THEME REGISTRY
// ----------------------------------------------------------------
// Central export point for all themes.
// To add a new theme:
//   1. Create lib/themes/emerald-theme.ts (copy lightTheme shape)
//   2. Import and add it to the `themes` array below
//   3. Next-themes will pick it up automatically via the toggle
// ================================================================

export { darkTheme }  from './dark-theme';
export { lightTheme } from './light-theme';
export type { ThemeTokens } from './tokens';

import { darkTheme }  from './dark-theme';
import { lightTheme } from './light-theme';
import type { ThemeTokens } from './tokens';

/** All available themes in display order */
export const themes: ThemeTokens[] = [lightTheme, darkTheme];

/** Map from theme id → token object for O(1) look-up */
export const themeMap: Record<string, ThemeTokens> = Object.fromEntries(
  themes.map((t) => [t.id, t])
);
