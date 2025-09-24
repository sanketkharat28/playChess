import http from "http";
import express from "express";
import { WebSocketServer } from "ws";
import { GameManager } from "./GameManager";

const app = express();

// optional: you can serve a simple health check endpoint
app.get("/", (req, res) => {
  res.send("WebSocket server is running 🚀");
});

const server = http.createServer(app);

// attach WebSocket server to the same HTTP server
const wss = new WebSocketServer({ server });

const gameManager = new GameManager();

wss.on("connection", (ws) => {
  console.log("✅ New client connected");
  gameManager.addUser(ws);

  ws.on("close", () => {
    console.log("❌ Client disconnected");
    gameManager.removeUser(ws);
  });
});

// Render provides PORT via env var
const PORT = parseInt(process.env.PORT || "8080", 10);
server.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});

