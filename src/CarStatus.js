import React from 'react';
import { Card, Progress, Button } from 'antd';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { carsData } from './carData';
import Footer from './Footer.js';
import './carStatus.css';
import './repairConfirmation.js'
const CarStatus = () => {
    const { plateNumber } = useParams();
    const location = useLocation();
    const description = new URLSearchParams(location.search).get('description');
    const navigate = useNavigate();
    const handleGoClick = () => {
        /*用 if 檢查車牌號碼是否存在（不是空值）*/
        if (plateNumber.trim()) { /*trim() 用來去除字串前後的空格*/
            /*輸入使用者故障狀況描述*/
            const encodedDescription = encodeURIComponent(description.trim()); /*encodeURIComponent() 將文字轉換成 URL 安全的格式*/
            navigate(`/repairConfirmation/${plateNumber}?description=${encodedDescription}`); /*跳轉到 car-status 頁面 同時傳入兩個參數：plateNumber（作為路徑參數）encodedDescription（作為查詢參數）*/
        }
    };
    const carData = carsData[plateNumber] || {
        plateNumber: '未找到車輛',
        model: '未知',
        mileage: '未知',
        maintenanceAlert: {
            message: '無法找到該車輛的資料',
            type: 'error'
        },
        lifePrediction: [],
        maintenanceItems: [],
        healthTrend: []
    };

    const getMaintenanceClass = (level) => {
        switch (level) {
            case '緊急': return 'urgent';
            case '中等': return 'medium';
            case '例行': return 'routine';
            default: return '';
        }
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
            <Button className='retutnButton' onClick={() => navigate(-1)} >
                返回
            </Button>
            <div className="car-status-container">
                {/* 車輛基本資訊 */}

                <div className="status-card">
                    <h2 className="status-title">車主資訊</h2>
                    <div className="info-grid">
                        <div>
                            <div className="info-label">車牌號碼</div>
                            <div className="info-value">{carData.plateNumber}</div>
                        </div>
                        <div>
                            <div className="info-label">車型</div>
                            <div className="info-value">{carData.model}</div>
                        </div>
                        <div>
                            <div className="info-label">里程數</div>
                            <div className="info-value">{carData.mileage}</div>
                        </div>
                    </div>
                </div>

                {/* 警告信息 */}
                <div className="alert-box">
                    <p className="alert-title">需要立即注意</p>
                    <p>{carData.maintenanceAlert.message}</p>
                </div>

                {/* 壽命預測 */}
                <div className="status-card">
                    <h2 className="status-title">壽命預測</h2>
                    <div className="space-y-4">
                        {carData.lifePrediction.map((item, index) => (
                            <div key={index} className="mb-4">
                                <div className="progress-label">
                                    <span>{item.name}</span>
                                    <span>預估剩餘壽命大約 : {item.remaining}</span>
                                </div>
                                <Progress percent={item.percentage} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* 建議維修項目 */}
                <div className="status-card">
                    <h2 className="status-title">建議維修項目</h2>
                    <div>
                        {carData.maintenanceItems.map((item, index) => (
                            <div
                                key={index}
                                className={`maintenance-item ${getMaintenanceClass(item.level)}`}
                            >
                                <div className="item-content">
                                    <span className="item-name">{item.item}</span>
                                    <span className="item-cost">預估費用: {item.cost}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 客戶描述問題 */}
                <div className="status-card">
                    <h2 className="status-title">客戶描述問題</h2>
                    <p>{description ? description : '無'}</p>
                </div>

                {/* 整體健康趨勢 */}
                <div className="status-card">
                    <h2 className="status-title">整體健康趨勢</h2>
                    <LineChart width={700} height={300} data={carData.healthTrend}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis domain={[0, 100]} />
                        <Tooltip formatter={(value, name) => [value, '狀態']} />
                        <Line type="monotone" dataKey="value" stroke="#007E87" activeDot={{ r: 8 }} />
                    </LineChart>
                </div>
                <Button className='button' onClick={handleGoClick}>
                    下一步
                </Button>

            </div>
            <Footer />

        </div>
    );
};

export default CarStatus;