function compute()
{
    let principal = document.getElementById("principal").value;
   if (principal<=0){window.alert("Enter a positive number");}
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;
    let interest = principal * years * rate / 100;
    let actual_year = years + 2021;
    document.getElementById("result").innerHTML = " If you deposit " + principal  +  " at an interest rate of " + rate + " You will receive an amount of " + interest + " interest " +" in the year " actual_year ;
}
function range_display()
{
    let rate = document.getElementById("rate").value;
    document.getElementById("range").innerText = rate;
}        
