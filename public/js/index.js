var socket = io();

socket.on('connect', function () {
  console.log('Connected to the server');
});

socket.on('disconnect', function () {
  console.log('Disconnected from the server.');
});

socket.on('newMessage', function(message) {
  console.log('new message', message);
});

socket.emit('createMessage', {
  from: 'andres@ss.ss',
  text: 'aasas'
});
