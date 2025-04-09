console.log("Hello World");

const h1 = document.getElementById("title-h1")
console.log(h1);
h1.innerHTML = "Hello World 2";
h1.style.color = "red";

const tableRows = document.querySelectorAll("tr");
console.log(tableRows);
console.log(typeof(tableRows.forEach));
tableRows.forEach((row) => {
    console.log(row);
});