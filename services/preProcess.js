/**
 * Description.
 * Preprocess data with MinMaxScalar algorithm.
 * X_std = (X - X.min()) / (X.max() - X.min())
 * X_scaled = X_std * (max - min) + min
 **/
import fs from "fs";
import fitData from "../data/fitData.js";

/**
 * Write the minimum and maximum to be used for later scaling to a file.
 * Use the values for future transformation of data before model prediction.
 * @param {Object} data
 * @param {number} data.X_max
 * @param {number} data.X_min
 * @param {number} data.max
 * @param {number} data.min
 **/
const saveFitData = (data) => {
  // fs.writeFileSync("utils.json", JSON.stringify({ X_max, X_min, max_, min_ }));
  fs.writeFileSync(
    "data/fitData.js",
    `const fitData = ${JSON.stringify({
      X_max: data.X_max,
      X_min: data.X_min,
      max: data.max,
      min: data.min,
    })}; export default fitData;`
  );
};

/**
 * fit data for preprocessing.
 * @param {Array} X - input data.
 * @param {integer} min - minimum value of the feature range.
 * @param {integer} max - maximum value of the feature range.
 * @return {Array} X_scaled - Final scaled array fitted within Feature Range.
 **/
const fit = (X, min = 0, max = 1) => {
  let X_max = Math.max.apply(null, X); // get in max arr X
  let X_min = Math.min.apply(null, X); // get in min arr X

  // get diff of value in X with min of X
  const X_minArr = X.map((value) => value - X_min);

  // X_std = (X - X.min()) / (X.max() - X.min())
  const X_std = X_minArr.map((values) => values / (X_max - X_min));

  // X_scaled = X_std * (max - min) + min
  const X_scaled = X_std.map((values) => values * (max - min) + min);

  saveFitData({ X_max, X_min, max, min });
  return X_scaled;
};

// const writeUtil = (data) => {
//   fs.writeFileSync("utils.js", JSON.stringify({ X_max, X_min, max_, min_ }));
// };

/**
 * Fit to data, then transform it.
 * @param {Array} source - array of objects.
 * @param {String} attribute  - property of the JSON object to be accessed.
 * @return {Array} train_scaled - Final scaled array fitted within Feature Range.
 **/
const fitTransform = (source, attribute) => {
  const data = source.map((value) => value[attribute]);
  const trainScaled = fit(data);

  return trainScaled;
};

/**
 * Scale features of X according to feature_range.
 * @param {Array} result - array of objects.
 * @param {String} attribute  - property of the JSON object to be accessed.
 * @return {Array} X_scaled - Final scaled array fitted within Feature Range.
 **/
const transform = (result, attribute) => {
  const data = result.map((value) => value[attribute]);

  const X_minArr = data.map((values) => values - fitData.X_min);
  const X_std = X_minArr.map(
    (values) => values / (fitData.X_max - fitData.X_min)
  );
  const X_scaled = X_std.map(
    (values) => values * (fitData.max - fitData.min) + fitData.min
  );

  return X_scaled;
};

/**
 * Undo the scaling of X according to feature_range.
 * @param {Array} inp - Scaled array according to feature_range.
 * @param {integer} min - minimum value of the feature range.
 * @param {integer} max - maximum value of the feature range.
 * @return {Array} X_ - Inverse Scaled Array.
 **/
const inverseTransform = (inp, min = 0, max = 1) => {
  const X = inp.map((values) => (values - min) / (max - min));
  const X_ = X.map(
    (values) => values * (fitData.X_max - fitData.X_min) + fitData.X_min
  );

  return X_;
};

const preProcess = {
  fitTransform,
  transform,
  inverseTransform,
};

export default preProcess;
