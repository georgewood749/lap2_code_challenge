const db = require('./init');
const fs = require('fs');

const seeds = fs.readFileSync(__dirname + '/db_seed.sql').toString();

function seedIfEmpty(){
    return new Promise(async (res, rej) => {
        const size = await db.query(`SELECT pg_relation_size('posts');`);
        if(size.rows[0].pg_relation_size == 0) { db.query(seeds, () => console.log('Dev database seeded')); }
    })
}

seedIfEmpty();


