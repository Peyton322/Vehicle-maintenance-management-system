import React, { useState } from 'react';
import { Card, Checkbox, Button, Input } from 'antd';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { carsData } from './carData';
import './repairConfirmation.css';
import { CloseOutlined, CarOutlined, QuestionCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';


// ...existing code...




const RepairConfirmation = () => {
    const { plateNumber } = useParams(); // 獲取 plateNumber
    const navigate = useNavigate();
    const location = useLocation();

    // 從 location.state 或 URL 查詢參數獲取數據
    const maintenanceItemsFromState = location.state?.maintenanceItems || [];
    const descriptionFromState = location.state?.description;
    const descriptionFromUrl = new URLSearchParams(location.search).get('description');
    const description = descriptionFromState || descriptionFromUrl;

    // 如果沒有從 state 傳來的數據，則使用舊的 carData
    const carData = carsData[plateNumber] || { maintenanceItems: [] };
    const maintenanceItems = maintenanceItemsFromState.length > 0
        ? maintenanceItemsFromState
        : carData.maintenanceItems;

    // 為維修項目添加 selected 屬性，預設不勾選
    const itemsWithSelection = maintenanceItems.map(item => ({
        ...item,
        selected: false
    }));

    const [selectedItems, setSelectedItems] = useState(itemsWithSelection);
    const [customItems, setCustomItems] = useState([]); // 存放使用者新增的維修項目
    const [newItem, setNewItem] = useState({ item: '', cost: '', selected: true });
    const [showAllRecommendedItems, setShowAllRecommendedItems] = useState(false);
    const [isConfirming, setIsConfirming] = useState(false); // 確認按鈕載入狀態

    // 切換建議維修項目的選擇狀態
    const handleCheckboxChange = (index, type) => {
        if (type === 'recommended') {
            const updatedItems = [...selectedItems];
            updatedItems[index].selected = !updatedItems[index].selected;
            setSelectedItems(updatedItems);
        } else {
            const updatedCustomItems = [...customItems];
            updatedCustomItems[index].selected = !updatedCustomItems[index].selected;
            setCustomItems(updatedCustomItems);
        }
    };

    // 新增自訂維修項目
    const handleAddItem = () => {
        if (newItem.item && newItem.cost) {
            setCustomItems([...customItems, newItem]); // 新增到 customItems
            setNewItem({ item: '', cost: '', selected: true }); // 清空輸入框
        }
    };

    // 計算總金額
    const totalCost = [...selectedItems, ...customItems]
        .filter(item => item.selected)
        .reduce((sum, item) => sum + Number(item.cost), 0);
    const handleDeleteItem = (index) => {
        const updatedCustomItems = customItems.filter((_, i) => i !== index);
        setCustomItems(updatedCustomItems);
    };

    // 處理確認維修項目
    const handleConfirm = () => {
        setIsConfirming(true);
        // 延遲 1.5 秒後跳轉頁面
        setTimeout(() => {
            navigate('/endPage');
        }, 1500);
    };

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
            <Button className='back-button' onClick={() => navigate(-1)} >
                返回
            </Button>
            <div className="repair-confirmation-container">

                <div className='status-card'>
                    <h2 className="status-title"><CarOutlined /> 系統建議維修項目</h2>
                    {selectedItems.length > 0 ? (
                        <>
                            {(showAllRecommendedItems ? selectedItems : selectedItems.slice(0, 5)).map((item, index) => (
                                <Card key={index} className="repair-card">
                                    <Checkbox className="custom-checkbox" checked={item.selected} onChange={() => handleCheckboxChange(index, 'recommended')}>
                                        {item.item}
                                    </Checkbox>
                                    <span className="repair-cost">NT${item.cost}</span>
                                </Card>
                            ))}
                            {selectedItems.length > 5 && (
                                <div style={{ textAlign: 'center', marginTop: '16px' }}>
                                    <Button
                                        type="link"
                                        onClick={() => setShowAllRecommendedItems(!showAllRecommendedItems)}
                                        style={{ color: '#6b7280', fontWeight: 500 }}
                                    >
                                        {showAllRecommendedItems ? '收起 ▲' : `顯示更多 (${selectedItems.length - 5}) ▼`}
                                    </Button>
                                </div>
                            )}
                        </>
                    ) : (
                        <p>無建議維修項目</p>
                    )}
                </div>
                <div className="status-card">
                    <h2 className="status-title"><QuestionCircleOutlined /> 客戶描述問題</h2>
                    <p>{description ? description : '無'}</p>
                </div>
                <div className='status-card'>
                    <h2 className="status-title"><PlusCircleOutlined /> 新增其他維修項目</h2>
                    <Input placeholder="輸入維修項目" value={newItem.item} onChange={(e) => setNewItem({ ...newItem, item: e.target.value })} />
                    <Input placeholder="NT$" type="number" value={newItem.cost} onChange={(e) => setNewItem({ ...newItem, cost: e.target.value })} />
                    <Button onClick={handleAddItem} className='add-button'>新增</Button>
                    {customItems.length > 0 ? (
                        customItems.map((item, index) => (
                            <Card key={index} className="repair-card">
                                <Checkbox className="custom-checkbox" checked={item.selected} onChange={() => handleCheckboxChange(index, 'custom')}>
                                    {item.item}
                                </Checkbox>
                                <span className="repair-cost">NT${item.cost}</span>
                                <CloseOutlined onClick={() => handleDeleteItem(index)} className="delete-icon" />
                            </Card>
                        ))
                    ) : (
                        <p>尚未新增維修項目.....</p>
                    )}
                </div>
                <div className='status-card'>
                    <h3 className='cost'>預估總金額: NT${totalCost}</h3>
                    <Button
                        className="button"
                        onClick={handleConfirm}
                        loading={isConfirming}
                        disabled={isConfirming}
                    >
                        {isConfirming ? '處理中...' : '確認維修項目'}
                    </Button>
                </div>



            </div>

        </div>
    );
};

export default RepairConfirmation;
