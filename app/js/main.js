/**
 * Created by IMike on 19.06.2017.
 */

'use strict';

$(document).ready(function() {
  // Datepicker
  $('.searchForm__inputDate-inputDay:eq(2), .searchForm__inputDate-inputDay:eq(3)').removeAttr('id');

  $('.searchForm__inputDate-inputDay').each(function() {
    $(this).datepicker();
  });

  // Input city
  $('.searchForm__inputCityDeparture-inputText, .searchForm__inputCityArrive-inputText').focus(function() {
    $(this).attr('placeholder','');
    $(this).siblings('label').css('color', 'rgb(0, 0, 0)');
  });

  $('.searchForm__inputCityDeparture-inputText').focusout(function(){
    $(this).attr('placeholder','Омск');
    $(this).siblings('label').css('color', 'rgb(105, 105, 105)');
  });

  $('.searchForm__inputCityArrive-inputText').focusout(function(){
    $(this).attr('placeholder','Москва');
    $(this).siblings('label').css('color', 'rgb(105, 105, 105)');
  });

  // Reset
  $('.searchForm__inputCityDeparture-inputText, .searchForm__inputCityArrive-inputText').keyup(function() {
    if($(this).val()) {
      if ($(window).width() >= 751 ) {
        $('.searchForm__inputCityArrive-buttonReset').css('visibility', 'visible');
      }

      if ($(window).width() <= 751 ) {
        $(this).siblings('button').css('visibility', 'visible');
      }
    }

    if(!$(this).val()) {
      if ($(window).width() >= 751 ) {
        if ( !$('.searchForm__inputCityDeparture-inputText').val() && !$('.searchForm__inputCityArrive-inputText').val() ) {
          $('.searchForm__inputCityArrive-buttonReset').css('visibility', 'hidden');
        }
      }

      if ($(window).width() <= 751 ) {
        $(this).siblings('button').css('visibility', 'hidden');
      }
    }
  });

  $('.searchForm__inputCityDeparture-buttonReset').click(function() {
    $('.searchForm__inputCityDeparture-inputText').val('');
    $(this).css('visibility', 'hidden');
  });

  $('.searchForm__inputCityArrive-buttonReset').click(function() {
    if ($(window).width() >= 751 ) {
      $('.searchForm__inputCityDeparture-inputText, .searchForm__inputCityArrive-inputText').val('');
      $(this).css('visibility', 'hidden');
    } else {
      $('.searchForm__inputCityArrive-inputText').val('');
      $(this).css('visibility', 'hidden');
    }
  });

  // Input date
  $('.searchForm__inputDate-inputDay').focus(function() {
    $(this).siblings('label').css('color', 'rgb(0, 0, 0)');
  });

  $('.searchForm__inputDate-inputDay').focusout(function(){
    $(this).siblings('label').css('color', 'rgb(105, 105, 105)');
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