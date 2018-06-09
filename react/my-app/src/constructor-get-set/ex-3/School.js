import React, { Component } from 'react';
import Person from './Person';
import Student from './Student';
import Teacher from './Teacher';

class School extends Component {
    render() {

        let kate = new Student('Kate', 'Red', 23, 165, 58, 'Makeup', 4);
        let matt = new Student('Matt', 'Green', 23, 185, 80, 'Calistenics', 4);
        let sophie = new Student('Sophie', 'Black', 21, 164, 55, 'Cooking', 2);
        let tom = new Student('Tom', 'Blue', 21, 190, 65, 'Dancing', 2);
        let claudia = new Student('Claudia', 'White', 17, 155, 68, 'Reading', 1);
        let hank = new Student('Hank', 'Purple', 19, 178, 78, 'Hiking', 1);
        let sandra = new Student('Sandra', 'Violet', 23, 150, 50, 'Lemki', 3);
        let jasob = new Student('Jacob', 'Yellow', 23, 180, 97, 'Wpierdaling', 3);

        let profFox = new Teacher('Stanley', 'Fox', 56, 182, 67, 'Phisics', [2, 3, 4]);
        let profBird = new Teacher('Marta', 'Bird', 42, 162, 63, 'Screaming', [1, 2, 3]);

        let students = [kate, matt, sophie, tom, claudia, hank, sandra, jacob];
        let teachers = [profFox, profBird];

        function findMaleStudents() {
            let maleStudents = [];
            for (let i = 0; i < students.length; i++) {
                if (students[i].isMale()) {
                    maleStudents.push(students[i]);
                }
            }
            console.log(maleStudents);
            return maleStudents;
        }

        findMaleStudents();


        function findFemaleStudents() {
            let femaleStudents = [];
            for (let i = 0; i < students.length; i++) {
                if (students[i].isFemale()) {
                    femaleStudents.push(students[i]);
                }
            }
            console.log(femaleStudents);
            return femaleStudents;
        }

        findFemaleStudents();


        function isStudentOfTeacher(student, teacher) {
            let teacherGrades = teacher.grades;
            let studentGrade = student.grade;

            teacherGrades.forEach(function (teacherGrade) {
                if (teacherGrade === studentGrade) {
                    return true;
                }
            });
            return false;
        };

        function findHighestMaleStudent() {
            let maleStudents = findMaleStudents();
            let highestMaleStudent = maleStudents[0];
            for (let i = 0; i < maleStudents.length - 1; i++) {
                if (highestMaleStudent.height < maleStudents[i + 1].height) {
                    highestMaleStudent = maleStudents[i + 1];
                }
            }
            console.log(highestMaleStudent);
            return highestMaleStudent;
        };

        findHighestMaleStudent();

        function findShortestFemaleStudent() {
            let femaleStudents = findFemaleStudents();
            let shortestFemaleStudent = femaleStudents[0];
            for (let i = 0; i < femaleStudents.length - 1; i++) {
                if (shortestFemaleStudent.height > femaleStudents[i + 1].height) {
                    shortestFemaleStudent = femaleStudents[i + 1];
                }
            }
            console.log(shortestFemaleStudent);
            return shortestFemaleStudent;
        };

        findShortestFemaleStudent();

        // function highestMale(profLis) {
        //     for (let i = 0; i < students.length; i++) {
        //         if (isStudentOfTeacher(students[i], profFox)) {
        //             let highestMale = students[i];
        //             if (students[i].height < students[i+1].height) {
        //                 highestMale = students[i+1];
        //                 console.log
        //             }
        //         }
        //     }
        // }

        return (
            <div></div>
        );
    }
}

export default School;