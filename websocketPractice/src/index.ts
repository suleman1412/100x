import {WebSocket, WebSocketServer} from 'ws' 

const wss = new WebSocketServer({ port: 8080 });

let userCount = 0;
let allSockets: WebSocket[] = []
wss.on('connection', (socket) => {
    allSockets.push(socket)
    userCount++;
    console.log("Server started, users connected: ", userCount)

    socket.on("message", (event) => {
        allSockets.forEach(s => {
            s.send(`message received, echoing back ${event.toString()}`)
        })
    })
})