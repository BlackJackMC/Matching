const mongoose = require("mongoose");

const invitationSchema = new Schema(
	{
		from: { type: Schema.Types.ObjectId, ref: "User", required: true },
		to: { type: Schema.Types.ObjectId, ref: "User", required: true },
		session: { type: Schema.Types.ObjectId, ref: "Session", required: true },
		status: { type: String, enum: ["pending", "accepted", "declined"], default: "pending" },
	},
	{ timestamps: true }
);

const Invitation = mongoose.model("Invitation", invitationSchema);

module.exports = Invitation;

