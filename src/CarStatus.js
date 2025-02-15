import React from 'react';
import { Card, Progress, Button } from 'antd';
import { useParams, useLocation ,useNavigate} from 'react-router-dom';

import { carsData } from './carData';
import './carStatus.css';

const CarStatus = () => {
    const { plateNumber } = useParams();
    const location = useLocation();
    const description = new URLSearchParams(location.search).get('description');
    const navigate = useNavigate();

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
                                    <span>預估剩餘壽命: {item.remaining}</span>
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
                    <div className="health-trend">
                        {carData.healthTrend.map((point, index) => (
                            <div key={index} className="trend-bar">
                                <div
                                    className="bar"
                                    style={{
                                        height: `${point.value * 2}px`,
                                        backgroundColor: point.value < 70 ? '#DC2626' : '#007E87'
                                    }}
                                />
                                <div className="bar-label">{point.month}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <Button className='button'>
                    下一步
                </Button>
            </div>
        </div>
    );
};

export default CarStatus;