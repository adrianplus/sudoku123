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


## V113 – Turkish language
- Added Türkçe (`tr`) with 38 UI strings, 45 lesson cards, 45 step instructions, and 111 gameplay messages.
- Added Turkish after Vietnamese in the language selector, preserving Traditional Chinese first and Simplified Chinese last.
- Based on V112; existing puzzle data, answers, gameplay logic, and mobile layout are preserved.


## V114 – Arabic language and RTL layout support
- Added العربية (`ar`) with 38 UI strings, 45 lesson cards, 45 step instructions, and 111 fixed gameplay messages.
- Added Arabic right-to-left reading direction and right-aligned text for the page interface.
- Sudoku grids and number pads remain left-to-right so puzzle coordinates and number entry are not mirrored.
- Based on V113; no puzzle data, answers, or gameplay rules were intentionally changed.


## V115 – Hindi language
- Added हिन्दी (`hi`) with 38 UI strings, 45 lesson cards, 45 step instructions, and 111 fixed gameplay messages.
- Added Hindi to the language selector after Arabic and before Korean.
- Hindi is left-to-right; no RTL layout changes were added.
- Based on accepted V114.2; existing puzzles, answers, gameplay logic, and mobile layout are preserved.


## V116 語言優先入口
- `index.html` 是首次進入的語言選擇入口，16 格 4×4 一次呈現。
- 第一次選擇後，使用 `lezaiblingzhong_sudoku_language` 保存語言並進入 `village.html`。
- 再次進入首頁會依上次選擇直接進入遊戲。
- `index.html?lang=hi` 等網址可指定語言直達；`?lang=es` 對應拉丁美洲西班牙文 `es-419`。
- 遊戲首頁原有語言選單保留，仍可切換 `es-419` / `es-ES`。
- 品牌名稱「樂在齡中」在入口與遊戲頁標記為不可翻譯。
- 入口頁獨立使用 `css/welcome.css`；原遊戲 CSS、題庫與遊戲程式未作功能修改。


## V116.1 手機入口測試版
- 首頁改用已確認的完整地球直式概念圖作為底圖。
- 16 個語言選項以真正的 HTML 按鈕疊在海報原按鈕位置，非點擊圖片；選擇後寫入既有語言儲存鍵並進入 `village.html`。
- 修正 V116 首頁 inline JavaScript 中換行字元被錯誤寫成字面 `\\n`，導致整段入口腳本語法錯誤、按鈕無法綁定點擊事件的問題。
- 首次選語言、記住選擇、`?lang=` 指定語言與 `?lang=es` 對應 `es-419` 已用 Node 模擬測試。
- 入口海報採手機 9:19 直式比例；桌機以置中窄版呈現。
- 原有 `js/app.js`、`css/style.css`、`js/language-data.js`、45 步題庫與答案未修改。


## V116.2 入口重開修正
- 一般重新開啟 `index.html` 時，不再因已保存語系而自動跳過入口。
- 仍記住上次選擇，並以金色外框及小圓點標示該語系。
- 點選任一語系後才進入 `village.html`。
- 明確指定語系的網址（例如 `?lang=hi`、`?lang=es`）仍保留直達對應語系的行為。
- 已用 Node 模擬測試：保存語系後重開仍停留入口、上次語系標示、點擊進入遊戲、語言深連結。


## V116.3 人物插畫定稿測試版
- 以 V116.2 為基準，只替換語言入口海報底部的人物插畫區。
- 採用使用者最後確認的九人插畫版本；使用乾淨原圖素材，未包含圖片預覽介面的「編輯／分享」浮層。
- 保留原本完整地球、16 個語系按鈕、標題、頂部品牌及按鈕點擊位置。
- 入口記住上次語言、重新開啟仍顯示語言入口的行為不變。
- 未修改題庫、答案、遊戲邏輯、語系資料及入口 JavaScript。


## V117｜教學邏輯與核心品質修正
基準版本：V116.3

### 本版修改
- 第17步明確說明第一類6×6六宮格為2列×3欄。
- 第21步明確說明第二類6×6六宮格為3列×2欄，並提醒與第一類不同。
- 第21步與第17步課程卡同步補上宮格方向說明。
- 繁體中文可見文字統一「反白」用詞，取代誤用的「反金」。
- 4X4可見文字統一為4×4。
- 第36步標題將英文“step by step”改為「循序練習」。
- 新增 `tests/v117_6x6_geometry_check.py`，用於重複驗證受影響的6×6題目與宮格規則。

### 已執行的檢查
- 第17步第一類題目：2列×3欄規則下唯一解。
- 第21／26步第二類題目：3列×2欄規則下唯一解；標準答案符合3列×2欄規則。
- 第21／26步若誤用第一類2列×3欄規則，題目有6組解，且既有標準答案不符合該宮格規則。
- 第25步第一類實戰題：2列×3欄規則下唯一解，標準答案合法。
- JavaScript語法檢查通過。
- ZIP完整性檢查通過。

### 修改範圍
- 只修改 `js/app.js`、`village.html`、`README.md`，並新增獨立測試檔。
- 未修改 `index.html`、CSS、圖片、語言資料、`i18n.js`、遊戲操作邏輯及進度保存。
- 本版未執行真機瀏覽器互動測試。
- 本版的題庫程式驗證聚焦於本次涉及的6×6題目；其餘4×4、9×9及隨機題庫仍需後續建立完整自動化驗證，不能視為45步全部完成數學驗證。
