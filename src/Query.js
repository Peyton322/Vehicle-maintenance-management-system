import React, { useState } from 'react';
import { Button, Input, Select, Form } from 'antd';
import { useNavigate } from 'react-router-dom';
import { customerData } from './customerData';
import './query.css'
const Query = () => {
  const [activeQuery, setActiveQuery] = useState('customer'); // 初始值設為 'customer'
  // 歷史資料-客戶查詢
  const [searchName, setSearchName] = useState(''); // 宣告一個新的 state 變數，我們稱作為「searchName」。
  const [searchPhone, setSearchPhone] = useState('');
  const [searchStatus, setSearchStatus] = useState('');

  //處理搜尋
  const handleSearch = (values) => {
    setSearchName(values.name || '');
    setSearchPhone(values.phone || '');
    setSearchStatus(values.status || '');
  };

  // 過濾邏輯
  const filteredCustomers = customerData.filter((customer) => {
    const nameMatch = searchName ? customer.name.includes(searchName) : true;
    const phoneMatch = searchPhone ? customer.phone.includes(searchPhone) : true;
    const statusMatch = searchStatus ? customer.status === searchStatus : true;
    return nameMatch && phoneMatch && statusMatch;
  });

  // 維修-車牌查詢
  const [plateNumber, setPlateNumber] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleGoClick = () => {
    /*用 if 檢查車牌號碼是否存在（不是空值）*/
    if (plateNumber.trim()) { /*trim() 用來去除字串前後的空格*/
      /*輸入使用者故障狀況描述*/
      const encodedDescription = encodeURIComponent(description.trim()); /*encodeURIComponent() 將文字轉換成 URL 安全的格式*/
      navigate(`/car-status/${plateNumber}?description=${encodedDescription}`); /*跳轉到 car-status 頁面 同時傳入兩個參數：plateNumber（作為路徑參數）encodedDescription（作為查詢參數）*/
    }
  };
  return (
    <div>
      <div className='title'>
        <img
          src={require("./images/front-car.png")}
          style={{
            width: '50px', // 設置固定寬度
            height: '50px',
            objectFit: 'contain',
            objectPosition: 'center',
          }}
          alt="maintenance"
        />
        <h1 style={{ margin: 0 }}>車輛維修管理系統</h1>
      </div>
      <div className='query_container'>
        {/* Button Group */}
        <div className="button-group">
          {/*當 activeQuery === 'customer' 為真時，會添加 'active' class 這樣可以通過 CSS 來改變按鈕的外觀，表示當前是否處於激活狀態*/}
          <Button
            className={`query-button ${activeQuery === 'customer' ? 'active' : ''}`}
            onClick={() => setActiveQuery('customer')} /*當點擊按鈕時，會觸發函數，將 activeQuery 設置為 'customer'*/
            icon={<span>👤</span>}
          >
            歷史資料-客戶查詢
          </Button>
          <Button
            className={`query-button ${activeQuery === 'maintenance' ? 'active' : ''}`}
            onClick={() => setActiveQuery('maintenance')}
            icon={<span>🚗</span>}
          >
            維修-車牌查詢
          </Button>
        </div>

        {/* Conditional Content */}
        {activeQuery === 'customer' ? (
          // Customer Query Form
          <div>
            <Form
              layout="vertical"
              onFinish={handleSearch}
            >
              <Form.Item
                label="姓名查詢"
                name="name"
              >
                <Input placeholder="輸入姓名..." />
              </Form.Item>

              <Form.Item
                label="電話查詢"
                name="phone"
              >
                <Input placeholder="輸入聯絡電話..." />
              </Form.Item>

              <Form.Item
                label="狀態查詢"
                name="status"
              >
                <Select
                  placeholder="狀態..."
                  options={[
                    { value: '待處理', label: '待處理' },
                    { value: '處理中', label: '處理中' },
                    { value: '已完成', label: '已完成' }
                  ]}
                />
              </Form.Item>

              <Form.Item>
                <Button className='button' type="primary" htmlType="submit" style={{ width: '100%' }}>
                  查詢
                </Button>
              </Form.Item>
            </Form>

            <div className="customer-list">
              <h2>所有客戶資料</h2>
              {filteredCustomers.map((customer, index) => (
                <div key={index} className="customer-card">
                  <div className="customer-name">{customer.name}</div>
                  <div className="customer-phone">📞 {customer.phone}</div>
                  <div className="customer-car">
                    🚗 {customer.carInfo.plate} {customer.carInfo.model}
                  </div>
                  <div className="maintenance-info">
                    <div>最近維修：{customer.lastMaintenance}</div>
                    <div>狀態：{customer.status}</div>
                  </div>
                  <Button className="detail-button"
                    onClick={() => navigate(`/customer-history/${customer.carInfo.plate}`)}>
                    查看歷史資料</Button>
                </div>
              ))}
              {filteredCustomers.length === 0 && (
                <div style={{ textAlign: 'center', padding: '20px' }}>
                  未找到符合條件的客戶資料
                </div>
              )}
            </div>
          </div>

        ) : (
          // Maintenance Query Form
          <Form layout="vertical">
            <Form.Item label="查詢車牌號碼">
              <Input
                placeholder="license plate number"
                value={plateNumber}
                onChange={(e) => setPlateNumber(e.target.value)}
              />
            </Form.Item>

            <Form.Item label="輸入使用者故障狀況描述">
              <Input.TextArea
                placeholder="user needs"
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Item>

            <Form.Item>
              <Button
                className='button'
                type="primary"
                style={{ width: '100%' }}
                onClick={handleGoClick}
              >
                Go
              </Button>
            </Form.Item>
          </Form>
        )}
      </div>
    </div>
  );
};

export default Query;