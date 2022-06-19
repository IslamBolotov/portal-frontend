import io from 'socket.io-client';

const socket = io(window.location.origin.replace('3000', '8001'), {query: { roomId: 4 }});

export default socket;
