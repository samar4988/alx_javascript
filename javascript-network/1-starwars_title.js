#!/usr/bin/node

const request = require('request');
const API_URL = 'https://swapi-api.hbtn.io/api/films/';
const episodeNum = process.argv[2];

request(API_URL + episodeNum, function (erro, response, body) {
  if (erro) {
    console.log(erro);
  } else if (response.statusCode === 200) {
    const responseJSON = JSON.parse(body);
    console.log(responseJSON.title);
  } else {
    console.log('Error code: ' + response.statusCode);
  }
});