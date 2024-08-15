const map = new Map([
  ['name', 'John'],
  ['age', 30],
  ['city', 'New York']
]);

for (const [key, value] of map) {
  console.log(`${key}: ${value}`); // Logs each key-value pair in the map
}
