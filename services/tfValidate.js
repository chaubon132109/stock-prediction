/**
 * Description.
 * Validate the tensorflow.js model performance.
 * Update the database with model performance.
 **/
import config from "../config.js";
import preProcess from "./preProcess.js";
import tfModel from "./tfModel.js";
import source from "../data/data.js";
import fs from "fs";

/**
 * Validate the ml model performance with 20% data of the database.
 * Update database with model performance.
 **/
const valid = async () => {
  const X_test = [];
  const length = source.length;

  // Using 20% of the total data for training the tfjs model.
  const testData = source.slice(
    (config.trainConfig.trainSize / 100) * length,
    length
  );

  const testDataInp = source.slice(
    length - testData.length - config.timeSteps,
    length
  );

  // Preprocess data with MinMaxScalar.
  const testScaled = preProcess.transform(testDataInp, config.type);

  for (let i = config.timeSteps; i < testData.length + config.timeSteps; i++) {
    X_test.push(testScaled.slice(i - config.timeSteps, i));
  }

  // Get model prediction.
  const prediction = await tfModel.processModel(X_test);

  // Inverse scale the predicted values to original value.
  const predictedStockPrice = preProcess.inverseTransform(
    prediction.arraySync()
  );

  for (let i = 0; i < testData.length; i++) {
    fs.writeFileSync(
      "data/testData.js",
      `const testData = ${JSON.stringify(
        testData.map((e, i) => ({
          date: e.date,
          prediction: predictedStockPrice[i],
          real: e[config.type],
          type: config.type,
        })),
        null,
        2
      )}; export default testData;`
    );

    fs.writeFileSync(
      "next/pages/chart/valid/testData.js",
      `const testData = ${JSON.stringify(
        testData.map((e, i) => ({
          date: e.date,
          prediction: predictedStockPrice[i],
          real: e[config.type],
          type: config.type,
        })),
        null,
        2
      )}; export default testData;`
    );
  }
};

const tfValidate = { valid };

export default tfValidate;
