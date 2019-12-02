import Post from './../model/post';

class PostService {

  static findAllPosts(callback) {
    Post.find({}, (err, postData) => {
      if (err) {
        return callback(err, null);
      } else{
        return callback(null, postData);
      }
    });
  }

  static findPostByID(id, callback) {
    Post.findOne({ '_id': id }, (err, postData) => {
      if (err) {
        return callback(err, null);
      } else{
        return callback(null, postData);
      }
    });
  }

  static createPost(req, callback) {
    var post = new Post({
      timestamp: req.body.timestamp,
      subject: req.body.subject,
      description: req.body.description,
      comment: [],
    });
    post.save((err, result) => {
        if (err) {
          return callback(err, null);
        }
        return callback(null, result);
    });
  }

  static addComment(req, postData, callback) {
    postData.comment.push(
        {
            timestamp: req.body.timestamp,
            comment: req.body.comment,
        });
    postData.save((err, result) => {
        if (err) {
          return callback(err, null);
        }
        return callback(null, result);
    });
  }

  static deletePost(post, callback) {
    post.remove((err, result) => {
        if (err) {
          return callback(err, null);
        }
        return callback(null, result);
    });
  }
  //TODO: update post
  //TODO: update comment
  //TODO: delete comment
  //TODO: lookup posts
  //TODO: lookup comment
}

export default PostService;