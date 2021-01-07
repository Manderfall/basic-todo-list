  
const express = require("express");
const router = express.Router();


/* general */
router.get("/", (req, res) => {
	res.render("todoList");
});

module.exports = router;