export const customersHistory = {
    'ABC-123': {
      carInfo: {
        plate: 'ABC-123',
        model: 'Toyota Camry 2022',
        mileage: '42,000 km',
        owner: '陳大明',
        status: '處理中'
      },
      maintenanceStats: {
        yearlyCount: 8,
        yearlyExpense: 'NT$12,600'
      },
      maintenanceHistory: [
        {
          date: '2024/10/30',
          type: '故障維修',
          items: '機油更換、機油濾清器更換、輪軸脂抽',
          mileage: '42,000 km',
          cost: 'NT$ 2,500',
          mechanic: '李技師'
        },
        {
          date: '2024/8/30',
          type: '故障維修',
          items: '更換煞車片、煞車油更換',
          mileage: '42,000 km',
          cost: 'NT$ 2,500',
          mechanic: '李技師'
        }
      ]
    },
    'XYZ-789': {
      carInfo: {
        plate: 'XYZ-789',
        model: 'Honda Civic 2023',
        mileage: '15,000 km',
        owner: '林小明',
        status: '已完成'
      },
      maintenanceStats: {
        yearlyCount: 3,
        yearlyExpense: 'NT$5,400'
      },
      maintenanceHistory: [
        {
          date: '2024/12/01',
          type: '定期保養',
          items: '機油更換、輪胎檢查',
          mileage: '15,000 km',
          cost: 'NT$ 1,800',
          mechanic: '王技師'
        },
        {
          date: '2024/9/15',
          type: '故障維修',
          items: '電瓶更換',
          mileage: '12,000 km',
          cost: 'NT$ 3,600',
          mechanic: '張技師'
        }
      ]
    },
    'DEF-456': {
      carInfo: {
        plate: 'DEF-456',
        model: 'Tesla Model 3 2023',
        mileage: '30,000 km',
        owner: '王小美',
        status: '待處理'
      },
      maintenanceStats: {
        yearlyCount: 5,
        yearlyExpense: 'NT$8,200'
      },
      maintenanceHistory: [
        {
          date: '2024/11/15',
          type: '定期保養',
          items: '軟體更新、空調濾網更換',
          mileage: '30,000 km',
          cost: 'NT$ 1,500',
          mechanic: '陳技師'
        },
        {
          date: '2024/7/20',
          type: '故障維修',
          items: '輪胎更換、四輪定位',
          mileage: '25,000 km',
          cost: 'NT$ 6,700',
          mechanic: '李技師'
        }
      ]
    }
  };