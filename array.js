// var num1=22;
// var num2=33;
// var num3=44;
// var num4=55;


// console.log(num1)

// console.log(num2)

// console.log(num3)

// console.log(num4)


//! Arrays in javascript

//todo 1. A built in Object in Javascript Which is used to store multilple 
//todo values of same type(homogenius) as well as multiple values of diffrent type(Heteroginius)
// todo  in a single Variable.

//todo 2.Javascript array size is not fixed
//todo 3.No Continues Memory Location that means we can skip the indexes
//todo 4.The indexes which is skipped will be assigned with a value called Undefined
//todo 5.Array index starts with 0 and ends with length-1
//todo 6.Manipulation of Array elements is very easy with the help of Built in Methods
//todo 7.We represent javascript array using Square[] brackets.
//todo 8.we Access Array elements by using index values

let a=["Monu","Sheela","Monu","Laila","Mango","Banana"];

console.log(a);
console.log(a.length);

//! 1.push(arg1,arg2.......);
//todo 1. push() is used to add new Elements to the array at the end 
//todo 2.It accepts N number of arguments where the arguments are new elements to be added
//todo 3.It returns Updated Array length
//todo 4.It  affects Original Array


// let res=a.push("Grapes","Orange");
// console.log("Original Array After Perfoming push() operation")
// console.log(a);
// console.log(res);

//! 2.unshift(arg1,arg2.......);
//todo 1. unshift() is used to add new Elements to the array at starting 
//todo 2.It accepts N number of arguments where the arguments are new elements to be added
//todo 3.It returns Updated Array length
//todo 4.It  affects Original Array


// let res=a.unshift("Grapes","Orange");
// console.log("Original Array After Perfoming unshift() operation")
// console.log(a);
// console.log(res);

// //! 3.pop()
// //todo 1.It has zero arguments
// //todo 2.pop() always used to remove last element from the array
// //todo 3.It returns removed element from the array
// //todo 4.It  affects Original Array

// let res=a.pop();
// console.log("Original Array After Perfoming pop() operation")
// console.log(a);
// console.log(res);

//! 4.shift()
//todo 1.It has zero arguments
//todo 2.shift() always used to remove first  element from the array
//todo 3.It returns removed element from the array
//todo 4.It  affects Original Array

// let res=a.shift();
// console.log("Original Array After Perfoming shift() operation")
// console.log(a);
// console.log(res);

//! 5.splice(arg1,arg2,arg3,arg4,.........);
//todo 1.splice() is used to add to the array or delete elements from the array based on index values
//todo 2.Where 1st argument is index value from where we want delete or add the elements
//todo 3.2nd argument is number of elements to be deleted from the array
//todo 4.from the 3rd arguments all the argumets are the new elements to be added to the array
//todo 5.it returns removed elements from the array
//todo 6.It  affects Original Array

// let res=a.splice(2,0,"raja","Rani");
// let res=a.splice(3,2,"raja");

// let res=a.splice(1,3);
// console.log("Original Array After Perfoming splice() operation");
// console.log(a);
// console.log(res)




//! 6.slice(arg1,arg2)
//todo 1.slice() used to cut part of an array
//todo 2.it is having 2 arguments where 1st argument is start index postion 
//todo 3.2nd argument is end index position
//todo 4.if we dont pass 2nd argument then it cuts whole array from the starting index postion
//todo 5.always it neglects end index position (it cuts only tiil end index)
//todo 6.It doesn't affect original array
//todo 7.It returns part of an array


// let res=a.slice(2,4);
// let res=a.slice(2);
// console.log(a);
// console.log(res);


// //! 7.indexof(arg1,arg2)
// //todo 1.it is used to fetch or get index values of the array elements
// //todo 2.It is having 2 arguments where 1st argument is array element
// //todo 3.2nd argument is index position from where you want to fetch the index value of array element
// //todo 4.If we dont pass second argument the always it return first occurrance's index value
// //todo 5.if the elemnt is not present in an aaray then it return -1
// //todo 6.It doesn't affect original array

// console.log(a.indexOf("Monu",1));
// console.log(a.indexOf("Monu"));
// console.log(a.indexOf("Ramu"));
// console.log(a.indexOf("Monu",3));

//! 8.lastIndexof(arg1)
//todo 1.it is used to fetch or get last occurance's index value
//todo 2.It is having 1 argument where one argument is array element
//todo 3.if the elemnt is not present in an aaray then it return -1
//todo 4.It doesn't affect original array

// console.log(a.lastIndexOf("Monu"));
// console.log(a.lastIndexOf("Raja"));

//! for of loop
//todo 1.it allows us to iterate array elements in an easier manner
//todo 2.for every iteration one of the array element will be stored inside 
//todo a temporary referece variable
//todo 3.it runs total number of times the array elements we have
//todo 4.When it doesn't find array element then it terminates

for(let item of a) {
   console.log(item)
}
