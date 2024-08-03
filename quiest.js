Density = {
  Definition: {
    // Example properties
    name: 'Density',
    description: 'A measure of mass per unit volume.',
    formula: (mass, volume) => mass / volume, // A method to calculate density
    units: {
      mass: 'kg',
      volume: 'm^3',
      density: 'kg/m^3'
    },
    examples: [
      { mass: 10, volume: 2, density: 5 },
      { mass: 25, volume: 5, density: 5 },
      { mass: 50, volume: 10, density: 5 }
    ]
  }
};

// Example usage
let mass = 10; // in kilograms
let volume = 2; // in cubic meters
let density = Density.Definition.formula(mass, volume);

console.log(`The density is ${density} ${Density.Definition.units.density}.`);
// Output: The density is 5 kg/m^3.
