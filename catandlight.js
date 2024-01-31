function offvinay(){
document.getElementById("imagebulb").src ="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
document.getElementById("imagecat").src ="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
document.getElementById("status").textContent="switched off";
document.getElementById("coloroff").style.backgroundColor = "#cbd2d9";
document.getElementById("coloron").style.backgroundColor ="#22c55e" ;
}



function onvinay(){
    document.getElementById("imagebulb").src ="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("imagecat").src ="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("status").textContent="switched on";
    document.getElementById("coloroff").style.backgroundColor = "#e12d39";
document.getElementById("coloron").style.backgroundColor ="#cbd2d9" ;

    
}