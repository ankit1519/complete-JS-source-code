//Array declare
let array=[1,2,3,4,5];
console.log(array);
console.log(array.length);
let i=0;
while(i<array.length){
    console.log("Element at index ",i," is ",array[i]);
    i++;
}
console.log("..........................................................");
//insert elements --->> anything....>>> int ,string etc.......
//push--->>add last
//unshift---->>>>>Add first
array.push("last");
array.unshift("First");
console.log(array);
console.log("..........................................................");
//delete element
//pop---remove from last
//shift----remove from beginning
array.pop();
array.shift();
console.log(array);

//index of
let idx=array.indexOf(4);
console.log("Index of the required element is " ,idx);

//includes
let a=array.includes(10);
let b=array.includes(2);
console.log(a);
console.log(b);

//part of index--->>slice
let poi=array.slice(1,3); //last excluded......................just copy..no change in actual array
console.log(poi);


//splice----delete element or elements from array---------------changes in actual array
array.splice(2,3);//2 is index from which we have to delete and 3 is the count that how many elements we have to delete from the index
console.log(array);
