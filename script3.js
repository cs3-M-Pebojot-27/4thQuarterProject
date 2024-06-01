//Javascript Code for Lessons Page

//Note: I asked help from AI to figure out some of these codes, however, I did modify them to fit the design and functionality I wanted. 

document.addEventListener("DOMContentLoaded", function() {  //This code is for the collapsibles. This code is AI generated, however I do understand how this works. :)
    var coll = document.getElementsByClassName("collapsible"); //The coll variable stores all elements that have the "collapsible" class name.
        for (var i = 0; i < coll.length; i++) { //This is a loop for the coll variable. It checks each element in the coll variable (which means all elements under the "collapsible" class.)
            coll[i].addEventListener("click", function() { //Adds an "click" event to the coll element.
            this.classList.toggle("active"); //Toggles the active class.
            var content = this.nextElementSibling; //var content = the next elements
            if (content.style.display === "block") { /* If the content in the collapsible is shown,*/ 
                content.style.display = "none";      /* the content disappears. */
            } else {                                /* However, if the collapsible content is not shown (or the collapsible is collapsed),*/ 
                content.style.display = "block";    /* the content is displayed. */ 
            }
        });
    }
});

function showNote(){ //When the button is clicked, this function shows the div.
    var x = document.getElementById("msgDiv"); 

    if (x.style.display === "none"){
        x.style.display = "block"
        x.innerHTML = "Basically, Alternative Medicine is a natural alternative to modern medicine. Pros: cost-effective, readily available, culturally significant, spiritually and emotionally relieving ; Cons: not always effective, less assurance, lacks plausibility"; 
        x.style.color = "white"; 
        x.style.backgroundColor = "#EB5E55"; 
        x.style.borderRadius = "18px"; 
        x.style.padding = "10px"; 
        x.style.border = "none"; 
        x.style.fontFamily = "Poppins, sans-serif"; 
        x.style.textAlign = "justify"; 
        x.style.fontSize = "15px";
        x.style.maxWidth = "50%"; 
        x.style.transform = "translateY(2px)"; 
        x.style.margin = "30px"; 
        x.style.marginBottom = "5px"; 
        x.style.transform = "translateX(350px)";
        x.style.boxShadow = "2px 2px 2px gray"; 
    } else { //If the button is clicked again, the message/div disappears. 
        x.style.display = "none" 
    }
}

function showNote2(){ //When the button is clicked, this function shows the div.
    var x = document.getElementById("msgDiv2"); 

    if (x.style.display === "none"){
        x.style.display = "block"
        x.innerHTML = "In summary, the six (6) most common types of alternative medicine are: ACUPUNCTURE, AROMATHERAPY, CHIROPRACTIC CARE, HERBAL MEDICINE, MASSAGE THERAPY, and TRADITIONAL CHINESE MEDICINE (TCM). Acupuncture, Chiropractic Care, and Massage Therapy focus more on physical body aches. Aromatherapy, Herbal Medicine, and TCM tend to lean more on internal illnesses (e.g. allergic rhinitis, cough, colds, etc.). However, all of them may be used for physical, internal, emotional, or spiritual problems. Alternative medicine encompasses a wide range of forms, so other types are not mentioned here. The field is broad and flexible, therefore there is always an alternative to medicine that can cater anyone's healthcare needs."; 
        x.style.color = "white"; 
        x.style.backgroundColor = "#EA9E8D"; 
        x.style.borderRadius = "18px"; 
        x.style.padding = "10px"; 
        x.style.border = "none"; 
        x.style.fontFamily = "Poppins, sans-serif"; 
        x.style.textAlign = "justify"; 
        x.style.fontSize = "15px";
        x.style.maxWidth = "50%"; 
        x.style.transform = "translateY(2px)"; 
        x.style.margin = "30px"; 
        x.style.marginBottom = "5px"; 
        x.style.transform = "translateX(330px)";
        x.style.boxShadow = "2px 2px 2px gray"; 
    } else { //If the button is clicked again, the message/div disappears.
        x.style.display = "none" 
    }
}

function showNote3(){ //When the button is clicked, this function shows the div.
    var x = document.getElementById("msgDiv3"); 

    if (x.style.display === "none"){
        x.style.display = "block"
        x.innerHTML = "In terms of healthcare, alternative medicine plays a role through acting as a cost-effective and available replacement for modern medicine. However, it may not be as effective as modern pharmaceutically-made medicine. Although, alternative medicine still gives the people with access to a simpler, more natural form of healthcare-- which is especially helpful to those who can't afford modern medicine (like hospitalizations, surgeries, etc.)"; 
        x.style.color = "white"; 
        x.style.backgroundColor = "#783F8E"; 
        x.style.borderRadius = "18px"; 
        x.style.padding = "10px"; 
        x.style.border = "none"; 
        x.style.fontFamily = "Poppins, sans-serif"; 
        x.style.textAlign = "justify"; 
        x.style.fontSize = "15px";
        x.style.maxWidth = "50%"; 
        x.style.transform = "translateY(2px)"; 
        x.style.margin = "30px"; 
        x.style.marginBottom = "5px"; 
        x.style.transform = "translateX(330px)";
        x.style.boxShadow = "2px 2px 2px gray"; 
    } else { //If the button is clicked again, the message/div disappears.
        x.style.display = "none" 
    }
}

function reveal1(imgElement){ //This function reveals the scent and name when the image is clicked.
    if (imgElement.src.includes ("mystery.png")){
        imgElement.src = "vanilla.jpg";
    }
    else if(imgElement.src.includes("vanilla.jpg")){
        imgElement.src = "vanilla-reveal.png"; 
    }
    else{
        imgElement.src = "mystery.png"; 
    }
}

function reveal2(imgElement){ //This function reveals the scent and name when the image is clicked.
    if (imgElement.src.includes ("mystery.png")){
        imgElement.src = "lemon.webp";
    }
    else if(imgElement.src.includes ("lemon.webp")){
        imgElement.src = "lemon-reveal.png"; 
    }
    else{
        imgElement.src = "mystery.png"; 
    }
}

function reveal3(imgElement){ //This function reveals the scent and name when the image is clicked.
    if (imgElement.src.includes ("mystery.png")){
        imgElement.src = "chamomile.jpg"; 
    }
    else if(imgElement.src.includes("chamomile.jpg")){
        imgElement.src = "chamomile-reveal.png"; 
    }
    else{
        imgElement.src="mystery.png";
    }
}

function nameRev1(imgElement){ //This function reveals the name when the image is clicked.
    if (imgElement.src.includes ("tawatawa.jpg")){
        imgElement.src = "tawatawa-reveal.png"; 
    }
    else{
        imgElement.src="tawatawa.jpg"; 
    }
}

function nameRev2(imgElement){ //This function reveals the name when the image is clicked.
    if (imgElement.src.includes ("lagundi.jpg")){
        imgElement.src = "lagundi-reveal.png"; 
    }
    else{
        imgElement.src="lagundi.jpg"; 
    }
}

function nameRev3(imgElement){ //This function reveals the name when the image is clicked.
    if (imgElement.src.includes ("oregano.jpg")){
        imgElement.src = "oregano-reveal.png"; 
    }
    else{
        imgElement.src="oregano.jpg"; 
    }
}