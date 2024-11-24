import { io } from 'socket.io-client';

export const initSocket = async () => {
    const options = {
        'force new connection': true,
        reconnection: true,
        reconnectionAttempt: 5,
        reconnectionDelay: 5000,
        timeout: '100000',
        transports: ['websocket'],
    };
    return io(process.env.REACT_APP_BACKEND_URL, options);
};