#!/usr/bin/node

const req = require('request');
const id = process.argv[2];
const url = 'https://swapi-api.hbtn.io/api/films/';
req.get(url + id, function (erro, response, body) {
  if (erro) {
    console.log(erro);
  }
  const data = JSON.parse(body);
  const dd = data.characters;
  for (const j of dd) {
    req.get(j, function (erro, response, body1) {
      if (erro) {
        console.log(erro);
      }
      const data1 = JSON.parse(body1);
      console.log(data1.name);
    });
  }
});