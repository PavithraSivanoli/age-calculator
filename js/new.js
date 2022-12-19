var n=prompt("enter the date mm-dd-year");
p= new Date()
currentyear=p.getFullYear()
console.log(currentyear)
var p = new Date(n);
birthyear = p.getFullYear(); 
age=currentyear-birthyear;
document.write(age);



