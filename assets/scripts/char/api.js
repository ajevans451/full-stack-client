'use strict'
// post, get, get, patch, delete
const config = require('./../config')
const store = require('./../store')
const createChar = function (data) {
  return $.ajax({
      url: config.apiUrl + '/characters',
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + store.user.token
      },
      data: data
  })
}
const charIndex = function (data) {
  return $.ajax({
    url: config.apiUrl + '/characters',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
//need id
const showChar = function (data) {
  return $.ajax({
    url: config.apiUrl + '/characters',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
//need id
const updateChar = function (data) {
  return $.ajax({
    url: config.apiUrl + '/characters',
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}
//need id
const deleteChar = function (data) {
  return $.ajax({
    url: config.apiUrl + '/characters',
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
module.exports = {
  createChar,
  showChar,
  charIndex,
  deleteChar,
  updateChar
}
