# Sudoku V109.2 — Complete Simplified Chinese switching

Based on V109.1.

## Fix
- The language data shipped in V109.0 contains no standalone `zh-CN` dictionary.
- Previously, selecting Simplified Chinese fell back to the Traditional Chinese dictionary for static UI labels, including the 4×4 / 6×6 / 9×9 category tabs.
- V109.2 now builds a complete Simplified Chinese dictionary view from the canonical Traditional Chinese dictionary at language-switch time.
- The conversion covers UI labels, category navigation, lesson cards, step content, and fixed messages.
- V109.1's restoration of original Traditional Chinese lesson-card text remains intact.
- Other languages and Sudoku gameplay logic are unchanged.

## Validation
- JavaScript syntax checks for i18n.js, language-data.js, and app.js.
- Confirmed the Simplified Chinese dictionary is generated from the Traditional Chinese source and all category labels are converted.
- ZIP integrity check passed.

Browser interaction testing has not been performed here. Please open `index.html` locally and verify switching from Traditional Chinese / another language to Simplified Chinese.
