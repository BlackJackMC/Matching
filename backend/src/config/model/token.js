const mongoose = require("mongoose");

const tokenSchema = new mongoose.Schema(
	{
		user: { type: Schema.Types.ObjectId, ref: "User", required: true },
		token: { type: String, required: true }, // random string
		expires_at: { type: Date, required: true }, // optional, để tự hết hạn
	},
	{ timestamps: true }
);

const Token = mongoose.model("Token", tokenSchema);
module.exports = Token;

