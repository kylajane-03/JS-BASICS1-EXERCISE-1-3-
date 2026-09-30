function generateName() {

    let first = document.getElementById("fname").value;
    let middle = document.getElementById("mname").value;
    let last = document.getElementById("lname").value;

    document.getElementById("fullname").innerHTML =
        first + " " + middle + " " + last;
}

function clearEntries() {

    document.getElementById("fname").value = "";
    document.getElementById("mname").value = "";
    document.getElementById("lname").value = "";

    document.getElementById("fullname").innerHTML = "";
}