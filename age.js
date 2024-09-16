const inputAge = document.querySelector('.age-dob-input');
const calculateAge = document.querySelector('.age-calculate');
const currentAge = document.querySelector('.age-result');


calculateAge.addEventListener("click", ()=>{
    if(inputAge.value == ""){
        alert('please inter yor date of birth')
    }else{
        const dob = new Date(inputAge.value);
        const dob_year = dob.getFullYear()
        //current
        const now = new Date();
        const now_year = now.getFullYear()

        const age = now_year - dob_year;
         
       currentAge.innerHTML = `Your current is ${age}` ;
    }
})