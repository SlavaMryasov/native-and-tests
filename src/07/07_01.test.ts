

export type ManType = {
    name: string
    age: number
    lessons: Array<{title: string}>
    address: {
        street: {
            title: string
        }
    }
}


let props: ManType

beforeEach(()=> {
     props = {
        name: 'slava',
        age: 27,
        lessons: [{title: '1'}, {title: '2'}],
        address: {
            street: {
                title: 'tatarstan'
            }
        }
    }
})

    test.skip('messages for students', ()=> {

        // const age= props.age;
        // const lessons= props.lessons;
        const {age, lessons} = props
        const {title} = props.address.street

        const a= props.age;
        const l= props.lessons;

        expect(age).toBe(27);
        expect(lessons.length).toBe(2);
        expect(a).toBe(27);
        expect(l.length).toBe(2);
        expect(title).toBe('tatarstan')
})


test.skip('messages for students', ()=> {

    const lesson1 = props.lessons[0]
    const lesson2 = props.lessons[1]

    const [ls1, ls2] = props.lessons;

    expect(lesson1.title).toBe('1')
    expect(lesson2.title).toBe('2')

    expect(ls1.title).toBe('1')
    expect(ls2.title).toBe('2')
})