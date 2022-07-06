const namee = document.querySelector(".NameEntered");
const radioBtn = document.querySelector(".radio")
const btn = document.querySelector(".button")
const msg = document.querySelector(".message")
const counter = document.querySelector(".counter")
const reset = document.querySelector(".reset")

let greeted = localStorage.getItem("Names")
let greetNames = JSON.parse(greeted)

const greeting = Greetings(greetNames);

btn.addEventListener("click", () => {

  var radioBtn = document.querySelector("input[name='language']:checked");

  if (radioBtn && namee.value) {
    var lingo = radioBtn.value

    let duplicates = greeting.setNames(namee.value)
    // alert(duplicates)

    if (duplicates === true) {
      document.querySelector(".message").innerHTML = greeting.greet(namee.value, lingo)
      document.querySelector(".counter").innerHTML = greeting.nameCount()
      localStorage.setItem("Names", JSON.stringify(greeting.getNames()));
      return;
    }
    else {
      document.querySelector(".message").innerHTML = "duplicate"
      return
    }
  }

  if (namee.value == "") {
    msg.innerHTML = "Enter you name!"
    return;
  }

  // if (radioBtn == "") {
  //   msg.innerHTML = "Enter you name!"
  //   return;
  // }
})

reset.addEventListener("click", () => {
  localStorage.clear();
  location.reload()
  document.querySelector("msg") = "";

})