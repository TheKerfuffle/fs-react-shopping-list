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



//Setup PUT router to update changes
router.put('/:id', (req, res) => {
    console.log('in /list PUT;', req.params.id);
    const updatedList = req.body;
    const sqlText = `Update "shopping" SET "purchased"=true WHERE id=$5;`;
    pool.query(sqlText, [updatedList.name, updatedList.quantity, updatedList.unit, updatedList.purchased, req.params.id ])
    .then((result) => {
        res.sendStatus(200);
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
})



module.exports = router;