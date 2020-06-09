$(document).ready(function() {
  $("form#grocerylist").submit(function(event) {
   let groceryitem1 = $("input#item1").val();
   let groceryitem2 = $("input#item2").val();
   let groceryitem3 = $("input#item3").val();
   let itemArray = [groceryitem1, groceryitem2, groceryitem3];
   let sortedArray = itemArray.sort();
   let upperCaseArray = sortedArray.toUpperCase//().split(" ,").sort();
 
  
   console.log(upperCaseArray);

  //sortedArray.forEach(function(element) {
  // element.toUpperCase();
  //});

  console.log(sortedArray);

  event.preventDefault();

  });
});