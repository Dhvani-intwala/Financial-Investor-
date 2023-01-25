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

 function calculateCi(){
   var p = document.getElementById('principle').value;
    var t = document.getElementById('time').value;
    var r = document.getElementById('rate').value;
   var amount = p*(Math.pow(1+(r/100),t));
   var ci= amount-p;
  // document.getElementById("result").innerHTML="Amount : "+amount.toFixed(2)+"</br>Compound Interest : "+ci.toFixed(2);

  document.getElementById("amount").innerHTML=amount.toFixed(2);
  document.getElementById("compound").innerHTML=ci.toFixed(2);
  
 }

 

/* *********** form validation ************* */


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
    nameError.innerHTML ='<i class="fas fa-check-circle"></i>';
    return true;
   
}




