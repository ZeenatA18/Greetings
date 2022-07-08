function Greetings(list) {

    var storedNames = list || []


    function greet(personName, language) {
        // var alphabets =  /\d/g

        // // console.log(alphabets.test(personName))
        // if (regexx(personName) === true){
        //     if(personName){
        if (language === "eng") {
            return "Hello, " + personName
        } else if (language === "afr") {
            return "Goeie dag, " + personName
        } else if (language === "isi") {
            return "Molo, " + personName
        }
    }
// }
// else if(regexx(personName) === false){
//     return "Use Alphabets only"
// }


// }

function errorMessenges(name) {
    if (storedNames.includes(name)) {
        return true
    }
    return false
}

function setNames(personName) {
    if (errorMessenges(personName) === false) {
        storedNames.push(personName)
        return true
    }
    else {
        return false;
    }

}

function getNames() {
    return storedNames
}

function nameCount() {
    return storedNames.length
}

// function regexx(names) {
//     var alphabets = /\d/g
//     if (alphabets.test(names)) {
//         return true
//     } else {
//         return false
//     }
// }

return {
    greet,
    setNames,
    getNames,
    nameCount,
    errorMessenges
}
}
