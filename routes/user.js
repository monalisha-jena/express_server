const express = require('express');
const {
    handleGetAllUsers,
    handleGetAllUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser,
} = require("../controllers/user");

const router = express.Router();

router
.route("/")
.get(handleGetAllUsers)
.post(handleCreateNewUser);

router
.route("/:id")                     //router.route for multiple same inputs
.get(handleGetAllUserById)
.patch(handleUpdateUserById)
.delete(handleDeleteUserById)


module.exports = router;
