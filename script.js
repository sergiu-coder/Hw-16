let year=prompt('Write year','');

function leapYear(year)
{
    return ((year % 4 === 0) && (year % 100 !==0)) || (year % 400 ===0);
}
        if (leapYear(year)){
            alert('Year  is  leap year');
        }
            else {
                alert('Year is not a leap year')
        }
       
       
       
        function convToFahreheit (celsius) {
            let cTemp = celsius;
            let cToFahrenheit = cTemp / 5 * 9 + 32;
            let message = cTemp + '\xB0C is ' + cToFahrenheit.toPrecision(3) + '\xB0F';
            console.log (message);
        }
        
        convToFahreheit (36);
        
        function convToCelsius (fahrenheit) {
            let fTemp = fahrenheit;
            let fToCelsius = (fTemp - 32) * 5 / 9;
            let message = fTemp + '\xB0F is ' + fToCelsius.toPrecision() + '\xB0C';
            console.log (message);
        }
        
        convToCelsius (96.8);