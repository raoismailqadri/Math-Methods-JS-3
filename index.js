// JavaScript Demo: Number()
let num = prompt("Plz write a number with decimals");
let num1 = Number(num);
document.write(`The result in Math floor is ${Math.floor(num1)}`,"<br>" );
document.write(`The result in Math ciel is ${Math.ceil(num1)}`,"<br>");
document.write(`The result in Math round is ${Math.round(num1)}`,"<br>");

// // JavaScript Demo: parseFloat()
let numA = prompt("Plz write a number with decimals");
let num2 = parseFloat(numA);
document.write(`The result in Math floor by parseFloat method is ${Math.floor(num2)}`,"<br>" );
document.write(`The result in Math ciel by parseFloat method is ${Math.ceil(num2)}`,"<br>");
document.write(`The result in Math roundby parseFloat method is ${Math.round(num2)}`,"<br>");

// JavaScript Demo for a dice: Math.random()
function getRandomInt(min , max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  let min = prompt("plz assign a min number of your choice over a dice ");
  let max = prompt("plz assign a max number of your choice over a dice ");
    
  document.write(getRandomInt(min , max));
  

//   JavaScript Demo for asking user the weight: parse()
 let userX = prompt("Plz write your weight");
 let user = parseInt(userX);
 document.write(user,"Kgs")

// JavaScript Demo for asking user the secret number: 
let game = prompt("Enter a number to win game");
let game1 = Number(game);
let game2 = 7;
 if (game1 === 7){
    alert("Congratulation you win")
 }
 else{
    alert("Dont be said, plx try again")
 }


// JavaScript Demo for Date and Month: 
 var newDate = new Date();
 document.write(newDate,"<br>");

 var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saterday"];
 var day = newDate.getDay();
 document.write(`Today the day is >>> ${dayNames[day]}`,"<br>");
  if (day === 0){
    document.write("Today is Sunday hence, People says Funday","<br>")
  };

  var day = newDate.getDate();
  if (day <= 15){
    document.write("These days are from first 15 days","<br>")
}
else{"These days are from last 15 days","<br>" };


 var monthNames = ["January", "Febraray", "March", "April", "May", "June",
 "July", "Augest", "September", "Octuber", "November", "December"];
 var month = newDate.getMonth();
 document.write(`These days are from the month of >>> ${monthNames[month]}`,"<br>");
 
var earlyDay = new Date("January 1,1970");
var msToday = newDate.getTime();
document.write(`The current Time is ${msToday}`,"<br>");
var msEarlyDay = earlyDay.getTime();
document.write(`The Time from 1st January 1970 is >> ${msEarlyDay}`,"<br>");


// FOR KE BILLING ONLY
var year = newDate.getFullYear();document.write("Current Year is",year);
document.getElementById("bill").innerText = ( monthNames[month] +" "+ year);//This line of code is for ke Billing//

let units = prompt("Plz enter the units the Consumer used");
units = Number(units);
document.getElementById("unit").innerText = ("Units Cunsumed :" + " " + units);

let rate = 50;
let amount = units * rate;
document.getElementById("amount").innerText = ("Amount Before Due Date :" + "Rs." + amount);

let surcharge = 10 * amount /100;
document.getElementById("surcharge").innerText = ("Amount Surchage 10% :" + surcharge);

let late = amount + surcharge;
document.getElementById("late").innerText = ("Amount After Due Date :" + "Rs." + late)
