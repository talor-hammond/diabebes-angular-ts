const conn = require('./connection');

function getReadings(testDb) {
    const db = testDb || conn;

    return db('readings');
}

function addReading(reading, testDb) {
    const db = testDb || conn;

    return db('readings')
        .insert(reading);
}

function updateReadingById(id, reading, testDb) {
    const db = testDb || conn;

    return db('readings')
        .where('id', id)
        .update(reading);
}

module.exports = {
    getReadings,
    addReading,
    updateReadingById
};