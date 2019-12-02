import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import comment from './comment';

const postSchema = new Schema({
  timestamp: {type: String, required: true},
  subject: {type: String, required: true},
  description: {type: String, required: true},
  comment:[
    {
      timestamp: {type: String},
      comment: {type: String}
    }
  ],
});

module.exports = mongoose.model('Post', postSchema, 'posts');
