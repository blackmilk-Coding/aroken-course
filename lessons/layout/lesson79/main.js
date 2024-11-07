const age = 10;

age >= 18 ? console.log('Вы совершеннолетний') : console.log('Вам еще нет 18')
// Тернарный оператор


const User={}
User['name'] = 'Victor'
User['status'] = 'user'
const message = `Hello ${User['name']} your status ${User['status']} `;

for (const key in User) {
  switch(User['status']){
    case "Admin":
      console.log(message)
      break

    case "author":
      console.log(message)
      break

    case "moderator":
      console.log(message)
      break

    default:
      console.log(`hello ${User['name']} , your status is not administrative`)
      break
 }
 break
}