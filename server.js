const express = require("express");
const path = require("path");

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const HOST = "0.0.0.0";

app.disable("x-powered-by");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use((req, res) => {
  if (req.path.startsWith("/api/")) {
    return res.status(404).json({ success: false, message: "API endpoint bulunamadı." });
  }
  res.status(404).send("Sayfa bulunamadı.");
});

app.listen(PORT, HOST, () => {
  console.log(`İstanbul Soğutma çalışıyor: http://${HOST}:${PORT}`);
});
