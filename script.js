function showMessage(){ //When the button is clicked, this function works and shows the div. 
    var x = document.getElementById("msgDiv"); 
    if (x.style.display === "none"){
        x.style.display = "block"
        x.innerHTML = "Hello, I'm Marthea, the creator; but, you can call me Pengu-nim!"
        x.style.color = "white"; 
        x.style.backgroundColor = "#69B578"; 
        x.style.borderRadius = "30px"; 
        x.style.padding = "3px"; 
        x.style.border = "none"; 
        x.style.fontFamily = "Poppins, sans-serif"; 
        x.style.textAlign = "center"; 
        x.style.fontSize = "15px";
        x.style.maxWidth = "50%"; 
        x.style.transform = "translateY(2px)"; 
        x.style.margin = "30px"; 
        x.style.marginBottom = "5px"; 
        x.style.transform = "translateX(350px)"; 
    } else { //If the button is clicked again, the div disappears. 
        x.style.display = "none" 
    }
    
}