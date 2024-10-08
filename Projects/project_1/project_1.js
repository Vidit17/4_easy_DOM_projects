const body = document.querySelector("body")
const box = document.querySelectorAll(".common-box-prop")
// console.log(box);

box.forEach((i)=>{
    // console.log(i);

    // loop k andar hrr k element prr click event lgaaya 
    // matlab click karenge to kuch perform hoga
    i.addEventListener("click",function(event){   
       switch (event.target.id) {
        case event.target.id:"red"
            body.style.backgroundColor=event.target.id
            break;
        case event.target.id:"yellow"
            body.style.backgroundColor=event.target.id
            break;
        case event.target.id:"green"
            body.style.backgroundColor=event.target.id
            break;
        case event.target.id:"grey"
            body.style.backgroundColor=event.target.id
            break;
       
        default:
            break;
       }
    });
});
