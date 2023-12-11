// const name=document.getElementById('name');
// const email=document.getElementById('email');
// const subject=document.getElementById('subject');
// const message=document.getElementById('message');
// const loading=document.getElementById('loading');
//  const error=document.getElementById('error');



// const form=document.getElementById('form');

// form.addEventListener('submit',(e)=>{
    
//     loading.
//     error.textContent="dsfssfdfds"
//     window.alert(" i am  entered");
//     e.preventDefault();
// })

document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const serviceID = "service_x7a74le";
    const templateID = "template_jdzwsa9";
  
    // send the email here
    emailjs.sendForm(serviceID, templateID, this).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("SUCCESS!" );
      },
      (error) => {
        console.log("FAILED...", error);
        alert("FAILED...", error);
      }
    );
  });
  
