import fs from "fs";

const csvToArray = (csvString) => {
  const rows = csvString.trim().split("\n");
  const header = rows
    .shift()
    .split(",")
    .map((item) => item.trim());

  return rows.map((row) => {
    const values = row.split(",").map((item) => item.trim());
    return header.reduce((object, key, index) => {
      object[key] = values[index];
      return object;
    }, {});
  });
};

const initData = () => {
  // read from csv
  const csv = fs.readFileSync("./data/data.csv", "utf-8");

  const arr = csvToArray(csv)
    .map((e) => ({
      ...e,
      open: Number(e.open),
      low: Number(e.low),
      high: Number(e.high),
      close: Number(e.close),
      volume: Number(e.volume),
    }))
    .sort((e) => e.date)
    .reverse();

  fs.writeFileSync(
    "data/data.js",
    `const data = ${JSON.stringify(arr, null, 2)}; export default data;`
  );
};

export default initData;
