function Greetings(){

var storedNames = []

function greet(personName, language){
if(language === "eng"){
    return "Hello, " + personName
}else if(language === "afr"){
    return "Goeie dag, " + personName
}else if(language === "isi"){
    return "Molo, " + personName
}
}

function setNames(personName){
    storedNames.push(personName)
}

function getNames(){
    return storedNames
}

function nameCount(){
    return storedNames.length
}

    return{
        greet,
        setNames,
        getNames,
        nameCount
    }
}

