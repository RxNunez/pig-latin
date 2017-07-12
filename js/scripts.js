var translator = function(userInput){
  var result = userInput;

  // var userInput =userInput.split('');


  if(!isNaN(userInput)){
    alert("You have entered number");
  }else if((userInput[0] === "a") || (userInput[0] === "e") || (userInput[0] === "i") || (userInput[0] === "o") || (userInput[0] === "u")){
    // alert("Entered data contains vowel");
    result = userInput + "way";
  }else {
    alert("not a cons");

  }
  return result;
}


var wordInput = function(userInput){
  var answer=0;

  userInput.map(function(word){
    answer= word+  "way";
    alert(answer);
  });

};
















$(document).ready(function() {

  $("form#pig-latin").submit(function(event) {

    event.preventDefault();

    var blocks = $("input#translator").val();

    var display = translator(blocks);
    $("#display").text(display);
  });
});
