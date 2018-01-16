
var args = process.argv;
var password = args[2];

function obfuscate(password){
  var array = password.split('');
  for(i = 0; i < array.length; i ++ ) {
    if (array[i] === 'a'){
      array[i] = '4';
    } else if (array[i] === 'e'){
      array[i] = '3';
    } else if (array[i] === 'o') {
      array[i] = '0';
    } else if (array[i] === 'l') {
      array[i] = '1';
    }
  } return array.join('');
}

console.log(obfuscate(password));