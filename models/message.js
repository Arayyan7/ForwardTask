// import the necessary modules
const mongoose = require('mongoose');

const { Schema } = mongoose;

/**
 * @schemaof AuditLog
 */

const messages = new mongoose.Schema({
    senderid: { type: Schema.ObjectId, ref: 'User', index: true },
    receiverid: { type: Schema.ObjectId, ref: 'User', index: true },
    encmsg: String
});
// need to add dept to service depts based on order categories.

module.exports = mongoose.model('Messages', messages);