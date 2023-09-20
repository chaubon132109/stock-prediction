const testData = [
  {
    "date": "08/02/2022",
    "prediction": 1465.1864699816704,
    "real": 1491.78,
    "type": "close"
  },
  {
    "date": "09/02/2022",
    "prediction": 1479.4014054954052,
    "real": 1499.53,
    "type": "close"
  },
  {
    "date": "10/02/2022",
    "prediction": 1482.360298858881,
    "real": 1495.7,
    "type": "close"
  },
  {
    "date": "11/02/2022",
    "prediction": 1490.0899235665797,
    "real": 1499.06,
    "type": "close"
  },
  {
    "date": "14/02/2022",
    "prediction": 1497.8892423820496,
    "real": 1471.96,
    "type": "close"
  },
  {
    "date": "15/02/2022",
    "prediction": 1497.2110952210428,
    "real": 1470.06,
    "type": "close"
  },
  {
    "date": "16/02/2022",
    "prediction": 1494.876368713379,
    "real": 1486.68,
    "type": "close"
  },
  {
    "date": "17/02/2022",
    "prediction": 1489.8917521560193,
    "real": 1492.49,
    "type": "close"
  },
  {
    "date": "18/02/2022",
    "prediction": 1486.467657148838,
    "real": 1492.38,
    "type": "close"
  },
  {
    "date": "21/02/2022",
    "prediction": 1483.6304021906853,
    "real": 1500.97,
    "type": "close"
  },
  {
    "date": "22/02/2022",
    "prediction": 1488.9801427853108,
    "real": 1484.81,
    "type": "close"
  },
  {
    "date": "23/02/2022",
    "prediction": 1494.6560100400447,
    "real": 1507.37,
    "type": "close"
  },
  {
    "date": "24/02/2022",
    "prediction": 1496.9632765471936,
    "real": 1473.76,
    "type": "close"
  },
  {
    "date": "25/02/2022",
    "prediction": 1496.7470942997934,
    "real": 1498.89,
    "type": "close"
  },
  {
    "date": "28/02/2022",
    "prediction": 1496.4089082098008,
    "real": 1487.57,
    "type": "close"
  },
  {
    "date": "01/03/2022",
    "prediction": 1493.8138859558107,
    "real": 1491.48,
    "type": "close"
  },
  {
    "date": "02/03/2022",
    "prediction": 1495.0344986402988,
    "real": 1479.55,
    "type": "close"
  },
  {
    "date": "03/03/2022",
    "prediction": 1490.3403003013134,
    "real": 1487.69,
    "type": "close"
  },
  {
    "date": "04/03/2022",
    "prediction": 1493.3804773545266,
    "real": 1501.39,
    "type": "close"
  },
  {
    "date": "07/03/2022",
    "prediction": 1491.1082928252222,
    "real": 1493.87,
    "type": "close"
  },
  {
    "date": "08/03/2022",
    "prediction": 1492.3470729625226,
    "real": 1473.71,
    "type": "close"
  },
  {
    "date": "09/03/2022",
    "prediction": 1491.8877183151244,
    "real": 1462.8,
    "type": "close"
  },
  {
    "date": "10/03/2022",
    "prediction": 1492.0608833754063,
    "real": 1476.76,
    "type": "close"
  },
  {
    "date": "11/03/2022",
    "prediction": 1488.7090927422046,
    "real": 1458.88,
    "type": "close"
  },
  {
    "date": "14/03/2022",
    "prediction": 1480.488424755335,
    "real": 1439.19,
    "type": "close"
  },
  {
    "date": "15/03/2022",
    "prediction": 1471.8597199547291,
    "real": 1437.27,
    "type": "close"
  },
  {
    "date": "16/03/2022",
    "prediction": 1465.7843253540993,
    "real": 1453.91,
    "type": "close"
  },
  {
    "date": "17/03/2022",
    "prediction": 1461.4359350824357,
    "real": 1459.14,
    "type": "close"
  },
  {
    "date": "18/03/2022",
    "prediction": 1454.404452174902,
    "real": 1465.57,
    "type": "close"
  },
  {
    "date": "21/03/2022",
    "prediction": 1453.730220413208,
    "real": 1474.38,
    "type": "close"
  },
  {
    "date": "22/03/2022",
    "prediction": 1460.0565138018133,
    "real": 1498.48,
    "type": "close"
  },
  {
    "date": "23/03/2022",
    "prediction": 1469.7582468354703,
    "real": 1501.67,
    "type": "close"
  },
  {
    "date": "24/03/2022",
    "prediction": 1478.2281430399419,
    "real": 1495.18,
    "type": "close"
  },
  {
    "date": "25/03/2022",
    "prediction": 1487.0874909627437,
    "real": 1494.55,
    "type": "close"
  },
  {
    "date": "28/03/2022",
    "prediction": 1494.8205090165138,
    "real": 1473.8,
    "type": "close"
  },
  {
    "date": "29/03/2022",
    "prediction": 1498.733245857954,
    "real": 1485.22,
    "type": "close"
  },
  {
    "date": "30/03/2022",
    "prediction": 1495.5686635172367,
    "real": 1483.9,
    "type": "close"
  },
  {
    "date": "31/03/2022",
    "prediction": 1491.0523809230328,
    "real": 1488.27,
    "type": "close"
  },
  {
    "date": "01/04/2022",
    "prediction": 1488.3107139134408,
    "real": 1484.13,
    "type": "close"
  },
  {
    "date": "04/04/2022",
    "prediction": 1486.0758039855957,
    "real": 1522.82,
    "type": "close"
  },
  {
    "date": "05/04/2022",
    "prediction": 1491.3604445409774,
    "real": 1519.28,
    "type": "close"
  },
  {
    "date": "06/04/2022",
    "prediction": 1496.5516897714137,
    "real": 1507.62,
    "type": "close"
  },
  {
    "date": "07/04/2022",
    "prediction": 1503.384374804497,
    "real": 1502.35,
    "type": "close"
  },
  {
    "date": "08/04/2022",
    "prediction": 1508.9783841109277,
    "real": 1482,
    "type": "close"
  },
  {
    "date": "12/04/2022",
    "prediction": 1513.0786946821213,
    "real": 1455.25,
    "type": "close"
  },
  {
    "date": "13/04/2022",
    "prediction": 1503.7575906670095,
    "real": 1448.52,
    "type": "close"
  },
  {
    "date": "14/04/2022",
    "prediction": 1491.141129974127,
    "real": 1471.75,
    "type": "close"
  },
  {
    "date": "15/04/2022",
    "prediction": 1479.7661640954018,
    "real": 1456.39,
    "type": "close"
  },
  {
    "date": "18/04/2022",
    "prediction": 1469.0629763281345,
    "real": 1425.07,
    "type": "close"
  },
  {
    "date": "19/04/2022",
    "prediction": 1461.3426963734628,
    "real": 1406.45,
    "type": "close"
  },
  {
    "date": "20/04/2022",
    "prediction": 1456.3115648722649,
    "real": 1384.72,
    "type": "close"
  },
  {
    "date": "21/04/2022",
    "prediction": 1447.3769890773297,
    "real": 1356.58,
    "type": "close"
  },
  {
    "date": "22/04/2022",
    "prediction": 1426.3199193668365,
    "real": 1352.43,
    "type": "close"
  },
  {
    "date": "25/04/2022",
    "prediction": 1404.0694881510735,
    "real": 1298.38,
    "type": "close"
  },
  {
    "date": "26/04/2022",
    "prediction": 1382.901899769306,
    "real": 1261.4,
    "type": "close"
  },
  {
    "date": "27/04/2022",
    "prediction": 1357.7773566365242,
    "real": 1314.81,
    "type": "close"
  },
  {
    "date": "28/04/2022",
    "prediction": 1334.6045617532732,
    "real": 1344.1,
    "type": "close"
  },
  {
    "date": "29/04/2022",
    "prediction": 1320.9782934749128,
    "real": 1343.24,
    "type": "close"
  },
  {
    "date": "04/05/2022",
    "prediction": 1313.418910329342,
    "real": 1348.68,
    "type": "close"
  },
  {
    "date": "05/05/2022",
    "prediction": 1324.8723930156232,
    "real": 1331.41,
    "type": "close"
  },
  {
    "date": "06/05/2022",
    "prediction": 1346.5261173760891,
    "real": 1328.13,
    "type": "close"
  },
  {
    "date": "09/05/2022",
    "prediction": 1352.4128419351578,
    "real": 1265.54,
    "type": "close"
  },
  {
    "date": "10/05/2022",
    "prediction": 1344.7809977996349,
    "real": 1232.57,
    "type": "close"
  },
  {
    "date": "11/05/2022",
    "prediction": 1328.5956245303155,
    "real": 1277.91,
    "type": "close"
  },
  {
    "date": "12/05/2022",
    "prediction": 1306.398494950533,
    "real": 1238.05,
    "type": "close"
  },
  {
    "date": "13/05/2022",
    "prediction": 1285.2445321583748,
    "real": 1180.6,
    "type": "close"
  },
  {
    "date": "16/05/2022",
    "prediction": 1259.1167593109608,
    "real": 1170.59,
    "type": "close"
  },
  {
    "date": "17/05/2022",
    "prediction": 1242.9072671818735,
    "real": 1156.54,
    "type": "close"
  },
  {
    "date": "18/05/2022",
    "prediction": 1228.137128045559,
    "real": 1222.92,
    "type": "close"
  },
  {
    "date": "19/05/2022",
    "prediction": 1201.1251536226273,
    "real": 1210.43,
    "type": "close"
  },
  {
    "date": "20/05/2022",
    "prediction": 1188.9679953718187,
    "real": 1232.33,
    "type": "close"
  },
  {
    "date": "23/05/2022",
    "prediction": 1197.7279443573952,
    "real": 1207.99,
    "type": "close"
  },
  {
    "date": "24/05/2022",
    "prediction": 1211.1440340006352,
    "real": 1203.28,
    "type": "close"
  },
  {
    "date": "25/05/2022",
    "prediction": 1227.0514139187335,
    "real": 1234.17,
    "type": "close"
  },
  {
    "date": "26/05/2022",
    "prediction": 1225.2795130109787,
    "real": 1261.55,
    "type": "close"
  },
  {
    "date": "27/05/2022",
    "prediction": 1230.5565837943554,
    "real": 1269.29,
    "type": "close"
  },
  {
    "date": "30/05/2022",
    "prediction": 1234.9350965380668,
    "real": 1281.27,
    "type": "close"
  },
  {
    "date": "31/05/2022",
    "prediction": 1250.8213332998753,
    "real": 1280.44,
    "type": "close"
  },
  {
    "date": "01/06/2022",
    "prediction": 1270.6020872449876,
    "real": 1286.01,
    "type": "close"
  },
  {
    "date": "02/06/2022",
    "prediction": 1283.3265085482599,
    "real": 1283.32,
    "type": "close"
  },
  {
    "date": "03/06/2022",
    "prediction": 1289.2310873281956,
    "real": 1276.37,
    "type": "close"
  },
  {
    "date": "06/06/2022",
    "prediction": 1292.6574271643162,
    "real": 1281.95,
    "type": "close"
  },
  {
    "date": "07/06/2022",
    "prediction": 1292.5881506991386,
    "real": 1260.92,
    "type": "close"
  },
  {
    "date": "08/06/2022",
    "prediction": 1291.1529219269753,
    "real": 1294.27,
    "type": "close"
  },
  {
    "date": "09/06/2022",
    "prediction": 1288.8000279664993,
    "real": 1300.85,
    "type": "close"
  },
  {
    "date": "10/06/2022",
    "prediction": 1289.3502720832826,
    "real": 1284.08,
    "type": "close"
  },
  {
    "date": "13/06/2022",
    "prediction": 1292.8501170158388,
    "real": 1226.01,
    "type": "close"
  },
  {
    "date": "14/06/2022",
    "prediction": 1290.883020401001,
    "real": 1211.13,
    "type": "close"
  },
  {
    "date": "15/06/2022",
    "prediction": 1287.3933033013345,
    "real": 1195.19,
    "type": "close"
  },
  {
    "date": "16/06/2022",
    "prediction": 1267.3706298840048,
    "real": 1223,
    "type": "close"
  },
  {
    "date": "17/06/2022",
    "prediction": 1242.6016050088406,
    "real": 1191.92,
    "type": "close"
  },
  {
    "date": "20/06/2022",
    "prediction": 1220.879752700329,
    "real": 1180.4,
    "type": "close"
  },
  {
    "date": "21/06/2022",
    "prediction": 1213.0096434652805,
    "real": 1162.94,
    "type": "close"
  },
  {
    "date": "22/06/2022",
    "prediction": 1205.6864372062682,
    "real": 1162.98,
    "type": "close"
  },
  {
    "date": "23/06/2022",
    "prediction": 1199.1655223691464,
    "real": 1162.06,
    "type": "close"
  },
  {
    "date": "24/06/2022",
    "prediction": 1183.0011878454684,
    "real": 1185.48,
    "type": "close"
  },
  {
    "date": "27/06/2022",
    "prediction": 1176.444146924019,
    "real": 1187.38,
    "type": "close"
  },
  {
    "date": "28/06/2022",
    "prediction": 1175.3568666374683,
    "real": 1198.99,
    "type": "close"
  },
  {
    "date": "29/06/2022",
    "prediction": 1181.9044061899185,
    "real": 1207.38,
    "type": "close"
  },
  {
    "date": "30/06/2022",
    "prediction": 1191.1685541963577,
    "real": 1197.6,
    "type": "close"
  },
  {
    "date": "01/07/2022",
    "prediction": 1201.7169009721279,
    "real": 1170.95,
    "type": "close"
  },
  {
    "date": "04/07/2022",
    "prediction": 1203.9522285425664,
    "real": 1192.63,
    "type": "close"
  },
  {
    "date": "05/07/2022",
    "prediction": 1204.3441339111328,
    "real": 1181.29,
    "type": "close"
  },
  {
    "date": "06/07/2022",
    "prediction": 1200.3353392732142,
    "real": 1147.63,
    "type": "close"
  },
  {
    "date": "07/07/2022",
    "prediction": 1191.0789176547528,
    "real": 1142.8,
    "type": "close"
  },
  {
    "date": "08/07/2022",
    "prediction": 1181.0216663634778,
    "real": 1164.23,
    "type": "close"
  },
  {
    "date": "11/07/2022",
    "prediction": 1176.583587344885,
    "real": 1144.55,
    "type": "close"
  },
  {
    "date": "12/07/2022",
    "prediction": 1164.9630998265743,
    "real": 1153.55,
    "type": "close"
  },
  {
    "date": "13/07/2022",
    "prediction": 1156.71147408247,
    "real": 1170.92,
    "type": "close"
  },
  {
    "date": "14/07/2022",
    "prediction": 1159.350818656683,
    "real": 1170.04,
    "type": "close"
  },
  {
    "date": "15/07/2022",
    "prediction": 1164.8511194062235,
    "real": 1178.12,
    "type": "close"
  },
  {
    "date": "18/07/2022",
    "prediction": 1166.468388143778,
    "real": 1174.7,
    "type": "close"
  },
  {
    "date": "19/07/2022",
    "prediction": 1174.727479249239,
    "real": 1168.99,
    "type": "close"
  },
  {
    "date": "20/07/2022",
    "prediction": 1180.3166856658459,
    "real": 1185.82,
    "type": "close"
  },
  {
    "date": "21/07/2022",
    "prediction": 1181.772013487816,
    "real": 1194.89,
    "type": "close"
  },
  {
    "date": "22/07/2022",
    "prediction": 1185.1498023724557,
    "real": 1194.76,
    "type": "close"
  },
  {
    "date": "25/07/2022",
    "prediction": 1188.1404887783528,
    "real": 1184.32,
    "type": "close"
  },
  {
    "date": "26/07/2022",
    "prediction": 1192.6406399273874,
    "real": 1184.44,
    "type": "close"
  },
  {
    "date": "27/07/2022",
    "prediction": 1198.1245482051372,
    "real": 1178.58,
    "type": "close"
  },
  {
    "date": "28/07/2022",
    "prediction": 1197.7143187677862,
    "real": 1198.68,
    "type": "close"
  },
  {
    "date": "29/07/2022",
    "prediction": 1195.2792014217378,
    "real": 1206.33,
    "type": "close"
  },
  {
    "date": "01/08/2022",
    "prediction": 1194.8626029348375,
    "real": 1206.46,
    "type": "close"
  },
  {
    "date": "02/08/2022",
    "prediction": 1199.3676091790198,
    "real": 1224.11,
    "type": "close"
  },
  {
    "date": "03/08/2022",
    "prediction": 1206.4593892359735,
    "real": 1232.41,
    "type": "close"
  },
  {
    "date": "04/08/2022",
    "prediction": 1217.73641792655,
    "real": 1247.38,
    "type": "close"
  },
  {
    "date": "05/08/2022",
    "prediction": 1226.5736829972268,
    "real": 1245.05,
    "type": "close"
  },
  {
    "date": "08/08/2022",
    "prediction": 1235.7772206223012,
    "real": 1252.04,
    "type": "close"
  },
  {
    "date": "09/08/2022",
    "prediction": 1246.650180103779,
    "real": 1252.84,
    "type": "close"
  },
  {
    "date": "10/08/2022",
    "prediction": 1253.7225397801399,
    "real": 1253.89,
    "type": "close"
  },
  {
    "date": "11/08/2022",
    "prediction": 1259.080581021309,
    "real": 1245.85,
    "type": "close"
  },
  {
    "date": "12/08/2022",
    "prediction": 1260.145360813141,
    "real": 1248.65,
    "type": "close"
  },
  {
    "date": "15/08/2022",
    "prediction": 1261.4291419398785,
    "real": 1267.14,
    "type": "close"
  },
  {
    "date": "16/08/2022",
    "prediction": 1261.8148870801926,
    "real": 1271.11,
    "type": "close"
  },
  {
    "date": "17/08/2022",
    "prediction": 1263.8629019474984,
    "real": 1271.97,
    "type": "close"
  },
  {
    "date": "18/08/2022",
    "prediction": 1267.5052152097226,
    "real": 1268.64,
    "type": "close"
  },
  {
    "date": "19/08/2022",
    "prediction": 1274.1854084908964,
    "real": 1263.45,
    "type": "close"
  },
  {
    "date": "22/08/2022",
    "prediction": 1279.6388810646536,
    "real": 1255.83,
    "type": "close"
  },
  {
    "date": "23/08/2022",
    "prediction": 1278.7908055734633,
    "real": 1253.45,
    "type": "close"
  },
  {
    "date": "24/08/2022",
    "prediction": 1275.4819799220563,
    "real": 1272.33,
    "type": "close"
  },
  {
    "date": "25/08/2022",
    "prediction": 1272.3066954898836,
    "real": 1279.45,
    "type": "close"
  },
  {
    "date": "26/08/2022",
    "prediction": 1271.8132507658006,
    "real": 1280.05,
    "type": "close"
  },
  {
    "date": "29/08/2022",
    "prediction": 1274.729805611372,
    "real": 1249.17,
    "type": "close"
  },
  {
    "date": "30/08/2022",
    "prediction": 1278.8147156119348,
    "real": 1271.01,
    "type": "close"
  },
  {
    "date": "31/08/2022",
    "prediction": 1282.620327128172,
    "real": 1274.99,
    "type": "close"
  },
  {
    "date": "05/09/2022",
    "prediction": 1281.2930589663983,
    "real": 1275.35,
    "type": "close"
  },
  {
    "date": "06/09/2022",
    "prediction": 1278.8340315818787,
    "real": 1277.4,
    "type": "close"
  },
  {
    "date": "07/09/2022",
    "prediction": 1277.4795122408868,
    "real": 1243.17,
    "type": "close"
  },
  {
    "date": "08/09/2022",
    "prediction": 1282.5324133622648,
    "real": 1234.6,
    "type": "close"
  },
  {
    "date": "09/09/2022",
    "prediction": 1278.0323666238785,
    "real": 1228.54,
    "type": "close"
  },
  {
    "date": "12/09/2022",
    "prediction": 1268.7828883135319,
    "real": 1248.97,
    "type": "close"
  },
  {
    "date": "13/09/2022",
    "prediction": 1258.3865634417534,
    "real": 1243.87,
    "type": "close"
  },
  {
    "date": "14/09/2022",
    "prediction": 1248.1027410435677,
    "real": 1228.51,
    "type": "close"
  },
  {
    "date": "15/09/2022",
    "prediction": 1246.9792302620413,
    "real": 1243.45,
    "type": "close"
  },
  {
    "date": "16/09/2022",
    "prediction": 1248.2798215031626,
    "real": 1230.37,
    "type": "close"
  },
  {
    "date": "19/09/2022",
    "prediction": 1250.3831740140915,
    "real": 1202.07,
    "type": "close"
  },
  {
    "date": "20/09/2022",
    "prediction": 1244.1104954934121,
    "real": 1199.71,
    "type": "close"
  },
  {
    "date": "21/09/2022",
    "prediction": 1236.048844923973,
    "real": 1204.68,
    "type": "close"
  },
  {
    "date": "22/09/2022",
    "prediction": 1229.796213247776,
    "real": 1196.64,
    "type": "close"
  },
  {
    "date": "23/09/2022",
    "prediction": 1217.982722645998,
    "real": 1201.45,
    "type": "close"
  },
  {
    "date": "26/09/2022",
    "prediction": 1209.6475161778926,
    "real": 1159.12,
    "type": "close"
  },
  {
    "date": "27/09/2022",
    "prediction": 1206.1846326148511,
    "real": 1166.44,
    "type": "close"
  },
  {
    "date": "28/09/2022",
    "prediction": 1200.0263359594346,
    "real": 1142.79,
    "type": "close"
  },
  {
    "date": "29/09/2022",
    "prediction": 1188.4597243356707,
    "real": 1126.07,
    "type": "close"
  },
  {
    "date": "30/09/2022",
    "prediction": 1174.6407662057877,
    "real": 1099.44,
    "type": "close"
  },
  {
    "date": "03/10/2022",
    "prediction": 1154.4287440776825,
    "real": 1079.86,
    "type": "close"
  },
  {
    "date": "04/10/2022",
    "prediction": 1140.036414872408,
    "real": 1069.74,
    "type": "close"
  },
  {
    "date": "05/10/2022",
    "prediction": 1118.33325206995,
    "real": 1092.08,
    "type": "close"
  },
  {
    "date": "06/10/2022",
    "prediction": 1101.3898052883148,
    "real": 1072.57,
    "type": "close"
  },
  {
    "date": "07/10/2022",
    "prediction": 1088.2804741299153,
    "real": 1022.38,
    "type": "close"
  },
  {
    "date": "10/10/2022",
    "prediction": 1078.5305555820464,
    "real": 1012.94,
    "type": "close"
  },
  {
    "date": "11/10/2022",
    "prediction": 1068.3332113033534,
    "real": 998.64,
    "type": "close"
  },
  {
    "date": "12/10/2022",
    "prediction": 1054.6252677953244,
    "real": 1002.89,
    "type": "close"
  },
  {
    "date": "13/10/2022",
    "prediction": 1030.9355618947745,
    "real": 1025.04,
    "type": "close"
  },
  {
    "date": "14/10/2022",
    "prediction": 1013.1342772263289,
    "real": 1055.29,
    "type": "close"
  },
  {
    "date": "17/10/2022",
    "prediction": 1013.258369281888,
    "real": 1033.59,
    "type": "close"
  },
  {
    "date": "18/10/2022",
    "prediction": 1019.107427699566,
    "real": 1057.71,
    "type": "close"
  },
  {
    "date": "19/10/2022",
    "prediction": 1031.7926167017222,
    "real": 1052.29,
    "type": "close"
  },
  {
    "date": "20/10/2022",
    "prediction": 1044.7779341125488,
    "real": 1048.21,
    "type": "close"
  },
  {
    "date": "21/10/2022",
    "prediction": 1051.812288312912,
    "real": 1013.69,
    "type": "close"
  },
  {
    "date": "24/10/2022",
    "prediction": 1048.0410801053047,
    "real": 977.41,
    "type": "close"
  },
  {
    "date": "25/10/2022",
    "prediction": 1044.1401677697897,
    "real": 962.45,
    "type": "close"
  },
  {
    "date": "26/10/2022",
    "prediction": 1026.3490370368959,
    "real": 984.71,
    "type": "close"
  },
  {
    "date": "27/10/2022",
    "prediction": 1006.2098935413361,
    "real": 990.48,
    "type": "close"
  },
  {
    "date": "28/10/2022",
    "prediction": 987.073536015153,
    "real": 1026.53,
    "type": "close"
  },
  {
    "date": "31/10/2022",
    "prediction": 981.5466888582707,
    "real": 1005,
    "type": "close"
  },
  {
    "date": "01/11/2022",
    "prediction": 989.1819524425268,
    "real": 1027.39,
    "type": "close"
  },
  {
    "date": "02/11/2022",
    "prediction": 1003.5482833963633,
    "real": 1018.64,
    "type": "close"
  },
  {
    "date": "03/11/2022",
    "prediction": 1013.0256640493869,
    "real": 1010.65,
    "type": "close"
  },
  {
    "date": "04/11/2022",
    "prediction": 1020.4690469646455,
    "real": 974.61,
    "type": "close"
  },
  {
    "date": "07/11/2022",
    "prediction": 1014.7718016296626,
    "real": 969.61,
    "type": "close"
  },
  {
    "date": "08/11/2022",
    "prediction": 1010.5382369685174,
    "real": 956.97,
    "type": "close"
  },
  {
    "date": "09/11/2022",
    "prediction": 995.7221832495928,
    "real": 977.93,
    "type": "close"
  },
  {
    "date": "10/11/2022",
    "prediction": 981.8455382364989,
    "real": 935.78,
    "type": "close"
  },
  {
    "date": "11/11/2022",
    "prediction": 968.0171309429408,
    "real": 949.49,
    "type": "close"
  },
  {
    "date": "14/11/2022",
    "prediction": 962.3138558930159,
    "real": 923.53,
    "type": "close"
  },
  {
    "date": "15/11/2022",
    "prediction": 955.1475266331435,
    "real": 900.17,
    "type": "close"
  },
  {
    "date": "16/11/2022",
    "prediction": 947.0013556438685,
    "real": 873.78,
    "type": "close"
  },
  {
    "date": "17/11/2022",
    "prediction": 927.7815740096569,
    "real": 945.09,
    "type": "close"
  },
  {
    "date": "18/11/2022",
    "prediction": 919.8055401718616,
    "real": 939.73,
    "type": "close"
  },
  {
    "date": "21/11/2022",
    "prediction": 911.1680909794569,
    "real": 956.77,
    "type": "close"
  },
  {
    "date": "22/11/2022",
    "prediction": 914.3565833586455,
    "real": 948.52,
    "type": "close"
  },
  {
    "date": "23/11/2022",
    "prediction": 927.2042353296281,
    "real": 942.02,
    "type": "close"
  },
  {
    "date": "24/11/2022",
    "prediction": 947.4733439797163,
    "real": 934.31,
    "type": "close"
  },
  {
    "date": "25/11/2022",
    "prediction": 947.1649410271646,
    "real": 955.53,
    "type": "close"
  },
  {
    "date": "28/11/2022",
    "prediction": 948.3136147749424,
    "real": 979.48,
    "type": "close"
  },
  {
    "date": "29/11/2022",
    "prediction": 947.4603709566593,
    "real": 998.56,
    "type": "close"
  },
  {
    "date": "30/11/2022",
    "prediction": 953.5991689234972,
    "real": 1021.54,
    "type": "close"
  },
  {
    "date": "01/12/2022",
    "prediction": 967.4635195827484,
    "real": 1035.62,
    "type": "close"
  },
  {
    "date": "02/12/2022",
    "prediction": 989.049194303155,
    "real": 1030.81,
    "type": "close"
  },
  {
    "date": "05/12/2022",
    "prediction": 1008.3440732961893,
    "real": 1082.59,
    "type": "close"
  },
  {
    "date": "06/12/2022",
    "prediction": 1026.2197244489194,
    "real": 1048.69,
    "type": "close"
  },
  {
    "date": "07/12/2022",
    "prediction": 1041.4856836515664,
    "real": 1034.92,
    "type": "close"
  },
  {
    "date": "08/12/2022",
    "prediction": 1049.9460262817145,
    "real": 1045.98,
    "type": "close"
  },
  {
    "date": "09/12/2022",
    "prediction": 1053.4245975446702,
    "real": 1041.39,
    "type": "close"
  },
  {
    "date": "12/12/2022",
    "prediction": 1056.7108182907104,
    "real": 1032.07,
    "type": "close"
  },
  {
    "date": "13/12/2022",
    "prediction": 1044.606256904006,
    "real": 1026.3,
    "type": "close"
  },
  {
    "date": "14/12/2022",
    "prediction": 1040.7979046082496,
    "real": 1046.43,
    "type": "close"
  },
  {
    "date": "15/12/2022",
    "prediction": 1040.8697652369738,
    "real": 1049.06,
    "type": "close"
  },
  {
    "date": "16/12/2022",
    "prediction": 1039.090947123766,
    "real": 1047.16,
    "type": "close"
  },
  {
    "date": "19/12/2022",
    "prediction": 1039.9792729198932,
    "real": 1038.4,
    "type": "close"
  },
  {
    "date": "20/12/2022",
    "prediction": 1043.6582082170248,
    "real": 1010.08,
    "type": "close"
  },
  {
    "date": "21/12/2022",
    "prediction": 1046.1510646516085,
    "real": 1005.43,
    "type": "close"
  },
  {
    "date": "22/12/2022",
    "prediction": 1039.3240961015224,
    "real": 1016.54,
    "type": "close"
  },
  {
    "date": "23/12/2022",
    "prediction": 1029.64006067276,
    "real": 1013.2,
    "type": "close"
  },
  {
    "date": "26/12/2022",
    "prediction": 1019.8134525036812,
    "real": 985.21,
    "type": "close"
  },
  {
    "date": "27/12/2022",
    "prediction": 1010.7718818968535,
    "real": 983.67,
    "type": "close"
  },
  {
    "date": "28/12/2022",
    "prediction": 1007.1207720375062,
    "real": 998.97,
    "type": "close"
  },
  {
    "date": "29/12/2022",
    "prediction": 1003.4887171214818,
    "real": 1009.29,
    "type": "close"
  },
  {
    "date": "30/12/2022",
    "prediction": 997.6642996168137,
    "real": 1007.09,
    "type": "close"
  },
  {
    "date": "03/01/2023",
    "prediction": 994.5817318403722,
    "real": 1011.38,
    "type": "close"
  },
  {
    "date": "04/01/2023",
    "prediction": 1000.7464497506619,
    "real": 1041.56,
    "type": "close"
  },
  {
    "date": "05/01/2023",
    "prediction": 1010.1268068087102,
    "real": 1046.64,
    "type": "close"
  },
  {
    "date": "06/01/2023",
    "prediction": 1018.6730010944605,
    "real": 1047.26,
    "type": "close"
  },
  {
    "date": "09/01/2023",
    "prediction": 1027.3008967125415,
    "real": 1050.95,
    "type": "close"
  },
  {
    "date": "10/01/2023",
    "prediction": 1038.4495264083148,
    "real": 1045.75,
    "type": "close"
  },
  {
    "date": "11/01/2023",
    "prediction": 1048.702103919983,
    "real": 1054.53,
    "type": "close"
  },
  {
    "date": "12/01/2023",
    "prediction": 1050.9496736389399,
    "real": 1050.27,
    "type": "close"
  },
  {
    "date": "13/01/2023",
    "prediction": 1052.0445236974956,
    "real": 1055.23,
    "type": "close"
  },
  {
    "date": "16/01/2023",
    "prediction": 1053.3848953956367,
    "real": 1057.87,
    "type": "close"
  },
  {
    "date": "17/01/2023",
    "prediction": 1054.3514769726992,
    "real": 1067.6,
    "type": "close"
  },
  {
    "date": "18/01/2023",
    "prediction": 1057.9380871540309,
    "real": 1089.56,
    "type": "close"
  },
  {
    "date": "19/01/2023",
    "prediction": 1061.914462285638,
    "real": 1094.46,
    "type": "close"
  },
  {
    "date": "27/01/2023",
    "prediction": 1070.343220694661,
    "real": 1111.41,
    "type": "close"
  },
  {
    "date": "30/01/2023",
    "prediction": 1081.0998145085573,
    "real": 1102.57,
    "type": "close"
  },
  {
    "date": "31/01/2023",
    "prediction": 1093.3226209545137,
    "real": 1088.25,
    "type": "close"
  },
  {
    "date": "01/02/2023",
    "prediction": 1102.4643996810914,
    "real": 1075.97,
    "type": "close"
  },
  {
    "date": "02/02/2023",
    "prediction": 1103.2109880220892,
    "real": 1070.81,
    "type": "close"
  },
  {
    "date": "03/02/2023",
    "prediction": 1099.6671862065791,
    "real": 1070.46,
    "type": "close"
  },
  {
    "date": "06/02/2023",
    "prediction": 1089.3478119826318,
    "real": 1067.24,
    "type": "close"
  },
  {
    "date": "07/02/2023",
    "prediction": 1080.362414304614,
    "real": 1065.18,
    "type": "close"
  },
  {
    "date": "08/02/2023",
    "prediction": 1074.708890928626,
    "real": 1063.5,
    "type": "close"
  },
  {
    "date": "09/02/2023",
    "prediction": 1071.9300015228987,
    "real": 1064.03,
    "type": "close"
  },
  {
    "date": "10/02/2023",
    "prediction": 1070.2002042090894,
    "real": 1054.08,
    "type": "close"
  },
  {
    "date": "13/02/2023",
    "prediction": 1067.6990210253,
    "real": 1031.7,
    "type": "close"
  },
  {
    "date": "14/02/2023",
    "prediction": 1063.5601829248667,
    "real": 1032.76,
    "type": "close"
  },
  {
    "date": "15/02/2023",
    "prediction": 1057.2609579968453,
    "real": 1034.39,
    "type": "close"
  },
  {
    "date": "16/02/2023",
    "prediction": 1049.57829197824,
    "real": 1047.45,
    "type": "close"
  },
  {
    "date": "17/02/2023",
    "prediction": 1042.0040825206042,
    "real": 1053.26,
    "type": "close"
  },
  {
    "date": "20/02/2023",
    "prediction": 1038.9626264369488,
    "real": 1059.56,
    "type": "close"
  },
  {
    "date": "21/02/2023",
    "prediction": 1044.2273506611587,
    "real": 1081.8,
    "type": "close"
  },
  {
    "date": "22/02/2023",
    "prediction": 1052.3149472767116,
    "real": 1054.28,
    "type": "close"
  },
  {
    "date": "23/02/2023",
    "prediction": 1060.8086230063439,
    "real": 1030.58,
    "type": "close"
  },
  {
    "date": "24/02/2023",
    "prediction": 1063.3258593273163,
    "real": 1034.66,
    "type": "close"
  },
  {
    "date": "27/02/2023",
    "prediction": 1061.1036352932454,
    "real": 1017.55,
    "type": "close"
  },
  {
    "date": "28/02/2023",
    "prediction": 1053.4784473365546,
    "real": 1018.72,
    "type": "close"
  },
  {
    "date": "01/03/2023",
    "prediction": 1037.4379699444771,
    "real": 1013.37,
    "type": "close"
  },
  {
    "date": "02/03/2023",
    "prediction": 1027.6802467006446,
    "real": 1033.07,
    "type": "close"
  },
  {
    "date": "03/03/2023",
    "prediction": 1024.8649962866307,
    "real": 1022.78,
    "type": "close"
  },
  {
    "date": "06/03/2023",
    "prediction": 1021.6201221573353,
    "real": 1026.73,
    "type": "close"
  },
  {
    "date": "07/03/2023",
    "prediction": 1023.7516394406557,
    "real": 1033.32,
    "type": "close"
  },
  {
    "date": "08/03/2023",
    "prediction": 1026.371145991683,
    "real": 1027.8,
    "type": "close"
  },
  {
    "date": "09/03/2023",
    "prediction": 1030.6537836575508,
    "real": 1049.45,
    "type": "close"
  },
  {
    "date": "10/03/2023",
    "prediction": 1031.0601499009133,
    "real": 1046.31,
    "type": "close"
  },
  {
    "date": "13/03/2023",
    "prediction": 1035.9915953356028,
    "real": 1045.46,
    "type": "close"
  },
  {
    "date": "14/03/2023",
    "prediction": 1040.897668982744,
    "real": 1034.72,
    "type": "close"
  },
  {
    "date": "15/03/2023",
    "prediction": 1043.7235170775652,
    "real": 1043.82,
    "type": "close"
  },
  {
    "date": "16/03/2023",
    "prediction": 1047.5995013707877,
    "real": 1043.65,
    "type": "close"
  },
  {
    "date": "17/03/2023",
    "prediction": 1045.3934087818861,
    "real": 1043.54,
    "type": "close"
  }
]; export default testData;