import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Table, Card, Button, Spin, message } from 'antd';
import axiosInstance from './utils/axiosInstance';
import './CustomerHistory.css';

const CustomerHistory = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [customerDetail, setCustomerDetail] = useState(null);
  const [historyRecords, setHistoryRecords] = useState([]);

  // 名字池 - 與 Query.js 相同
  const namePool = [
    '王小明', '李大華', '張美玲', '陳志強', '林雅婷',
    '黃俊傑', '吳淑芬', '劉建國', '蔡佩君', '鄭宇軒',
    '楊欣怡', '許文賢', '謝婉婷', '洪志豪', '周思穎',
    '徐建宏', '孫雅琪', '高明哲', '郭雅玲', '梁志偉',
    '顏淑華', '潘建成', '呂佳蓉', '曾俊宏', '彭雅婷',
    '游志明', '賴淑芬', '詹建華', '方雅琳', '石志強'
  ];

  // 為車牌號碼生成一致的名字（與 Query.js 相同的邏輯）
  const getNameForPlate = (plateNumber) => {
    let hash = 0;
    for (let i = 0; i < plateNumber.length; i++) {
      hash = plateNumber.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % namePool.length;
    return namePool[index];
  };

  // 從後端 API 獲取資料
  useEffect(() => {
    const fetchHistoryData = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get(`/history?plateNumber=${id}`);

        if (response.data.success) {
          const records = response.data.records;

          if (records.length === 0) {
            setCustomerDetail(null);
            return;
          }

          // 取得車輛基本資訊（從第一筆記錄）
          const firstRecord = records[0];

          // 使用與 Query.js 相同的名字生成邏輯
          const ownerName = getNameForPlate(firstRecord.CarID);

          const carInfo = {
            plate: firstRecord.CarID,
            model: `${firstRecord.CarBrand || '未知品牌'} ${firstRecord.CarStyle || '未知型號'} ${firstRecord.CarYear || ''}`,
            owner: ownerName, // 使用生成的名字
          };

          // 先按日期排序（最新的在前）
          const sortedRecords = records.sort((a, b) => {
            const dateA = new Date(a.CreateDate || 0);
            const dateB = new Date(b.CreateDate || 0);
            return dateB - dateA; // 降冪排序（最新在前）
          });

          // 將同一天的維修項目合併
          const groupedByDate = {};
          sortedRecords.forEach(record => {
            const date = record.CreateDate || '未知日期';
            if (!groupedByDate[date]) {
              groupedByDate[date] = {
                items: [],
                totalCost: 0
              };
            }
            groupedByDate[date].items.push(record.GoodsName || '未知項目');
            groupedByDate[date].totalCost += Math.floor(Math.random() * 1000) + 500;
          });

          // 轉換成表格數據格式
          const maintenanceHistory = Object.entries(groupedByDate).map(([date, data], index) => ({
            key: index,
            date: date,
            type: '定期保養',
            items: data.items.join('、'), // 用頓號分隔多個項目
            cost: `NT$ ${data.totalCost}`
          }));

          // 計算統計資訊
          const maintenanceStats = {
            yearlyCount: maintenanceHistory.length,
            yearlyExpense: `NT$ ${maintenanceHistory.reduce((sum, item) => {
              const cost = parseInt(item.cost.replace('NT$ ', ''));
              return sum + cost;
            }, 0)}`
          };

          setCustomerDetail({
            carInfo,
            maintenanceStats,
            maintenanceHistory
          });
          setHistoryRecords(maintenanceHistory);
        }
      } catch (error) {
        console.error('獲取歷史資料失敗:', error);
        message.error('無法載入歷史資料，請稍後再試');
        setCustomerDetail(null);
      } finally {
        setLoading(false);
      }
    };

    fetchHistoryData();
  }, [id]);

  // 載入中狀態
  if (loading) {
    return (
      <div>
        <div style={{
          width: '100%',
          height: '50px',
          backgroundColor: '#6b7280',
          marginBottom: '15px',
        }}></div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: 'calc(100vh - 65px)',
          background: 'white',
          borderRadius: '12px',
          margin: '20px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
        }}>
          <Spin size="large" tip="載入歷史資料中..." />
        </div>
      </div>
    );
  }

  // 如果找不到對應的客戶資料，顯示錯誤信息
  if (!customerDetail) {
    return (
      <div>
        <div style={{
          width: '100%',
          height: '50px',
          backgroundColor: '#6b7280',
          marginBottom: '15px',
        }}></div>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px' }}>
          <Button onClick={() => navigate(-1)} className="back-button">
            返回
          </Button>
          <Card style={{
            textAlign: 'center',
            padding: '40px',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔍</div>
            <h2 style={{ color: '#374151', marginBottom: '12px' }}>找不到客戶資料</h2>
            <p style={{ color: '#6b7280', fontSize: '16px' }}>沒有找到車牌號碼 <strong>{id}</strong> 的相關資料</p>
          </Card>
        </div>
      </div>
    );
  }

  const columns = [
    {
      title: '日期',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: '維修類型',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: '維修項目',
      dataIndex: 'items',
      key: 'items',
    },
    {
      title: '維修費用',
      dataIndex: 'cost',
      key: 'cost',
    },
  ];

  return (
    <div>
      <div>
        <div style={{
          width: '100%',
          height: '50px',
          backgroundColor: '#6b7280',
          marginBottom: '15px',
        }}>
        </div>
      </div>
      <div className="customer-history">
        <Button onClick={() => navigate(-1)} className="back-button">
          返回
        </Button>

        <Card className="info-card">
          <div className="info-grid">
            <div>
              <h4>車主姓名</h4>
              <p>
                {customerDetail.carInfo.owner.length > 1
                  ? customerDetail.carInfo.owner[0] + 'O' + customerDetail.carInfo.owner.slice(2)
                  : customerDetail.carInfo.owner}
              </p>
            </div>
            <div>
              <h4>車牌</h4>
              <p>{customerDetail.carInfo.plate}</p>
            </div>
            <div>
              <h4>車型</h4>
              <p>{customerDetail.carInfo.model}</p>
            </div>
          </div>
        </Card>

        <div className="stats-grid">
          <Card className="info-card">
            <h4>維修次數</h4>
            <p className="stats-number">{customerDetail.maintenanceStats.yearlyCount}次</p>
          </Card>
          <Card className="info-card">
            <h4>年度維修支出</h4>
            <p className="stats-number">{customerDetail.maintenanceStats.yearlyExpense}</p>
          </Card>
        </div>

        <Table
          columns={columns}
          dataSource={historyRecords}
          scroll={{ x: true }}
          pagination={{ pageSize: 8 }} // 每頁顯示 8 筆資料
        />
      </div>
    </div>
  );
};

export default CustomerHistory;