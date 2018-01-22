export const chartAvgTempAir = {
    x: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400],
    y: [1.3, 1.31, 1.31, 1.32, 1.33, 1.34, 1.36, 1.37, 1.39, 1.4, 1.41, 1.42, 1.44, 1.45, 1.46],
};

export const chartAvgTempSmoke = {
    x: [0, 200, 400, 600, 800, 1000, 1200, 1400],
    y: [1.42, 1.42, 1.46, 1.49, 1.52, 1.54, 1.56, 1.59],
};

export const calcChartData = data => {
    // calculate mean x and y

    const Xmean = data.x.reduce((a, b) => a + b, 0) / data.x.length;
    const Ymean = data.y.reduce((a, b) => a + b, 0) / data.y.length;

    let term1 = 0;
    let term2 = 0;
    // calculate coefficients
    let xr = 0;
    let yr = 0;

    data.x.forEach((el, id) => {
        xr = el - Xmean;
        yr = data.y[id] - Ymean;
        term1 += xr * yr;
        term2 += xr * xr;
    });

    const b1 = term1 / term2;
    const b0 = Ymean - b1 * Xmean;
    // perform regression
    const yhat = [];

    // fit line using coeffs
    data.x.forEach(el => yhat.push(b0 + el * b1));

    const result = [];
    data.x.forEach((el, id) => {
        result.push({
            x: data.x[id],
            y: data.y[id],
            yhat: yhat[id],
        });
    });
    return result;
};
