const fname_icon = document.getElementById('fname_icon')
const lname_icon = document.getElementById('lname_icon')
const email_icon = document.getElementById('email_icon')
const pass_icon = document.getElementById('password_icon')

const fname_error = document.querySelector('.fnameHide')
const lname_error = document.querySelector('.lnameHide')
const email_error = document.querySelector('.emailHide')
const pass_error = document.querySelector('.passwordHide')



function CheckForm() {
     const fname_data = document.getElementById('fname_data');
     const lname_data = document.getElementById('lname_data');
     const email_data = document.getElementById('email_data');
     const pass_data = document.getElementById('password_data');
     if( fname_data.value == '')
     {
        fname_icon.classList.remove('fname_hide_test');
        fname_error.classList.remove('fname_hidden');
     }
     if( lname_data.value == '')
     {
        lname_icon.classList.remove('lname_hide_test');
        lname_error.classList.remove('lname_hidden');
     }
     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email_data.value))
        console.log("email is fine")
     else{
        email_data.style.color = "hsl(0, 100%, 74%)";
        email_icon.classList.remove('email_hide_test');
        email_error.classList.remove('email_hidden');
     }
     if( pass_data.value == '')
     {
        pass_icon.classList.remove('password_hide_test');
        pass_error.classList.remove('password_hidden');
     }

}



