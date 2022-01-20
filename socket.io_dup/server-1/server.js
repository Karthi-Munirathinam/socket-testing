require('dotenv').config();
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server,{
    path:'/message'
});

app.get('/message',(req, res, next) => {
    io.on('connect', socket => {
        socket.on('connect-2222',(data,id) => {
            console.log(data,id)
        })
        socket.emit('configure-1234','delhi')
    })
    res.send('success')
})

app.listen(process.env.PORT || 3000, () => console.log(`app is listening in port:${process.env.PORT}`))
