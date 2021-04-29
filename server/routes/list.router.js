const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...



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