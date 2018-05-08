function tabulate(data, columns) {
	var table = d3.select('#table').append('table');
	table.attr("class", "paginated");
	table.attr("id", "myTable");
	var thead = table.append('thead');
	var	tbody = table.append('tbody');

	// append the header row
	thead.append('tr')
	  .selectAll('th')
	  .data(columns).enter()
	  .append('th')
	    .text(function (column) { return column; });

	// create a row for each object in the data
	var rows = tbody.selectAll('tr')
	  .data(data)
	  .enter()
	  .append('tr');

	// create a cell in each row for each column
	var cells = rows.selectAll('td')
	  .data(function (row) {
	    return columns.map(function (column) {
	      return {column: column, value: row[column]};
	    });
	  })
	  .enter()
	  .append('td')
	    .text(function (d) { return d.value; });

  return table;
}

// render the tables
tabulate(dataSet, ['datetime', 'city', 'state', 'country', 'shape', 'comments']);

function mySearch(inputID, colNum) {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById(inputID);
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[colNum];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}


// function pagination(){
//     var req_num_row=500;
//     var $tr=jQuery('tbody tr');
//     var total_num_row=$tr.length;
//     var num_pages=0;
//     if(total_num_row % req_num_row ==0){
//         num_pages=total_num_row / req_num_row;
//     }
//     if(total_num_row % req_num_row >=1){
//         num_pages=total_num_row / req_num_row;
//         num_pages++;
//         num_pages=Math.floor(num_pages++);
//     }
//     for(var i=1; i<=num_pages; i++){
//         jQuery('#pagination').append("<a href='#' class='btn'>"+i+"</a>");
//     }
//     $tr.each(function(i){
//         jQuery(this).hide();
//         if(i+1 <= req_num_row){
//             $tr.eq(i).show();
//         }

//     });
//     jQuery('#pagination a').click(function(e){
//         e.preventDefault();
//         $tr.hide();
//         var page=jQuery(this).text();
//         var temp=page-1;
//         var start=temp*req_num_row;
//         //alert(start);

//         for(var i=0; i< req_num_row; i++){

//             $tr.eq(start+i).show();

//         }
//     });
// }

// jQuery('document').ready(function(){
// 	pagination();

// });