//          //

var str1 = 'Today is';
var str2 = '      a beautiful day     '
var str3 = ' In Hawaii.     '

console.log(str1 + ' ' + str2.trim() + ' ' + str3.trim());

// que 1 ans//



// ANS-4//
function checkTriangle(x, y, z) {

  // Check for equilateral triangle
  if (x == y && y == z)
    console.log("Equilateral Triangle");

  // Check for isosceles triangle
  else if (x == y || y == z || z == x)
    console.log("Isosceles Triangle");

  // Otherwise scalene triangle
  else
    console.log("Scalene Triangle");
}
// EXAMPLE
{

  // Given sides of triangle
  x = 8, y = 8, z = 8;

  // Function call
  checkTriangle(x, y, z);
}
// //




// QUE-5//

// Enter electricity unit and calculate amount to pay
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit.  
// For all bills above 150 units additional surcharge of 20%  of total bill amount is added.

units = 700
bill = 0
if (units <= 50) {
  bill = units * 0.50
}
else if (units <= 150) {
  bill = 50 * 0.50 + (units - 50) * 0.75
}
else if (units <= 250) {
  bill = 50 * 0.50 + 100 * 0.75 + (units - 150) * 1.20
}
else if (units > 250) {
  bill = 50 * 0.50 + 100 * 0.75 + 150 * 3 + (units - 250) * 1.50
}

if (bill > 150) {
  bill = bill + bill * 0.2
}

console.log(bill)

// 