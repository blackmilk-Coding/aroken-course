function HelloUser(name){
  return `Hello ${name}`;
}

console.log(HelloUser('димон'))
// ============================

const numbers = [0,10,12,45,10,23]
function CheckArray(array){
  for(let i=0; i<numbers.length; i++){
    if(numbers[i] > 10){
      console.log(`число больше 10::${numbers[i]}`)
    }
  }

}


CheckArray(numbers)

// =============================


function calculator(number1, number2, operator){
  let result = ''
  switch(operator){
    case "plus":
      result = number1 + number2;
      console.log(result);
      break
    case "minus":
      result = number1 - number2;
      console.log(result);
      break
    case "multi":
      result = number1 * number2;
      console.log(result);
      break
    case "division":
      result = number1 / number2;
      console.log(result);
      break
  }
}

calculator(2, 3, 'minus')