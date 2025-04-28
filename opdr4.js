const settings = {
    volume: 70,
    language: 'en',
    darkMode: true,
  };

if((typeof settings.darkMode != "undefined") && (settings.darkMode == true)) {
    console.log(`Dark Mode is ON`)
}; 
if((typeof settings.darkMode == "undefined") || (settings.darkMode == false)) {
    console.log(`Dark mode is OFF`)
}; 