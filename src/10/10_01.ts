
export type UserType = {
    name: string
    hair: number
    address: {city: string, house?: number}
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}
export type UserWithBookType = UserType & {
    books: string[]
}

export const makeHairstyle = (u: UserType, power: number) => {
    const userCopy = {
        ...u,
         hair: u.hair/power
        }

    return userCopy
}

export const upgradeUserLaptop = (u:UserWithLaptopType, laptop: string) => {
    return {
        ...u,
        laptop: {...u.laptop,
            title: laptop
        }
    }
} 

export const addNewBooks = (u:UserWithLaptopType& UserWithBookType, newBooks: string[])=> {
    return {
        ...u, 
        books: [
            ...u.books, newBooks.forEach(el=> el)
        ]
    }
}