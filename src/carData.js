export const carsData = {
  'AZF-172': {
    plateNumber: 'AZF-172',
    model: 'Acura RDX 2020',
    mileage: '146,885 km',
    maintenanceAlert: {
      message: '煞車片需更換，請盡速安排保養',
      type: 'warning'
    },
    lifePrediction: [
      { name: '煞車片', remaining: '800 km', percentage: 10 },
      { name: '機油', remaining: '4,000 km', percentage: 65 },
      { name: '輪胎', remaining: '12,800 km', percentage: 83 }
    ],
    maintenanceItems: [
      { level: '緊急', item: '更換煞車片', cost: 3500 },
      { level: '中等', item: '更換機油', cost: 1200 },
      { level: '例行', item: '檢查輪胎胎壓', cost: 100 }
    ],
    // Health trend reflects that after the July 2024 maintenance (故障維修) the value jumps up,
    // while in months without maintenance the trend declines.
    healthTrend: [
      { month: '2024-03', value: 80 },
      { month: '2024-04', value: 78 },
      { month: '2024-05', value: 77 },
      { month: '2024-06', value: 80 },
      { month: '2024-07', value: 90 }, // maintenance event on 2024-07-13
      { month: '2024-08', value: 88 },
      { month: '2024-09', value: 85 },
      { month: '2024-10', value: 83 },
      { month: '2024-11', value: 82 },
      { month: '2024-12', value: 80 },
      { month: '2025-01', value: 90 },
      { month: '2025-02', value: 85 },
      { month: '2025-03', value: 82 }
    ]
  },
  'UEI-910': {
    plateNumber: 'UEI-910',
    model: 'Audi A6 2021',
    mileage: '443,000 km',
    maintenanceAlert: {
      message: '機油需更換，請盡速安排保養',
      type: 'warning'
    },
    lifePrediction: [
      { name: '煞車片', remaining: '8,000 km', percentage: 75 },
      { name: '機油', remaining: '1,600 km', percentage: 25 },
      { name: '輪胎', remaining: '16,000 km', percentage: 90 }
    ],
    maintenanceItems: [
      { level: '中等', item: '更換機油', cost: 1200 },
      { level: '例行', item: '輪胎調胎', cost: 500 }
    ],
    // There are a couple of maintenance events in early 2024 boosting the trend.
    healthTrend: [
      { month: '2024-03', value: 90 }, // maintenance event on early March (2024-03-10)
      { month: '2024-04', value: 92 },
      { month: '2024-05', value: 95 }, // maintenance event on 2024-05-01
      { month: '2024-06', value: 97 }, // maintenance event on 2024-06-13
      { month: '2024-07', value: 95 },
      { month: '2024-08', value: 93 },
      { month: '2024-09', value: 90 },
      { month: '2024-10', value: 88 },
      { month: '2024-11', value: 87 },
      { month: '2024-12', value: 85 },
      { month: '2025-01', value: 83 },
      { month: '2025-02', value: 80 },
      { month: '2025-03', value: 78 }
    ]
  },
  'APW-0322': {
    plateNumber: 'APW-0322',
    model: 'Toyota Camry 2019',
    mileage: '577,000 km',
    maintenanceAlert: {
      message: '輪胎需更換，請盡速安排保養',
      type: 'warning'
    },
    lifePrediction: [
      { name: '煞車片', remaining: '11,200 km', percentage: 85 },
      { name: '輪胎', remaining: '4,800 km', percentage: 45 },
      { name: '電池健康度', remaining: '90%', percentage: 90 }
    ],
    maintenanceItems: [
      { level: '中等', item: '輪胎調換', cost: 2000 },
      { level: '例行', item: '系統軟體更新', cost: 0 },
      { level: '例行', item: '空調濾網更換', cost: 500 }
    ],
    // Two maintenance events in mid-2024 cause improvements in healthTrend.
    healthTrend: [
      { month: '2024-03', value: 88 },
      { month: '2024-04', value: 86 },
      { month: '2024-05', value: 84 },
      { month: '2024-06', value: 82 },
      { month: '2024-07', value: 92 }, // maintenance event on 2024-07-20
      { month: '2024-08', value: 95 }, // maintenance event on 2024-08-26
      { month: '2024-09', value: 93 },
      { month: '2024-10', value: 90 },
      { month: '2024-11', value: 88 },
      { month: '2024-12', value: 85 },
      { month: '2025-01', value: 83 },
      { month: '2025-02', value: 80 },
      { month: '2025-03', value: 78 },
    ]
  },
  'AYK-3725': {
    plateNumber: 'AYK-3725',
    model: 'Toyota RAV4 2021',
    mileage: '78,000 km',
    maintenanceAlert: {
      message: '機油需更換、剎車片需更換，請盡速安排保養',
      type: 'warning'
    },
    lifePrediction: [
      { name: '剎車片', remaining: '4,800 km', percentage: 45 },
      { name: '機油', remaining: '2,500 km', percentage: 25 },
      { name: '電瓶', remaining: '18,000 km', percentage: 75 }
    ],
    maintenanceItems: [
      { level: '中等', item: '更換機油', cost: 1000 },
      { level: '中等', item: '更換剎車片', cost: 2800 },
      { level: '例行', item: '檢查引擎冷卻系統', cost: 800 }
    ],
    healthTrend: [
      { month: '2024-03', value: 75 },
      { month: '2024-04', value: 72 },
      { month: '2024-05', value: 70 },
      { month: '2024-06', value: 80 }, // 2024-06-15 剎車片更換
      { month: '2024-07', value: 78 },
      { month: '2024-08', value: 75 },
      { month: '2024-09', value: 85 }, // 2024-09-10 定期保養
      { month: '2024-10', value: 82 },
      { month: '2024-11', value: 80 },
      { month: '2024-12', value: 77 },
      { month: '2025-01', value: 75 },
      { month: '2025-02', value: 73 },
      { month: '2025-03', value: 70 }
    ]
  },
  'BCF-9182': {
    plateNumber: 'BCF-9182',
    model: 'Honda CR-V 2022',
    mileage: '52,300 km',
    maintenanceAlert: {
      message: '機油需更換，請盡速安排保養',
      type: 'warning'
    },
    lifePrediction: [
      { name: '機油', remaining: '1,700 km', percentage: 25 },
      { name: '變速箱油', remaining: '30,000 km', percentage: 90 },
      { name: '電瓶', remaining: '24,000 km', percentage: 85 }
    ],
    maintenanceItems: [
      { level: '中等', item: '更換機油與機油濾清器', cost: 1800 },
      { level: '例行', item: '輪胎檢查與調胎', cost: 500 },
      { level: '例行', item: '引擎冷卻系統檢查', cost: 600 }
    ],
    healthTrend: [
      { month: '2024-03', value: 84 },
      { month: '2024-04', value: 93 }, // 2024-04-10 定期保養
      { month: '2024-05', value: 91 },
      { month: '2024-06', value: 88 },
      { month: '2024-07', value: 95 }, // 2024-07-25 變速箱油更換
      { month: '2024-08', value: 93 },
      { month: '2024-09', value: 90 },
      { month: '2024-10', value: 87 },
      { month: '2024-11', value: 85 },
      { month: '2024-12', value: 83 },
      { month: '2025-01', value: 80 },
      { month: '2025-02', value: 77 },
      { month: '2025-03', value: 75 }
    ]
  },
  'DHT-5643': {
    plateNumber: 'DHT-5643',
    model: 'Tesla Model Y 2023',
    mileage: '32,800 km',
    maintenanceAlert: {
      message: '電池系統需注意，請盡速安排保養',
      type: 'critical'
    },
    lifePrediction: [
      { name: '電池健康度', remaining: '80%', percentage: 65 },
      { name: '輪胎', remaining: '15,000 km', percentage: 70 },
      { name: '冷氣系統', remaining: '85%', percentage: 85 }
    ],
    maintenanceItems: [
      { level: '緊急', item: '電池系統全面檢測', cost: 5000 },
      { level: '中等', item: '觸控螢幕系統重新校正', cost: 2200 },
      { level: '例行', item: '軟體更新', cost: 0 }
    ],
    healthTrend: [
      { month: '2024-03', value: 70 }, // 2024-02-22 定期保養效果
      { month: '2024-04', value: 68 },
      { month: '2024-05', value: 78 }, // 2024-05-18 螢幕系統修復
      { month: '2024-06', value: 75 },
      { month: '2024-07', value: 72 },
      { month: '2024-08', value: 80 }, // 2024-08-05 電池檢測與維修
      { month: '2024-09', value: 77 },
      { month: '2024-10', value: 74 },
      { month: '2024-11', value: 71 },
      { month: '2024-12', value: 68 },
      { month: '2025-01', value: 65 },
      { month: '2025-02', value: 63 },
      { month: '2025-03', value: 60 }
    ]
  },
  'XZN-7831': {
    plateNumber: 'XZN-7831',
    model: 'Mazda 6 2020',
    mileage: '95,800 km',
    maintenanceAlert: {
      message: '機油需更換、輪胎須注意，請盡速安排保養',
      type: 'information'
    },
    lifePrediction: [
      { name: '煞車油', remaining: '25,000 km', percentage: 95 },
      { name: '機油', remaining: '3,000 km', percentage: 40 },
      { name: '輪胎', remaining: '8,500 km', percentage: 60 }
    ],
    maintenanceItems: [
      { level: '中等', item: '更換機油與濾清器', cost: 1800 },
      { level: '例行', item: '煞車系統全面檢查', cost: 1200 },
      { level: '例行', item: '輪胎磨損檢查與輪胎對調', cost: 600 }
    ],
    healthTrend: [
      { month: '2024-03', value: 85 },
      { month: '2024-04', value: 92 }, // 2024-04-12 定期保養
      { month: '2024-05', value: 90 },
      { month: '2024-06', value: 88 },
      { month: '2024-07', value: 94 }, // 2024-07-25 煞車油更換
      { month: '2024-08', value: 92 },
      { month: '2024-09', value: 90 },
      { month: '2024-10', value: 88 },
      { month: '2024-11', value: 86 },
      { month: '2024-12', value: 84 },
      { month: '2025-01', value: 82 },
      { month: '2025-02', value: 80 },
      { month: '2025-03', value: 78 }
    ]
  },
  'JLP-4568': {
    plateNumber: 'JLP-4568',
    model: 'Ford Kuga 2023',
    mileage: '47,500 km',
    maintenanceAlert: {
      message: '渦輪增壓需注意，請盡速安排保養',
      type: 'critical'
    },
    lifePrediction: [
      { name: '渦輪增壓器', remaining: '8,000 km', percentage: 60 },
      { name: '機油', remaining: '4,500 km', percentage: 85 },
      { name: '電腦系統', remaining: '70%', percentage: 70 }
    ],
    maintenanceItems: [
      { level: '緊急', item: '渦輪增壓系統檢測', cost: 4200 },
      { level: '中等', item: '引擎抖動問題追蹤檢查', cost: 2800 },
      { level: '例行', item: '電子系統診斷', cost: 1200 }
    ],
    healthTrend: [
      { month: '2024-03', value: 65 },
      { month: '2024-04', value: 60 },
      { month: '2024-05', value: 58 }, // 2024-04-25 電腦系統重置
      { month: '2024-06', value: 56 },
      { month: '2024-07', value: 54 },
      { month: '2024-08', value: 72 }, // 2024-08-17 引擎抖動修復
      { month: '2024-09', value: 70 },
      { month: '2024-10', value: 68 },
      { month: '2024-11', value: 79 }, // 2024-11-02 定期保養
      { month: '2024-12', value: 77 },
      { month: '2025-01', value: 75 },
      { month: '2025-02', value: 72 },
      { month: '2025-03', value: 70 }
    ]
  },
  'QWM-9856': {
    plateNumber: 'QWM-9856',
    model: 'Lexus NX 2021',
    mileage: '78,000 km',
    maintenanceAlert: {
      message: '機油需更換，請盡速安排保養',
      type: 'information'
    },
    lifePrediction: [
      { name: '剎車片', remaining: '15,500 km', percentage: 85 },
      { name: '機油', remaining: '2,000 km', percentage: 30 },
      { name: '輪胎', remaining: '12,000 km', percentage: 75 }
    ],
    maintenanceItems: [
      { level: '中等', item: '更換機油與濾清器', cost: 1800 },
      { level: '例行', item: '剎車系統檢查', cost: 800 },
      { level: '例行', item: '空調系統檢測', cost: 1000 }
    ],
    healthTrend: [
      { month: '2024-03', value: 82 }, // 2024-02-22 定期保養
      { month: '2024-04', value: 80 },
      { month: '2024-05', value: 78 },
      { month: '2024-06', value: 88 }, // 2024-06-15 剎車片更換
      { month: '2024-07', value: 86 },
      { month: '2024-08', value: 84 },
      { month: '2024-09', value: 92 }, // 2024-09-10 定期保養
      { month: '2024-10', value: 90 },
      { month: '2024-11', value: 88 },
      { month: '2024-12', value: 86 },
      { month: '2025-01', value: 84 },
      { month: '2025-02', value: 82 },
      { month: '2025-03', value: 80 }
    ]
  },
  'GBC-4732': {
    plateNumber: 'GBC-4732',
    model: 'BMW X5 2022',
    mileage: '68,500 km',
    maintenanceAlert: {
      message: '機油需更換，請盡速安排保養',
      type: 'warning'
    },
    lifePrediction: [
      { name: '差速器', remaining: '15,000 km', percentage: 70 },
      { name: '機油', remaining: '3,500 km', percentage: 55 },
      { name: '剎車片', remaining: '12,000 km', percentage: 75 }
    ],
    maintenanceItems: [
      { level: '中等', item: '差速器檢測與維護', cost: 3600 },
      { level: '中等', item: '更換機油與濾清器', cost: 2200 },
      { level: '例行', item: '電控系統檢測', cost: 1500 }
    ],
    healthTrend: [
      { month: '2024-03', value: 70 },
      { month: '2024-04', value: 78 }, // 2024-03-22 差速器油封更換
      { month: '2024-05', value: 76 },
      { month: '2024-06', value: 85 }, // 2024-06-15 剎車片更換
      { month: '2024-07', value: 83 },
      { month: '2024-08', value: 81 },
      { month: '2024-09', value: 88 }, // 2024-09-10 定期保養
      { month: '2024-10', value: 86 },
      { month: '2024-11', value: 84 },
      { month: '2024-12', value: 82 },
      { month: '2025-01', value: 80 },
      { month: '2025-02', value: 78 },
      { month: '2025-03', value: 76 }
    ]
  },
  'TYU-9284': {
    plateNumber: 'TYU-9284',
    model: 'Nissan Sentra 2019',
    mileage: '110,800 km',
    maintenanceAlert: {
      message: '機油需更換，請盡速安排保養',
      type: 'information'
    },
    lifePrediction: [
      { name: '剎車片', remaining: '14,300 km', percentage: 80 },
      { name: '機油', remaining: '2,000 km', percentage: 35 },
      { name: '變速箱油', remaining: '20,000 km', percentage: 75 }
    ],
    maintenanceItems: [
      { level: '中等', item: '更換機油與濾清器', cost: 1800 },
      { level: '例行', item: '發電機系統檢查', cost: 1200 },
      { level: '例行', item: '排氣系統檢測', cost: 800 }
    ],
    healthTrend: [
      { month: '2024-03', value: 88 }, // 2024-02-23 定期保養
      { month: '2024-04', value: 86 },
      { month: '2024-05', value: 84 },
      { month: '2024-06', value: 90 }, // 2024-06-15 剎車片更換
      { month: '2024-07', value: 88 },
      { month: '2024-08', value: 86 },
      { month: '2024-09', value: 92 }, // 2024-09-10 定期保養
      { month: '2024-10', value: 90 },
      { month: '2024-11', value: 88 },
      { month: '2024-12', value: 86 },
      { month: '2025-01', value: 84 },
      { month: '2025-02', value: 82 },
      { month: '2025-03', value: 80 }
    ]
  },
  'VBN-6352': {
    plateNumber: 'VBN-6352',
    model: 'Mercedes-Benz GLC 2023',
    mileage: '38,500 km',
    maintenanceAlert: {
      message: '機油需更換、變速箱須注意，請盡速安排保養',
      type: 'critical'
    },
    lifePrediction: [
      { name: '變速箱', remaining: '60%', percentage: 60 },
      { name: '剎車片', remaining: '15,000 km', percentage: 85 },
      { name: '機油', remaining: '3,000 km', percentage: 50 }
    ],
    maintenanceItems: [
      { level: '緊急', item: '變速箱系統全面檢測', cost: 6500 },
      { level: '中等', item: '引擎電腦系統診斷', cost: 3800 },
      { level: '例行', item: '更換機油與濾清器', cost: 2200 }
    ],
    healthTrend: [
      { month: '2024-03', value: 75 }, // 2024-03-08 引擎電腦系統重置
      { month: '2024-04', value: 72 },
      { month: '2024-05', value: 70 },
      { month: '2024-06', value: 82 }, // 2024-06-15 剎車系統維修
      { month: '2024-07', value: 80 },
      { month: '2024-08', value: 77 },
      { month: '2024-09', value: 85 }, // 2024-09-10 定期保養
      { month: '2024-10', value: 82 },
      { month: '2024-11', value: 79 },
      { month: '2024-12', value: 76 },
      { month: '2025-01', value: 73 },
      { month: '2025-02', value: 70 },
      { month: '2025-03', value: 67 }
    ]
  },
  'MKO-7421': {
    plateNumber: 'MKO-7421',
    model: 'Subaru Forester 2020',
    mileage: '85,200 km',
    maintenanceAlert: {
      message: '機油需更換，請盡速安排保養',
      type: 'information'
    },
    lifePrediction: [
      { name: '剎車系統', remaining: '15,500 km', percentage: 85 },
      { name: '機油', remaining: '2,800 km', percentage: 45 },
      { name: '正時皮帶', remaining: '70,000 km', percentage: 90 }
    ],
    maintenanceItems: [
      { level: '中等', item: '更換機油與濾清器', cost: 1800 },
      { level: '中等', item: '全時四驅系統診斷', cost: 2500 },
      { level: '例行', item: '引擎冷卻系統檢查', cost: 1200 }
    ],
    healthTrend: [
      { month: '2024-03', value: 90 }, // 2024-02-03 定期保養
      { month: '2024-04', value: 88 },
      { month: '2024-05', value: 86 },
      { month: '2024-06', value: 92 }, // 2024-06-15 剎車系統維修
      { month: '2024-07', value: 90 },
      { month: '2024-08', value: 88 },
      { month: '2024-09', value: 95 }, // 2024-09-10 定期保養
      { month: '2024-10', value: 93 },
      { month: '2024-11', value: 91 },
      { month: '2024-12', value: 89 },
      { month: '2025-01', value: 87 },
      { month: '2025-02', value: 85 },
      { month: '2025-03', value: 83 }
    ]
  }

};