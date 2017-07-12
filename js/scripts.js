var translator = function(userInput){
var result = userInput;
  // var userInput =userInput.split('');
  if(!isNaN(userInput)){
    alert("You have entered number");
  }else if((userInput[0] === "a") || (userInput[0] === "e") || (userInput[0] === "i") || (userInput[0] === "o") || (userInput[0] === "u")){
    // alert("Entered data contains vowel");
  result = userInput + "way";
}else if((userInput[0] !== "a") || (userInput[0] !== "e") || (userInput[0] !== "i") || (userInput[0] !== "o") || (userInput[0] !== "u")){
    result = userInput.slice(1)+ userInput[0] + "ay";
    // alert("not a cons");
  }else if((userInput[0] !== "a") || (userInput[0] !== "e") || (userInput[0] !== "i") || (userInput[0] !== "o") || (userInput[0] !== "u")){
    alert(userInput.slice(2)+ userInput[0] + userInput[0] + "ay")
  }
  return result;
}


var consonant = function(userInput){

  var answer=0;



};
















$(document).ready(function() {

  $("form#pig-latin").submit(function(event) {

    event.preventDefault();

    var blocks = $("input#translator").val();

    var display = translator(blocks);
    $("#display").text(display);
  });
});
