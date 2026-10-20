# 樂在齡中｜數獨新手村 v9

針對 iPhone Chrome 進度異常的修正版：
- 完成一個步驟的三題練習後，立即更新主頁的已完成數字。
- 同一個步驟重複練習不會重複計數。
- 使用更保守的 JavaScript 寫法，避免依賴 Array.at 等較新的語法。
- 儲存失敗時顯示提示，不再默默失敗。
- CSS 與 JS 加上 ?v=9，要求瀏覽器重新抓取新版檔案，避免沿用舊快取。
- 進度仍使用 localStorage；同一支手機、同一個 Chrome 一般瀏覽模式下會保存，不會與電腦同步。
- 注意：目前已建立的課程只有 3 個，所以進度數字是已完成的「步驟數」/100，不是答對題目總數。

更新 GitHub：覆蓋 index.html、css/style.css、js/app.js，保留 assets/lezaiblingzhong-logo.png。Commit 後請在 iPhone Chrome 開啟網站，重新整理；若仍有舊畫面，關閉該分頁後重新開啟網址。
