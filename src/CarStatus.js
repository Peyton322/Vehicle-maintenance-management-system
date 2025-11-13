import React, { useState, useEffect } from 'react';
import { Card, Progress, Button, Spin, message } from 'antd';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import axiosInstance from './utils/axiosInstance';
import Footer from './Footer.js';
import './carStatus.css';
import './repairConfirmation.js'

const CarStatus = () => {
    const { plateNumber } = useParams();
    const location = useLocation();
    // 從 URL 查詢參數或 location.state 獲取 description
    const urlDescription = new URLSearchParams(location.search).get('description');
    const stateDescription = location.state?.description;
    const description = urlDescription || stateDescription || '';
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [carData, setCarData] = useState(null);
    // 從後端獲取數據
    useEffect(() => {
        const fetchCarData = async () => {
            try {
                setLoading(true);
                // 使用 POST 方法並傳送車牌號碼和描述
                const response = await axiosInstance.post('/predict', {
                    plateNumber: plateNumber,
                    description: description || '無特別描述'
                });
                
                if (response.data.success) {
                    const predictions = response.data.predictions;
                    
                    // 檢查是否有預測數據
                    if (!predictions || predictions.length === 0) {
                        message.warning('未找到該車輛的預測資料');
                        setCarData({
                            plateNumber: plateNumber,
                            model: '未知',
                            maintenanceAlert: {
                                message: '無法找到該車輛的預測資料',
                                type: 'error'
                            },
                            lifePrediction: [],
                            maintenanceItems: [],
                            healthTrend: []
                        });
                        return;
                    }
                    
                    // 處理零件故障率預測數據
                    const partFailureMap = {};
                    predictions.forEach(pred => {
                        const partName = pred.goodsName;
                        const failureProb = (pred.failureProb * 100).toFixed(1);
                        
                        if (!partFailureMap[partName] || partFailureMap[partName] < failureProb) {
                            partFailureMap[partName] = failureProb;
                        }
                    });
                    
                    // 轉換成圖表數據格式
                    const lifePrediction = Object.entries(partFailureMap).map(([name, percentage]) => ({
                        name: name,
                        percentage: parseFloat(percentage)
                    }));
                    
                    // 根據故障率生成維修建議
                    const maintenanceItems = lifePrediction
                        .filter(item => item.percentage > 20) // 只顯示故障率大於20%的
                        .map(item => {
                            let level = '例行';
                            let cost = 1000;
                            
                            if (item.percentage >= 70) {
                                level = '緊急';
                                cost = Math.floor(Math.random() * 3000) + 3000; // 3000-6000
                            } else if (item.percentage >= 40) {
                                level = '中等';
                                cost = Math.floor(Math.random() * 2000) + 1500; // 1500-3500
                            } else {
                                cost = Math.floor(Math.random() * 1000) + 500; // 500-1500
                            }
                            
                            return {
                                level: level,
                                item: `檢修/更換 ${item.name}`,
                                cost: cost
                            };
                        })
                        .sort((a, b) => {
                            const levelOrder = { '緊急': 0, '中等': 1, '例行': 2 };
                            return levelOrder[a.level] - levelOrder[b.level];
                        });
                    
                    // 獲取車型資訊（從第一筆預測記錄）
                    const firstPred = predictions[0];
                    const carAgeYears = firstPred.carAgeYears || 0;
                    const currentYear = new Date().getFullYear();
                    const carYear = currentYear - carAgeYears;
                    
                    // 從車牌號碼推斷車型（這裡可以根據實際情況調整）
                    const carBrand = '未知品牌';
                    const carStyle = '未知型號';
                    
                    // 生成健康趨勢數據（模擬數據，基於故障率）
                    const avgFailureRate = lifePrediction.reduce((sum, item) => sum + item.percentage, 0) / lifePrediction.length;
                    const healthScore = Math.max(0, 100 - avgFailureRate);
                    
                    const healthTrend = [];
                    for (let i = 11; i >= 0; i--) {
                        const date = new Date();
                        date.setMonth(date.getMonth() - i);
                        const month = date.toISOString().slice(0, 7);
                        const randomVariation = Math.floor(Math.random() * 10) - 5;
                        const value = Math.max(0, Math.min(100, healthScore + randomVariation));
                        healthTrend.push({ month, value: Math.floor(value) });
                    }
                    
                    // 生成警告訊息
                    let alertMessage = '無';
                    let alertType = 'info';
                    
                    if (maintenanceItems.length > 0) {
                        const urgentItems = maintenanceItems.filter(item => item.level === '緊急');
                        const mediumItems = maintenanceItems.filter(item => item.level === '中等');
                        
                        if (urgentItems.length > 0) {
                            alertMessage = `緊急：${urgentItems.map(item => item.item).join('、')}`;
                            alertType = 'error';
                        } else if (mediumItems.length > 0) {
                            alertMessage = `${mediumItems.map(item => item.item).join('、')}需注意`;
                            alertType = 'warning';
                        } else {
                            alertMessage = '建議進行例行保養';
                            alertType = 'info';
                        }
                    }
                    
                    setCarData({
                        plateNumber: plateNumber,
                        model: `${carBrand} ${carStyle} ${carYear}`,
                        maintenanceAlert: {
                            message: alertMessage,
                            type: alertType
                        },
                        lifePrediction: lifePrediction,
                        maintenanceItems: maintenanceItems,
                        healthTrend: healthTrend
                    });
                }
            } catch (error) {
                console.error('獲取車輛資料失敗:', error);
                message.error('無法載入車輛資料，請稍後再試');
                setCarData({
                    plateNumber: plateNumber,
                    model: '未知',
                    maintenanceAlert: {
                        message: '無法連接到伺服器',
                        type: 'error'
                    },
                    lifePrediction: [],
                    maintenanceItems: [],
                    healthTrend: []
                });
            } finally {
                setLoading(false);
            }
        };
        
        fetchCarData();
    }, [plateNumber]);

    const handleGoClick = () => {
        /*用 if 檢查車牌號碼是否存在（不是空值）*/
        if (plateNumber.trim()) { /*trim() 用來去除字串前後的空格*/
            /*輸入使用者故障狀況描述*/
            const encodedDescription = encodeURIComponent(description ? description.trim() : ''); /*encodeURIComponent() 將文字轉換成 URL 安全的格式*/
            navigate(`/repairConfirmation/${plateNumber}?description=${encodedDescription}`, {
                state: {
                    maintenanceItems: carData.maintenanceItems,
                    description: description
                }
            }); /*跳轉到 repairConfirmation 頁面 同時傳入維修項目數據*/
        }
    };

    const getMaintenanceClass = (level) => {
        switch (level) {
            case '緊急': return 'urgent';
            case '中等': return 'medium';
            case '例行': return 'routine';
            default: return '';
        }
    };

    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Spin size="large" tip="載入車輛資料中..." />
            </div>
        );
    }

    if (!carData) {
        return (
            <div style={{ padding: '50px', textAlign: 'center' }}>
                <h2>無法載入車輛資料</h2>
                <Button onClick={() => navigate(-1)}>返回</Button>
            </div>
        );
    }

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
                    </div>
                </div>

                {/* 警告信息 */}
                <div className="alert-box">
                    <p className="alert-title">需要立即注意</p>
                    <p>{carData.maintenanceAlert.message}</p>
                </div>

                {/* 壽命預測 */}
                <div className="status-card">
                    <h2 className="status-title">零件故障率預測</h2>
                    <div className="space-y-4">
                        {carData.lifePrediction.map((item, index) => (
                            <div key={index} className="mb-4">
                                <div className="progress-label">
                                    <span>{item.name}</span>
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