import { createGreetingMessage } from "./05_01"


     type ManType = {
        name: string
        age: number
    }

    let people: Array<ManType>
    
    beforeEach(()=>{
        people = [
            {name: 'Slava Mryasov', age: 27},
            {name: 'Ivan Ivanov', age: 28},
            {name: 'Petr Petrov', age: 19},
        ]
    })
    test.skip('messages for students', ()=> {
    let messages = createGreetingMessage(people)

    expect(messages.length).toBe(3)
    expect(messages[0].split(' ')[1]).toBe('Slava,')
    expect(messages[1].split(' ')[1]).toBe('Ivan,')
    expect(messages[2].split(' ')[1]).toBe('Petr,')
    
})