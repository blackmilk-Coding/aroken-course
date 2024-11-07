const AboutMe = {
  name: 'Илья',
  lastName: 'Чеевич',
  age: 21,
  description: 'Да будет JavaScript!',
  helloName(name){
    return `hello ${name}`
  }
}


console.log(AboutMe.helloName('Иван'))

// ======================================

let JustUserCount = 0;
const users = [
  {
    name: 'Jonh',
    age: 23,
    isAdmin: false,
  },
  {
    name: 'alex',
    age: 33,
    isAdmin: true,
  },
  {
    name: 'Jack',
    age: 30,
    isAdmin: false,
  },
  {
    name: 'Thomas',
    age: 20,
    isAdmin: false,
  },
  
  {
    name: 'Harry',
    age: 18,
    isAdmin: true,
  },
]

for(let i=0; i < users.length; i++){
  if(users[i].isAdmin == false){
    JustUserCount++
  }
}

console.log(JustUserCount)