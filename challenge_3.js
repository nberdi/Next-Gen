// Challenge 3
function average_grade(students) {
    let students_average_grade = {}
    let total_students = students.length

    for (let student of students) {
        let grades = student.grades

        for (let subject in grades) {
            if (students_average_grade.hasOwnProperty(subject)) {
                students_average_grade[subject] += grades[subject]
            } else {
                students_average_grade[subject] = grades[subject]
            }
        }
    }

    for (let subject in students_average_grade) {
        students_average_grade[subject] /= total_students
    }

    return students_average_grade
}
let challenge3 = [
    { name: "Alice", grades: { math: 90, english: 85, science: 92 } },
    { name: "Bob", grades: { math: 75, english: 80, science: 85 } }
]
console.log(average_grade(challenge3))
