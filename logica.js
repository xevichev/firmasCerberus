document.querySelector("#btnfirmar").addEventListener("click", guardarfirma);

function guardarfirma() {

    var sdni=document.querySelector("#txtdni").value,
        snom=document.querySelector("#txtnom").value,
        sprimercognom=document.querySelector("#txtprimercognom").value,
        ssegoncognom=document.querySelector("#txtsegoncognom").value,
        smail=document.querySelector("#txtmail").value;

añadirfirma(sdni, snom, sprimercognom, ssegoncognom, smail);

firebase.auth().createUserWithEmailAndPassword(sdni, snom, sprimercognom,ssegoncognom, smail)
  .then((user) => {
    // Signed in
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });

    
}