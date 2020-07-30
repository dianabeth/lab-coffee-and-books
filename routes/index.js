'use strict';

const { Router } = require('express');
const Place = require('../models/place');
const router = new Router();

router.get('/', (req, res, next) => {
  Place.find()
    .then(places => {
      res.render('index', { title: 'Hello', places: places });
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
