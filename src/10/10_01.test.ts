import { UserType, UserWithBookType, UserWithLaptopType } from "./10_01";
import { makeHairstyle } from "./10_01";
import { upgradeUserLaptop } from "./10_01";
import { addNewBooks } from "./10_01";

test.skip('reference type test', () => {
    let user: UserType = {
        name: 'slava',
        hair: 5000,
        address: {
            city: 'kazan',
            house: 13
        }
    }

    const awesomeUser = makeHairstyle(user, 2)

    expect(user.hair).toBe(5000)
    expect(awesomeUser.hair).toBe(2500)
    expect(awesomeUser.address).toBe(user.address)
})



test.skip('upgrade laptop', () => {
    let user: UserWithLaptopType = {
        name: 'slava',
        hair: 5000,
        address: {
            city: 'kazan',
            house: 12
        },
        laptop: {
            title: 'hp'
        }
    }

    const movedUser = upgradeUserLaptop(user, 'macbook')

    

    expect(user).not.toBe(movedUser)
    expect(user.address).toBe(movedUser.address)
    expect(movedUser.laptop).not.toBe(user.laptop)
    expect(user.laptop.title).toBe('hp')
    expect(movedUser.laptop.title).toBe('macbook')
})

test('user with laptop and books', ()=> {
    let user: UserWithLaptopType & UserWithBookType = {
        name: 'slava',
        hair: 5000,
        address: {
            city: 'kazan',
            house: 12
        },
        laptop: {
            title: 'hp'
        },
        books: ['book1','book2','book3']
    }

    let copyUser = addNewBooks(user, ['book4','book5'])

    // expect(user.books).toBe(['book1','book2','book3'])
    expect(copyUser.books).toBe(['book1','book2','book3','book4','book5'])
})