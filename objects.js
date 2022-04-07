//object : group of key:value pair
//key:value -> property
//key:function -> method
let cap={
    name:"Steve",
    lastname:"Rogers",
    address:{
        city:"manhatten",
        State:"New York"
    },
    age:35,
    isAvg:true,
    movies:["first Avenger","Winter soldier","civil war"],
    sayHi:function(){
        console.log("cap say hi!!");
    }

};

//get from object
console.log(cap.name);
console.log(cap.age);
console.log(cap.movies[1]);
console.log(cap.address);
cap.sayHi;

console.log("cap: ", cap);
console.log("**********************************************");
//set or update
cap.age=36;
cap.isAvg=false;
cap.friends=["tonny","bruce","Peter"];
console.log("cap: ", cap);
//delete
delete cap.address;
console.log("cap: ", cap);


console.log("values by keys...One by one");
//get values from keys
for(let key in cap){
    console.log(key," : ",cap[key]);
}
let key="age";
console.log(cap[key]);//replace value from key
//if no key...undefined
console.log(cap.xyz); //output--- undefined
