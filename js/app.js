$(document).ready(function() {
  var max = prompt("Enter max number (Integer)", 100);
  console.log(typeof max);
  max = +max;
  console.log(typeof max);

  if (isNaN(max) || (max === " ")) {
    while (isNaN(max) || max % 1 != 0) {
      alert("Please enter a INTEGER value");
      var max = prompt("Enter max number (INTEGER)", 100);      
    }

    fizzbuzz(max);
  }
  else {
    fizzbuzz(max);
  }
});

function fizzbuzz(max) {
  for (var i = 1; i <= max; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      $('ul').prepend('<li>' + 'Fizz Buzz' + '</li>');
    }
    else if (i % 3 == 0) {
      $('ul').prepend('<li>' + 'Fizz' + '</li>');
    }
    else if (i % 5 == 0) {
      $('ul').prepend('<li>' + 'Buzz' + '</li>');
    }
    else {
      $('ul').prepend('<li>' + i + '</li>');
    }
  }
}

//fizzbuzz(max);


/*  for (var i = 1; i <= max; i++) {
    console.log(i);
    if (i % 3 == 0 && i % 5 == 0) {
      x = 'Fizz Buzz';
      $('ul').prepend('<li>' + x + '</li>');
    }
    else if (i % 3 == 0) {
      x = 'Fizz';
      $('ul').prepend('<li>' + x + '</li>');
    }
    else if (i % 5 == 0) {
      x = 'Buzz';
      $('ul').prepend('<li>' + x + '</li>');
    }
    else {
      $('ul').prepend('<li>' + i + '</li>');
    }
  }*/