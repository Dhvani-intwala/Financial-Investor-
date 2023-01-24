var firstIndex =0;
function automaticSlide(){
    setTimeout(automaticSlide,3000);
    var pics;
    const img = document.getElementsByClassName('slides-img');
    for(pics=0; pics < img.length; pics++){
        img[pics].style.display="none";
    }
    firstIndex++;
    if(firstIndex > img.length){
        firstIndex =1;
    }
    img[firstIndex -1].style.display="block";
}
automaticSlide();


/* *********** SIP Calculator ************* */
function ci(){
    var p = document.getElementById("p").value;
    var t = document.getElementById("t").value;
    var r = document.getElementById("r").value;
    var amount = p*(Math.pow(1+r/100,t));
    var ci=amount-p;
    document.getElementById("res").innerHTML="Amount :  " +amount.toFixed(2) +"</br>Compund Interest : "+ci.toFixed(2);
    console.log(amount);
}

/* *********** form validation ************* */


var emailError =document.getElementById('email-error');

var submitError =document.getElementById('submit-error');

function validateName(){
    let nameError =document.getElementById('name-error');
    var name = document.getElementById('name').value;

    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML ='vaild';
    return true;
   
}

function validatePhone(){
    var phoneError =document.getElementById('phone-error');
    var phone = document.getElementById('phone');

    if(phone.length == 0){
        phoneError.innerHTML = 'phone number is required';
        return false;
    }
    if( phone.length !== 10){
        phoneError.innerHTML = 'phonenumber should be 10 digits';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'phone number is required';
        return true;
    }
    phoneError.innerHTML ='vaild';
    return true;
}