
type LocalCityType = {
    title: string
    countryTitle: string 
}

type AddressType = {
    streetTitle: string
    city: LocalCityType
}

type TechType = {
    id: number
    title: string
}

export type StudentType = {
    id: number,
    name: string,
    age: number,
    isActive: boolean,
    address: AddressType
    technologies: Array<TechType>
}


export const student: StudentType = {
  id: 1,
  name: "slava",
  age: 27,
  isActive: true,
  address: {
    streetTitle: "Mira 3",
    city: {
      title: "moskow",
      countryTitle: "Russia",
    },
  },
  technologies: [
    {id:1, title: 'HTML'},
    {id:2, title: 'HTML'},
    {id:3, title: 'HTML'},
  ]
};

console.log(student.age);
console.log(student.name);
console.log(student.address.city.title);
console.log(student.technologies[0].title)
