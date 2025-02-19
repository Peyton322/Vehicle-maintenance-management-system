import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import './endPage.css';

const EndPage = () => {
    const navigate = useNavigate();

    return (
        <div className="end-page-container">
            <div className="confirmation-box">
                <h2>確認完成</h2>
                <p>維修項目已確認並記錄，感謝您的操作！</p>
                <Button className="home-button" onClick={() => navigate('/query')}>返回首頁</Button>
            </div>
        </div>
    );
};

export default EndPage;