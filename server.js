const express = require('express');
const http = require('https');
const { Server } = require('socket.io');

// Express-Setup
const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Statische Dateien bereitstellen
app.use(express.static('public'));

// Socket.IO-Logik
io.on('connection', (socket) => {
    console.log('Ein Benutzer ist verbunden:', socket.id);

    // Nachricht empfangen und an alle verbundene Clients senden
    socket.on('send-notification', () => {
        io.emit('receive-notification', 'Neue Kohle'); // Nachricht an alle Clients
    });

    socket.on('disconnect', () => {
        console.log('Ein Benutzer hat die Verbindung getrennt:', socket.id);
    });
});

// Server starten
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
