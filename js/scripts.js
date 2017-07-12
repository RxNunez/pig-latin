var trans = function(translator){
  var vowels = ['a','e','i','o','u', 'A', 'E', 'I', 'O', 'U'];
  var consonants != ['a','e','i','o','u', 'A', 'E', 'I', 'O', 'U'];




};

$(document).ready(function() {

  $("form#pig-latin").submit(function(event) {

    event.preventDefault();
    var translator = $("input#translator").val();
    var wordInput = translator.split();
    var display = trans(translator);
    $("#display").text(display);
  });
});
