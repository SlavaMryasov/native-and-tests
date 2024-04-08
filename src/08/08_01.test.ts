type UsersType = {
    [key: string]: {id: number, name: string}
} 

let users: UsersType

beforeEach(()=> {
 users ={
    "101": { id: 101, name: "dimych" },
  "105451": { id: 105451, name: "natasha" },
  "10141": { id: 10141, name: "valera" },
  "1": { id: 1, name: "katya" }
 }
})


test.skip('should update corresponding user', () => {
    users[1].name = 'ekaterina'

    expect(users['1'].name).toBe('ekaterina')
    expect(users['1']).toEqual({ id: 1, name: "ekaterina" })
})


test.skip('should delete user from arr', ()=> {

    delete users['1']

    expect(users['1']).toBeUndefined()
})