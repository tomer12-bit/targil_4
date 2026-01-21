document.getElementById("PB").onclick = changeInputs;
document.getElementById("MB").onclick = changeInputs;

function changeInputs() {
  var psycho = document.ContactForm.Psychometric;
  var bagrut = document.ContactForm.Bagrut;
  var mechina = document.ContactForm.Mechina;

  if (document.getElementById("PB").checked === true) {
    psycho.disabled = false;
    bagrut.disabled = false;
    mechina.disabled = true;
  }
  else if (document.getElementById("MB").checked === true) {
    psycho.disabled = true;
    bagrut.disabled = false;
    mechina.disabled = false;
  }
}

function validate()
{
    let Bagrut = document.ContactForm.Bagrut;
    let age = document.ContactForm.age;
    let age_int= parseInt(age.value,10)
    let green = document.getElementById("green");

    if(Bagrut.value==="")
    {
        window.alert("You should enter a Bagrut grade");
        Bagrut.focus();
        return false;
    }
     if(age_int > 30)
    {
        green.innerHTML = "You are eligible for admission to any faculty you choose";
        return false;
    }
    return true;
}
