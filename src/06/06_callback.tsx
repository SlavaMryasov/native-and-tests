import { ChangeEvent, MouseEvent } from "react"

// const callback = (): void => {
//     alert('hi')
// }

// window.setTimeout(callback, 1000)


export const User = () => {

    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        console.log(event.currentTarget.name)
        // alert('user deleted')
    }



    const nameChanged = () => {
        console.log('name changed')
    }

    const ageChanged = (event: ChangeEvent<HTMLInputElement>) => {
        console.log('age changed'+ event.currentTarget.value)
    }

    const blurFocusLost = () => {
        console.log('focus lost')
    }
    return (
        <div>
            <textarea tabIndex={1} onChange={nameChanged} onBlur={blurFocusLost}>
                slava
            </textarea>
            <input tabIndex={0} onChange={ageChanged} type="number"/>
            <hr/>
        <button name="delete" onClick={deleteUser}>delete</button>
        {/* <button onClick={()=> alert('user saved')}>save</button> */}
        <button name="save" onClick={deleteUser}>save</button>
        </div>
    )
}