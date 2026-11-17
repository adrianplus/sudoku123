# Sudoku V110 — Spanish regional language packs

Based on V109.3 (mobile header layout) and retaining the V109.2 Chinese language-switch fixes.

## Added language options
- Español (España) — `es-ES`
- Español (Latinoamérica) — `es-419`

Both variants include the complete existing locale structure:
- 38 UI strings
- 45 lesson cards
- 45 step descriptions
- 111 fixed gameplay messages

The previous generic `es` locale remains available internally for backward compatibility with existing saved settings. The selector now presents the two explicit regional options.

## Technical notes
- Both locale dictionaries are included as standalone JSON files and embedded in `js/language-data.js` for direct `file://` use.
- Runtime-generated messages route through the existing Spanish runtime translations.
- The mobile header layout from V109.3 is preserved.
- No Sudoku puzzle data, answers, progression, or gameplay logic was modified.

## Validation
- JSON structure/count checks for both new locales.
- JavaScript syntax checks for `i18n.js`, `language-data.js`, and `app.js`.
- ZIP integrity check.

Browser/device interaction testing has not been performed here. Please test both Spanish options on the same iPhone browser/webview and check long lesson descriptions.
