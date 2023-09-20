function fetchTest(x) {
  var url = x;
  var response = UrlFetchApp.fetch(url);
  var html = response.getContentText();
  var $ = Cheerio.load(html);
  var tableData = [];
  const tableRows = $("table.dataTable tbody tr");
  tableRows.each(function (i, row) {
    const columns = $(row).find("td");
    const date = $(columns[0]).text().trim();
    const change = $(columns[1]).text().trim();
    const open = $(columns[2]).text().trim();
    const high = $(columns[3]).text().trim();
    const low = $(columns[4]).text().trim();
    const close = $(columns[5]).text().trim();
    const average = $(columns[6]).text().trim();
    const dcClose = $(columns[7]).text().trim();
    const volume = $(columns[8]).text().trim();
    tableData.push([
      date,
      change,
      open,
      high,
      low,
      close,
      average,
      dcClose,
      volume,
    ]);
  });
  tableData.shift();
  var day = parseDateTest(tableData[tableData.length - 1][0]);
  return tableData;
}
function parseDateTest(dateString) {
  const parts = dateString.split("/");
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1;
  const year = parseInt(parts[2], 10);
  return new Date(year, month, day);
}
function parseDate(dateString) {
  const parts = dateString.split("/");
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1;
  const year = parseInt(parts[2], 10);
  return new Date(year, month, day);
}
function mainTest() {
  var count = 0;
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("LOG");
  sheet.getRange("A7:I").clearContent();
  sheet.getRange("M3:N3").clearContent();
  var lastRow = sheet.getLastRow();
  var symbol = sheet.getRange("B3").getValue();
  const rawDateStart = sheet.getRange("E3").getValue();
  const dateStart = Utilities.formatDate(rawDateStart, "GMT+7", "dd/MM/yyyy");
  const rawDateEnd = sheet.getRange("H3").getValue();
  const dateEnd = Utilities.formatDate(rawDateEnd, "GMT+7", "dd/MM/yyyy");
  const startDate = parseDateTest(dateStart);
  const endDate = parseDateTest(dateEnd);
  const urlBase = `https://www.stockbiz.vn/Stocks/${symbol}/LookupQuote.aspx?Date=`;
  const urls = [];
  const data = [];
  let currentDate = endDate;
  if (startDate < endDate) {
    while (currentDate >= startDate) {
      const dateString = `${currentDate.getDate()}/${
        currentDate.getMonth() + 1
      }/${currentDate.getFullYear()}`;
      const url = urlBase + dateString;
      const result = fetchTest(url);
      for (var i = 0; i < result.length; i++) {
        if (
          parseDateTest(result[i][0]) >= startDate &&
          parseDateTest(result[i][0]) <= endDate
        ) {
          data.push(result[i]);
          count++;
        }
      }
      currentDate = parseDateTest(result[result.length - 1][0]);
      currentDate.setDate(currentDate.getDate() - 1);
    }
    if (count == 0) {
      sheet.getRange("M3").setValue("ERROR");
      sheet.getRange("N3").setValue("Không có dữ liệu");
    } else {
      var range = sheet.getRange(lastRow + 1, 1, count, 9);
      range.setValues(data);
      sheet.getRange("M3").setValue("Successfully");
      sheet.getRange("N3").setValue("Lấy dữ liệu thành công");
    }
  } else {
    sheet.getRange("M3").setValue("ERROR");
    sheet.getRange("N3").setValue("Ngày bắt đầu lớn hơn ngày kết thúc");
  }
}
//Lấy dữ liệu INDEX
function parseDate1(dateString) {
  let date = dateString;
  let dateParts = dateString.split("-");
  let formattedDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
  return formattedDate;
}

function getData(code, startDate, endDate, currentPage) {
  var url = `https://finfo-api.vndirect.com.vn/v4/vnmarket_prices?sort=date&q=code:${code}~date:gte:${startDate}~date:lte:${endDate}&size=15&page=${currentPage}`;
  var response = UrlFetchApp.fetch(url);
  var dataAll = JSON.parse(response.getContentText());
  return dataAll;
}
function setData() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("INDEX");
  sheet.getRange("A7:I").clearContent();
  sheet.getRange("M3:N3").clearContent();
  var lastRow = sheet.getLastRow();
  var code = sheet.getRange("B3").getValue();
  const rawDateStart = sheet.getRange("E3").getValue();
  const dateStart = Utilities.formatDate(rawDateStart, "GMT+7", "yyyy-MM-dd");
  const rawDateEnd = sheet.getRange("H3").getValue();
  const dateEnd = Utilities.formatDate(rawDateEnd, "GMT+7", "yyyy-MM-dd");
  const result = [];
  let data = [];
  let currentPage = 1;
  if (dateStart < dateEnd) {
    var dataAll = getData(code, dateStart, dateEnd, currentPage);
    const totalPages = dataAll.totalPages;
    while (currentPage <= totalPages) {
      dataAll = getData(code, dateStart, dateEnd, currentPage);
      data = data.concat(dataAll.data);
      currentPage++;
      // console.log(dataAll.totalPages);
      // console.log(currentPage);
    }

    var count = data.length;
    if (count > 0) {
      for (let i = 0; i < count; i++) {
        const obj = data[i];
        const arr = [
          parseDate1(obj.date),
          obj.close,
          obj.open,
          obj.high,
          obj.low,
          obj.nmVolume,
          `${obj.change > 0 ? "+" : ""}${obj.change.toFixed(2)} (${
            obj.pctChange > 0 ? "+" : ""
          }${obj.pctChange.toFixed(2)}%)`,
        ];
        result.push(arr);
      }
      var range = sheet.getRange(lastRow + 1, 1, count, 7);
      range.setValues(result);
      sheet.getRange("M3").setValue("Successfully");
      sheet.getRange("N3").setValue("Lấy dữ liệu thành công");
    } else {
      sheet.getRange("M3").setValue("ERROR");
      sheet.getRange("N3").setValue("Không có dữ liệu");
    }
  } else {
    sheet.getRange("M3").setValue("ERROR");
    sheet.getRange("N3").setValue("Ngày bắt đầu lớn hơn ngày kết thúc");
  }
}
