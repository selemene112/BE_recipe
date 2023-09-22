const socketIo = require('socket.io');

let io;

function init(server) {
  const corsOptions = {
    origin: 'http://localhost:5173', // Ganti dengan asal yang sesuai
    methods: ['GET', 'POST'],
  };
  io = socketIo(server, {
    cors: corsOptions,
  });
  io.on('connection', (socket) => {
    console.log('A user connected.');

    socket.on('chat message', (message) => {
      console.log('Received message:', message);

      io.emit('chat message', message);
    });

    socket.on('disconnect', () => {
      console.log('A user disconnected.');
    });
  });
}

function getIO() {
  if (!io) {
    throw new Error('Socket.IO not initialized!');
  }
  return io;
}

module.exports = { init, getIO };
