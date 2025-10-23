const mongoose = require("mongoose");

const sessionSchema = new Schema(
	{
		title: { type: String, required: true },
		description: { type: String },
		subject: { type: String, required: true },
		scheduled_time: [
			{
				type: String,
				enum: ["sáng", "chiều", "tối"],
			},
		],
		participants: [{ type: Schema.Types.ObjectId, ref: "User" }],
		open_by: { type: Schema.Types.ObjectId, ref: "User", required: true },
	},
	{ timestamps: true }
);

const Session = mongoose.model("Session", sessionSchema);

module.exports = Session;

