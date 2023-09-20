import initData from "./services/initData.js";
import tfTrain from "./services/tfTrain.js";
import tfValidate from "./services/tfValidate.js";
import testData from "./data/testData.js";
import config from './config.js';
import tfModel from './services/tfModel.js';
import preProcess from './services/preProcess.js';

// Read data from a data-source.
// initData();

// train
// use 80% source to train
// create model.json in models folder
tfTrain.train();

// // test
// // valid with 20% source
// tfValidate.valid();

// prediction 5 days

tfValidate.valid().then(() => {
  const data =testData;
  const lastData = data[data.length - 1];
  const lastDate = lastData.date;
  const nextDate = getNextDate(lastDate);

  // Lấy dữ liệu đầu vào cho việc dự đoán 5 ngày tiếp theo
  const input = testData.map(data => data.prediction);
  const inputSlice = input.slice(input.length - config.timeSteps);

  // Dự đoán 5 ngày tiếp theo
  const predictedNextDays = [];
  for (let i = 0; i < 5; i++) {
    const x = inputSlice.slice(i, i + config.timeSteps);
    const prediction = tfModel.processModel([x]);
    const predictedValue = preProcess.inverseTransform(prediction)[0];
    const nextDay = getNextDate(nextDate, i + 1);
    predictedNextDays.push({ date: nextDay, prediction: predictedValue });
  }

  console.log('Predicted 5 days:', predictedNextDays);
});

function getNextDate(dateString, daysToAdd = 1) {
    const parts = dateString.split('/');
    const formattedDate = `${parts[1]}/${parts[0]}/${parts[2]}`;
    const date = new Date(formattedDate);
    date.setDate(date.getDate() + daysToAdd);
    const nextDate = date.toISOString().split('T')[0];
    return nextDate;
  }
  