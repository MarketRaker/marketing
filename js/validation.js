const nameInput = document.getElementsByName('firstname');
const emailInput = document.getElementsByName('email');


// function validateInput(input) {
//     const name = input.name;
//     const value = input.value;
//     const errorDiv = input.nextElementSibling;
//     let errorMessage = "";
//     if (name === "firstname") {
//       if (value.length < 3) {
//         errorMessage = "Name must be at least 3 characters long";
//       }
//     } else if (name === "email") {
//       if (!value.includes("@")) {
//         errorMessage = "Invalid email address";
//       }
//     }
//     errorDiv.textContent = errorMessage;
//   }
  
//   const inputs = document.querySelectorAll(".modal-input");
//   inputs.forEach((input) => {
//     input.addEventListener("input", () => {
//       validateInput(input);
//     });
//   });

  const required = (field)=> {
    if (!field.element.value || field.element.value.length == 0){
      field.message = 'required'
    }
  } 

  const emailValidator = (value) => {

  }


  
let validation  = [

  {name: 'firstname', error: false, message: '', element: nameInput, validators: [required]}, 
  // 'email': {error: false, message: '', element: emailInput}, 

]

updateMessages = () => {
  validation.forEach(field => {
    field.validators.forEach(validator => {
      validator(field)
    })
  })
}
