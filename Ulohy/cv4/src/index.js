class Person {
    constructor(name, surname, age, gender){
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.gender = gender;
    }
    get getGender() {
        return this.gender;
    }

    salutation(fm) {
        if(fm == "M") {
            return "pán";
        }
        else if(fm == "F") {
            return "pani";
        }
        else console.log("Zadajte správne pohlavie");
    }

    greeting() {
        console.log("Dobrý deň, volám sa " + this.salutation(this.getGender) + " " + this.surname + " " + this.name);
    }
}

class Teacher extends Person {
    constructor(name, surname, age, gender, subject, myStudents){
        super(name, surname, age, gender);
        this.subject = subject;
        this.myStudents = myStudents;
    }
    greeting() {
        console.log("Dobrý deň, volám sa " + super.salutation(this.getGender) + " " + this.surname + " " + this.name + " a budem Vás učiť " + this.subject);
    }

    addStudent(studentName) {
        return this.myStudents.push(studentName);
    }

    pickRandomStudent() {
        console.log(this.myStudents[Math.floor(Math.random() * this.myStudents.length)].name);
    }

}

class Student extends Person {
    constructor(name, surname, age, gender, subjects) {
        super(name, surname, age, gender);
        this.subjects = subjects;
    }

    greeting() {
        console.log("Ahoj, som študent a volám sa " + this.surname + " " + this.name)
    }

    addSubject(subjectName) {
        return this.subjects.push(subjectName);
    }
}

let newStudent = () => {
    let studentName = prompt("Meno:");
    let studentSurname = prompt("Priezvisko:");
    let studentAge = parseInt(prompt("Vek:"));
    let studentGender = prompt("Pohlavie:");

    if(studentGender == 'M' || studentGender == 'F'){
        student = new Student(studentName, studentSurname, studentAge, studentGender, []);
        teacher.addStudent(student);
        student.addSubject(teacher.subject);
        return student;
    } else {
        alert("Zadajte správne pohlavie!");
    }
}

let person1 = new Person("Samuel", "Rakovský", 20, "M");

let teacher = new Teacher("Janko", "Mrkvička", 25, "M", "Záhradkárstvo", []);
let student1 = new Student("John", "Doe", 19, "M", ["Matika", "programovanie"]);
let student2 = new Student("James", "Madagaskar", 19, "M", ["Matika", "programovanie"]);
let student3 = new Student("Joshoua", "Cooper", 19, "M", ["Matika", "programovanie"]);
let student4 = new Student("Ján", "Smith", 19, "M", ["Matika", "programovanie"]);

person1.greeting();
teacher.greeting();
teacher.addStudent(student1);
teacher.addStudent(student2);
teacher.addStudent(student3);
teacher.addStudent(student4);
student1.addSubject(teacher.subject);
student2.addSubject(teacher.subject);
student3.addSubject(teacher.subject);
student4.addSubject(teacher.subject);
teacher.pickRandomStudent();