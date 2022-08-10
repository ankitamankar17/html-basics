console.log("Data Structure");
// Q3. Write a program to check if two strings are a rotation of each other?
function areRotation(str1,  str2){
    return(str1.length===str2.length)&&
    ((str1+str2).indexOf(str2) != -1);
   
}

var str1="AACD";
var str2="ACDA";

if(areRotation(str1,str2))

console.log("strings are rotation of each other", str1+str2)
else
console.log("strings are not rotation of each other");


console.log("***********************************")

//Q4. Write a program to print the first non-repeated character from a string?


// JavaScript program to find first non-repeating
// character

const NO_OF_CHARS = 256

/* The function returns index of the first
non-repeating character in a string. If
all characters are repeating then
returns Number.MAX_VALUE */
function firstNonRepeating(str)
{
	let arr = new Array(NO_OF_CHARS)
	for(let i=0;i<NO_OF_CHARS;i++){
		arr[i] = [0,0];
	}

	for (let i=0;i<str.length;i++) {
		arr[str.charCodeAt(i)][0]++;
		arr[str.charCodeAt(i)][1]= i;
	}

	let res = Number.MAX_VALUE;
	for (let i = 0; i < NO_OF_CHARS; i++)

		// If this character occurs only
		// once and appears before the
		// current result, then update the
		// result
		if (arr[i][0] == 1)
			res = Math.min(res, arr[i][1]);

	return res;
}

/* Driver program to test above function */

let str = "DataStructure";
let index = firstNonRepeating(str);
if (index == Number.MAX_VALUE)
	console.log("Either all characters are repeating or string is empty");
else
	console.log("First non-repeating character is ",str[index]);

console.log("***********************************")
	
//Q9. Write a program to reverse a stack.
let string=[]
function originalString(x){
    if (string.length===0) {
       string.push(x); 
    }else{
        let a = string.pop();
        originalString(x);
        string.push(a);
    }
   
}
function  reverseString(){
if (string.length>0) {
    let x= string.pop()
    reverseString();

    originalString(x)
}
}

string.push('11');
string.push('12');
string.push('13');
string.push('14');
console.log("original string:",string.join(" "));
reverseString();
console.log("Reverse string:",string.join(" "));

console.log("***********************************")

//Q10.Write a program to find the smallest number using stack.

let stack = [];
let n = stack.length;

function pushInStack(newItem) {
  stack.push(newItem);
}

pushInStack(14)
pushInStack(23)
pushInStack(46)
pushInStack(74)
function getMin(stack, n)
{
    let res = stack[0];
      
    for(let i = 1; i < n; i++)
        res = Math.min(res, stack[i]);
         
    return res;
}
console.log(stack)
console.log("Minimum element" +" of stack: " + getMin(stack, n) );

console.log("***********************************")

//Q7.write a program to convert prefix tp infix expression
	
	function isOperator(x)
	{
		switch(x)
		{
			case '+':
			case '-':
			case '*':
			case '/':
			case '^':
			case '%':
				return true;
		}
		return false;
	}

	
	function convert(str)
	{
		let stack = [];

		
		let l = str.length;

		
		for(let i = l - 1; i >= 0; i--)
		{
			let c = str[i];

			if (isOperator(c))
			{
				let op1 = stack[stack.length - 1];
				stack.pop()
				let op2 = stack[stack.length - 1];
				stack.pop()

			
				let temp = "(" + op1 + c + op2 + ")";
				stack.push(temp);
			}
			else
			{
				stack.push(c + "");
			}
		}
		return stack[stack.length - 1];
	}
	
	let exp = "*-A/BC-/AKL";

	console.log("prefix :", exp)
	console.log("Infix : " + convert(exp));


	console.log("***********************************")


//Q6 .write a Program to convert postfix to prefix

	function isOperator(x)
	{

		switch (x) {
		case '+':
		case '-':
		case '/':
		case '*':
			return true;
		}
		return false;
	}

	
	function postToPre(post_exp)
	{
		let s = [];

		
		let length = post_exp.length;

		
		for (let i = 0; i < length; i++) {

			
			if (isOperator(post_exp[i])) {

			
				let op1 = s[s.length - 1];
				s.pop();
				let op2 = s[s.length - 1];
				s.pop();

				
				let temp = post_exp[i] + op2 + op1;

				
				s.push(temp);
			}

			
			else {
              s.push(post_exp[i] + "");
			}
		}

		let ans = "";
		while (s.length > 0)
			ans += s.pop();
		return ans;
	}
	
	let post_exp = "AB+CD-*";
		
	
    console.log("postfix Expression :", post_exp)
	console.log("Prefix Expression : " + postToPre(post_exp));
	
    console.log("***********************************")


//Q5:write a program to implement tower of hanoi..

function towerOfHanoi(a, from_rod,  to_rod,  aux_rod)
{
        if (a == 0)
        {
            return;
        }
        towerOfHanoi(a - 1, from_rod, aux_rod, to_rod);
        console.log("Move disk " + a + " from rod " + from_rod +
        " to rod " + to_rod);
        towerOfHanoi(a - 1, aux_rod, to_rod, from_rod);
    }
  
   
    var a = 4; 
    // towerOfHanoi(a, 'A', 'C','B'); 

 console.log("**************************************")  
 
 //Q2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.

 let arr=[2,4,6,8,10]
 console.log("the original array" ,arr);
 arr.reverse();

 
 console.log("the reverse array" ,arr);


 console.log("****************************************")

//Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?

function chkPair(A , size , x) {
     
    for (i = 0; i < (size - 1); i++) {
        for (j = (i + 1); j < size; j++) {
  
            if (A[i] + A[j] == x) {
                console.log("Pair for the given array " + x + " is (" + A[i] + ", " + A[j] + ")");

                return true;
            }
        }
    }

    return false;
}

    let A = [ 1,3,2,6,8];
    let x = 4;
    let size = A.length;

    if (chkPair(A, size, x)) {
        console.log("Valid pair exists");
    }else{
        console.log("valid pair does not exists")
    }


    console.log("******************************************")

    


    













