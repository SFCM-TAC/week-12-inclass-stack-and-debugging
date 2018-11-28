function greetUser() {
  return 'Hello ' + getName();
}

function getName() {
  var name = 'Emily';
  return name;
}

var greeting = greetUser();
alert(greeting);
