import $ from 'jquery';
import './style.scss';
// const $ = require('jquery');
// $('#main').html('Here we go');
let width = 0;

setInterval(() => {
  width += 1;
  $('#main').html(`You've been on this page for ${width} seconds.`);
}, 1000);

// console.log('starting up!');
