const namee = document.querySelector(".NameEntered");
const english = document.querySelector(".engRadio")
const afrikaans = document.querySelector(".afrRadio")
const isixhosa = document.querySelector(".isiRadio")
const btn = document.querySelector(".button")
const msg = document.querySelector(".message")


// let greeting = Greetings();

btn.addEventListener("click", () => {
// alert("Hey Hi Hello")
    let language = document.querySelector("#radio:checked");
let lingo = language.value;
let personName = namee.value
    // if (checkedbutton) {
    //     var language = (checkedbutton.value);


        // document.querySelector(".msg).innerHTML = greeting.greet(namee.value , language.value);

        if (lingo === "eng") {
            msg.innerHTML = "Hello, " + personName + "🤝"
        } else if (lingo === "afr") {
            msg.innerHTML = "Goeie dag, " + personName + "👋"
        } else if (lingo === "isi") {
            msg.innerHTML = "Molo, " + personName + "😄"
        }
    })



// function greetLanguage() {

//     var checkedbutton = document.querySelector("input[name='language']:checked");

//     if (checkedbutton) {
//         var language = (checkedbutton.value);

//         document.querySelector(".namee").innerHTML = greeting.greet(text.value , language);

//         // if (language === "eng") {
//         //     greeting.greet(personName, language)
//         // } else if (language === "afr") {
//         //     greeting.greet(personName, language)
//         // } else if (language === "isi") {
//         //     greeting.greet(personName, language)
//         // }
//     }
// }

// english.innerHTML = greeting();
// afrikaans.innerHTML = greeting();
// isixhosa.innerHTML = greeting();
// namee.innerHTML = greeting();