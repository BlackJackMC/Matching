const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 5000;

const startup = () => {
	console.log(`Server is listening on port ${PORT}`);
};

server.listen(PORT, startup);

