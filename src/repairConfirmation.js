import React, { useState } from 'react';
import Footer from './Footer.js';
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
            <div className="repair-confirmation-container">

                <div className='status-card'>
                    <h2 className="status-title"><CarOutlined /> 系統建議維修項目</h2>
                    {selectedItems.length > 0 ? (
                        selectedItems.map((item, index) => (
                            <Card key={index} className="repair-card">
                                <Checkbox className="custom-checkbox" checked={item.selected} onChange={() => handleCheckboxChange(index, 'recommended')}>
                                    {item.item}
                                </Checkbox>
                                <span className="repair-cost">NT${item.cost}</span>
                            </Card>
                        ))
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

                <Card className='status-card' >
                    <h2>預估總金額: NT${totalCost}</h2>

                </Card>

                <Button className="button" onClick={() => navigate('/endPage')}>確認維修項目</Button>

            </div>
            <Footer />

        </div>
    );
};

export default RepairConfirmation;
