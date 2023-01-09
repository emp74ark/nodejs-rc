import { config } from "dotenv";
import WebSocket, { WebSocketServer } from "ws";
import { msgServerStart, msgServerStop, msgWsRequest } from "./messages.js";
import { actionsRouter } from "./actions.js";

config();

const port = Number(process.env.PORT) || 8080;

const wss = new WebSocketServer({ port });

msgServerStart(port);

wss.on("connection", (ws, request) => {
  ws.on("message", data => actionsRouter(data));
  msgWsRequest(request);
});

wss.on("close", () => {
  msgServerStop();
});

process.on("SIGINT", () => {
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) client.close();
  });
  wss.close();
});