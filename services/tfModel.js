/**
 * Description.
 * Developing model Architecture.
 * Compiling and fitting the model with training data.
 * Save and Load model.
 **/

import tf from "@tensorflow/tfjs-node";
import config from "../config.js";

const configTrain = config.trainConfig;

/**
 * create tfjs model architecture.
 * @param {tensor} input - input tensor.
 * @return {tensor} model - Model architecture.
 **/
const createModel = (input) => {
  const model = tf.sequential();
  model.add(
    tf.layers.reshape({
      inputShape: [input[0].length],
      targetShape: [input[0].length, 1],
    })
  );
  model.add(tf.layers.lstm({ units: 50, returnSequences: true }));
  model.add(tf.layers.dropout(0.2));

  model.add(tf.layers.lstm({ units: 50, returnSequences: true }));
  model.add(tf.layers.dropout(0.25));

  model.add(tf.layers.lstm({ units: 50, returnSequences: true }));
  model.add(tf.layers.dropout(0.2));

  model.add(tf.layers.lstm({ units: 50 }));
  model.add(tf.layers.dropout(0.25));

  model.add(tf.layers.dense({ units: 1 }));

  return model;
};

/**
 * compute loss and error at the end of every batch.
 * @param {integer} batch - batch number.
 * @param {dict} logs - computed loss and error estimated by loss functions.
 **/
const onBatchEnd = (batch, logs) => {
  console.log({ loss: logs.loss, mse: logs.mse, mae: logs.mae });
};

/**
 * Save model weight.
 * @param {tensor} model - trained model.
 **/
const saveModel = async (model) => {
  const savedModel = await model.save(`file://${configTrain.modelDir}`);
  console.log("Model weights saved.");
};

/**
 * train model.
 *@param {tensor} model - tfjs model to be trained.
 *@param {Array} X - model input.
 *@param {Array} y - target to prediction.
 **/
const train = async (model, X, y) => {
  // prepare the model for training
  model.compile({
    optimizer: tf.train.adam(),
    loss: "meanSquaredError",
    metrics: ["mse", "mae"],
  });

  // train model
  await model.fit(tf.tensor(X), tf.tensor(y), {
    epochs: configTrain.epoch,
    batchSize: configTrain.batchSize,
    callbacks: { onBatchEnd },
  });

  // save model
  saveModel(model);
};

/**
 * Load Model weight and predict output.
 * @param {Array} data - input data for model to predict.
 * @return {Array} - Predicted output.
 **/
const processModel = async (data) => {
  const model = await tf.loadLayersModel(
    `file://${configTrain.modelDir}/model.json`
  );

  return model.predict(tf.tensor(data));
};

const tfModel = {
  createModel,
  onBatchEnd,
  train,
  saveModel,
  processModel,
};

export default tfModel;
