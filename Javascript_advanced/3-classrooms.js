#!/usr/bin/node
function createClassRoom(numbersOfStudents) {
    function studentSeat(seat) {
        return function() {
            return seat;
        };
    }

    const students = [];
    for (let j = 0; j < numbersOfStudents; j++) {
        students.push(studentSeat(j + 1));
    }
    return students;
}
const classRoom = createClassRoom(10);
console.log(classRoom[0]());
console.log(classRoom[3]());
console.log(classRoom[9]());