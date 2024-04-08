
export const usersObj = {
  "0": "dimych",
  "1": "natasha",
  "2": "valera",
  "3": "katya",
};

type UsersType = {
    [key: string]: {id: number, name: string}
} 

export const users: UsersType = {
  "101": { id: 101, name: "dimych" },
  "105451": { id: 105451, name: "natasha" },
  "10141": { id: 10141, name: "valera" },
  "4101": { id: 4101, name: "katya" },
};

// users[1] // в ассоциативном массиве происходит моментальное дотавание объекта по id
            // id выступает в качестве ключа объекта 

    let user = {id: 100500, name:'slava'} // создаем объект
    users[user.id] = user // добавляем в массив users новый объект user. Запиши объект user под свойством id
    // проще говоря, добавится новый объект с ключем '100500' и значением в виде объекта user
    delete users[user.id]
    users[user.id].name = 'vitya' // обновляем элемент массива




export const usersArray = [
  { id: 101, name: "dimych" },
  { id: 105451, name: "natasha" },
  { id: 10141, name: "valera" },
  { id: 4101, name: "katya" },
];

// usersArray.find(u => u.id ===1)
// let usersCopy = [...usersArray.filter(), user]
 let usersArray2 = usersArray.filter(u => u.id !== user.id)
