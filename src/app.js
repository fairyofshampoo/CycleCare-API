const dotenv = require('dotenv');

dotenv.config();

const Server = require('./models/server');

const mainServer = new Server()

mainServer.listen();