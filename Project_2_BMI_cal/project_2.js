const form = document.querySelector("form")

form.addEventListener("submit",function(e){ // whenever you click submit a event will happen
    e.preventDefault() // sabse pehle humne event ko kaha ki form jo bhi details jise bhj rha tha ve mtt bhejo

    // aap values of extract kab krna chahete h 
    // jab hum submit button dbaaye tb
    const hieght = parseInt(document.querySelector("#hieght").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector(".result")
    if (hieght < 0 || isNaN(hieght) || hieght === '') {
        result.innerHTML = "Please enter valid Hieght"
    }
    else if (weight < 0 || isNaN(weight) || weight === '') {
        result.innerHTML = "Please enter valid weight"
    }
    else{
        const bmi = (weight/((hieght*hieght)/10000)).toFixed(2)
        if (bmi<=18.6) {
            result.innerHTML = `${bmi} ,  You are under-weight`
        }else if(bmi>18.6&&bmi<24.9){
            result.innerHTML = `${bmi} , You have normal weight`
        } else if(bmi>=24.9){
            result.innerHTML = `${bmi} , You are Over-weight`
        }
    }
    
    
})
