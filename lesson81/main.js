const number = ['24', '32', '65', '85', '3', '21', '52', '96', '82']
const rainbowColors = ['красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый'];

for(let i=0; i < number.length; i++){
  if(number[i] % 2 == 0){
    console.log(number[i]);
  }
}

for(let i=rainbowColors.length-1; i >= 0; i-- ){
  console.log(rainbowColors[i])
}