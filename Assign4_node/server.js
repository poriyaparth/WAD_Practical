const express = require("express");

const app = express();

// Serve static files from public folder
app.use(express.static("public"));

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});