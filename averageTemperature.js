// Complete the function calculateAverage
const weather = [
  { city: "New York", temperature: 50, pressure: 1015 },
  { city: "Los Angeles", temperature: 70, pressure: 1010 },
  { city: "Chicago", temperature: 40, pressure: 1012 },
  { city: "Houston", temperature: 75, pressure: 1020 },
  { city: "Miami", temperature: 80, pressure: 1017 },
];
const pressureThreshold = 1015;
function calculateAverage(pressureThreshold) {
  //Implement your function here
  let avgTemp = 0.0,
    interTemp = 0.0;
  let someTemps = [];
  let someCities = weather.filter((city) => city.pressure >= pressureThreshold);
  someCities.map((city) => {
    someTemps.push(city.temperature);
  });
  console.log(someTemps);
  interTemp = someTemps.reduce((interTemp, temp) => interTemp + temp, 0);
  avgTemp = interTemp / someTemps.length;

  return avgTemp;
}
// console.log(calculateAverage(pressureThreshold));
//Output : 68.3

/**
Requirements

The function should have access to the weather object.
Specifically, your code should be able to:
1. The function should have access to the weather array of objects.
2. Filter the weather array to include only the objects where the pressure value
 is equal to or above the given threshold pressure.
3. Extract the temperature values from the filtered objects and store them in a new array
 with the help of the map method.
4. Reduce the temperature values to find the total temperature of the remaining cities.
5. Determine the number of cities that meet the pressure condition.
6. Calculate the average temperature by dividing the total sum of temperatures
 by the number of cities.
7. Return the average temperature rounded to one decimal place. e.g., "45.3".
 */

// same function in a concise format
function calcAverage(pressureThreshold) {
  let avgTemp = weather.filter((city) => city.pressure >= pressureThreshold);
  console.log("filter: ", avgTemp);
  avgTemp = weather
    .filter((city) => city.pressure >= pressureThreshold)
    .map((city) => city.temperature);
  console.log("map: ", avgTemp);
  // interTemp = someTemps.reduce((interTemp, temp) => interTemp + temp, 0);
  let cnt = 0;
  avgTemp = weather
    .filter((city) => city.pressure >= pressureThreshold)
    .map((city) => city.temperature)
    .reduce((acc, temp) => acc + temp, 0);
  console.log("reduce: ", avgTemp);
  cnt = 0;
  avgTemp =
    weather
      .filter((city) => {
        {
          if (city.pressure >= pressureThreshold) {
            cnt++;
            return true;
          }
        }
      })
      .map((city) => city.temperature)
      .reduce((acc, temp) => acc + temp, 0) / cnt;
  console.log("filter --: ", avgTemp, cnt);
  return avgTemp;
}
console.log(calcAverage(pressureThreshold));
