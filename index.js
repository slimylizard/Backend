const express = require('express');
const cors = require('cors');

const authRouter = require('./auth/auth-router.js');

const server = express();

server.use(cors());
server.use(express.json());

server.use('/auth', authRouter);

const PORT = process.env.PORT || 5500;
server.listen(PORT, () => console.log(`Server Running On ${PORT}!`))