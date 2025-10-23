const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		subjects: [{ type: String }],
		free_time: [
			{
				type: String,
				enum: ["sáng", "chiều", "tối"],
			},
		],
		gender: { type: String, enum: ["nam", "nữ"] },
		hobbies: [{ type: String }],
		characteristics: [{ type: String }],
		password: { type: String, required: true },
	},
	{ timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;

