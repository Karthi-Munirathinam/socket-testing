require('dotenv').config();
const express = require('express');
const app = express();
const http = require('http');
const server = http.Server(app);
console.log(server)
const io = require('socket.io')(server,{
    path:'/message'
});

app.get('/message',(req, res, next) => {
    io.on('connect', socket => {
        console.log('hello from socket')
        socket.broadcast.emit('configure-1234','delhi')
    })
    res.send('success')
})

app.listen(process.env.PORT || 3000, () => console.log(`app is listening in port:${process.env.PORT}`))
