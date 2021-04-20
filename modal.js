
//targets the form to create submit event
let form = document.getElementById("form-modal");
const glass = document.getElementById("glass");
const flex = document.getElementById("flex");
const close = document.getElementById("close-button")
const create_button = document.getElementById("create-button");
const Xdiv = document.getElementById("X");

form.addEventListener('submit', logSubmit);

//gets the value in the fname field
let fname = document.getElementById("fname");
//targets the response as final resting place for fname
let fname_response = document.getElementById("fname_response");

let lname = document.getElementById("lname");
let lname_response = document.getElementById("lname_response");

let age = document.getElementById("age");
let age_response = document.getElementById("age_response");

let email = document.getElementById("email");
let email_response = document.getElementById("email_response");

let gender = document.getElementById("gender");
let gender_response = document.getElementById("gender_response");

let comments = document.getElementById("comments");
let comments_response = document.getElementById("comments_response");

function DisplayInfo() {
    

    console.log('in DisplayInfo()');
    fname_response.innerHTML = 'First Name: ' + fname.value;
    lname_response.innerHTML = 'Last Name: ' + lname.value;
    age_response.innerHTML = 'Age: ' + age.value;
    email_response.innerHTML = 'Email: ' + email.value;
    gender_response.innerHTML = 'Gender: ' + gender.value;
    comments_response.innerHTML = 'Comments: ' + comments.value;
    //logSubmit();
}

const fields = document.getElementsByClassName('field');
const errors = document.getElementsByClassName("validity");

document.addEventListener('DOMContentLoaded', (e) => {
    for (let i in fields){
    
        let element = fields[i];
        // TODO: adjust error for age length
        // TODO: adjust error for comments not required
        // TODO: look at change instead of blur
        
        let error_message = errors[i];
        try{
            element.addEventListener('blur', (e) => {
                
                console.log(e.target.value);
                
                if (element.value.length < 1){
                    error_message.style.display = "block";
                }
                else if (e.target === comments){
                    error_message.style.display = "none";
                }
                else{
                    error_message.style.display = "none";
                }
                
            
            })
        }
        catch(Error){
            console.error();
        }
    }
})

// fname.addEventListener('blur', (e) => {
//     console.log(e.target.value);
//     if (fname.value.length < 2){
//         document.getElementById("fname_error").style.display = "block";
//     }
//     else{
//         document.getElementById("fname_error").style.display = "none";
//     }
    

// })

function submitCloseModal(){
    glass.style.display = "none";
    create_button.style.display = "block";
    form.reset();
}



function logSubmit(){
    const log = document.getElementById("log")
    const raw_date = new Date();
    
    // const month = raw_date.getMonth();
    const month = ((raw_date.getMonth() + 1) < 10 ? '0' : '') + (raw_date.getMonth() + 1);
    // const day = raw_date.getDate();
    const day = (raw_date.getDate() < 10 ? '0' : '') + raw_date.getDate();
    const year = raw_date.getFullYear();
    log.innerHTML = 'Form Submitted! Date: ' + month + "-" + day + "-" + year; 
}

function showModal(){
    // const glass = document.getElementById("glass");
    glass.style.display = "block";
    create_button.style.display = "none";
}


function closeModal(){
    
    glass.addEventListener('click', function(e){
        e = window.event || e;
        // console.log(e);
        // const glass = document.getElementById("glass");
        
        if (glass === e.target || flex === e.target || Xdiv === e.target ||close === e.target){
            
            glass.style.display = "none";
            
            create_button.style.display = "block";
        }
        else{
            // e.stopPropagation;
        }
    });
}



// const textField = document.querySelectorAll('input[type="text"]');
// textField.addEventListener('blur', (e) => {
//     // (e = window.event || e)
//     console.log(e);
    
//     if (document.getElementById("fname").value = ""){
//         document.getElementById("fname_error").style.display = "block";
//     }
// });
    




// const url = "FAKEhttps://ehzk6mgbt5.execute-api.us-east-1.amazonaws.com/dev/person";
// const data = {
//     fname: document.getElementById("fname").value,
//     lname: document.getElementById("lname").value,
//     age: document.getElementById("age").value,
//     gender: document.getElementById("gender").value,
//     email: document.getElementById("email").value,
//     comments: document.getElementById("comments").value

// }

// $('submit-button').click(function(){
//     $.post(url, data, function(data, status){
//         console.log('${data} and status is ${status}')
//     });
// })


