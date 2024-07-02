const dict = {
    "en": {
        "title": "FUN & MAKE FUN",
        "description": "A new social network where everything change",
        "heading": "Download the Application"
    },

    "es": {
        "title": "DIVERTIRSE y DIVERTIRSE",
        "description": "Una nueva red social donde todo cambia",
        "heading":"Descargue la aplicación"
    },

}

window.onload = function () {
    let deviceLanguage = navigator.language || navigator.userLanguage;
    let languageCode = deviceLanguage.split("-")[0];

    let data = {};
    if (languageCode === "en" || languageCode === "es") {
        data = dict[languageCode];
    } else {
        data = dict["en"]; // Default to English if the language is not found
    }

    document.getElementById("txt-title").innerHTML = data["title"]
    document.getElementById("txt-description").innerHTML = data["description"]
    document.getElementById("txt-heading").innerHTML = data["heading"]
};
