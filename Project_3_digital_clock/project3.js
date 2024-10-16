    
    let localTime = document.querySelector(".time")

    // this set - interval method runs after every 1000 mili seconds
    setInterval(function(){
        // date aapko hrr baar nyi bnaani padegi
        let date =  new Date()
        date = date.toLocaleTimeString();
        localTime.innerHTML = date
    
    }, 1000)
    localTime.style.color = "white"