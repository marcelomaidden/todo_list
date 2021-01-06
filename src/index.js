function createTodo(event){
  event.preventDefault();
  console.log('clicked')
}

function clearFields() {
  let inputs = document.querySelectorAll('input');
  inputs.forEach(input => {
    input.value = "";
  })
}

let submit_button = document.querySelector('.submit');
submit_button.addEventListener("click", createTodo, false);

let cancel_button = document.querySelector('.cancel');
cancel_button.addEventListener("click", clearFields, false);