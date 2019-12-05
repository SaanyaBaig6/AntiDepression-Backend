import { Router } from 'express';
import PostService from './../service/post';

export default () => {
  let api = Router();

  // '/v1/post'
  api.post('/', (req, res) => {
    PostService.createPost(req, (err, post) => {
        if(err) {
            res.status(500).json({ 
                error: err.message
            });
        }
        else {
            res.status(200).json({
                message: 'Post created',
                post
            });
        }
    })
  });

  api.get('/', (req, res) => {
    PostService.findAllPosts((err, post) => {
      if (err) {
        res.status(500).json({ 
          message: 'An error occured',
          error: err
        });
      }
      else {
        res.status(200).json({
          message: 'Posts fetched',
          post
        });
      }
    })
});

  api.put('/', (req, res) => {
    PostService.findPostByID(req.body.id, (err, postData) => {
      if (err) {
        res.status(500).json({ 
          message: 'An error occured',
          error: err
        });
      } else if (!postData) {
        res.status(300).json({ 
          message: `No Post to update.`
        });
      }
      else {
        PostService.addComment(req, postData, (err, result) => {
          if(err) {
            res.status(500).json({ 
              error: err
            });
          }
          else {
            res.status(200).json({
              message: 'New Comment Added',
              obj: result
            });
          }
        })
       }
    });
  });

  api.delete('/', (req, res) => {
    PostService.findPostByID(req.query.id, (err, postData) => {
      if (err) {
        res.status(500).json({ 
          message: 'An error occured',
          error: err
        });
      } else if (!userData) {
        res.status(300).json({ 
          message: `No Post to delete.`
        });
      }
      else {
        PostService.deletePost(postData, (err, result) => {
          if(err) {
            res.status(500).json({ 
              error: err.message
            });
          }
          else {
            res.status(200).json({
              message: 'Post deleted',
              obj: result
            });
          }
        })
       }
    });
  });

  return api;
}
