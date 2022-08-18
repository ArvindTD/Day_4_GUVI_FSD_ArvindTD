//Question: Use rest countries API and print country name, region, sub-region and population of all countries. 

let xhr = new XMLHttpRequest();
console.log("New Object" + xhr);

xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.onload = function(){
    console.log("***Response received***");
    let data = JSON.parse(this.responseText);
    for (let i=0; i<data.length; i++){
        console.log(`
        Country: ${data[i].name.common}
        Region: ${data[i].region}
        Sub-Region:${data[i].subregion}
        Population:${data[i].population}
        `);
        
    }
}

xhr.send();



