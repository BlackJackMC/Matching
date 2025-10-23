const mongoose = require("mongoose");

const url = process.env["DB_URI"] || "mongodb://127.0.0.1:3000";

mongoose.set("debug", true);

async function connect() {
	try {
		await mongoose.connect(url);
		mongoose.connection.on("error", (e) => {
			console.error(e);
		});

		console.log("Database: online");
	} catch (e) {
		console.error(`Database connection error: ${e}`);
	}
}

module.exports = { connect };

