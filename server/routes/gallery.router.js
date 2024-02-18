const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

// PUT /gallery/like/:id
router.put("/like/:id", (req, res) => {
  // code here
  let id = req.params.id;
  const sql = `update "gallery" set "likes" = "likes" + 1 where "id" = $1;`;
  pool
    .query(sql, [id])
    .then((response) => res.sendStatus(201))
    .catch((e) => {
      console.error(e);
      res.sendStatus(404);
    });
});

// GET /gallery
router.get("/", (req, res) => {
  const sql = `select * from "gallery" order by "title";`;
  pool
    .query(sql)
    .then((response) => res.send(response.rows))
    .catch((e) => {
      console.error(e);
      res.sendStatus(404);
    });
});

module.exports = router;
