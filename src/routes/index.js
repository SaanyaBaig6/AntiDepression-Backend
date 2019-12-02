import express from 'express';
import initalizeDb from '../db';
import post from '../controller/post';

let router = express();

//connect to db
initalizeDb(db => {
  
    //api routes v1 (/v1)
    router.use('/post', post());
  });

export default router;