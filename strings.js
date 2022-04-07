
let singleqts='single quotes ki string';
let dbleqts="double quotes ki string";
console.log(singleqts);
console.log(dbleqts);
let char=singleqts.charAt(4);
let ascii=singleqts.charCodeAt(4);//gives ascii value of char
let substr=dbleqts.substring(2,8);
console.log(char);
console.log(ascii);
console.log(substr);
//split---->>split on the basis of char or space
let arrstr=singleqts.split(" ");
//if no space...each char separate in form of array of string


//join
let str=arrstr.join("$"); // or + anything
console.log(str);

//trim
let s="                               how r u                ";
s=s.trim();
console.log(s);
