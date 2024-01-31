let counterElement = document.getElementById("countervalue");

function vinincrement(){
    let previouscountervalue = counterElement.textContent;
    let updatedcountervalue = parseInt(previouscountervalue) + 1;
    counterElement.textContent = updatedcountervalue;

    if(updatedcountervalue > 0){
        counterElement.style.color = "green";

    }
     else if(updatedcountervalue < 0){
        counterElement.style.color = "red";

     }
else{
    counterElement.style.color ="black" ;
}


}


function vindecrement(){
    let previouscountervalue = counterElement.textContent;
    let updatedcountervalue = parseInt(previouscountervalue) - 1;
    counterElement.textContent = updatedcountervalue;
     

    if(updatedcountervalue > 0){
        counterElement.style.color = "green";

    }
     else if(updatedcountervalue < 0){
        counterElement.style.color = "red";

     }
else{
    counterElement.style.color ="black" ;

}
}


function vinreset(){
    let updatedcountervalue = 0;
    
    counterElement.textContent = updatedcountervalue;
     counterElement.style.color ="black";

}