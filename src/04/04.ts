const ages = [18, 22, 1, 99, 89, 43, 91];

const predicate = (age: number) => {
    return age > 90;
}



const oldAges = [90]


type CourseType = {
    title: string
    price: number
}

const courses = [
    {title: "css", price: 100},
    {title: "js", price: 200},
    {title: "react", price: 150},
]

const cheapPredicate = (course: CourseType) => {
    return course.price < 160
}


const cheapCourses = [
    {title: 'css', price: 110},
    {title: 'react', price: 150},

]