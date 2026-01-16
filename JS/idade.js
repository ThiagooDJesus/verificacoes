document.addEventListener('DOMContentLoaded', function () {

  const campoIDADE = document.getElementById ("id_idade")

  campoIDADE.addEventListener ('input', function () {
    if(campoIDADE.value >= 18) {
       campoIDADE.style.border = '3px solid green'
    }else{
        console.log("calma ai paizão");
        campoIDADE.style.border = '3px solid red'
        audio.play();

    }
    
 


  });

});

