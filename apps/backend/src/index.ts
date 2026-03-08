import { WebSocketServer } from "ws";

const port = Number(process.env.PORT ?? 8080);
const wss = new WebSocketServer({ port });

wss.on("connection", (socket) => {
  socket.send(
    JSON.stringify({
      type: "system:heartbeat",
      payload: { status: "connected" },
      sentAt: new Date().toISOString()
    })
  );
});

setInterval(() => {
  const heartbeat = JSON.stringify({
    type: "system:heartbeat",
    payload: { status: "ok" },
    sentAt: new Date().toISOString()
  });

  wss.clients.forEach((client) => {
    if (client.readyState === client.OPEN) {
      client.send(heartbeat);
    }
  });
}, 10000);

console.log(`Katbamakam backend listening on ws://localhost:${port}`);
