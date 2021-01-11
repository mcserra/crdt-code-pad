"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const http = require("http");
const app = express();
//initialize a simple http server
const server = http.createServer(app);
//initialize the WebSocket server instance
const io = require('socket.io')(server, {
    cors: {
        origin: "*",
    },
});
//const wss = new WebSocket.Server({ server });
const NodeCache = require("node-cache");
const myCache = new NodeCache();
io.on('connection', (socket) => {
    socket.on('join', (data) => {
        socket.join(data.room);
        const msg = myCache.get(data.room);
        if (msg === undefined) {
            console.log('Updating cache');
            myCache.set(data.room, data.message);
        }
        else {
            console.log('Sending cache value');
            socket.emit('code-update', msg);
        }
    });
    socket.on('update', (data) => {
        console.log('Received update', data);
        myCache.set(data.room, data.message);
        socket.to(data.room).emit('code-update', data.message);
    });
});
//start our server
server.listen(process.env.PORT || 8999, () => {
    console.log(`Server started on port ${server.address()} :)`);
});
//# sourceMappingURL=server.js.map