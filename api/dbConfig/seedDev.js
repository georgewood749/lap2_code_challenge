const db = require('./init');
const fs = require('fs');

const seeds = fs.readFileSync(__dirname + '/db_seed.sql').toString();

db.query(seeds, () => console.log('Dev database seeded'));
