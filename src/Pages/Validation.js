// export default function Validation(values){
//     const errors = {}

//     const email_pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

//     if(values.firstName === ""){
//         errors.firstName = "First Name is Required!";
//     }

//     if (values.lastName === ""){
//         errors.lastName = "Last Name is Required!";
//     }

//     if (values.email === ""){
//         errors.email = "Email is Required";
//     } else if(!email_pattern.test(values.email)){
//         errors.email = "Email is not correct!";
//     }

//     return errors;
// }
