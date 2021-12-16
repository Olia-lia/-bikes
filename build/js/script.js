'use strict';
var pageHeader = document.querySelector('.page-header');
var headerToggle = document.querySelector('.page-header__toggle');
var mainNav = document.querySelector('.main-nav');

var form = document.querySelector('.form');
var phoneInput = document.getElementById('user-phone');
var nameInput = document.getElementById('user-name');
var formButton = document.querySelector('.form__add');

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

const checkNameInputValidity = () => {
  const valueLength = nameInput.value.length;
  valueLength < 1  ?
    nameInput.setCustomValidity('Поле не может быть пустым'):
    nameInput.setCustomValidity('');
  nameInput.reportValidity();
};

const checkPhoneInputValidity = () => {
  const value = phoneInput.value;
  const valueArray = [];
  for (let i = 0; i < value.length; i++) {
    valueArray[i] = Number(value[i]);
    isNaN(valueArray[i]) ? phoneInput.setCustomValidity('Необходимо вводить только числовые значения') :
    phoneInput.setCustomValidity('')
  }
  phoneInput.reportValidity();
};

//phoneInput.value = valueArray.replace('^\+\d{1}\(\d{3}\)\d{3}-\d{4}$');

const addFormHandlers = () => {
  checkNameInputValidity();
  checkPhoneInputValidity(); 
}

document.querySelector('.form__add').addEventListener('click', addFormHandlers);
