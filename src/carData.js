export const carsData = {
    'ABC-123': {
      plateNumber: 'ABC-123',
      model: 'Toyota Camry 2022',
      mileage: '45,000km',
      maintenanceAlert: {
        message: '煞車片磨損嚴重，建議在 500km 內進行更換',
        type: 'warning'
      },
      lifePrediction: [
        { name: '煞車片', remaining: '500km', percentage: 10 },
        { name: '機油', remaining: '2,500km', percentage: 65 },
        { name: '輪胎', remaining: '8,000km', percentage: 83 }
      ],
      maintenanceItems: [
        { level: '緊急', item: '更換煞車片', cost: 3500 },
        { level: '中等', item: '更換機油', cost: 1200 },
        { level: '例行', item: '檢查輪胎胎壓', cost: 100 }
      ],
      healthTrend: [
        { month: '1月', value: 95 },
        { month: '2月', value: 85 },
        { month: '3月', value: 80 },
        { month: '4月', value: 75 },
        { month: '5月', value: 70 },
        { month: '6月', value: 65 }
      ]
    },
    'XYZ-789': {
      plateNumber: 'XYZ-789',
      model: 'Honda Civic 2023',
      mileage: '15,000km',
      maintenanceAlert: {
        message: '機油需要更換，建議在下次保養時進行',
        type: 'warning'
      },
      lifePrediction: [
        { name: '煞車片', remaining: '5,000km', percentage: 75 },
        { name: '機油', remaining: '1,000km', percentage: 25 },
        { name: '輪胎', remaining: '10,000km', percentage: 90 }
      ],
      maintenanceItems: [
        { level: '中等', item: '更換機油', cost: 1200 },
        { level: '例行', item: '輪胎調胎', cost: 500 }
      ],
      healthTrend: [
        { month: '1月', value: 98 },
        { month: '2月', value: 95 },
        { month: '3月', value: 90 },
        { month: '4月', value: 85 },
        { month: '5月', value: 80 },
        { month: '6月', value: 75 }
      ]
    },
    'DEF-456': {
      plateNumber: 'DEF-456',
      model: 'Tesla Model 3 2023',
      mileage: '30,000km',
      maintenanceAlert: {
        message: '輪胎磨損不均勻，建議進行輪胎調換',
        type: 'warning'
      },
      lifePrediction: [
        { name: '煞車片', remaining: '7,000km', percentage: 85 },
        { name: '輪胎', remaining: '3,000km', percentage: 45 },
        { name: '電池健康度', remaining: '充電容量 90%', percentage: 90 }
      ],
      maintenanceItems: [
        { level: '中等', item: '輪胎調換', cost: 800 },
        { level: '例行', item: '系統軟體更新', cost: 0 },
        { level: '例行', item: '空調濾網更換', cost: 500 }
      ],
      healthTrend: [
        { month: '1月', value: 100 },
        { month: '2月', value: 98 },
        { month: '3月', value: 95 },
        { month: '4月', value: 90 },
        { month: '5月', value: 88 },
        { month: '6月', value: 85 }
      ]
    }
  };