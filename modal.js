
//targets the form to create submit event
let form = document.getElementById("form-modal");

form.addEventListener('submit', logSubmit);

function DisplayInfo() {
    //gets the value in the fname field
    let fname = document.getElementById("fname").value;
    //targets the response as final resting place for fname
    let fname_response = document.getElementById("fname_response");

    let lname = document.getElementById("lname").value;
    let lname_response = document.getElementById("lname_response");

    let age = document.getElementById("age").value;
    let age_response = document.getElementById("age_response");

    let email = document.getElementById("email").value;
    let email_response = document.getElementById("email_response");

    let gender = document.getElementById("gender").value;
    let gender_response = document.getElementById("gender_response");

    let comments = document.getElementById("comments").value;
    let comments_response = document.getElementById("comments_response");

    fname_response.innerHTML = 'First Name: ' + fname;
    lname_response.innerHTML = 'Last Name: ' + lname;
    age_response.innerHTML = 'Age: ' + age;
    email_response.innerHTML = 'Email: ' + email;
    gender_response.innerHTML = 'Gender: ' + gender;
    comments_response.innerHTML = 'Comments: ' + comments;
    //logSubmit();
}

function logSubmit(event){
    const log = document.getElementById("log")
    const raw_date = new Date();
    const month = raw_date.getMonth();
    const day = raw_date.getDate();
    const year = raw_date.getFullYear();
    log.innerHTML = 'Form Submitted! Date: ' + month + "-" + day + "-" + year; 
}

function showModal(){
    const glass = document.getElementById("glass");
    glass.style.display = "block";
    const create_button = document.getElementById("create-button");
    create_button.style.display = "none";
}

// function closeModal(){
//     const glass = document.getElementById("glass");
//     glass.style.display = "none";
//     const create_button = document.getElementById("create-button");
//     create_button.style.display = "block";
// }

