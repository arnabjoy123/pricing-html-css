// function plan()
// {
//  var neww=document.getElementsByClassName("annually");
//  neww.textcontent=document.getElementsByClassName("monthly");
// }




function plan() {
    // Get elements with the class "monthly"
    var elements = document.getElementsByClassName("monthly");
  
    // Toggle the "hide-element" class for each element using forEach
    Array.from(elements).forEach(function(element) {
      element.classList.toggle("hide-element");
    });
  
    // Get elements with the class "annually"
    var elements2 = document.getElementsByClassName("annually");
  
    // Toggle the "hide-element" class for each element using forEach
    Array.from(elements2).forEach(function(element) {
      element.classList.toggle("hide-element");
    });
  }
  
  





// click on checkbox

// hide annually


// display monthly