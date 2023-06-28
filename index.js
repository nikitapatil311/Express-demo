// index.js
import express from "express";
import path from "path";

// Reads the PORT value from the environment variable `PORT`.
// If not found, uses the default value of 3000.
const PORT = process.env.PORT || 3000;
const app = express();

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get("/", (request, response) => {
  console.log("someone is visiting /");
  // response.send("Hi there, Celery!");

  const dirName = path.dirname(new URL(import.meta.url).pathname);
  response.sendFile(path.join(dirName, "index.html"));
});

app.get("/echo/:message", (req, res) => {
  const message = req.params.message;
  if (message !== "secret") {
    res.json({
      info: {
        message: `${message} `,
      },
    });
  } else {
    res.status(404).json({
      message: `${message} is error...42`,
    });
  }
});

app.get("/login", (req, res) => {
  const dirName = path.dirname(new URL(import.meta.url).pathname);
  res.sendFile(path.join(dirName, "login.html"));
});
