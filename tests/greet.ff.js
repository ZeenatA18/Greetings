function Greetings(list) {

    var storedNames = list || []


    function greet(personName, language) {
        
        if (language === "eng") {
            return "Hello, " + personName
        } else if (language === "afr") {
            return "Goeie dag, " + personName
        } else if (language === "isi") {
            return "Molo, " + personName
        }

    }

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

    return {
        greet,
        setNames,
        getNames,
        nameCount,
        errorMessenges
    }
}
