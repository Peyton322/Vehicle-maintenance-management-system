export const carsData = {
  'AZF-172': {
    plateNumber: 'AZF-172',
    model: 'Acura RDX 2020',
    mileage: '146,885 km',
    maintenanceAlert: {
      message: '煞車片磨損嚴重，建議在 800 km 內進行更換',
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
      message: '機油需要更換，建議在下次保養時進行',
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
      message: '輪胎磨損不均勻，建議進行輪胎調換',
      type: 'warning'
    },
    lifePrediction: [
      { name: '煞車片', remaining: '11,200 km', percentage: 85 },
      { name: '輪胎', remaining: '4,800 km', percentage: 45 },
      { name: '電池健康度', remaining: '90%', percentage: 90 }
    ],
    maintenanceItems: [
      { level: '中等', item: '輪胎調換', cost: 800 },
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
  }
};