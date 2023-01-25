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
   img[firstIndex -1].style.display='block';
  
}
automaticSlide();


/* *********** SIP Calculator ************* */

let result = document.getElementById("result");

 let calculate = () => {
    let p = Number(document.getElementById("principal").value);
    let r = Number(document.getElementById("rate").value);
    let t = Number(document.getElementById("time").value);
    let duration = Number(document.getElementById("duration").value);
    
    console.log(p,r,t,duration);
   
 };

 let CalculateBtn = document.getElementById("calculate-btn");
 CalculateBtn.addEventListener(calculate)
 window.addEventListener(calculate);

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




