# Sudoku V111 — Bahasa Indonesia

Based on V110. The Indonesian language option (`id`, Bahasa Indonesia) has been added.

## Included translation structure
- 38 interface strings
- 45 lesson cards
- 45 step entries
- 111 fixed gameplay messages

The locale is available both as `languages/id.json` and in the embedded `js/language-data.js` bundle for direct `file://` use.

## Preserved
- V109.3 mobile header layout
- V110 Spanish (Spain) and Spanish (Latin America) options
- Existing language packs, puzzles, answers, progress behavior, and gameplay logic

## Validation
- JSON structure/count validation
- JavaScript syntax checks
- Embedded/standalone locale consistency
- ZIP integrity

Important: some of the less common fixed gameplay messages use a general Indonesian instruction fallback rather than a fully contextual sentence. Browser/device interaction testing has not been performed. Please test the Indonesian option locally before publishing.


## V112 – Vietnamese language
- Added Tiếng Việt (`vi`) with 38 UI strings, 45 lesson cards, 45 step instructions, and 111 gameplay messages.
- Reordered the language selector: Traditional Chinese first, Simplified Chinese last; other languages follow the agreed usage-scale order.
- Preserved the V111 gameplay, puzzles, answers, and mobile layout.
