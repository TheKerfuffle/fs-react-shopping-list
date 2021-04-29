const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...
dashboardRouter.delete('/', (req, res) => {
    console.log("In DELETE ALL request");
    let queryText = `DELETE FROM "shopping" *`;

    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
});

dashboardRouter.delete('/', (req, res) => {
    console.log("In RESET ALL request");
    let queryText = `UPDATE "shopping"
            SET "purchased"=FALSE
            WHERE "purchased"=TRUE;`;

    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
});



module.exports = dashboardRouter;