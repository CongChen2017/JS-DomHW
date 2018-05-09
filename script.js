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

function mySearch() {
  // Declare variables 
  var input1, input2, input3, input4, input5;
  var filter1, filter2, filter3, filter4, filter5, table, tr, td, i;
  var found1, found2, found3, found4, found5;
  input1 = document.getElementById("search1");
  filter1 = input1.value.toUpperCase();
  input2 = document.getElementById("search2");
  filter2 = input2.value.toUpperCase();
  input3 = document.getElementById("search3");
  filter3 = input3.value.toUpperCase();
  input4 = document.getElementById("search4");
  filter4 = input4.value.toUpperCase();
  input5 = document.getElementById("search5");
  filter5 = input5.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");


  // Loop through all table rows, and hide those who don't match the search query
  for (i = 1; i < tr.length; i++) {
  	td = tr[i].getElementsByTagName("td");
  	found1 = true;
  	found2 = true;
    found3 = true;
    found4 = true;
    found5 = true;

    if (td) {
	    
    	if (filter1) {
    		if (td[0].innerHTML.toUpperCase().indexOf(filter1) > -1) {
    			found1 = true;} else {
    				found1 = false;
    			}
    	}
    	if (filter2) {
    		if (td[1].innerHTML.toUpperCase().indexOf(filter2) > -1) {
    			found2 = true;} else {
    				found2 = false;
    			}
    	}
      if (filter3) {
        if (td[2].innerHTML.toUpperCase().indexOf(filter3) > -1) {
          found3 = true;} else {
            found3 = false;
          }
      }
      if (filter4) {
        if (td[3].innerHTML.toUpperCase().indexOf(filter4) > -1) {
          found4 = true;} else {
            found4 = false;
          }
      }
      if (filter5) {
        if (td[4].innerHTML.toUpperCase().indexOf(filter5) > -1) {
          found5 = true;} else {
            found5 = false;
          }
      }
    	if (found1 && found2 && found3 && found4 && found5) {
    		tr[i].style.display = "";

    	}	else {
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