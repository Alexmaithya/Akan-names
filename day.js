var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
var weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

//function calling
function getAkanNames() {
    var year = parseInt(document.getElementById("yy").value);
    var month = parseInt(document.getElementById("mm").value);
    var day = parseInt(document.getElementById("dd").value);
    var male = document.getElementById("male");
    var female = document.getElementById("female");


//validation
if (day <= 0 || day > 31)
    alert("invalid option please enter a valid date");
else if (month <= 0 || month > 12 || month == 2 && day > 29)
    alert("invalid option please enter a valid date");

    var day = new Date(year + "/" + month + "/" + day);
    var birthDay=day.getDay();


    if(male.checked==true){
       alert("You were born on " +weekDay[birthDay]+ " and Your Akan name is " + maleNames[birthDay])
    }
    else if(female.checked==true){
       alert("You were born on " +weekDay[birthDay]+ " and Your Akan name is " + femaleNames[birthDay])
    }
}
