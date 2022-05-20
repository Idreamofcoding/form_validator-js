let button = document.getElementById('button');
let name, password, message;

button.addEventListener('click', (e) => {
    name = document.getElementById('name').value

    password = document.getElementById('password').value

    validateform(name, password, (message) => {
        alert(message)
    })
})

let validateform = (name, password, callback) => {
    if(name == "" || password == ""){
        callback("Please Enter All Fields")
    }else if (name.length < 4){
        callback("Name should be at least 4 characters")
    }else if (password.length < 6){
        callback("Password should be at least 6 characters")
    }else {
        callback("Form is validated")
    }
}