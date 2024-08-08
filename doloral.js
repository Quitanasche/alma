/**
 * Applies shadow to an object and multiplies the result by a given color.
 *
 * @param {Object} object - The object receiving the shadow.
 * @param {vec3} shadowColor - The color of the shadow as an RGB vector.
 * @param {vec3} multiplyColor - The color to multiply the shadow result by as an RGB vector.
 * @returns {vec3} - The resulting color after applying the shadow and multiplication.
 */
function applyShadowAndMultiplyColor(object, shadowColor, multiplyColor) {
    // Assuming object has a method `getShadowIntensity` that returns a value between 0 and 1
    let shadowIntensity = object.getShadowIntensity();

    // Calculate the resulting shadow color by blending the object's color with the shadow color
    let resultColor = vec3.create(); // Placeholder for a vector creation function
    resultColor[0] = shadowColor[0] * shadowIntensity;
    resultColor[1] = shadowColor[1] * shadowIntensity;
    resultColor[2] = shadowColor[2] * shadowIntensity;

    // Multiply the resulting shadow color by the given multiply color
    resultColor[0] *= multiplyColor[0];
    resultColor[1] *= multiplyColor[1];
    resultColor[2] *= multiplyColor[2];

    return resultColor;
}

// Utility function to create a vec3 (if not using a library like glMatrix)
function createVec3(x, y, z) {
    return [x, y, z];
}

// Example usage:
let object = {
    getShadowIntensity: function() {
        return 0.5; // Example intensity value
    }
};

let shadowColor = createVec3(0.2, 0.2, 0.2); // Dark gray shadow
let multiplyColor = createVec3(1.0, 0.8, 0.6); // Light brownish color

let finalColor = applyShadowAndMultiplyColor(object, shadowColor, multiplyColor);
console.log(finalColor); // Outputs the resulting color after modifications
