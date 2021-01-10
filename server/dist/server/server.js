"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const app = express();
//initialize a simple http server
const server = http.createServer(app);
//initialize the WebSocket server instance
const wss = new WebSocket.Server({ server });
const NodeCache = require("node-cache");
const myCache = new NodeCache();
wss.on('connection', (ws) => {
    //connection is up, let's add a simple simple event
    ws.on('message', (message) => {
        myCache.set(1, message);
        console.log(message);
        wss.clients.forEach(client => {
            console.log("sent");
            if (client !== ws) {
                client.send(message);
            }
        });
    });
    if (myCache.has(1)) {
        ws.send(myCache.get(1));
    }
});
//start our server
server.listen(process.env.PORT || 8999, () => {
    console.log(`Server started on port ${server.address()} :)`);
});
//# sourceMappingURL=server.js.map