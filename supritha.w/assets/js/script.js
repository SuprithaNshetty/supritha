/*=============== PRELOADER ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr=ScrollReveal({distance:"60px",
duration:2000,
delay:100});
sr.reveal(`.contact-headline,.projects-headline`,{delay:500,});
sr.reveal(`.nav, .footer-home, .footer-social, .skills-item, .projects-item`,{origin:"top",interval:100,});
sr.reveal(`.contact-description,.contact-form`,{origin:"left",interval:100,});
sr.reveal(`.hero-image`,{origin:"top"});
sr.reveal(`.hero-text`);


/*=============== SHOW SCROLL UP ===============*/

/*=============== EMAIL JS ===============*/
const contactForm=document.getElementById("contact-form"),
contactMesasage=document.getElementById("contact-message"),
sendButton=document.querySelector("#contact-form button");

const sendEmail=async(e)=>{
    e.preventDefault();
    sendButton.disable=true;
    sendButton.textContent="sending...";
    try{
        await emailjs.sendForm(
            "service_t23loss",
            "template_oyf9txo",
            "contact-form",
            "lslHlnpJiXzCjOkzx",
        );
        contactMesasage.textContent="message sent successfully";
        setTimeout(()=>{
        contactMesasage.textContent="";
        },4000);
        contactForm.reset();


    } 
    catch(error){
        contactMesasage.textContent="message not sent(service error)";
    }
    finally{
        sendButton.disabled=false;
        sendButton.textContent="send message";
    

    
    }
};
contactForm.addEventListener("submit",sendEmail);
