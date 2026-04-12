// ================================================================
// ZIONA VOYAGES — THEME TOKEN INTERFACE
// ----------------------------------------------------------------
// Defines the shape every theme must implement.
// Adding a new theme (Emerald, Ocean Blue, Sunset…) is as simple
// as creating a new file that satisfies this interface.
// ================================================================

export interface ThemeTokens {
  /** Unique machine-readable identifier for the theme */
  id: string;

  /** Human-readable display name shown in the UI toggle */
  label: string;

  // ── Surfaces ──────────────────────────────────────────────────
  /** Main page background */
  background: string;
  /** Slightly offset panel / section background */
  backgroundSecondary: string;
  /** Primary text colour on background */
  foreground: string;

  // ── Components ────────────────────────────────────────────────
  /** Card surface colour */
  card: string;
  /** Text on cards */
  cardForeground: string;

  // ── Brand Accents ─────────────────────────────────────────────
  /** Primary action colour (coral / teal) */
  primary: string;
  /** Text on primary buttons */
  primaryForeground: string;
  /** Luxury gold accent — shared across themes */
  accent: string;
  /** Text on gold accent elements */
  accentForeground: string;

  // ── Supporting ────────────────────────────────────────────────
  /** Secondary/muted background (chips, tags, inputs) */
  secondary: string;
  secondaryForeground: string;
  muted: string;
  /** Subdued / helper text */
  mutedForeground: string;

  // ── Structural ────────────────────────────────────────────────
  /** Border colour */
  border: string;
  /** Input field background */
  input: string;
  /** Focus ring */
  ring: string;
}
