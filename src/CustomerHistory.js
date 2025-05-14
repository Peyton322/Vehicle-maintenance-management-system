import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Table, Card, Button } from 'antd';
import { customersHistory } from './customerHistoryData';  // 導入歷史資料
import './CustomerHistory.css';
import Footer from './Footer.js';

const CustomerHistory = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // 根據車牌號碼獲取對應的客戶資料
  const customerDetail = customersHistory[id];

  // 如果找不到對應的客戶資料，顯示錯誤信息
  if (!customerDetail) {
    return (
      <div style={{ padding: '24px' }}>
        <Button onClick={() => navigate(-1)} style={{ marginBottom: '20px' }}>
          返回
        </Button>
        <Card>
          <h2>找不到客戶資料</h2>
          <p>沒有找到車牌號碼 {id} 的相關資料</p>
        </Card>
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
      title: '里程數',
      dataIndex: 'mileage',
      key: 'mileage',
    },
    {
      title: '維修費用',
      dataIndex: 'cost',
      key: 'cost',
    },
    {
      title: '維修技師',
      dataIndex: 'mechanic',
      key: 'mechanic',
    },
  ];

  return (
    <div>
      <div>
        <div style={{
          width: '100%',
          height: '50px',
          backgroundColor: '#007E87', // 您可以自定義顏色，這是一個藍色
          marginBottom: '15px',
        }}>
        </div>
      </div>
      <div className="customer-history">
        <Button onClick={() => navigate(-1)} className="back-button">
          返回
        </Button>

        <Card title={`🚗${customerDetail.carInfo.plate}   ${customerDetail.carInfo.model}`} className="info-card">
          <div className="info-grid">
            <div>
              <h4>總里程數</h4>
              <p>{customerDetail.carInfo.mileage}</p>
            </div>
            <div>
              <h4>車主姓名</h4>
              <p>
                {customerDetail.carInfo.owner.length > 1
                  ? customerDetail.carInfo.owner[0] + 'O' + customerDetail.carInfo.owner.slice(2)
                  : customerDetail.carInfo.owner}
              </p>
            </div>
            <div>
              <h4>目前狀況</h4>
              <p>{customerDetail.carInfo.status}</p>
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
          dataSource={customerDetail.maintenanceHistory}
          scroll={{ x: true }}
          pagination={{ pageSize: 8 }} // 每頁顯示 5 筆資料
        />
      </div>
      <Footer />
    </div>
  );
};

export default CustomerHistory;