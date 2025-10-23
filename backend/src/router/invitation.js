const express = require("express");
const invitationRouter = express.Router();

const {
	createInvitation,
	acceptInvitation,
	declineInvitation,
} = require("../controller/invitation");

invitationRouter.post("/sessions/:sessionID/invitations", createInvitation);
invitationRouter.post("/invitations/:invitationID/accept", acceptInvitation);
invitationRouter.post("/invitations/:invitationID/decline", declineInvitation);

module.exports = invitationRouter;

