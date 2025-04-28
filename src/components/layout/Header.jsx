import React, { useState, useEffect } from 'react';
import { Menu, Button, Dropdown, Layout } from 'antd';
import { 
  SmileOutlined, 
  TeamOutlined, 
  GiftOutlined, 
  PictureOutlined, 
  BookOutlined,
  HeartFilled,
  MenuOutlined
} from '@ant-design/icons';

const { Header } = Layout;

const AppHeader = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentMenuKey, setCurrentMenuKey] = useState(['1']);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Configuration des éléments du menu
  const items = [
    {
      key: '1',
      icon: <SmileOutlined />,
      label: 'Accueil',
    },
    {
      key: '2',
      icon: <TeamOutlined />,
      label: 'Notre Maison',
    },
    {
      key: '3',
      icon: <GiftOutlined />,
      label: 'Activités',
    },
    {
      key: '4',
      icon: <PictureOutlined />,
      label: 'Galerie',
    },
    {
      key: '5',
      icon: <BookOutlined />,
      label: 'Histoires',
    },
  ];

  // Formatage pour le dropdown mobile
  const mobileMenuItems = items.map(item => ({
    key: item.key,
    label: (
      <span>
        {item.icon}
        {item.label}
      </span>
    ),
  }));

  return (
    <Header
      style={{
        position: 'fixed',
        zIndex: 1,
        width: '100%',
        background: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 99%)',
        padding: '0 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 64,
      }}
    >
      {/* Logo */}
      <div 
        style={{
          width: 150,
          height: 50,
          background: "url('/logo.png') no-repeat center/contain",
        }}
      />

      {/* Menu Desktop */}
      {!isMobile && (
        <Menu
          theme="light"
          mode="horizontal"
          selectedKeys={currentMenuKey}
          items={items}
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            background: 'transparent',
            fontSize: '16px',
            fontWeight: 600,
            borderBottom: 'none',
          }}
          onSelect={({ key }) => setCurrentMenuKey([key])}
        />
      )}

      {/* Menu Mobile */}
      {isMobile && (
        <Dropdown
          menu={{ items: mobileMenuItems }}
          trigger={['click']}
          placement="bottomRight"
          overlayStyle={{ width: 200 }}
        >
          <Button 
            type="text"
            icon={<MenuOutlined style={{ fontSize: 24 }} />}
            style={{ 
              padding: 4,
              height: 48,
              width: 48,
            }}
          />
        </Dropdown>
      )}

      {/* Bouton Don */}
      <Button 
        type="primary" 
        shape="round" 
        icon={<HeartFilled />}
        style={{ 
          background: '#ff7675',
          borderColor: '#ff7675',
          fontWeight: 600,
          marginLeft: 20,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {!isMobile && 'Faire un don'}
      </Button>
    </Header>
  );
};

export default AppHeader;