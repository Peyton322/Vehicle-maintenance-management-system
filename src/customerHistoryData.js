//優良：健康度 80% 以上
// 良好：健康度 61% 至 80%
// 不佳：健康度低於 60%
export const customersHistory = {
  'AZF-172': {
    carInfo: {
      plate: 'AZF-172',
      model: 'Acura RDX 2020',
      mileage: '146,885 km',
      owner: '陳政瑋',
      status: '優良',
      carID: '0196QH'
    },
    maintenanceStats: {
      yearlyCount: 12,
      yearlyExpense: 'NT$57,400 '
    },
    // Sorted from most recent to oldest with realistic km values
    maintenanceHistory: [
      { date: '2025-1-10', type: '定期保養', items: '變速箱油更換', mileage: '146,885 km', cost: 'NT$3,000', mechanic: '李技師' },
      { date: '2024-07-13', type: '故障維修', items: '機油更換、機油濾清器更換、輪軸脂抽', mileage: '140,000 km', cost: 'NT$2,800', mechanic: '李技師' },
      { date: '2024-01-30', type: '故障維修', items: '更換煞車片、更換煞車油', mileage: '138,000 km', cost: 'NT$5,500', mechanic: '李技師' },
      { date: '2023-11-20', type: '定期保養', items: '機油更換、空調濾網更換', mileage: '135,000 km', cost: 'NT$2,300', mechanic: '陳技師' },
      { date: '2023-07-15', type: '定期保養', items: '輪胎更換、四輪定位', mileage: '130,000 km', cost: 'NT$7,000', mechanic: '李技師' },
      { date: '2023-03-12', type: '定期保養', items: '剎車油更換、輪胎平衡', mileage: '125,000 km', cost: 'NT$2,500', mechanic: '王技師' },
      { date: '2022-12-05', type: '故障維修', items: '剎車盤更換', mileage: '120,000 km', cost: 'NT$5,500', mechanic: '張技師' },
      { date: '2022-08-18', type: '故障維修', items: '水箱洩漏修復', mileage: '115,000 km', cost: 'NT$6,000', mechanic: '李技師' },
      { date: '2022-04-15', type: '故障維修', items: '引擎腳墊更換', mileage: '110,000 km', cost: 'NT$8,500', mechanic: '張技師' },
      { date: '2022-02-10', type: '定期保養', items: '空調系統檢查、冷媒補充', mileage: '105,000 km', cost: 'NT$2,500', mechanic: '王技師' },
      { date: '2021-10-10', type: '定期保養', items: '輪胎更換、四輪定位', mileage: '100,000 km', cost: 'NT$7,000', mechanic: '李技師' },
      { date: '2021-06-12', type: '定期保養', items: '機油更換、變速箱油更換', mileage: '95,000 km', cost: 'NT$4,800', mechanic: '王技師' }
    ]
    
  },
  'UEI-910': {
    carInfo: {
      plate: 'UEI-910',
      model: 'Audi A6 2021',
      mileage: '443,000 km',
      owner: '康雅惠',
      status: '良好',
      carID: '0171YQ'
    },
    maintenanceStats: {
      yearlyCount: 10,
      yearlyExpense: 'NT$49,000'
    },
    // Sorted descending by date with updated km values
    maintenanceHistory: // Updated maintenanceHistory with extended date intervals
    [
      { date: '2025-01-12', type: '定期保養', items: '機油更換、輪胎檢查', mileage: '440,000 km', cost: 'NT$2,000', mechanic: '王技師' },
      { date: '2024-06-20', type: '故障維修', items: '引擎冷卻系統維修', mileage: '438,000 km', cost: 'NT$8,000', mechanic: '張技師' },
      { date: '2023-12-05', type: '定期保養', items: '機油濾清器更換、火星塞更換', mileage: '435,000 km', cost: 'NT$2,000', mechanic: '王技師' },
      { date: '2023-05-15', type: '故障維修', items: '電瓶更換', mileage: '432,000 km', cost: 'NT$3,600', mechanic: '張技師' },
      { date: '2022-11-10', type: '定期保養', items: '剎車油更換、冷卻液補充', mileage: '428,000 km', cost: 'NT$2,000', mechanic: '陳技師' },
      { date: '2022-04-15', type: '故障維修', items: '變速箱維修', mileage: '424,000 km', cost: 'NT$13,000', mechanic: '李技師' },
      { date: '2021-10-05', type: '定期保養', items: '空調清潔、空氣濾清器更換', mileage: '420,000 km', cost: 'NT$1,800', mechanic: '王技師' },
      { date: '2021-03-30', type: '故障維修', items: '方向機更換', mileage: '416,000 km', cost: 'NT$6,000', mechanic: '張技師' },
      { date: '2020-09-15', type: '定期保養', items: '輪胎更換、四輪定位', mileage: '412,000 km', cost: 'NT$7,000', mechanic: '李技師' },
      { date: '2020-03-10', type: '故障維修', items: '電瓶更換', mileage: '408,000 km', cost: 'NT$3,600', mechanic: '陳技師' }
    ]
    
  },
  'APW-0322': {
    carInfo: {
      plate: 'APW-0322',
      model: 'Toyota Camry 2019',
      mileage: '577,000 km',
      owner: '林玉芳',
      status: '良好',
      carID: '0279VE'
    },
    maintenanceStats: {
      yearlyCount: 10,
      yearlyExpense: 'NT$8,200'
    },
    // Descending order and updated km values for maintenance events
    maintenanceHistory: [
      { date: '2024-08-26', type: '定期保養', items: '軟體更新、空調濾網更換', mileage: '570,000 km', cost: 'NT$1,500', mechanic: '陳技師' },
      { date: '2024-07-20', type: '故障維修', items: '輪胎更換、四輪定位', mileage: '565,000 km', cost: 'NT$6,700', mechanic: '李技師' },
      { date: '2024-04-10', type: '定期保養', items: '機油更換、剎車油檢查', mileage: '560,000 km', cost: 'NT$2,000', mechanic: '王技師' },
      { date: '2023-11-18', type: '故障維修', items: '引擎腳墊更換', mileage: '550,000 km', cost: 'NT$6,000', mechanic: '張技師' },
      { date: '2023-06-10', type: '定期保養', items: '火星塞更換', mileage: '540,000 km', cost: 'NT$1,800', mechanic: '陳技師' },
      { date: '2022-12-01', type: '定期保養', items: '冷卻液補充、空氣濾網更換', mileage: '530,000 km', cost: 'NT$1,500', mechanic: '王技師' },
      { date: '2022-07-14', type: '故障維修', items: '剎車盤更換', mileage: '520,000 km', cost: 'NT$5,000', mechanic: '李技師' },
      { date: '2022-03-20', type: '定期保養', items: '輪胎檢查、四輪定位', mileage: '510,000 km', cost: 'NT$2,200', mechanic: '王技師' },
      { date: '2021-09-11', type: '故障維修', items: '變速箱油更換', mileage: '495,000 km', cost: 'NT$3,500', mechanic: '張技師' },
      { date: '2021-02-28', type: '定期保養', items: '機油濾清器更換', mileage: '480,000 km', cost: 'NT$1,200', mechanic: '陳技師' }
    ]
    
  },
  "AYK-3725": {
    carInfo: {
      plate: "AYK-3725",
      model: "Toyota RAV4 2021",
      mileage: "78,000 km",
      owner: "林佳慧",
      status: "良好",
      carID: "0357XZ"
    },
    maintenanceStats: {
      yearlyCount: 8,
      yearlyExpense: "NT$6,800"
    },
    mmaintenanceHistory: [
      { date: "2024-09-10", type: "定期保養", items: "機油更換、空氣濾清器更換", mileage: "78,000 km", cost: "NT$2,000", mechanic: "王技師" },
      { date: "2024-06-15", type: "故障維修", items: "剎車片更換", mileage: "73,500 km", cost: "NT$2,800", mechanic: "張技師" },
      { date: "2024-03-22", type: "定期保養", items: "輪胎更換、四輪定位", mileage: "69,000 km", cost: "NT$6,500", mechanic: "李技師" },
      { date: "2023-12-05", type: "故障維修", items: "電瓶更換、電路系統檢查", mileage: "65,500 km", cost: "NT$3,200", mechanic: "陳技師" },
      { date: "2023-08-18", type: "定期保養", items: "機油更換、空調系統清潔", mileage: "62,000 km", cost: "NT$1,800", mechanic: "王技師" },
      { date: "2023-04-30", type: "故障維修", items: "引擎冷卻系統維修", mileage: "58,000 km", cost: "NT$3,500", mechanic: "張技師" },
      { date: "2022-11-12", type: "定期保養", items: "變速箱油更換、火星塞更換", mileage: "54,000 km", cost: "NT$2,500", mechanic: "李技師" },
      { date: "2022-07-25", type: "故障維修", items: "避震器更換", mileage: "50,000 km", cost: "NT$4,500", mechanic: "陳技師" }
    ]
  },
  "BCF-9182": {
    carInfo: {
      plate: "BCF-9182",
      model: "Honda CR-V 2022",
      mileage: "52,300 km",
      owner: "陳彥廷",
      status: "良好",
      carID: "0264AB"
    },
    maintenanceStats: {
      yearlyCount: 8,
      yearlyExpense: "NT$16,700"
    },
    maintenanceHistory: [
      { date: "2024-07-25", type: "故障維修", items: "變速箱油更換", mileage: "52,300 km", cost: "NT$3,200", mechanic: "李技師" },
      { date: "2024-04-10", type: "定期保養", items: "機油更換、火星塞更換", mileage: "48,000 km", cost: "NT$2,000", mechanic: "陳技師" },
      { date: "2023-12-22", type: "故障維修", items: "電瓶更換、電系檢查", mileage: "44,500 km", cost: "NT$2,800", mechanic: "張技師" },
      { date: "2023-09-08", type: "定期保養", items: "空調濾網更換、冷媒充填", mileage: "40,200 km", cost: "NT$1,500", mechanic: "王技師" },
      { date: "2023-05-17", type: "故障維修", items: "引擎感應器更換", mileage: "36,800 km", cost: "NT$3,500", mechanic: "李技師" },
      { date: "2023-01-30", type: "定期保養", items: "機油更換、剎車系統檢查", mileage: "32,500 km", cost: "NT$1,800", mechanic: "陳技師" },
      { date: "2022-10-15", type: "故障維修", items: "方向盤異音排除", mileage: "28,000 km", cost: "NT$900", mechanic: "王技師" },
      { date: "2022-06-03", type: "定期保養", items: "首次保養套餐", mileage: "10,000 km", cost: "NT$1,000", mechanic: "張技師" }
    ]
  },
  "DHT-5643": {
    carInfo: {
      plate: "DHT-5643",
      model: "Tesla Model Y 2023",
      mileage: "32,800 km",
      owner: "張書豪",
      status: "不佳",
      carID: "0178CD"
    },
    maintenanceStats: {
      yearlyCount: 6,
      yearlyExpense: "NT$14,800"
    },
    maintenanceHistory: [
      { date: "2024-08-05", type: "故障維修", items: "電池檢測與維修", mileage: "32,800 km", cost: "NT$4,500", mechanic: "張技師" },
      { date: "2024-05-18", type: "故障維修", items: "觸控螢幕系統更新與修復", mileage: "29,500 km", cost: "NT$2,800", mechanic: "王技師" },
      { date: "2024-02-22", type: "定期保養", items: "軟體更新、空調系統檢查", mileage: "26,200 km", cost: "NT$1,500", mechanic: "陳技師" },
      { date: "2023-11-03", type: "故障維修", items: "車門把手感應器更換", mileage: "22,500 km", cost: "NT$3,200", mechanic: "李技師" },
      { date: "2023-07-20", type: "定期保養", items: "胎壓感應器校正、輪胎更換", mileage: "18,600 km", cost: "NT$1,800", mechanic: "張技師" },
      { date: "2023-04-05", type: "故障維修", items: "空調系統風扇更換", mileage: "15,200 km", cost: "NT$1,000", mechanic: "王技師" }
    ]
  },
  "XZN-7831": {
    carInfo: {
      plate: "XZN-7831",
      model: "Mazda 6 2020",
      owner: "李佩蓉",
      status: "良好",
      carID: "0231RF"
    },
    maintenanceStats: {
      yearlyCount: 7,
      yearlyExpense: "NT$19,800"
    },
    maintenanceHistory: [
      { date: "2024-07-25", type: "故障維修", items: "剎車油更換", mileage: "95,800 km", cost: "NT$1,500", mechanic: "王技師" },
      { date: "2024-04-12", type: "定期保養", items: "機油更換、輪胎檢查調整", mileage: "92,000 km", cost: "NT$2,200", mechanic: "陳技師" },
      { date: "2023-12-30", type: "故障維修", items: "方向燈開關更換", mileage: "88,500 km", cost: "NT$1,800", mechanic: "張技師" },
      { date: "2023-08-15", type: "定期保養", items: "空調濾網更換、冷媒充填", mileage: "83,000 km", cost: "NT$2,500", mechanic: "李技師" },
      { date: "2023-03-22", type: "故障維修", items: "車門密封條更換、車窗調整", mileage: "77,500 km", cost: "NT$3,600", mechanic: "王技師" },
      { date: "2022-10-08", type: "定期保養", items: "火星塞更換、引擎系統檢查", mileage: "72,000 km", cost: "NT$3,200", mechanic: "陳技師" },
      { date: "2022-05-18", type: "故障維修", items: "水箱更換、散熱系統檢修", mileage: "65,000 km", cost: "NT$5,000", mechanic: "張技師" }
    ]
},
  "JLP-4568": {
    carInfo: {
      plate: "JLP-4568",
      model: "Ford Kuga 2023",
      owner: "黃志誠",
      status: "良好",
      carID: "0527KL"
    },
    maintenanceStats: {
      yearlyCount: 5,
      yearlyExpense: "NT$18,600"
    },
    maintenanceHistory: [
      { date: "2024-11-02", type: "定期保養", items: "機油更換、輪胎檢查", mileage: "47,500 km", cost: "NT$2,000", mechanic: "李技師" },
      { date: "2024-08-17", type: "故障維修", items: "引擎抖動問題診斷與修復", mileage: "42,300 km", cost: "NT$5,800", mechanic: "張技師" },
      { date: "2024-04-25", type: "故障維修", items: "電腦系統重置、軟體更新", mileage: "36,800 km", cost: "NT$1,800", mechanic: "王技師" },
      { date: "2023-12-10", type: "定期保養", items: "變速箱油更換、冷卻液補充", mileage: "28,500 km", cost: "NT$3,200", mechanic: "陳技師" },
      { date: "2023-07-03", type: "故障維修", items: "渦輪增壓器故障修復", mileage: "18,200 km", cost: "NT$5,800", mechanic: "李技師" }
    ]
  },
 "QWM-9856": {
    carInfo: {
      plate: "QWM-9856",
      model: "Lexus NX 2021",
      owner: "周欣怡",
      status: "優良",
      carID: "0412YT"
    },
    maintenanceStats: {
      yearlyCount: 11,
      yearlyExpense: "NT$28,900"
    },
    maintenanceHistory: [
      { date: "2024-09-10", type: "定期保養", items: "機油更換、空氣濾清器更換", mileage: "78,000 km", cost: "NT$2,000", mechanic: "王技師" },
      { date: "2024-06-15", type: "故障維修", items: "剎車片更換", mileage: "73,500 km", cost: "NT$2,800", mechanic: "張技師" },
      { date: "2024-02-22", type: "定期保養", items: "輪胎更換、四輪定位", mileage: "68,200 km", cost: "NT$7,500", mechanic: "李技師" },
      { date: "2023-10-05", type: "故障維修", items: "空調系統維修、冷媒充填", mileage: "62,800 km", cost: "NT$3,600", mechanic: "陳技師" },
      { date: "2023-06-18", type: "定期保養", items: "機油更換、剎車油檢查", mileage: "56,500 km", cost: "NT$1,800", mechanic: "王技師" },
      { date: "2023-02-07", type: "故障維修", items: "車窗升降機更換", mileage: "50,200 km", cost: "NT$2,500", mechanic: "張技師" },
      { date: "2022-09-12", type: "定期保養", items: "火星塞更換、引擎系統檢查", mileage: "42,000 km", cost: "NT$2,300", mechanic: "李技師" },
      { date: "2022-04-30", type: "故障維修", items: "前保險桿修復、車燈調整", mileage: "35,000 km", cost: "NT$6,200", mechanic: "陳技師" },
      { date: "2021-12-15", type: "定期保養", items: "機油更換、引擎電腦系統更新", mileage: "28,000 km", cost: "NT$2,500", mechanic: "王技師" },
      { date: "2021-08-03", type: "故障維修", items: "前大燈模組更換、電控調整", mileage: "22,500 km", cost: "NT$3,800", mechanic: "張技師" },
      { date: "2021-03-25", type: "定期保養", items: "首次保養套餐、原廠系統檢測", mileage: "10,000 km", cost: "NT$1,900", mechanic: "李技師" }
    ]
},
 "GBC-4732": {
    carInfo: {
      plate: "GBC-4732",
      model: "BMW X5 2022",
      owner: "吳宗翰",
      status: "良好",
      carID: "0385WL"
    },
    maintenanceStats: {
      yearlyCount: 7,
      yearlyExpense: "NT$28,300"
    },
    maintenanceHistory: [
      { date: "2024-09-10", type: "定期保養", items: "機油更換、空氣濾清器更換", mileage: "68,500 km", cost: "NT$3,200", mechanic: "王技師" },
      { date: "2024-06-15", type: "故障維修", items: "剎車片更換、剎車碟盤檢修", mileage: "62,800 km", cost: "NT$5,500", mechanic: "張技師" },
      { date: "2024-03-22", type: "故障維修", items: "差速器油封更換", mileage: "58,300 km", cost: "NT$7,800", mechanic: "李技師" },
      { date: "2023-12-08", type: "定期保養", items: "變速箱油更換、冷卻系統檢查", mileage: "54,600 km", cost: "NT$4,200", mechanic: "陳技師" },
      { date: "2023-08-17", type: "故障維修", items: "引擎控制模組更新、感應器校正", mileage: "48,200 km", cost: "NT$3,500", mechanic: "張技師" },
      { date: "2023-04-20", type: "定期保養", items: "輪胎更換、四輪定位", mileage: "42,000 km", cost: "NT$9,800", mechanic: "李技師" },
      { date: "2022-11-05", type: "定期保養", items: "首次保養套餐", mileage: "15,000 km", cost: "NT$2,300", mechanic: "王技師" }
    ]
  },
"TYU-9284": {
    carInfo: {
      plate: "TYU-9284",
      model: "Nissan Sentra 2019",
      owner: "楊淑芬",
      status: "優良",
      carID: "0193LK"
    },
    maintenanceStats: {
      yearlyCount: 13,
      yearlyExpense: "NT$32,800"
    },
    maintenanceHistory: [
      { date: "2024-09-10", type: "定期保養", items: "機油更換、空氣濾清器更換", mileage: "110,800 km", cost: "NT$2,000", mechanic: "王技師" },
      { date: "2024-06-15", type: "故障維修", items: "剎車片更換", mileage: "106,500 km", cost: "NT$2,800", mechanic: "張技師" },
      { date: "2024-02-23", type: "定期保養", items: "變速箱油更換、輪胎平衡", mileage: "102,000 km", cost: "NT$3,500", mechanic: "李技師" },
      { date: "2023-10-12", type: "故障維修", items: "發電機更換", mileage: "97,500 km", cost: "NT$5,200", mechanic: "陳技師" },
      { date: "2023-06-08", type: "定期保養", items: "機油更換、火星塞更換", mileage: "91,000 km", cost: "NT$2,200", mechanic: "王技師" },
      { date: "2023-02-10", type: "故障維修", items: "排氣管修復、消音器更換", mileage: "85,800 km", cost: "NT$3,700", mechanic: "張技師" },
      { date: "2022-09-20", type: "定期保養", items: "冷卻液更換、引擎系統檢查", mileage: "78,000 km", cost: "NT$1,800", mechanic: "李技師" },
      { date: "2022-04-15", type: "故障維修", items: "方向機漏油維修", mileage: "72,500 km", cost: "NT$2,800", mechanic: "陳技師" },
      { date: "2021-10-12", type: "定期保養", items: "四輪定位、底盤系統檢查", mileage: "65,000 km", cost: "NT$700", mechanic: "王技師" },
      { date: "2021-05-28", type: "故障維修", items: "渦輪增壓器檢修、感應器重置", mileage: "58,200 km", cost: "NT$4,800", mechanic: "張技師" },
      { date: "2020-12-03", type: "定期保養", items: "機油更換、燃油系統清潔", mileage: "52,000 km", cost: "NT$2,500", mechanic: "李技師" },
      { date: "2020-07-17", type: "故障維修", items: "冷氣壓縮機更換、冷媒充填", mileage: "45,800 km", cost: "NT$6,200", mechanic: "陳技師" },
      { date: "2020-02-25", type: "定期保養", items: "輪胎更換、四輪定位", mileage: "38,500 km", cost: "NT$5,500", mechanic: "王技師" },
      { date: "2019-10-10", type: "定期保養", items: "首次保養套餐、引擎系統檢查", mileage: "15,000 km", cost: "NT$1,800", mechanic: "張技師" }
    ]
},
  "VBN-6352": {
    carInfo: {
      plate: "VBN-6352",
      model: "Mercedes-Benz GLC 2023",
      owner: "許威廷",
      status: "良好",
      carID: "0429KM"
    },
    maintenanceStats: {
      yearlyCount: 6,
      yearlyExpense: "NT$38,200"
    },
    maintenanceHistory: [
      { date: "2024-09-10", type: "定期保養", items: "機油更換、空氣濾清器更換", mileage: "38,500 km", cost: "NT$3,000", mechanic: "王技師" },
      { date: "2024-06-15", type: "故障維修", items: "剎車片更換、剎車碟盤修整", mileage: "35,200 km", cost: "NT$5,200", mechanic: "張技師" },
      { date: "2024-03-08", type: "故障維修", items: "引擎電腦系統重置與校正", mileage: "31,800 km", cost: "NT$7,800", mechanic: "李技師" },
      { date: "2023-11-20", type: "故障維修", items: "變速箱感應器更換", mileage: "28,500 km", cost: "NT$12,000", mechanic: "陳技師" },
      { date: "2023-08-05", type: "定期保養", items: "空調系統檢修、冷媒充填", mileage: "24,000 km", cost: "NT$3,700", mechanic: "王技師" },
      { date: "2023-03-12", type: "定期保養", items: "首次保養套餐", mileage: "10,000 km", cost: "NT$6,500", mechanic: "張技師" }
    ]
},
  "MKO-7421": {
    carInfo: {
      plate: "MKO-7421",
      model: "Subaru Forester 2020",
      owner: "曾筱婷",
      status: "優良",
      carID: "0367TW",
      mileage: "85,200 km"
    },
    maintenanceStats: {
      yearlyCount: 12,
      yearlyExpense: "NT$29,600"
    },
    maintenanceHistory: [
      { date: "2024-09-10", type: "定期保養", items: "機油更換、空氣濾清器更換", mileage: "85,200 km", cost: "NT$2,000", mechanic: "王技師" },
      { date: "2024-06-15", type: "故障維修", items: "剎車片更換、剎車油更換", mileage: "81,700 km", cost: "NT$2,800", mechanic: "張技師" },
      { date: "2024-02-03", type: "定期保養", items: "正時皮帶更換、水泵檢查", mileage: "76,500 km", cost: "NT$5,500", mechanic: "李技師" },
      { date: "2023-09-20", type: "故障維修", items: "全時四驅系統檢修", mileage: "72,000 km", cost: "NT$3,200", mechanic: "陳技師" },
      { date: "2023-05-18", type: "定期保養", items: "變速箱油更換、輪胎對調", mileage: "67,500 km", cost: "NT$2,700", mechanic: "王技師" },
      { date: "2022-12-12", type: "故障維修", items: "引擎抖動問題修復、噴油嘴清潔", mileage: "61,000 km", cost: "NT$1,800", mechanic: "張技師" },
      { date: "2022-08-05", type: "定期保養", items: "火星塞更換、引擎基本調校", mileage: "55,500 km", cost: "NT$1,900", mechanic: "李技師" },
      { date: "2022-03-10", type: "故障維修", items: "排氣閥故障修復", mileage: "48,000 km", cost: "NT$1,500", mechanic: "陳技師" },
      { date: "2021-11-25", type: "定期保養", items: "輪胎更換、四輪定位", mileage: "42,500 km", cost: "NT$6,200", mechanic: "王技師" },
      { date: "2021-07-08", type: "故障維修", items: "ABS感應器更換", mileage: "35,600 km", cost: "NT$2,800", mechanic: "張技師" },
      { date: "2021-03-22", type: "定期保養", items: "機油更換、冷卻液檢查補充", mileage: "28,400 km", cost: "NT$1,800", mechanic: "陳技師" },
      { date: "2020-11-10", type: "故障維修", items: "引擎溫度感應器更換", mileage: "22,500 km", cost: "NT$1,400", mechanic: "李技師" },
      { date: "2020-07-15", type: "定期保養", items: "首次保養套餐", mileage: "9,800 km", cost: "NT$1,200", mechanic: "王技師" }
    ]
  }
};