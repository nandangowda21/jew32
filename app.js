//! Named Functions or Regular Functions

// function m1()
// {
//     console.log("Hello from m1()");
// }

// m1();

// console.log(m1)

// ! Function EXPRESSION

// let res=function m2()
// {
//     console.log("Hello from m2()");
// };

// console.log(res())

//! Anonymous Function

// var res2= function()
// {
//     console.log("Hello from Anonymous Function");
// }

// console.log(res2());

// ! Arrow Function/Lambda Function/Fat Arrow

//! 1.Scenario
// var arrow=function()
// {
//     return "Hello";
// }

//todo 1.Whenever We are converting an Anonymous
//todo  function to an Arrow Function then we Should not use Function Keyword
//todo 2.Use Arrow
//Todo 3.If there is only one statement inside a function block then curly{} are not mandatory
//todo 4.If the One statement is a return then we should not use return Keyword


// var arrow=()=>"Hello";
// console.log(arrow())

//! 2.Scenario

// var arrow=function(a)
// {
//     return a;
// }

// console.log(arrow("Hello"));
//todo 5.When there is only one  Argument then Paranthesis() is not Mandatory(Optional)
//todo 6.When there is more than one  Argument or No Argument then Paranthesis() is Mandatory
// var arrow=(a,b)=>a;
// console.log(arrow("Hello"));

//! 3.Scenario

// var arrow=function(a)
// {
//     console.log("Hello World")
//     return a;
// }

// console.log(arrow("Hello"));
//todo 7.When There is more than onse statement then curly{} and return Keyword is Mandatory
// var arrow=a=>
// {
//     console.log("Hello World")
//     return a;
// }

// console.log(arrow("Hello"));

//! Callback Functions
//Todo A Function which is passed as an argument to another function is known as callback Function
//todo We use this to handle Asyncronous type of data

function add(a,callback)
{
    console.log(a+callback(4,4));
    // console.log(callback(4,4));
}



add(2,(c,d)=>c+d);
