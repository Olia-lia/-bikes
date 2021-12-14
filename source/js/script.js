'use strict';
var pageHeader = document.querySelector('.page-header');
var headerToggle = document.querySelector('.page-header__toggle');
var mainNav = document.querySelector('.main-nav');

var form = document.querySelector('.form');
var phoneInput = form.querySelector('.form__input--phone');

pageHeader.classList.remove('page-header--nojs');
pageHeader.classList.add('page-header--closed-menu');
mainNav.classList.remove('main-nav--nojs');

headerToggle.addEventListener('click', function () {
  if (headerToggle.classList.contains('toggle-navigation--open')) {
    headerToggle.classList.remove('toggle-navigation--open');
    headerToggle.classList.add('toggle-navigation--close');
    pageHeader.classList.remove('page-header--closed-menu');
    pageHeader.classList.add('page-header--opened-menu');
  } else {
    headerToggle.classList.add('toggle-navigation--open');
    headerToggle.classList.remove('toggle-navigation--close');
    pageHeader.classList.add('page-header--closed-menu');
    pageHeader.classList.remove('page-header--opened-menu');
  }
});


var checkPhoneInputValidity = function () {
  var valuePhoneInput = phoneInput.value;
};


checkPhoneInputValidity();
