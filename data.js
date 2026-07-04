const pluginsData = [
    {
        id: "goldhen",
        name: "GoldHEN",
        author: "SiSTR0",
        version: "v2.3",
        firmware: ["9.00", "11.00"],
        category: "system",
        description: "PS4 最核心的自製系統載入器。支援 FTP 伺服器、金手指加載（Cheat Menu）、Klog 偵錯以及外接硬碟封裝安裝。",
        downloadUrl: "https://github.com/GoldHEN/GoldHEN/releases",
        tutorial: [
            "確保您的 PS4 韌體版本為支援的版本（如 9.00 或 11.00）。",
            "使用電腦下載最新的 GoldHEN 檔案，解壓縮後會得到 goldhen.bin。",
            "將該檔案放入隨身碟（格式需為 exFAT）的根目錄。",
            "將隨身碟插入 PS4，並透過瀏覽器開啟 Jailbreak 網頁（例如 Kameleon 或 Karo 宿主網頁）觸發漏洞。",
            "成功載入後，畫面上方會跳出 GoldHEN Loaded 成功通知！"
        ],
        notes: "請勿在系統成功載入前拔除隨身碟。若遇到斷電當機，重啟主機後重新執行此步驟即可。"
    },
    {
        id: "apollo-save-tool",
        name: "Apollo Save Tool",
        author: "bucanero",
        version: "v1.4.5",
        firmware: ["5.05", "6.72", "9.00", "11.00"],
        category: "tools",
        description: "一款功能強大的 PS4 存檔管理工具。允許玩家在主機上直接解密、修改、重簽署（Resign）以及備份遊戲存檔。",
        downloadUrl: "https://github.com/bucanero/apollo-ps4/releases",
        tutorial: [
            "下載官方提供的 .pkg 安裝檔案。",
            "將 .pkg 檔案拷貝到隨身碟（exFAT）根目錄下。",
            "將隨身碟插上 PS4，進入系統的「Settings」->「Debug Settings」->「Package Installer」。",
            "找到 Apollo Save Tool 的 .pkg 檔案並點擊安裝。",
            "安裝完成後，回到 PS4 主畫面即可開啟軟體進行存檔修改。"
        ],
        notes: "修改存檔前，強烈建議先點選「Backup」功能將原始存檔備份至隨身碟，以防檔案損壞。"
    },
    {
        id: "itemzflow",
        name: "ItemzFlow",
        author: "LightningMods",
        version: "v1.06",
        firmware: ["9.00"],
        category: "games",
        description: "一個現代化的 PS4 遊戲啟動器與自製選單，擁有極其流暢的 3D 介面、自動下載遊戲封面以及內建的檔案管理功能。",
        downloadUrl: "https://github.com/LightningMods/ItemzFlow/releases",
        tutorial: [
            "下載最新版的 ItemzFlow .pkg 檔案並透過 Package Installer 安裝。",
            "啟動應用程式，首次進入需要連接網路以加載遊戲封面資料庫。",
            "您可以在設定中開啟「隨主機啟動」，將其作為替代的預設主選單。"
        ],
        notes: "部分自製主題可能需要較大的記憶體，若遇到卡頓請重啟主機。"
    }
];