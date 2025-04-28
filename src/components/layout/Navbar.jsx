import { Layout, Menu, Drawer, Button } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';
import { useState } from 'react';

const { Header } = Layout;

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  const menuItems = [
    { key: '1', label: <Link to="/">Accueil</Link> },
    { key: '2', label: <Link to="/about">À propos</Link> },
    { key: '3', label: <Link to="/team">Équipe</Link> },
    { key: '4', label: <Link to="/contact">Contact</Link> },
  ];

  return (
    <>
      <Header className="site-layout-header">
        {/* Version Desktop */}
        <div className="logo">
          <img src="/logo.png" alt="SEF Logo" style={{ height: '40px' }} />
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[menuItems.find(item => item.label.props.to === location.pathname)?.key || '1']}
          items={menuItems}
          className="desktop-menu"
        />

        {/* Version Mobile */}
        <Button
          className="mobile-menu-button"
          icon={<MenuOutlined />}
          onClick={() => setVisible(true)}
        />
        <Drawer
          title="Menu"
          placement="right"
          onClose={() => setVisible(false)}
          open={visible}
        >
          <Menu
            mode="vertical"
            selectedKeys={[location.pathname]}
            items={menuItems}
          />
          <div className="mobile-social">
            {/* Ajoutez vos icônes sociales ici */}
          </div>
        </Drawer>
      </Header>
    </>
  );
};

export default Navbar;