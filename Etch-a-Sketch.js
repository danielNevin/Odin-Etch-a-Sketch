/* Gather Row and Column count from user */
var gridNum = prompt("How many Rows and Columns do you want?");

/* Create base container div */
var grid = document.createElement('div');
grid.className='grid';

/* Loop through the horizontal axis and create X number of columns with X number of children on the vertical axis */
for (var i=0; i < gridNum; i++) {
    var column = document.createElement('div');
    column.className = 'column';
    for (var j=0 ; j < gridNum ; j++) {
        var row = document.createElement('div');
        row.className = 'row';
        column.appendChild(row);
    }
    grid.appendChild(column);
}
document.body.appendChild(grid);