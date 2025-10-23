const express = require("express");
const db = require("./config/db");
const router = require("./routes");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 5000;

// Wild
const cors_options = {
	origin: "*",
	methods: ["GET", "POST"],
	credentials: true,
};

app.use(express.json());
app.use(cors(cors_options));
app.use(router);

const startup = async () => {
	await db.connect();
	console.log(`Server is listening on port ${PORT}`);
};

app.listen(PORT, startup);
