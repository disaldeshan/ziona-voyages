// ================================================================
// ZIONA VOYAGES — LIGHT LUXURY THEME
// ----------------------------------------------------------------
// "Elegant soft luxury boutique travel concierge feel"
// Warm ivory surfaces with coral & gold accents, rich brown text.
//
// These values are kept in sync with the :root CSS block in
// app/globals.css. If you change a colour here, update globals.css
// too (or drive globals.css from this file via a build step).
// ================================================================

import type { ThemeTokens } from './tokens';

export const lightTheme: ThemeTokens = {
  id: 'light',
  label: 'Light Luxury',

  // ── Surfaces ──────────────────────────────────────────────────
  background:          '#F8F4EE',   // warm ivory page bg
  backgroundSecondary: '#FFFDF9',   // slightly lighter secondary bg
  foreground:          '#2F241D',   // deep rich brown text

  // ── Components ────────────────────────────────────────────────
  card:                '#FDF8F1',   // soft warm card surface
  cardForeground:      '#2F241D',

  // ── Brand Accents ─────────────────────────────────────────────
  primary:             '#C97D60',   // warm coral CTA colour
  primaryForeground:   '#FFFFFF',
  accent:              '#D4A574',   // luxury gold — shared across themes
  accentForeground:    '#2F241D',

  // ── Supporting ────────────────────────────────────────────────
  secondary:           '#EDE7DC',   // warm beige chips / tags
  secondaryForeground: '#2F241D',
  muted:               '#EDE7DC',
  mutedForeground:     '#6E6259',   // warm secondary text

  // ── Structural ────────────────────────────────────────────────
  border: '#E8DDD0',
  input:  '#EDE7DC',
  ring:   '#D4A574',
};
