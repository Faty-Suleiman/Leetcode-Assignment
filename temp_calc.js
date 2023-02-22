function celsiusToFahrenheit(celsius){
    let celTem = celsius;
    let celToFah = celTem * 9 / 5 + 32;
    let Temp = celTem + ' noc ' +celToFah + ' nof ';
     return Temp 
  
  }
  console.log(celsiusToFahrenheit(60))
  
  function fahrenheitToCelsius(fahrenheit){
    let fehTem = fahrenheit;
    let fahToCel = (fehTem - 32) * 5 / 9;
    let Tem = fehTem + ' nof ' +fahToCel + ' nof '; 
    return Tem
  }
  console.log(fahrenheitToCelsius(54));