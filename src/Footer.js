import React from 'react';

const Footer = () => {
  return (
    <div>
       {/* 馬路樣式的 footer */}
      <div style={{
        marginTop: 'auto', // 推到底部
        width: '100%',
      }}>
        <div style={{
          width: '100%',
          height: '50px',
          backgroundColor: '#666666', // 瀝青路面的灰色
          position: 'relative', // 為了定位黃色虛線
          overflow: 'hidden', // 確保內容不溢出
        }}>
          {/* 馬路中央的黃色虛線 */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            width: '100%',
            height: '4px', // 虛線寬度
            transform: 'translateY(-50%)', // 垂直置中
            backgroundImage: 'linear-gradient(to right, #FFCC00 50%, transparent 50%)', // 黃色虛線效果
            backgroundSize: '40px 100%', // 控制虛線長度
            backgroundRepeat: 'repeat-x',
          }}></div>

          {/* 添加一些路面紋理效果，讓看起來更像馬路 */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 0.05, // 輕微的紋理
            background: 'repeating-linear-gradient(45deg, #333333, #333333 2px, transparent 2px, transparent 4px)' // 柏油路面的細微紋理
          }}></div>

          {/* 上方車道固定車輛 - 水平翻轉使其朝向相反方向 */}
          <div style={{
            position: 'absolute',
            top: '25%',
            left: '20%',
            transform: 'translateY(-50%) scaleX(-1)', // scaleX(-1) 水平翻轉
            zIndex: 1
          }}>
            <span role="img" aria-label="car" style={{ fontSize: '20px' }}>🚗</span>
          </div>

          <div style={{
            position: 'absolute',
            top: '25%',
            left: '50%',
            transform: 'translateY(-50%) scaleX(-1)', // scaleX(-1) 水平翻轉
            zIndex: 1
          }}>
            <span role="img" aria-label="taxi" style={{ fontSize: '20px' }}>🚕</span>
          </div>

          <div style={{
            position: 'absolute',
            top: '25%',
            left: '80%',
            transform: 'translateY(-50%) scaleX(-1)', // scaleX(-1) 水平翻轉
            zIndex: 1
          }}>
            <span role="img" aria-label="police car" style={{ fontSize: '20px' }}>🚓</span>
          </div>

          {/* 下方車道固定車輛 */}
          <div style={{
            position: 'absolute',
            top: '75%',
            left: '10%',
            transform: 'translateY(-50%)',
            zIndex: 1
          }}>
            <span role="img" aria-label="truck" style={{ fontSize: '20px' }}>🚚</span>
          </div>

          <div style={{
            position: 'absolute',
            top: '75%',
            left: '40%',
            transform: 'translateY(-50%)',
            zIndex: 1
          }}>
            <span role="img" aria-label="ambulance" style={{ fontSize: '20px' }}>🚑</span>
          </div>

          <div style={{
            position: 'absolute',
            top: '75%',
            left: '70%',
            transform: 'translateY(-50%)',
            zIndex: 1
          }}>
            <span role="img" aria-label="sport car" style={{ fontSize: '20px' }}>🏎️</span>
          </div>
        </div>
        <div style={{
          width: '100%',
          height: '30px', // 增加高度，讓文字有更好的顯示空間
          backgroundColor: '#666666',
          display: 'flex',
          alignItems: 'center', // 垂直居中
          justifyContent: 'center', // 水平居中
          color: '#ffffff', // 文字設為白色，增加可讀性
          fontSize: '12px', // 設定合適的字體大小
        }}>
          <p style={{ margin: 0, padding: 0 }}>© 2025 車輛維修系統</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;