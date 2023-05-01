class Field {
  _dirty;
  _touched;
  _invalid;

  _errorVisible;
  _onShowErrorsChange = (show) => { console.log('default') };


  set onShowErrorsChange(value) {
    this._onShowErrorsChange = value;
  }
  get onShowErrorsChange() {
    return this._onShowErrorsChange;
  }

  constructor(name, validators, validationMessages) {
    this.name = name;
    this.element = document.getElementsByName(name)[0];;
    this.validators = validators;
    this.validationMessages = validationMessages;
    this.errorDiv = this.element.nextElementSibling;
    this.errors = {};
    this._dirty = false;
    this._touched = false;
    this._blured = false;
    this._invalid = false;

    this.element.addEventListener('input', (e) => {
      this.dirty = true;
    })

    this.element.addEventListener('change', () => {
      this.dirty = true;
    })

    this.element.addEventListener('blur', () => {
      this.blured = true;
    })

    this.element.addEventListener('focus', () => {
      this.touched = true;
    })
  }

  runValidators() {
    this.validators.forEach(validate => {
      this.setError(validate.name, validate(this.element.value));
    })
  }

  setError(name, invalid) {
    this.errors[name] = invalid;
  }

  checkValidity() {
    this.runValidators();
    this.invalid = Object.values(this.errors).some(error => error);

    if (this.blured && this.invalid)
      this.showErrors();
    else
      this.hideErrors();
  }

  set dirty(value) {
    this._dirty = value;
    this.checkValidity();
  }

  set touched(value) {
    this._touched = value;
    this.checkValidity();
  }

  set blured(value) {
    this._blured = value;
    this.checkValidity();
  }

  set invalid(value) {
    this._invalid = value;
  }

  get blured() {
    return this._blured;
  }

  get dirty() {
    return this._dirty;
  }

  get touched() {
    return this._touched;
  }

  set errorVisible(value) {
    if (this._errorVisible !== value) {
      this._errorVisible = value;
      this.onShowErrorsChange(value);
    }
  }

  get invalid() {
    return this._invalid;
  }

  showErrors() {
    this.element.classList.add('invalid');
    this.errorVisible = true;


    this.errorDiv.textContent = this.validationMessages[Object.keys(this.errors).find(key => this.errors[key])] || "Invalid field";
  }

  hideErrors() {
    this.element.classList.remove('invalid');
    this.errorVisible = false;
    this.errorDiv.textContent = "";
    
  }

}

class Form {
  errors = {};

  constructor(formName, fields) {
    this.fields = fields;
    this.fields.forEach(field => {
      field.onShowErrorsChange = (show) => {
        this.onValidityChange(field.name, show);
      }
    })
  }

  disableSubmit() {
    document.querySelector('.modal-subscribe-btn').disabled = true;
  }

  enableSubmit() {
    document.querySelector('.modal-subscribe-btn').disabled = false;
  }

  onValidityChange(fieldName, show) {
    this.errors[fieldName] = show;
    if (Object.values(this.errors).some(error => error))
      this.disableSubmit();
    else
      this.enableSubmit();
  }
}

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

const required = (value) => {
  return (!value || value.length == 0)
}

// minLength = (length) => {
//   return minLength = (value) => {
//     return value.length < length;
//   }
// }

const email = (value) => {
  return !/^\S+@\S+\.\S+$/.test(value);
}

const validationMessages = {
  "required": "This field is required",
  "minLength": "Must be at least 3 characters long",
  "email": "Invalid email address"
}

let form = new Form('contact-details', [
  new Field('firstname', [required], validationMessages),
  new Field('email', [required, email], validationMessages)
]);







