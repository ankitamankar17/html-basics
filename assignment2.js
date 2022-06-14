console.log("hello");


//Que-3 -> write a javascript progrm to sort array in ascending order///
// let numbers = [3, 2, 1, 4, 5, 45];
// numbers.sort(function (z, b) {
//     if (a > b) return 1;
//     if (a < b) return -1;
//     return 0;
// });

// console.log(numbers);




//Que-4 -> write a program to check is string is  anagram or not///
// var a,b;
// function checkStringsAnagram(a, b) {
//     let len1 = a.length;
//     let len2 = b.length;
//     if(len1 !== len2){
//        console.log('Invalid Input');
//        return
//     }
//     let str1 = a.split('').sort().join('');
//     let str2 = b.split('').sort().join('');
//     if(str1 === str2){
//        console.log("True");
//     } else { 
//        console.log("False");
//     }
//  }
//  checkStringsAnagram("listen","silent")
//  checkStringsAnagram("hello","jello")





 //Que-5 ->write a programto reverse string without using any inbuilt method

//  var str = 'Hello';
//  console.log('The original string is: ' + str);
//  var reversedString = '';
 
//  for (var i = str.length - 1; i >= 0; i--) {
//    reversedString += str[i];
//  }
 
//  console.log('The reversed string is: ' + reversedString);

 



//Que-2 -> Display pyramid of number using JavaScript
// var i, j;
// for(i=1; i<=5; i++)
// {
//  for(j=5; j>=i; j--)
//   document.write(j);
//  document.write("<br>");
// }





// Que 1 -> write a program  to search a no present in array
// function Duplicates() {
//   var input = [1, 2, 3, 4, 5, 1, 3];
//   var uniques = [];
//   var charOccurances = {};
//   var newString;
//   for (var i = 0; i < input.length; i++) {
  
//     var currentChar = input[i];
//     if (uniques.includes(currentChar)) {
      
//       console.log(`Duplicate Element found "${input[i]}"`);
//       newString = input.indexOf(2);
//     } else {
      
//       uniques.push(currentChar);
//     }
    
//     if (charOccurances[currentChar]) {
      
//       charOccurances[currentChar]++;
//     } else {
      
//       charOccurances[currentChar] = 1;
//     }
//   }
 
//   console.log(charOccurances);
//   console.log('the postion of element :', newString);
// }

// Duplicates();

