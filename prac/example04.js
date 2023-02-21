let initArray = [];
let carArray = ["sonata", "bmw", "tico", 18681877]

console.log(carArray);
console.log(carArray[0]);
console.log(carArray[1]);
console.log(carArray[2]);
console.log(carArray[3]);

for (let i = 0; i < carArray.length; i++) {
    let car = carArray[i];
    console.log(car);

}

for (car of carArray) {
    console.log(car);
}

carArray.map((car) => {
    console.log(car);
})