
const WebSocket = require('ws');
const http = require('http');
const fs = require('fs');
const path = require('path');

const wss = new WebSocket.Server({ port: 8080 });
console.log("WebSocket server running on ws://localhost:8080");

const express = require('express');
const app = express();
const server = http.createServer(app);
const PORT = 3000;

app.use(express.static(__dirname));

server.listen(PORT, () => {
  console.log("Web server running at http://localhost:" + PORT);
});

// Relay any message received from serial/RFID device to all WS clients
wss.on('connection', (ws) => {
  console.log("Client connected");
  ws.send(""); // clear display
});
