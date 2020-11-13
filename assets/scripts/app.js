'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
const charEvents = require('./char/events')
$(() => {
  // your JS code goes here

$('#sign-up-form').on('submit', authEvents.signUp)
$('#sign-in-form').on('submit', authEvents.logIn)
$('#change-pw-form').on('submit', authEvents.changePW)
$('#sign-out-form').on('submit', authEvents.logOut)
$('char-create-form').on('submit', charEvents.createCharacter)
$('char-update-form').on('submit', charEvents.updateCharacter)
$('char-index-form').on('submit', charEvents.indexCharacter)
$('char-delete-form').on('submit', charEvents.deleteCharacter)
$('#change-pw-form').hide()
$('#sign-out-form').hide()
$('#content').hide()

})
