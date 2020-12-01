const router = require("express").Router();
const bookController = require("../../controllers/bookController");



router.route("/load/")
    .get(bookController.load);

router.route("/save")
    .post(bookController.create);

router.route("/remove/:id")
    .get(bookController.remove);


module.exports = router;