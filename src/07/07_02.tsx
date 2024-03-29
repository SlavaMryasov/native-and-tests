import { useState } from "react"
import { ManType } from "./07_01.test"

type PropsType = {
title: string
man: ManType
food: Array<string>
car: {model: string}
}

export const ManComponent: React.FC<PropsType> =({title, man: {name}, ...props}) => {

   const [message, setMessage] = useState<string>('hello')

    return(
        <div>
            <h1>{title}</h1>
            <hr />
            <div>{name}</div>
            <div>{props.car.model}</div>
        </div>
    )
}