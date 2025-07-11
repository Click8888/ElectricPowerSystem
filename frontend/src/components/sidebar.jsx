import React, { useState } from 'react';
import { BsHouseDoor, BsPeople, BsGear, BsList, 
         BsChevronLeft, BsGraphUp, BsEnvelope, 
         BsFileText } from 'react-icons/bs';
// import './sidebar.css';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const menuItems = [
    { icon: <BsHouseDoor size={20} />, text: 'Главная', href: '#' },
    { icon: <BsGraphUp size={20} />, text: 'Аналитика', href: '#' },
    { icon: <BsPeople size={20} />, text: 'Пользователи', href: '#' },
    { icon: <BsEnvelope size={20} />, text: 'Сообщения', href: '#' },
    { icon: <BsFileText size={20} />, text: 'Документы', href: '#' },
    { icon: <BsGear size={20} />, text: 'Настройки', href: '#' },
  ];

  return (
    <div 
      className={`vh-100 p-3 ${collapsed ? 'col-auto' : 'col-md-3'} transition-all`}
      style={{ 
        width: collapsed ? '70px' : '250px',
        transition: 'width 0.3s ease',
        position: 'sticky',
        top: 0,
        backgroundColor: '#333',
        color: '#fff'
      }}
    >
      {/* Кнопка переключения */}
      <div className="d-flex justify-content-end mb-3">
        <button 
          className="btn p-1"
          onClick={toggleSidebar}
          aria-label={collapsed ? "Развернуть меню" : "Свернуть меню"}
          style={{ 
            color: '#fff',
            borderColor: '#555' 
          }}
        >
          {collapsed ? <BsList size={24} /> : <BsChevronLeft size={24} />}
        </button>
      </div>

      {/* Навигационное меню */}
      <nav>
        <ul className="nav flex-column">
          {menuItems.map((item, index) => (
            <li className="nav-item mb-2" key={index}>
              <a 
                href={item.href} 
                className="nav-link d-flex align-items-center"
                style={{ 
                  borderRadius: '5px',
                  color: '#f8f9fa',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#444'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <span className={collapsed ? '' : 'me-3'}>
                  {item.icon}
                </span>
                {!collapsed && (
                  <span style={{ color: '#fff' }}>
                    {item.text}
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;