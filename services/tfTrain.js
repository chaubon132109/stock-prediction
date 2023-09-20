/**
 * Description.
 * Train the tensorflow.js model.
 * Save the trained model.
 **/
import config from "../config.js";
import preProcess from "./preProcess.js";
import tfModel from "./tfModel.js";

import source from "../data/data.js";

/**
 * train the tfjs model with 80% data of the database.
 * @return {tfjs} save the trained model in a directory.
 **/
const train = async () => {
  const xTrain = [];
  const yTrain = [];

  let length = source.length;
  // Using 80% of the total data for training the tfjs model.
  const data = source.slice(0, (config.trainConfig.trainSize / 100) * length);

  // Preprocess data with MinMaxScalar.
  const trainScaled = preProcess.fitTransform(data, config.type);

  length = trainScaled.length;
  for (let i = config.timeSteps; i < length; i++) {
    xTrain.push(trainScaled.slice(i - config.timeSteps, i));
    yTrain.push(trainScaled[i]);
  }

  // Create the tfjs model.
  const _model = tfModel.createModel(xTrain);
  _model.weights.forEach((w) => {
    console.log(w.name, w.shape);
  });

  // Train the model and save it.
  tfModel.train(_model, xTrain, yTrain);
};

const tfTrain = { train };

export default tfTrain;
