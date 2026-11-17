# Sudoku V109.3 — Mobile header layout

Based on V109.2.

## Change
- Mobile header only (viewport width up to 640px) now follows the user's revised sketch.
- The logo occupies a dedicated left column and spans the title/control rows.
- The localized title sits at the upper right and can wrap naturally without being squeezed by controls.
- Home, A−, A+, and Language controls sit together in one row below the title.
- The three Sudoku category buttons and all lesson/game content retain their existing styles and behavior.
- Desktop layout is unchanged.
- No puzzle data, answers, progress logic, translations, or gameplay code was modified.

## Validation
- CSS/HTML change inspection and cache-busting version update.
- JavaScript syntax checks for i18n.js, language-data.js, and app.js.
- ZIP integrity check.

Browser/device interaction testing has not been performed here. Please test on the same iPhone browser/webview used in the screenshots, including long-title languages (Japanese, Korean, German, Russian).
