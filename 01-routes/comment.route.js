'use strict';

const express = require('express');
const { commentModel } = require('../02-models/index');
const { postModel } = require('../02-models/index');

const router = express.Router();

router.post('/comment/:postId', addComment);
router.get('/comment', getAllComments);


async function addComment(req, res, next) {
  try {
    const obj = { "comment": req.body.comment, "postId": req.params.postId };  //{"comment":"any" , "postId":"any"}
    const newComment = await commentModel.create(obj);
    const allCommentsForApost = await commentModel.findAll({ where: { postId: req.params.postId } });
    res.status(201).send(allCommentsForApost);
  } catch (e) {
    next(`Error inside addComment function`)
  }

}

async function getAllComments(req, res, next) {
  try {
    const allComments = await commentModel.findAll({include:[postModel]});
    res.status(200).send(allComments);
  } catch (e) {
    next(`Error inside getAllComments function`);
  }

}




module.exports = router;