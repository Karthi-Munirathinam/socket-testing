require('dotenv').config();
const io = require('socket.io')(process.env.PORT);

io.on('connection', socket => {
    socket.on('connect-2222',(data,id) => {
        console.log(data,id)
    })
    socket.emit('configure-1234','delhi')
})


