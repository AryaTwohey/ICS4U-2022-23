let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits.join()); //No argument puts ','
console.log(fruits.join('--')); /*Join function will put an argument in between in element* */
// join

// push

fruits.push('Kiwi');//push string onto fruits
console.log(fruits.join());
fruits.push(['Strawberry', "Blueberry"]); //pushes an array to the other array 
console.log(fruits.join());
fruits.push(5); //returns what it pushes
console.log(fruits.join());

console.log(JSON.stringify(fruits));

// pop

console.log(fruits.pop()); //removes last element
console.log(fruits.join());

// shift
console.log(fruits.join());
console.log(fruits.shift()); //removes the first element
console.log(fruits.join());

// unshift
 console.log(fruits.unshift('Potatoe'));
 console.log(fruits.join());

// concat
fruits.concat(['Strawberry', 'Blueberry']);
console.log(JSON.stringify(fruits));

// slice //slice creates a new array starting at the specified index 
let citrus = fruits.slice(3);

fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
citrus = fruits.slice(1, 3);

console.log(citrus);


// splice
fruits = ["Banana", "Orange", "Apple", "Mango", "Pinepple", "Cherry"]; //splice where # remove insert here
fruits.splice(2, 0, "Lemon", "Kiwi"); //adds at index 2

console.log(fruits);
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1, "Lemon", "Kiwi");