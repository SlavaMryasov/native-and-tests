import { StudentType } from "../02/02"
import {GovernmentBuildings } from "../02/02_02"

export const sum1 = (a:number, b: number) => {
    return a+b
}

const res = sum1(sum1(1,2), sum1(1,3))
const res2 = sum1(2,4)

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export const activateStudent = (student: StudentType) => {
    student.isActive = true
}

export const doesStudentLiveInRussia = (student: StudentType, country: string) => {
    return student.address.city.countryTitle === country
}

export const addMoneyToBudget = (GB: GovernmentBuildings, addedMoney: number) => {
    return GB.budget += addedMoney
}