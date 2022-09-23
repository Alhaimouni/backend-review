'use strict';

const express = require('express');
const { userModel } = require('../02-models/index');
const { hashingPasword } = require('../03-middlewares/hashing');
const router = express.Router();


router.post(`/signup`, hashingPasword, signup);
router.post(`/signin`, signin);


async function signup(req, res, next) {
  try {
    let newUser = await userModel.create(req.body);
    res.status(200).send(newUser);
  } catch (e) {
    console.log(e);
    next('error inside signup function ');
  }
}

function signin(req, res, next) {
  try {

  } catch (e) {
    next('error inside signin function ');
  }
}







module.exports = router;