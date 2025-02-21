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
      status: '優良',
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
      yearlyCount: 5,
      yearlyExpense: 'NT$8,200'
    },
    // Descending order and updated km values for maintenance events
    maintenanceHistory: [
      { date: '2024-08-26', type: '定期保養', items: '軟體更新、空調濾網更換', mileage: '570,000 km', cost: 'NT$1,500', mechanic: '陳技師' },
      { date: '2024-07-20', type: '故障維修', items: '輪胎更換、四輪定位', mileage: '565,000 km', cost: 'NT$6,700', mechanic: '李技師' }
    ]
  },
  "AYK-3725": {
    carInfo: {
      plate: "AYK-3725",
      model: "Toyota RAV4 2021",
      mileage: "78,000 km",
      owner: "林佳慧",
      status: "不佳",
      carID: "0357XZ"
    },
    maintenanceStats: {
      yearlyCount: 4,
      yearlyExpense: "NT$6,800"
    },
    maintenanceHistory: [
      { date: "2024-09-10", type: "定期保養", items: "機油更換、空氣濾清器更換", mileage: "78,000 km", cost: "NT$2,000", mechanic: "王技師" },
      { date: "2024-06-15", type: "故障維修", items: "剎車片更換", mileage: "73,500 km", cost: "NT$2,800", mechanic: "張技師" }
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
      yearlyCount: 3,
      yearlyExpense: "NT$5,200"
    },
    maintenanceHistory: [
      { date: "2024-07-25", type: "故障維修", items: "變速箱油更換", mileage: "52,300 km", cost: "NT$3,200", mechanic: "李技師" },
      { date: "2024-04-10", type: "定期保養", items: "機油更換、火星塞更換", mileage: "48,000 km", cost: "NT$2,000", mechanic: "陳技師" }
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
    
    maintenanceHistory: [
      { date: "2024-08-05", type: "故障維修", items: "電池檢測與維修", mileage: "32,800 km", cost: "NT$4,500", mechanic: "張技師" }
    ]
  },
  "XZN-7831": {
    carInfo: {
      plate: "XZN-7831",
      model: "Mazda 6 2020",
      owner: "李佩蓉",
      status: "優良"
    },
    maintenanceStats: {
      yearlyCount: 2,
      yearlyExpense: "NT$4,500"
    },
    maintenanceHistory: [
      { date: "2024-07-25", type: "故障維修", items: "剎車油更換", cost: "NT$1,500", mechanic: "王技師" }
    ]
  },
  "JLP-4568": {
    carInfo: {
      plate: "JLP-4568",
      model: "Ford Kuga 2023",
      owner: "黃志誠",
      status: "不佳"
    },
    maintenanceStats: {
      yearlyCount: 2,
      yearlyExpense: "NT$4,500"
    },
    maintenanceHistory: [
      { date: "2024-11-02", type: "定期保養", items: "機油更換、輪胎檢查", cost: "NT$2,000", mechanic: "李技師" }
    ]
  },
  "QWM-9856": {
    carInfo: {
      plate: "QWM-9856",
      model: "Lexus NX 2021",
      owner: "周欣怡",
      status: "優良"
    },
    maintenanceStats: {
      yearlyCount: 2,
      yearlyExpense: "NT$4,500"
    },
    maintenanceHistory: [
      { date: "2024-09-10", type: "定期保養", items: "機油更換、空氣濾清器更換", mileage: "78,000 km", cost: "NT$2,000", mechanic: "王技師" },
      { date: "2024-06-15", type: "故障維修", items: "剎車片更換", mileage: "73,500 km", cost: "NT$2,800", mechanic: "張技師" }
    ]
  },
  "GBC-4732": {
    carInfo: {
      plate: "GBC-4732",
      model: "BMW X5 2022",
      owner: "吳宗翰",
      status: "不佳"
    },
    maintenanceStats: {
      yearlyCount: 2,
      yearlyExpense: "NT$4,500"
    },
    maintenanceHistory: [
      { date: "2024-09-10", type: "定期保養", items: "機油更換、空氣濾清器更換", mileage: "78,000 km", cost: "NT$2,000", mechanic: "王技師" },
      { date: "2024-06-15", type: "故障維修", items: "剎車片更換", mileage: "73,500 km", cost: "NT$2,800", mechanic: "張技師" }
    ]
  },
  "TYU-9284": {
    carInfo: {
      plate: "TYU-9284",
      model: "Nissan Sentra 2019",
      owner: "楊淑芬",
      status: "優良"
    },maintenanceStats: {
      yearlyCount: 2,
      yearlyExpense: "NT$4,500"
    },
    maintenanceHistory: [
      { date: "2024-09-10", type: "定期保養", items: "機油更換、空氣濾清器更換", mileage: "78,000 km", cost: "NT$2,000", mechanic: "王技師" },
      { date: "2024-06-15", type: "故障維修", items: "剎車片更換", mileage: "73,500 km", cost: "NT$2,800", mechanic: "張技師" }
    ]
  },
  "VBN-6352": {
    carInfo: {
      plate: "VBN-6352",
      model: "Mercedes-Benz GLC 2023",
      owner: "許威廷",
      status: "不佳"
    },
    maintenanceStats: {
      yearlyCount: 2,
      yearlyExpense: "NT$4,500"
    },
    maintenanceHistory: [
      { date: "2024-09-10", type: "定期保養", items: "機油更換、空氣濾清器更換", mileage: "78,000 km", cost: "NT$2,000", mechanic: "王技師" },
      { date: "2024-06-15", type: "故障維修", items: "剎車片更換", mileage: "73,500 km", cost: "NT$2,800", mechanic: "張技師" }
    ]
  },
  "MKO-7421": {
    carInfo: {
      plate: "MKO-7421",
      model: "Subaru Forester 2020",
      owner: "曾筱婷",
      status: "優良"
    },
    maintenanceStats: {
      yearlyCount: 2,
      yearlyExpense: "NT$4,500"
    },
    maintenanceHistory: [
      { date: "2024-09-10", type: "定期保養", items: "機油更換、空氣濾清器更換", mileage: "78,000 km", cost: "NT$2,000", mechanic: "王技師" },
      { date: "2024-06-15", type: "故障維修", items: "剎車片更換", mileage: "73,500 km", cost: "NT$2,800", mechanic: "張技師" }
    ]
  }
};