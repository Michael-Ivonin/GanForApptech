/**
 * Created by IMike on 19.06.2017.
 */

'use strict';

$(document).ready(function() {
  // Datepicker
  $('.searchForm__inputDate-inputDay').each(function() {
    $(this).datepicker();
  });

  // Input text
  $('.searchForm__inputCityDeparture-inputText, .searchForm__inputCityArrive-inputText').focus(function() {
    $(this).attr('placeholder','');
  });

  $('.searchForm__inputCityDeparture-inputText').focusout(function(){
    $(this).attr('placeholder','Омск');
  });

  $('.searchForm__inputCityArrive-inputText').focusout(function(){
    $(this).attr('placeholder','Москва');
  });

  $('.searchForm__inputCityDeparture-buttonReset').click(function() {
    $('.searchForm__inputCityDeparture-inputText').val('');
  });

  $('.searchForm__inputCityArrive-buttonReset').click(function() {
    if ($(window).width() >= 751 ) {
      $('.searchForm__inputCityDeparture-inputText, .searchForm__inputCityArrive-inputText').val('');
    } else {
      $('.searchForm__inputCityArrive-inputText').val('');
    }
  });

  // Mask for calendar
  $('.searchForm__inputDate-inputDay').mask("99.99.9999");

  // Chosen for select
  $('.searchForm__inputQuantity-inputNumber').chosen();

  $(window).resize(function() {
    if ($(window).width() <= 974 ) {
      $('.chosen-container').each(function() {
        $(this).attr('style', 'width: 94%');
      });
    }

    if ($(window).width() >= 975 ) {
      $('.chosen-container').each(function() {
        $(this).attr('style', 'width: 94%');
      });
    }
  });
});