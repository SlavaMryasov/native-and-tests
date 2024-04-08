
const incAge = (u: any) =>{
    u.age++
}

test('big test', ()=> {
    let user:any = {
        name: 'slava',
        age: 27
    }
    incAge(user)

    let superUser = user
   
    expect(user.age).toEqual(28)
    expect(superUser).toEqual({name: 'slava', age:28})
})


test('array test', ()=> {
    let users:any = [
        {name: 'slava',age: 27},
        {name: 'igor',age: 20}
        
    ]

    let admins = users
    admins.push({name: 'bandugan', age: 10})
   
    expect(users[2]).toEqual({name: 'bandugan', age: 10})
 
})


test('value type test', ()=> {
    let users = 100;
    let adminsCount= users
    adminsCount = adminsCount+1
    adminsCount++
   
    expect(adminsCount).toEqual(102)
 
})


test('reference type', ()=> {
    let user:any = {
        name: 'slava',
        age: 27,
        address: {title: 'kazan'}
    }
    
    let user2: any = {
        name: 'katya',
        age:28,
        address: user.address
    }
   
    user2.address.title = 'moskow'
    expect(user.address.title).toEqual('moskow')
})

test('reference type array test', ()=> {
    let user:any = {
        name: 'slava',
        age: 27,
        address: {title: 'kazan'}
    }
    
    let user2: any = {
        name: 'katya',
        age:28,
        address: user.address
    }
    
    const users = [user, user2, {name: 'danya', age: 21, address: user.address}]
    const admins = [user, user2]

    admins[0].name ='Vyacheslav'
    expect(users[0].name).toEqual('Vyacheslav')
})


