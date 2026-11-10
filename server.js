import express from "express";
import path from "path";

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

const port = 3000;

// app.use(express.static(path.join(__dirname, "public")));

app.get("/funfact", async (req, res) => {
  try {
    const response = await fetch(
      "https://uselessfacts.jsph.pl/api/v2/facts/random",
    );

    const data = await response.json();

    res.send(`fact: ` + data["text"]);
  } catch (e) {
    console.error(e);
    console.log("failed to get fun fact");
    const statuscode = e.status;
    res.status(statuscode).json({ error: "Failed to get fun fact" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
