function resetDiv() {
    /* Remove the existing grid div and recall the grid generation function */
    document.getElementById("grid-container").remove();
    generateGrid();
}

function generateGrid() {
    /* Gather Row and Column count from user */
    
    var gridNum = prompt("How many Rows and Columns do you want?");

    /* Create base container div */
    var grid = document.createElement('div');
    grid.setAttribute("id", "grid-container")
    grid.className = 'grid';

    /* Loop through the horizontal axis and create X number of columns with X number of rows */
    for (var i = 0; i < gridNum; i++) {
        var column = document.createElement('div');
        column.className = 'column';
        for (var j = 0 ; j < gridNum ; j++) {
            var row = document.createElement('div');
            row.className = 'row';
            column.appendChild(row);
        }
        grid.appendChild(column);
    }
    /* Append formed grid to document body */
    document.body.appendChild(grid);
}
