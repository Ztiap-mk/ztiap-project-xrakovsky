const students = [["Adam", 65], ["Bea", 80], ["Cyril", 47], ["Daniela", 71], ["Emil", 92]],
    avaragePoints = () => {
        let points = 0;
        for(let i = 0; i < students.length; i++){
            student = students[i];
            for(let j = 1; j < student.length; j++){
                points += student[j];
            }
        }
        return points / students.length;
    };


const didNotPass = () => {
    let studentDidNotPass;
    for(let i = 0; i < students.length; i++){
        student = students[i];
        for(let j = 1; j < student.length; j++){
            if(student[j] < 50) studentDidNotPass = student[j-1];
        }
    }
    console.log(studentDidNotPass + " skúšku nespravil");
}

const getMark = () => {
    let mark = [];
    for(let i = 0; i < students.length; i++){
         student = students[i];
        for(let j = 1; j < student.length; j++){
            let points = student[j];
            switch(true){
                case points < 50:
                    mark.push([student[j-1], "FX"]);
                    break;
                case points <= 60 && points > 50:
                    mark.push([student[j-1], "E"]);
                    break;
                case points <= 70 && points > 60:
                    mark.push([student[j-1], "D"]);
                    break;
                case points <= 80 && points > 70:
                    mark.push([student[j-1], "C"]);
                    break;
                case points <= 90 && points > 80:
                    mark.push([student[j-1], "B"]);
                    break;
                case points <= 100 && points > 90:
                    mark.push([student[j-1], "A"]);
                    break;
                }
            }
        }
        return mark;
    }

const table = document.getElementById("myTable");

const createTable = () => {
    students.sort(function(a,b){
        return b[1] - a[1];
    });
    let header = table.createTHead();
    let headerRow = header.insertRow();
    let headerCell = headerRow.insertCell();
    let secondHeaderCell = headerRow.insertCell();
    let thirdHeaderCell =  headerRow.insertCell();
    headerCell.innerHTML = "Meno študenta";
    secondHeaderCell.innerHTML = "Body"
    thirdHeaderCell.innerHTML = "Známka"
    for(let i = 0; i < students.length; i++){
        for(let j = 1; j < students[i].length; j++){
            row = table.insertRow();
            cell = row.insertCell();
            secondCell = row.insertCell();
            thirdCell = row.insertCell();
            cell.innerHTML = students[i][j-1]
            secondCell.innerHTML = students[i][j];
            thirdCell.innerHTML = getMark()[i][j];
        }
    }
}

const addStudent = () => {
    popupName = prompt("Meno: ");
    popupPoints = prompt("Body: ");
    if(parseInt(popupPoints) > 100 || parseInt(popupPoints) < 0 || popupPoints == "" || parseInt(popupPoints) == NaN) alert("Nesprávny vstup, počet bodov musí byť z intervalu <0,100>");
    else {
        students.push([popupName.replace(/(<([^>]+)>)/ig,""), parseInt(popupPoints)]);
        updateTable();
        console.log("Počet študentov: " + students.length + " Priemerný počet bodov: " + avaragePoints());
    }   
}

const updateTable = () => {
    table.innerHTML = '';
    createTable();
}

const printTheFirstThreeStudents = () => {
    let i = 0;
    let j = 0;
    do {
        console.log(students[i][j] + ' ' + students[i][j + 1]);
        i++
    }while(i < 3);
}
didNotPass();
console.log("Počet študentov: " + students.length + " Priemerný počet bodov: " + avaragePoints());
printTheFirstThreeStudents();
createTable();
getMark();