// import the necessary modules
const mongoose = require('mongoose');

const { Schema } = mongoose;

/**
 * @schemaof AuditLog
 */

const latestmessages = new mongoose.Schema({
    messageid: { type: Schema.ObjectId, ref: 'Messages', index: true },

});
// need to add dept to service depts based on order categories.

module.exports = mongoose.model('LatestMessages', latestmessages);