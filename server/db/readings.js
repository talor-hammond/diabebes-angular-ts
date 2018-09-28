const conn = require('./connection');

function getReadings(testDb) {
    const db = testDb || conn

    return db('readings');
}

module.exports = {
    getReadings
}