for (let i = 0; i <= 12; i++) {
  if(i % 2 == 0 && i != 0){
    console.log(i)
  }
}
console.log("=======================")
for(let i = 10; i >= 1; i--){
  console.log(i);
}
console.log("=======================")

let count = 0
while(count != 12){
  count++
  if(count % 2 == 0 && count != 0){
    console.log(count)
  }
  if(count == 12){
    break
  }
}

console.log("=======================")
console.log("=======================")

let count2 = 11;
while(count2 >= 1){
  count2--;
  console.log(count2);
  if(count2 == 1){
    break
  }
}