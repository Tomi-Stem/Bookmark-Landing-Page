// MOBILE NAV

const openMenuBtn = document.querySelector(".hamburger");
const closeMenuBtn = document.querySelector('.close-btn');
const nav1 = document.querySelector('#nav1');
const nav2 = document.querySelector('#nav2');
const staticNav = document.querySelector("body");

openMenuBtn.addEventListener('click', () => {
  nav1.style.visibility = 'hidden';
  nav2.style.display = "block";
  staticNav.style.overflow = "hidden";
})

closeMenuBtn.addEventListener('click', () => {
  nav1.style.visibility = 'visible';
  nav2.style.display = "none";
  staticNav.style.overflow = "auto";
})




// TABS
function selectTab(tabIndex) {
  //Hide All Tabs
  document.getElementById('tab1Content').style.display="none";
  document.getElementById('tab2Content').style.display="none";
  document.getElementById('tab3Content').style.display="none";
  
  //Show the Selected Tab
  document.getElementById('tab' + tabIndex + 'Content').style.display="flex";  
}

var selector = '.tab_list button';

$(selector).on('click', function(){
    $(selector).removeClass('active');
    $(this).addClass('active');
});



// FAQ LIST
var dropbtn = document.querySelectorAll(".dropbtn", "dropbtn-icon")

dropbtn.forEach((btn)=>{
  btn.addEventListener('click', () => {
    btn.classList.toggle("open")
    console.log(btn);
    console.log(btn.nextElementSibling);
  })
})


// EMAIL VALIDATION

function validateEmail(){

  var emailField = document.getElementById("email-field");
  var emailError = document.getElementById("email-error");


  if(!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    emailField.style.marginBottom = "15px";
    emailError.innerHTML = "Whoops, make sure it's an email";
    emailError.style.visibility = "visible";
    return false;
  }

   emailField.style.marginBottom = "0px";
   emailError.innerHTML = "";
   emailError.style.visibility = "hidden";
   return true;
}