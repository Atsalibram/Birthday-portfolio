function generateName(date, month, yearOfBirth) {

    var century = yearOfBirth.slice(0, 2);
    var year = yearOfBirth.slice(2, 4);
    var gender = document. getElementById("gender");

    var maleName = ["Kwasi", "Kwadwo", "Kwabena" , "Kwaku" , "Yaw" , "Kofi" , "Kwame"];
    var femaleName =["Akosua" ,"Adwoa" , "Abenaa" , "Akua" , "Yaa" ,"Afua" ,"Ama"];
    var dayOfWeek = ["Sunday", "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"];

    var dayOfBirth = (((century / 4) -2 * year - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + date) % 7;
    var dayOfBirth = Math.floor(dayOfBirth);

    if (gender === "Male") {
    document.getElementById("result").innerHTML = "You were born on a " + dayOfWeek[dayOfBirth - 1] + "your Akan name is" + maleName[dayOfBirth];
    document.getElementById("date").value = "";
    document.getElementById("month").value ="";
    document.getElementById("year").value ="";
    return false
    }
    else if (gender === "Female") { 
    document.getElementById("result").innerHTML = "You were born on a "  + dayOfWeek -1[dayOfBirth - 1] + "your Akan name is" + femaleName[dayOfBirth];
    document.getElementById("date").value = "";
    document.getElementById("month").value ="";
    document.getElementById("year").value="";
    return false;
    }
}
function verify() {
    var date = document.getElementById("date").value;
    var month = document.getElementById("month").value;
    var yearOfBirth = document.getElementById("year").value;
    var newDate =  new Date();
}

