const router = require("express").Router();
const { login, logout } = require("../controllers/authController");
const { onlySoldiersAndCommanders } = require("../middlewares/authMiddlewares");

/**
 * @swagger
 * /auth/login:
 *   get:
 *     summary: Returns a sample message
 *     responses:
 *       200:
 *         description: A successful response
 */
router.post("/login", login);

router.delete("/logout", onlySoldiersAndCommanders, logout);

module.exports = router;
