import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  timestamp: {type: String, required: true},
  comment: {type: String, required: true},
});

module.exports = mongoose.model('Comment', commentSchema, 'comment');
