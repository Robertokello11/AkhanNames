var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var MaleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function fillter() {
    var month = parseInt(document.getElementById("Month").value);
    var year = parseInt(document.getElementById("year").value);
    var Date = parseInt(document.getElementById("Date").value);
    console.log(Date)
    var d = new Date(year, month,day);
    var gender = print();
    var day2 = d.get.day();
    console.log(day2)
    var akan;


    if (month < 1 || month > 12) {
        alert("invalid month");

    }
    if (year < 1900 || year > 2029) {
        alert("invalid year")
    }
    if (gender === "male") {
        akan = MaleNames[day2];
    } else {
        akan = femaleNames[day2];
    }
    alert("You were born on  " + dayOfTheWeek[day2] + " and your akan name is " + akan); {

    }

}

function print() {
    var gender = document.getElementsByName("gender");
    for (i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            console.log(gender[i].value)
            return (gender[i].value)
        }
    }
}