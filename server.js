const express = require("express");
const path = require("path");

const app = express();

const PORT = Number(process.env.PORT) || 3001;
const HOST = "0.0.0.0";

app.disable("x-powered-by");

// GitHub'daki ana klasörden dosyaları servis et
app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Hata durumunda
app.use((req, res) => {
    res.status(404).send("Sayfa bulunamadı.");
});

app.listen(PORT, HOST, () => {
    console.log(`İstanbul Soğutma çalışıyor: ${HOST}:${PORT}`);
});
