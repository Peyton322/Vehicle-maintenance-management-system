export const customersHistory = {
  'AZF-172': {
    carInfo: {
      plate: 'AZF-172',
      model: 'ACURA',
      mileage: '91,244 miles',
      owner: '陳政瑋',
      status: '處理中',
      carID:'0196QH'
    },
    maintenanceStats: {
      yearlyCount: 8,
      yearlyExpense: 'NT$12,600'
    },
    maintenanceHistory: [
      {
        date: '2024-07-13',
        type: '故障維修',
        items: '機油更換、機油濾清器更換、輪軸脂抽',
        mileage: '90,322 miles',
        cost: 'NT$ 2,500',
        mechanic: '李技師'
      },
      {
        date: '2024/1/30',
        type: '故障維修',
        items: '更換煞車片、煞車油更換',
        mileage: '88,500 miles',
        cost: 'NT$ 2,500',
        mechanic: '李技師'
      }
    ]
  },
  'UEI-910': {
    carInfo: {
      plate: 'UEI-910',
      model: 'AUDI',
      mileage: '275,398 miles',
      owner: '康雅惠',
      status: '已完成',
      carID:'0171YQ'
    },
    maintenanceStats: {
      yearlyCount: 3,
      yearlyExpense: 'NT$5,400'
    },
    maintenanceHistory: [
      {
        date: '2024-06-13',
        type: '定期保養',
        items: '機油更換、輪胎檢查',
        mileage: '268,000 miles',
        cost: 'NT$ 1,800',
        mechanic: '王技師'
      },
      {
        date: '2024/1/15',
        type: '故障維修',
        items: '電瓶更換',
        mileage: '261,500 miles',
        cost: 'NT$ 3,600',
        mechanic: '張技師'
      }
    ]
  },
  'APW-0322': {
    carInfo: {
      plate: 'APW-0322',
      model: 'TOYOTA',
      mileage: '358,485 miles',
      owner: '林玉芳',
      status: '待處理',
      carID:'0279VE'
    },
    maintenanceStats: {
      yearlyCount: 5,
      yearlyExpense: 'NT$8,200'
    },
    maintenanceHistory: [
      {
        date: '2024-08-26',
        type: '定期保養',
        items: '軟體更新、空調濾網更換',
        mileage: '355,000 miles',
        cost: 'NT$ 1,500',
        mechanic: '陳技師'
      },
      {
        date: '2024/7/20',
        type: '故障維修',
        items: '輪胎更換、四輪定位',
        mileage: '348,200 miles',
        cost: 'NT$ 6,700',
        mechanic: '李技師'
      }
    ]
  }
};