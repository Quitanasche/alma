function cubicExtrema(x0, x1, x2, x3, cb) {
    // Coefficients of the cubic polynomial ax^3 + bx^2 + cx + d
    let a = x3;
    let b = x2;
    let c = x1;
    let d = x0;

    // Derivative coefficients: f'(x) = 3ax^2 + 2bx + c
    let da = 3 * a;
    let db = 2 * b;
    let dc = c;

    // Solving for critical points using the quadratic formula
    let discriminant = db * db - 4 * da * dc;

    if (discriminant < 0) {
        // No real roots, no extrema
        if (cb) cb([]);
        return [];
    }

    let x1_extreme = (-db + Math.sqrt(discriminant)) / (2 * da);
    let x2_extreme = (-db - Math.sqrt(discriminant)) / (2 * da);

    // Sorting the extremas
    let extrema = [x1_extreme, x2_extreme].sort((a, b) => a - b);

    if (cb) cb(extrema);
    return extrema;
}

// Example usage:
cubicExtrema(1, -6, 11, -6, function(extrema) {
    console.log('Extrema:', extrema);
});
