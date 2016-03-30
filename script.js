$(function () {
  $("ul").sortable();
});

$(".selector").sortable({
  appendTo: document.body
});

$('#myForm').submit(function (event) {
  event.preventDefault();

  $(this).children('input:text').each(function (index, elem) {
    var value = $(elem).val()
    $('ul').append("<li><button id='kill-todo'></button><span>" + value + "</span></li>");
    console.log('passing in');
    $(elem).val('');
  });
});

$(document).on('click', '#kill-todo', function () {
  $(this).parent().remove();
});