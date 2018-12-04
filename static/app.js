// from data.js
var tableData = data;

// Do table
// Get a reference to the table body
var tbody = d3.select("tbody");

// Loop
data.forEach(function(tableData) {
     console.log(tableData);
     var row = tbody.append("tr");
     Object.entries(tableData).forEach(function([key, value]) {
       console.log(key, value);
  // Append a cell to the row for each value
  // in the report object
       var cell = tbody.append("td");
       cell.text(value);
     });
   });

   // Select the submit button
   var submit = d3.select("#filter-btn");

//   // Complete the click handler for the form
//   submit.on("click", function() {

//    // Prevent the page from refreshing
//       d3.event.preventDefault();

//       // Select the input element and get the raw HTML node
//       var inputElement = d3.select("#datetime");

//     // Get the value property of the input element
//       var inputValue = inputElement.property("value");

//       console.log(inputValue);
//       console.log(tableData);

//       var filteredData = tableData.filter(date => date.datetime === inputValue);

//         console.log(filteredData);

var filters = {};

function updateFilters(){

var changedElement = d3.select(this).select("input");
var elementValue = changedElement.property("value");
var filterId = changedElement.attr("id");

if (elementValue){
  filters[filterId] = elementValue;
}
else {
  delete filters[filterId];
}

filterTable();

let filteredData = tableData;

object.entries(filters).forEach(([key, value}) => {
  filteredData = filteredData.filter(row => row[key] === value);
});

buildTable(filteredData);
}
// Finally, add the summary stats
     d3.selectAll(".filter").on("change", filteredData);
     d3.select(".bottom")
    .append("li").text(`Sightings on selected date: ${filteredData}`)
});
