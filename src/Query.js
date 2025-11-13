import axios from 'axios';
import axiosInstance from './utils/axiosInstance';
import React, { useState, useEffect } from 'react';
import { Button, Input, Select, Form , message} from 'antd';
import { useNavigate } from 'react-router-dom';
import { customerData } from './customerData';
import { UpOutlined } from '@ant-design/icons'; // 引入上箭頭圖標
import Footer from './Footer';
import './query.css'
const Query = () => {
  const [activeQuery, setActiveQuery] = useState('customer'); // 初始值設為 'customer'
  // 歷史資料-客戶查詢
  const [searchName, setSearchName] = useState(''); // 宣告一個新的 state 變數，我們稱作為「searchName」。
  const [searchPhone, setSearchPhone] = useState('');
  const [searchStatus, setSearchStatus] = useState('');
  const [showTopButton, setShowTopButton] = useState(false); // 控制按鈕顯示隱藏
  // 維修-車牌查詢
  const [plateNumber, setPlateNumber] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false); // 新增載入狀態
  const navigate = useNavigate();

  //處理搜尋
  const handleSearch = (values) => {
    setSearchName(values.name || '');
    setSearchPhone(values.phone || '');
    setSearchStatus(values.status || '');
    setPlateNumber(values.plate || '');
  };

  // 過濾邏輯
  const filteredCustomers = customerData.filter((customer) => {
    const nameMatch = searchName ? customer.name.includes(searchName) : true;
    const phoneMatch = searchPhone ? customer.phone.includes(searchPhone) : true;
    const plateMatch = plateNumber ? customer.carInfo.plate.includes(plateNumber) : true;
    const statusMatch = searchStatus ? customer.status === searchStatus : true;
    return nameMatch && phoneMatch && statusMatch && plateMatch;
  });

  const handleGoClick = async () => {
    // 表單驗證
    if (!plateNumber.trim()) {
      message.error('請輸入車牌號碼');
      return;
    }

    // 如果沒有輸入描述，使用預設值 "無"
    const finalDescription = description.trim() || '無';

    setLoading(true); // 開始載入

    try {
      // 發送 POST 請求到 Flask 後端
      const response = await axiosInstance.post('/predict', {
        plateNumber: plateNumber.trim(),
        description: finalDescription
      }, {
        timeout: 30000 // 30秒超時(模型運算可能需要較長時間)
      });

      // 檢查回應
      if (response.data.success) {
        message.success('預測完成！');

        // 將預測結果傳遞到下一個頁面
        const encodedDescription = encodeURIComponent(finalDescription);
        navigate(`/car-status/${plateNumber}`, {
          state: {
            prediction: response.data.prediction,
            confidence: response.data.confidence,
            description: finalDescription
          }
        });
      } else {
        message.error(response.data.error || '預測失敗，請稍後再試');
      }

    } catch (error) {
      console.error('API 請求錯誤:', error);

      // 詳細錯誤處理
      if (error.response) {
        // 伺服器回應錯誤 (4xx, 5xx)
        const errorMsg = error.response.data?.error || '伺服器錯誤';
        message.error(`錯誤 ${error.response.status}: ${errorMsg}`);
      } else if (error.request) {
        // 請求已發送但無回應
        message.error('無法連接到伺服器，請檢查網路連線');
      } else if (error.code === 'ECONNABORTED') {
        // 請求超時
        message.error('請求超時，模型運算時間過長，請稍後再試');
      } else {
        // 其他錯誤
        message.error('發生未知錯誤，請稍後再試');
      }
    } finally {
      setLoading(false); // 結束載入
    }
  };

  // 監聽滾動事件，決定是否顯示返回頂部按鈕
  useEffect(() => {
    const handleScroll = () => {
      // 當頁面向下滾動超過 300px 時顯示按鈕
      if (window.scrollY > 300) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };

    // 添加滾動事件監聽器
    window.addEventListener('scroll', handleScroll);

    // 清理函數，移除事件監聽器
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 滾動回頂部的函數
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // 平滑滾動效果
    });
  };
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
                label="車牌查詢"
                name="plate"
              >
                <Input placeholder="輸入車牌號碼..." />
              </Form.Item>


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
                    { value: '優良', label: '優良' },
                    { value: '良好', label: '良好' },
                    { value: '不佳', label: '不佳' }
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
              {filteredCustomers.map((customer, index) => {
                const anonymizedName = customer.name.length > 1
                  ? customer.name[0] + 'O' + customer.name.slice(2)
                  : customer.name;
                return (
                  <div key={index} className="customer-card">
                    <div className="customer-name">{anonymizedName}</div>
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
                );
              })}
              {filteredCustomers.length === 0 && (
                <div style={{ textAlign: 'center', padding: '20px' }}>
                  未找到符合條件的客戶資料
                </div>
              )}
            </div>
          </div>

        ) : (
          // Maintenance Query Form
          <div style={{ minHeight: '64.6vh' }}>
            <Form layout="vertical">
              <Form.Item
                label="查詢車牌號碼"
                required
                validateStatus={!plateNumber.trim() && loading ? 'error' : ''}
                help={!plateNumber.trim() && loading ? '請輸入車牌號碼' : ''}
              >
                <Input
                  placeholder="請輸入車牌號碼"
                  value={plateNumber}
                  onChange={(e) => setPlateNumber(e.target.value)}
                  disabled={loading}
                  maxLength={10}
                />
              </Form.Item>

              <Form.Item
                label="輸入使用者故障狀況描述（可選）"
              >
                <Input.TextArea
                  placeholder="請詳細描述車輛故障情況，例如：引擎異響、煞車異常等（不輸入則預設為「無」）"
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  disabled={loading}
                  maxLength={500}
                  showCount
                />
              </Form.Item>

              <Form.Item>
                <Button
                  className='button'
                  type="primary"
                  style={{ width: '100%' }}
                  onClick={handleGoClick}
                  loading={loading}
                  disabled={loading}
                >
                  {loading ? '模型運算中...' : '開始預測'}
                </Button>
              </Form.Item>
            </Form>
          </div>
        )}
      </div>
      {/* 返回頂部按鈕 */}
      {showTopButton && (
        <div
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '90px', // 位於 footer 上方
            right: '20px',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: '#007E87',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
            zIndex: 10,  // 確保在其他元素上方
            transition: 'all 0.3s ease',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#00989F';
            e.currentTarget.style.transform = 'translateY(-3px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#007E87';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <UpOutlined style={{ fontSize: '18px' }} />
        </div>
      )}

      <div style={{
        position: 'fixed', // 改為 fixed，確保滾動時背景跟隨
        bottom: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${require('./images/car.jpg')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
        backgroundRepeat: 'no-repeat',
        zIndex: -1 // 確保在內容下方
      }}>
        {/* 漸層遮罩 */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0.95) 45%, rgba(255,255,255,0.7) 65%, rgba(198, 190, 190, 0.5) 90%)',
        }}></div>
      </div>

      <Footer />
    </div>
  );
};

export default Query;