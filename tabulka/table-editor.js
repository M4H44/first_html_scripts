let table;
let columns = 5; // the default number of columns
let rows = 3; // the default number of rows
let activeCell;
function createDefaultTable() {
    table = document.createElement("table");
    document.body.appendChild(table);
}
function createDefaultTable() {
    table = document.createElement("table");
    document.body.appendChild(table);

    for (let y = 0; y < rows; y++) {
        let tr = document.createElement("tr");
        table.appendChild(tr);

        for (let x = 0; x < columns; x++) {
            tr.appendChild(createCell());
        }
    }
}
function createCell() {
    let td = document.createElement("td");
    let tdInput = document.createElement("input");
    tdInput.type = "text"; // we set the input element as a text field
    tdInput.onfocus = function() {
        activeCell = this;  // when the input is active, we save the reference to that cell
    };
    td.appendChild(tdInput);
    return td;  // we return the created cell
}
window.onload = function () {
    createDefaultTable();
}
function createButton(label) {
    let btn = document.createElement("button");
    btn.textContent = label;
    document.body.appendChild(btn);
    return btn;
}
function createControlButtons() {
    createButton("Insert row below");
    createButton("Insert row above");
    createButton("Insert column to left");
    createButton("Insert column to right");
    createButton("Remove row");
    createButton("Remove column");
}
window.onload = function () {
    createControlButtons(); // we added this line
    createDefaultTable();
}
let firstRow = table.firstElementChild; // gets the first row of the table, element <tr>
let firstRowCells = firstRow.querySelectorAll("td"); // gets all the <td> elements of the first row
let firstRowCellsCount = firstRowCells.length; // returns the number of retrieved <td> elements

let firstRowCellsCount = table.firstElementChild.querySelectorAll("td").length;

function createRow() {
    let newRow = document.createElement("tr");
    let firstRowCellsCount = table.firstElementChild.querySelectorAll("td").length;

    for (let i = 0; i < firstRowCellsCount; i++) { // the loop will have the same number of iterations as the first row cells
        newRow.appendChild(createCell()); // we add one new cell to every new row
    }
    return newRow;
}