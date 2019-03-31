const express = require("express");
const router = express.Router();
const axios = require("axios");
const apiKey = require("../../config/keys").apiKey;

// @route   GET api/beer/search
// @desc    Get beer by search
// @access  Public

router.get("/search", (req, res) => {
  let query = req.query.search;

  axios
    .get(
      `https://sandbox-api.brewerydb.com/v2/search?q=${query}&withBreweries=y&type=beer&p=${
        req.query.page
      }&key=${apiKey}&format=json`
    )
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.log(err);
    });
});

// @route   GET api/beer/:id
// @desc    Get beer by id
// @access  Public

router.get("/id=:id", (req, res) => {
  axios
    .get(
      `https://sandbox-api.brewerydb.com/v2/beer/${
        req.params.id
      }?key=${apiKey}&withBreweries=y&format=json`
    )
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.log(error);
    });
});

// @route   GET api/beer/style
// @desc    Get beer by style
// @access  Public

router.get("/style", (req, res) => {
  let styleId = req.query.style;

  axios
    .get(
      `https://sandbox-api.brewerydb.com/v2/beers?key=${apiKey}&withBreweries=y&styleId=${styleId}&format=json`
    )
    .then(response => {
      res.json(response.data.data);
    })
    .catch(error => {
      console.log(error);
    });
});

// @route   GET api/beer/brewery/:id
// @desc    Get brewery by id
// @access  Public

router.get("/brewery/id=:id", (req, res) => {
  axios
    .get(
      `https://sandbox-api.brewerydb.com/v2/brewery/${
        req.params.id
      }?key=${apiKey}&format=json`
    )
    .then(response => {
      console.log(response.data);
      res.json(response.data);
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
