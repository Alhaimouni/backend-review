'use strict';

const express = require('express');
const { postModel } = require('../02-models/index')
const router = express.Router();


router.post('/post', addPost);
router.get('/post', getAllPosts);
router.get('/post/:id', getOnePost);
router.put('/post/:id', updateOnePost);
router.delete('/post/:id', deletePost);


async function addPost(req, res, next) {
  try {
    const obj = req.body;
    let newPost = await postModel.create(obj);
    //create sequelize method returns the created object only.
    let allPosts = await postModel.findAll();
    //findAll sequelize method returns all table data.
    res.status(201).send(allPosts);
  } catch (e) {
    next(`error inside addPost function`);
  }
}

async function getAllPosts(req, res, next) {
  try {
    let allPosts = await postModel.findAll();
    //findAll sequelize method returns all table data.
    res.status(200).send(allPosts);
  } catch (e) {
    next(`error inside getAllPosts function`);
  }
}

async function getOnePost(req, res, next) {
  try {
    let post = await postModel.findOne({ where: { id: req.params.id } });
    //findOne sequelize method returns one object depends .
    //findOne returns the first record it founds and always return one record only .
    res.status(200).send(post);
  } catch (e) {
    next(`error inside getOnePost function`);
  }
}

async function updateOnePost(req, res, next) {
  try {
    const obj = req.body
    let updatedPostNumbers = await postModel.update(obj, { where: { id: req.params.id } });
    //update sequelize method returns array contain the number of rows updated .
    let updatedPost = await postModel.findOne({ where: { id: req.params.id } });
    res.status(201).send(updatedPost);
  } catch (e) {
    next(`error inside updateOnePost function`);
  }
}

async function deletePost(req, res, next) {
  try {
    let numberOfItemsDeleted = await postModel.destroy({ where: { id: req.params.id } });
    //destroy sequelize method returns the number of rows deleted .
    res.status(201).end();
  } catch (e) {
    next(`error inside deletePost function`);
  }
}



module.exports = router