const expres = require("express");
const authMiddleware = require("../middlewares/auth");

const router = expres.Router();

router.use(authMiddleware);

router.get("/", (req, res) => {
  res.send({ ok: true, user: req.userId });
});

module.exports = (app) => app.use("/projects", router);
