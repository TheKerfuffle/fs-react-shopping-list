const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...
router.post('/', (req, res) => {
    console.log(req.body);
    const name = req.body.name;
    const quantity = req.body.quantity;
    const unit = req.body.unit;

    const sqlText = `INSERT INTO "shopping" ("name", "quantity", "unit")
                        VALUES ($1,$2,$3)`;

    pool.query(sqlText, [name, quantity, unit])
        .then( result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log(`error making DB query ${sqlText}`, error);
            res.sendStatus(500);
        });
});

module.exports = router;