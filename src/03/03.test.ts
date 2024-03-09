import { StudentType } from "../02/02";
import { activateStudent, addSkill, doesStudentLiveInRussia} from "./03";

let student: StudentType;
beforeEach(() => {
  student = {
    id: 1,
    name: "slava",
    age: 27,
    isActive: false,
    address: {
      streetTitle: "Mira 3",
      city: {
        title: "Moscow",
        countryTitle: "Russia",
      },
    },
    technologies: [
      { id: 1, title: "HTML" },
      { id: 2, title: "HTML" },
      { id: 3, title: "HTML" },
    ],
  };
});

test.skip("new tech skill should be added to student", () => {
    expect(student.technologies.length).toBe(3)

addSkill(student, 'JS')

expect(student.technologies.length).toBe(4)
expect(student.technologies[3].title).toBe('JS')
expect(student.technologies[3].id).toBeDefined
});

test.skip("student should be made active", () => {
    expect(student.isActive).toBe(false)

    activateStudent(student)

expect(student.isActive).toBe(true)
});

test.skip("student lives in Russia", () => {

    let result4 = doesStudentLiveInRussia(student, "Russia");
    let result5 = doesStudentLiveInRussia(student, "Belarus");

    expect(result4).toBe(true)
    expect(result5).toBe(false)
});
