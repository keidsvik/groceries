$(document).ready(function() {
  $("form#grocerylist").submit(function(event) {
    event.preventDefault();

   let groceryitem1 = $("input#item1").val();
   let groceryitem2 = $("input#item2").val();
   let groceryitem3 = $("input#item3").val();
   let itemArray = [groceryitem1, groceryitem2, groceryitem3];


   let upperCaseArray = [];
   itemArray.forEach(function(element) {
     upperCaseArray.push(element.toUpperCase());
   });

   upperCaseArray.sort();

   upperCaseArray.forEach(function (element) {
     $("#completeList").append(`<li> ${element} </li>`);
   });

console.log(upperCaseArray);


  });
});
