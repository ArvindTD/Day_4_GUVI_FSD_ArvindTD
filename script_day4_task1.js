// Question: How to compare two JSON have the same properties without order?

let obj1 = {name: "Person1", age: 5};
let obj2 = {age: 5, name: "Person1"};
let result = true;
 
if (Object.keys(obj1).length===Object.keys(obj2).length){
    for (key in obj1){
        if (obj1[key]===obj2[key]){

            continue;
        }
        else{
            result= false;
            break;
        }
    }
}
else {
    result = false;
}

console.log(`Is Object equal: ${result}`);

//Output: Is Object equal: true