const data = [];

function addNumber() {

    const input = document.getElementById("numInput");

    if (input.value.trim() === "") {
        alert("Please enter a valid number.");
        input.focus();
        return;
    }

    data[data.length] = parseFloat(input.value);

    updateOutput();

    input.value = "";
    input.focus();
}

function updateOutput() {

    document.getElementById("list").textContent = data.join(" | ");

    let total = 0;
    let largest = data[0];
    let smallest = data[0];

    for (let value of data) {

        total += value;

        if (value > largest) {
            largest = value;
        }

        if (value < smallest) {
            smallest = value;
        }
    }

    document.getElementById("total").textContent = total;
    document.getElementById("largest").textContent = largest;
    document.getElementById("smallest").textContent = smallest;
}

function clearNumbers() {

    data.length = 0;

    document.getElementById("list").textContent = "None";
    document.getElementById("total").textContent = "0";
    document.getElementById("largest").textContent = "-";
    document.getElementById("smallest").textContent = "-";

    document.getElementById("numInput").value = "";
    document.getElementById("numInput").focus();
}