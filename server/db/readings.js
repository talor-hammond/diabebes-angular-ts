const conn = require('./connection');

function getReadings(testDb) {
    const db = testDb || conn;

    return db('readings');
}

function addReading(reading, testDb) {
    const db = testDb = conn;

    return db('readings')
        .insert(reading)
}

module.exports = {
    getReadings,
    addReading
}