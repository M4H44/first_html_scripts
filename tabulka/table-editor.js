let table;
let columns = 5; 
let rows = 3; 
let activeCell;

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
    tdInput.type = "text";
    tdInput.onfocus = function() {
        activeCell = this;
    };
    td.appendChild(tdInput);
    return td;
}

function createButton(label) {
    let btn = document.createElement("button");
    btn.textContent = label;
    document.body.appendChild(btn);
    return btn;
}

function createControlButtons() {
    createButton("Insert row below").onclick=function () {
        addRow(false);
    };
    createButton("Insert row above").onclick=function () {
        addRow(true);
    };
    createButton("Insert column to left").onclick=function () {
        addColumn(true);
    };
    createButton("Insert column to right").onclick=function () {
        addColumn(false);
    };
   createButton("Remove row").onclick = removeRow;
createButton("Remove column").onclick = removeColumn;
}

function createRow() {
    let newRow = document.createElement("tr");
    let cellCount = table.firstElementChild.querySelectorAll("td").length;

    for (let i = 0; i < cellCount; i++) {
        newRow.appendChild(createCell());
    }
    return newRow;
}

function activeCellRowIndex() {
    let tableNodes = table.childNodes;
    let foundRow = activeCell.parentElement.parentElement;
    return Array.prototype.indexOf.call(tableNodes, foundRow);
}

function activeCellColumnIndex() {
    let rowNodes = activeCell.parentElement.parentElement.childNodes;
    let foundCell = activeCell.parentElement;
    return Array.prototype.indexOf.call(rowNodes, foundCell);
}

function addRow(top) {
    let newRow = createRow();
    let selectedIndex = activeCellRowIndex();

    if (top) {
        table.insertBefore(newRow, table.childNodes[selectedIndex]);
    } else {
        if (table.lastChild == table.childNodes[selectedIndex]) {
            table.appendChild(newRow);
        } else {
            table.insertBefore(newRow, table.childNodes[selectedIndex + 1]);
        }
    }
}

function addColumn(left) {
    let selectedIndex = activeCellColumnIndex();

    for (let i = 0; i < table.childNodes.length; i++) {
        let newCell = createCell();

        if (left) {
            table.childNodes[i].insertBefore(newCell, table.childNodes[i].childNodes[selectedIndex]);
        } else {
            if (table.childNodes[i].childNodes[selectedIndex] == table.childNodes[i].lastElementChild) {
                table.childNodes[i].appendChild(newCell);
            } else {
                table.childNodes[i].insertBefore(newCell, table.childNodes[i].childNodes[selectedIndex + 1]);
            }
        }
    }
}
function removeRow() {
    let selectedRow = activeCellRowIndex();
    table.removeChild(table.childNodes[selectedRow]); // deletes the row with the given index
}

function removeColumn() {
    let selectedIndex = activeCellColumnIndex();
    for (let i = 0; i < table.childNodes.length; i++) {
        table.childNodes[i].removeChild(table.childNodes[i].childNodes[selectedIndex]); // deletes the cell with the given index in all rows
    }
}

window.onload = function () {
    createControlButtons();
    createDefaultTable();
};
