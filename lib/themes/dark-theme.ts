// ================================================================
// ZIONA VOYAGES — DARK LUXURY THEME
// ----------------------------------------------------------------
// "Premium tropical resort feel"
// Deep navy-black surfaces with luxury gold accents and teal highlights.
//
// These values are kept in sync with the .dark CSS class in
// app/globals.css. If you change a colour here, update globals.css
// too (or drive globals.css from this file via a build step).
// ================================================================

import type { ThemeTokens } from './tokens';

export const darkTheme: ThemeTokens = {
  id: 'dark',
  label: 'Dark Luxury',

  // ── Surfaces ──────────────────────────────────────────────────
  background:          '#0B0F14',   // deep navy-black page bg
  backgroundSecondary: '#131A21',   // slightly lighter panel bg
  foreground:          '#FFFFFF',   // pure white primary text

  // ── Components ────────────────────────────────────────────────
  card:                '#18212B',   // dark navy card surface
  cardForeground:      '#FFFFFF',

  // ── Brand Accents ─────────────────────────────────────────────
  primary:             '#2E8B7D',   // deep teal CTA colour
  primaryForeground:   '#FFFFFF',
  accent:              '#D4A574',   // luxury gold — shared across themes
  accentForeground:    '#0B0F14',

  // ── Supporting ────────────────────────────────────────────────
  secondary:           '#131A21',
  secondaryForeground: '#FFFFFF',
  muted:               '#1E2A35',
  mutedForeground:     '#B8C2CC',   // cool secondary text

  // ── Structural ────────────────────────────────────────────────
  border: 'rgba(212, 165, 116, 0.15)',  // subtle gold border
  input:  '#1E2A35',
  ring:   '#D4A574',
};
