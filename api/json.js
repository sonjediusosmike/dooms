let tex = '{'; // Initialize tex as an empty JSON string

for (let index = 0; index < 11; index++) {
    let a = Math.floor(Math.random() * 10); // Generate a random number between 0 and 9
    let text = `"${index}":${a}`; // Create a valid JSON key-value pair
    tex += (index < 10) ? `${text},` : `${text}`; // Add the pair to tex
}

tex += '}'; // Close the JSON string

const obj = JSON.parse(tex); // Parse the JSON string into an object
console.log(obj); // Print the object
