//! What is Javascript Object?
//todo Js Object is a collection related variables and function which are
//todo represented as  key and value pairs 
// 1.We use Curly{} to create JavaScript object
// 2.Data must be stored in the form of key and value pairs
// 3.Key and value must be seperated with Colon(:)
// 4.Key:value pair must be seperated with comma(,)
// 5.The Keys is also known as Properties of an object
// 6.If we want access (get,update,post,delete)object properties we use  dot notation or [] notation
// 7. Whenever we use [] notation then key must be a string else we get error
// 8.To delete object properties we use delete keyword
// 9.for in loop is used to iterate object properties 
// 10. For every iteration for in loop stores one of the key in a temp reference 
// variable as strings
// let student={sname:"Dinga",age:23,marks:420};
// console.log(student);
// //! CRUD

// //? 1.Create

// student.gender="Male";
// student["id"]=2;
// console.log(student);

// //? 2.Read
// console.log(student.sname);
// console.log(student["marks"]);

// //? 3.Update

// student.marks=615;
// student["gender"]="Female"
// console.log(student);

// //? 4.Delete

// delete student.sname;
// delete student["id"];
// console.log(student);


// console.log("---------------Applying for in loop---------------");

// for(let keys in student) {
//     console.log(keys,student[keys])
// }


// !  Storing Multiple Objects

let students=
{
    details:[
        {sname:"Dinga",age:23,marks:420},
        {sname:"Sheela",age:26,marks:420},
        {sname:"Monu",age:43,marks:420},
        {sname:"Raja",age:56,marks:420},
        {sname:"Rani",age:18,marks:420}
    ]
}

console.log(students);

for(let student of students.details) {
    
    console.log(student.sname)
}
