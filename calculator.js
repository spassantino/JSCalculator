// $(document).ready(function(){
// });
//create a way to check for a number being pressed(rather than an operator) after result is displayed from equals click
var f = ('<form id="formula">');
$('#mainDiv').append(f);
var calc =('<div id="screen">');
$('#formula').append(calc);
$('#formula').append('<input type="button" value="7" class="nums">');
$('#formula').append('<input type="button" value="8" class="nums">');
$('#formula').append('<input type="button" value="9" class="nums">');
var d = ('<input type="button" value="/" class="operation" id="divide">');
$('#formula').append(d);
$('#formula').append('<br>');
$('#formula').append('<input type="button" value="4" class="nums">');
$('#formula').append('<input type="button" value="5" class="nums">');
$('#formula').append('<input type="button" value="6" class="nums">');
var m =('<input type="button" value="x" class="operation" id="multiply">');
$('#formula').append(m);
$('#formula').append('<br>');
$('#formula').append('<input type="button" value="1" class="nums">');
$('#formula').append('<input type="button" value="2" class="nums">');
$('#formula').append('<input type="button" value="3" class="nums">');
var a = ('<input type="button" value="+" class="operation" id="add">');
$('#formula').append(a);
$('#formula').append('<br>');
$('#formula').append('<input type="button" value="0" class="nums">');
var c = ('<input type="button" value="C" id="clear">');
$('#formula').append(c);
$('#formula').append('<input type="submit" value="=" id="equals">');
var s = ('<input type="button" value="-" class="operation" id="subtract">');
$('#formula').append(s);
var $choices = [];
var runningTotal=0;
var num1='';
var num2='';
var picked= false;

var $screen = $('#screen');
$screen.text('0');
// var $allButtons = $('#formula :input[type="button"]').not(':input[id=equals], :input[id=clear]');

//   $allButtons.click(function(e){
// });
var $operators = $('#formula :input[class="operation"]');

  $operators.click(function(e){
    if (runningTotal>0){
      $choices[1]= $(this).val();
      num1 = runningTotal;

      num2='';
    }
    console.log($(this).val());
    $choices.push(num1);
    picked=true;
//turn num1 in to a string of only digits
    $choices.push($(this).val());
    console.log($choices);
    $screen.text(num1 + ' ' + $(this).val());

  });
var $digits = $('#formula :input').not(':input[type="text"], :input[id="equals"], :input[id="clear"], :input[class="operation"]');
  $digits.click(function(e){
    // if (tallied){
    //   num1= runningTotal;
    //   num2=0;
    //   num2= num2 + $(this).val();
    //   $screen.text(num1 + ' ' + $choices[1] + ' ' + num2);
    //
    // }
    if (picked){
      num2= num2 + $(this).val();
      console.log(num2);
      $screen.text(num1 + ' ' + $choices[1] + ' ' + num2);
      // picked =false;
    }
    else {
      num1= num1 + $(this).val();
      console.log(num1);
      $screen.text(num1);
    }
    // $choices.push($(this).val());

  });
var $clear = $('#formula :input[id="clear"]');
// console.log($clear.val());

  $clear.click(function(e){

    $choices.pop();
    $choices.pop();
    $choices.pop();
    runningTotal= 0;
    num1='';
    num2='';
    $screen.text('0');
  });

var $equals = $('#formula :input[id="equals"]');
// var tallied = false;
$equals.click(function(e){
  e.preventDefault();
  picked=false;
  console.log($equals.val());
  $choices.push(num2);
  // $choices.pop();

  runningTotal = calculate(num1,$choices[1],num2);
  $screen.text(runningTotal);
  num1 ='';
  num2 ='';

return runningTotal;
});

var calculate = function(num1, op, num2){
  num1 = parseInt(num1);
  num2 = parseInt(num2);

if(op===('+')){
  runningTotal=num1+num2;
 return runningTotal;
}
if(op===('-')){
   runningTotal =num1-num2;
   return runningTotal;
}
if(op===('x')){
  runningTotal =num1*num2;
  return runningTotal;
}
if(op===('/')){
  runningTotal=(num1)/(num2);
  return runningTotal;
}

return runningTotal;
}
