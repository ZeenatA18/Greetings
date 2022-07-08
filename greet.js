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
    regexx(namee)

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

    // function regexx(names) {
    //     var alphabets = /\d/g
    //     if (alphabets.test(names)) {
    //         return true
    //     } else {
    //         return false
    //     }
    // }


    // console.log(namee.value == '' && radioBtn == undefined)
    if (namee.value == '' && radioBtn == undefined) {
        msg.innerHTML = "Enter name & Select a language"
    } else if (/\d/g.test(namee)) {
        msg.innerHTML = "Use Alphabets only";
        return;
    } else if (namee.value == '') {
        msg.innerHTML = "Enter you name!"
        return;
    } else if (radioBtn == undefined) {
        msg.innerHTML = "Select Language";
        return;
    }

})


reset.addEventListener("click", () => {
    localStorage.clear();
    location.reload()
    document.querySelector("msg") = "";

})
