
export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: 'Slava Mryasov', age: 27},
    {name: 'Ivan Ivanov', age: 28},
    {name: 'Petr Petrov', age: 19},
]




   let devs = people.map(person => ({
        firstName: person.name.split(' ')[0],
         lastName: person.name.split(' ')[1],
         stack: ['css, html', 'js', 'tdd', 'react']
   }))
console.log(devs)

let messages = people.map(dev => `Hello ${dev.name.split(' ')[0]}, Welcome to IT-Incubator`)

export const createGreetingMessage = (people: Array<ManType>) => {
  return  people.map(dev => `Hello ${dev.name.split(' ')[0]}, Welcome to IT-Incubator`)
}