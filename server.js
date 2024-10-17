const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const PORT = 4001; // Cambiado de 4000 a 4001

const server = http.createServer(app);
const io = socketIo(server);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
