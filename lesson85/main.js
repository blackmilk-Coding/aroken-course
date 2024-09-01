const NewUsers = [
  { 
    Nickname: 'Макс_Рэй_Вижн',
    password: 'asdvkAAA',
    status: 'hacker',
    lastOnline: 0,
    isOnline: true,
  },
  { 
    Nickname: 'commandorX',
    password: 'sardgfa',
    status: 'hacker',
    lastOnline: 0,
    isOnline: true,
  }

  
]
const UserAccount = [
  {
    Nickname: 'R0bert',
    password: '123asd',
    status: 'user',
    lastOnline: 0,
    isOnline: true,
  },
  {
    Nickname: 'black_coder',
    password: 'c2-345091',
    status: 'hacker',
    lastOnline: 0, //0 означает что пользователь в сети, всё что больше, означает, что пользователь не в сети
    isOnline: true,
  },
  {
    Nickname: 'moderator',
    password: 'localServices_011',
    status: 'Coder',
    lastOnline: 4,
    isOnline: true,
  },
  {
    Nickname: 'R0bert',
    password: 'mobileQuery)(',
    status: 'diller',
    lastOnline: 3,
    isOnline: true,
  }
]

for(let i=0; i < NewUsers.length; i++){
  UserAccount.push(NewUsers[i]);
}

UserAccount.forEach(users => {
  // console.log(users.Nickname);
});


function OnlineUsers(UserAccount){
  let listOnlineUser = []
  let countOnlineUser = 0
  for(let i=0; i < UserAccount.length; i++){
    
    if(UserAccount[i].lastOnline == 0){
      UserAccount[i].isOnline = true
      listOnlineUser.push(UserAccount[i])
      countOnlineUser ++
    }else{
      UserAccount[i].isOnline = false
    }
  };
  console.log("::Колличество пользователей::")
  console.log(countOnlineUser)
  console.log("::Список пользователей в сети::")
  for(let i=0; i < listOnlineUser.length; i++){
    console.log(listOnlineUser[i].Nickname)
  }
}

OnlineUsers(UserAccount)