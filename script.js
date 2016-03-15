
$(document).ready(function() {
  console.log("script.js loaded");

  var arr = [1,2,3,4,5]
  $('#click').on('click', function() {
      $('body').append('<p>sampled array index = ' + arr.sample() + ' </p>');
      //console.log('sampled array index = ' + arr.sample());
  });
});
