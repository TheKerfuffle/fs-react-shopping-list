const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...
router.get('/', (req, res) => {
    let queryText = 'SELECT * FROM "shopping";';
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((err) => {
            console.log(`Error making query ${queryText}`, err);
            res.sendStatus(500);
        });
});

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
    let itemId = req.params.id;
    const sqlText = `Update "shopping" SET "purchased"=true WHERE id=$1;`;
    pool.query(sqlText, [itemId])
    .then((result) => {
        res.sendStatus(200);
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
})

router.delete('/:id', (req, res) => {
    let itemId = req.params.id;

    const sqlText = `DELETE FROM "shopping" WHERE id=$1;`;

    pool.query(sqlText, [itemId])
        .then( result => {
            res.sendStatus(200);
        })
        .catch( error => {
            console.log(error);
            res.sendStatus(500);
        });
})


module.exports = router;