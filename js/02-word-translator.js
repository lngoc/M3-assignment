//Step 1 
var translateCode = prompt("Enter a language code (es, de, en, fr):");

// Step 2 Define translation 
var translations = {
  es: "Hola Mundo",
  de: "Hallo Welt",
  en: "Hello World",
  fr: "Bonjour le monde",
};

//Step 3
if (translations.hasOwnProperty(translateCode)) {
  
  console.log("Hello World translated in " + translateCode + " is: " + translations[languageCode]);
} else {
  
  console.log("Hello World translated in English is: " + translations.en);
}