//Question: Use rest countries API and print flag of all countries. 

let xhr = new XMLHttpRequest();
console.log("New Object" + xhr);

xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.onload = function(){
    console.log("***Response received***");
    let data = JSON.parse(this.responseText);
    for (let i=0; i<data.length; i++){
        console.log("Country:", data[i].name.common, ":", data[i].flags.png);
        
    }
}

xhr.send();

