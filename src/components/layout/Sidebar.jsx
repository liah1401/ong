import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const { Sider } = Layout;

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { key: '/', label: <Link to="/">Accueil</Link> },
    { key: '/about', label: <Link to="/about">À propos</Link> },
    { key: '/team', label: <Link to="/team">Notre équipe</Link> },
    { key: '/projects', label: <Link to="/projects">Projets</Link> },
    { key: '/contact', label: <Link to="/contact">Contact</Link> },
  ];

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      theme="light"
      width={250}
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      <div className="sidebar-logo">
        <img src="/logo-full.png" alt="SEF Logo" style={{ width: '100%', padding: '1rem' }} />
      </div>
      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        items={menuItems}
        style={{ borderRight: 0 }}
      />
    </Sider>
  );
};

export default Sidebar;