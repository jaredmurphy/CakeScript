
$(document).ready(function() {
  console.log("script.js loaded");

  var arr = [1,2,3,4,5];
  $('#arraySampleClick').on('click', function() {
      $('#arraySampleShow').append('<p>sampled array index = ' + arr.sample() + ' </p>');
      //console.log('sampled array index = ' + arr.sample());
  });

  var str = "Hello, world!";
  $('#stringReverseClick').on('click', function() {
    $('#stringReverseShow').append('<p>reversed string = ' + str.reverse() + ' </p>');
  });
});
