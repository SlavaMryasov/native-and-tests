
test('should take old men older then 90', () => {

    const ages = [18, 22, 20, 1, 100, 90, 14];

    const oldAges = ages.filter(age => age > 90);

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})



test('should take courses cheaper then 160', () => {

    const courses = [
        {title: "css", price: 100},
        {title: "js", price: 200},
        {title: "react", price: 150},
    ]

    const cheapCourses = courses.filter(course => course.price < 160);

    expect(cheapCourses.length).toBe(2)
    expect(cheapCourses[0].title).toBe('css')
    expect(cheapCourses[1].title).toBe('react')
})

test('get only completed tasks', () => {
    const tasks = [
        {id:1, title:'task1', description: 'html', completed: true},
        {id:2, title:'task2', description: 'js', completed: true},
        {id:3, title:'task3', description: 'react', completed: false},
    ]

    const completedTasks = tasks.filter(task => task.completed)

    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].description).toBe('html')
    expect(completedTasks[1].description).toBe('js')
})