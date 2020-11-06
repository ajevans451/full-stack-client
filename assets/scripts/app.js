'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
$(() => {
  // your JS code goes here
$('#sign-up-form').on('submit', authEvents.signUp)
$('#sign-in-form').on('submit', authEvents.logIn)
$('#change-pw-form').on('submit', authEvents.changePW)
$('#sign-out-form').on('submit', authEvents.logOut)
})
