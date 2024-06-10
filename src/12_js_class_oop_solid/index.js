
// // prototype
// function DeleteUserAction(userId) {
//     this.type = 'DELETE-USER'
//     this.payload = {
//         userId
//     }
// }

// const action1 = new DeleteUserAction('ididid')
// const action2 = new DeleteUserAction('dididi')
// console.log(action1)
// console.log(action2)


// //class
// class DeleteUserAction2 {
//     constructor(userId) {
//         this.type = 'DELETE-USER'
//         this.payload = {
//             userId
//         }
//     }
// }
// const action3 = new DeleteUserAction2('ididid')
// console.log(action3)



// //object
// function commonHello() {// ТАК НЕ НАДО, НАДА ЧЕРЕЗ ПРОТОТИП
//     console.log(`I am ${this.name} from ${this.site}`)
// }

// const userFabric = (name) => {
//     const user = {
//         name,
//         site: 'it-incubator.by',
//         dateOfBirth: new Date(1988, 1, 2),
//         hello: commonHello
//     }
//     return user;
// }

// const u1 = userFabric('slava')
// u1.hello()

// commonHello.apply(u1)




// function User(name, site, dob) {
//     this.name = name
//     this.site = site
//     this.dateOfBirth = dob
// }

// User.prototype.hello = function () { console.log(`I am ${this.name} from ${this.site}`) }

// const user1 = new User('slava', 'slava.com', new Date(1997, 2, 19))
// const user2 = new User('katya', 'katya.com', new Date(1996, 3, 4))

// user1.hello()
// user2.hello()


// let ff = "222"

// console.log(user1.__proto__)
// console.log(User.prototype)


// //__proto__ - есть у любого объекта
// // __proto__ - у одинаковых по типу объектов proto один и тот же

// // prototype - есть только у class или function
// // __proto__ любого объекта ссылается на prototype класса(функции конструктора), с помощью которой этот
// //             объект был создан (сконструирован)


// class Man {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//         this.counter = 0
//     }
//     hello() { this.counter++; console.log(this.name, this.counter) }
// }

// const man1 = new Man('slavaa', 27)
// const man2 = new Man('katya', 28)
// man1.hello()
// man1.hello()
// man1.hello()
// man2.hello()
// man2.hello()

// Man.prototype.ageMessage = function () { console.log(this.age) }
// man1.ageMessage()


// class PC {
//     #name = ''
//     constructor(name, year) {
//         this.year = year
//         this.#name = name
//     }
//     getName() { console.log(this.#name) }
//     setName(name) { this.#name = name }
// }

// const mac = new PC('mac', 2024)
// console.log(mac.year)
// mac.getName()
// mac.setName('macak')
// // mac.#name = 'macak'
// mac.getName()





class User {
    #name = ''
    constructor(name, location) {
        this.#name = name
        this.location = location
    }
    hello() { console.log(`hello my name is ${this.#name} from ${this.location}`) }
    get name() { return this.#name }
    set name(name) { return this.#name = name }
}

const u1 = new User('slava', 'kazan')
u1.name = 'igor' // если бы не было сеттера, то это бы не сработало
console.log(u1.name)


class Programmer extends User {
    constructor(name, location, status) {
        super(name, location)
        this.status = status
    }
    isProgrammer() {
        console.log(`my name is ${this.name}, I am from ${this.location} and I am a ${this.status}`)
    }
    hello() {
        super.hello()
        console.log('go away')
    }
}

const p1 = new Programmer('slava', 'kazan', 'programmer')
p1.hello()
u1.hello()
console.log(u1.name)
console.log(p1.name)