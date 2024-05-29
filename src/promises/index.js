
// let a = {}; // new Object
// let b = []; // new Array
{/* <User/>// new User - для классов */ }
// let c = () => {} // new Function()



// let pr = new Promise((res, rej) => {
//     setTimeout(() => res('hh'), 5000)
// })
// console.log(pr)



let axios = {
    data: 'dwdw',
    get() {
        let pr = new Promise((res, rej) => {
            setTimeout(() => res({ data: this.data }), 2000)
        })
        return pr
    }
}


axios.get()
    .then(data => data.data)
    .then(data => console.log(data))
    .catch(err => console.error(err))


// w