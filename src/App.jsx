import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Button, Dropdown, Space, ConfigProvider, theme } from 'antd';
import { 
  HomeOutlined, 
  TeamOutlined, 
  HeartOutlined, 
  GiftOutlined, 
  BookOutlined, 
  MedicineBoxOutlined, 
  MailOutlined, 
  GlobalOutlined,
  InfoCircleOutlined,
  CalendarOutlined,
  ShoppingOutlined,
  FacebookFilled,
  InstagramFilled,
  TwitterCircleFilled,
  YoutubeFilled
} from '@ant-design/icons';
import Home from './pages/Home';
import Mission from './pages/Mission';
import Comite from './pages/Comite';
import Donation from './pages/Donation';
import DevenirBenevole from './pages/DevenirBenevole';
import NotreHistoire from './pages/DevenirBenevole';
import 'antd/dist/reset.css';

// Configuration du thème personnalisé
const { useToken } = theme;

const themeConfig = {
  token: {
    colorPrimary: '#2F54EB',
    borderRadius: 8,
    fontFamily: "'Inter', sans-serif",
  },
  components: {
    Button: {
      colorPrimary: '#2F54EB',
    },
    Menu: {
      colorItemBg: 'transparent',
      colorItemBgSelected: 'rgba(47, 84, 235, 0.1)',
      colorItemTextSelected: '#2F54EB',
    },
  },
};

const { Header, Content, Footer } = Layout;

const menuItems = [
  {
    key: '/',
    label: <Link to="/">Accueil</Link>,
    icon: <HomeOutlined style={{ fontSize: '1.1rem' }} />
  },
  {
    key: 'qui-sommes-nous',
    label: 'Qui sommes-nous',
    icon: <InfoCircleOutlined style={{ fontSize: '1.1rem' }} />,
    children: [
      { label: <Link to="/notre-histoire">Notre histoire</Link>, key: '/notre-histoire' },
      { label: <Link to="/mission">Mission et valeurs</Link>, key: '/mission' },
      { label: <Link to="/comite">Comité exécutif</Link>, key: '/comite' },
      { label: <Link to="/partenaires">Partenaires</Link>, key: '/partenaires' },
      { label: <Link to="/documents">Statuts & Rapports</Link>, key: '/documents' }
    ]
  },
  {
    key: 'actions',
    label: 'Nos actions',
    icon: <HeartOutlined style={{ fontSize: '1.1rem' }} />,
    children: [
      { label: <Link to="/education">Programmes éducatifs</Link>, key: '/education', icon: <BookOutlined /> },
      { label: <Link to="/nutrition">Soutien alimentaire</Link>, key: '/nutrition' },
      { label: <Link to="/medical">Prise en charge médicale</Link>, key: '/medical', icon: <MedicineBoxOutlined /> },
      { label: <Link to="/activites">Activités récréatives</Link>, key: '/activites' },
      { label: <Link to="/temoignages">Témoignages</Link>, key: '/temoignages' }
    ]
  },
  {
    key: '/parrainage',
    label: <Link to="/parrainage">Parrainage</Link>,
    icon: <TeamOutlined style={{ fontSize: '1.1rem' }} />
  },
  {
    key: 'soutenir',
    label: 'Nous soutenir',
    icon: <GiftOutlined style={{ fontSize: '1.1rem' }} />,
    children: [
      { label: <Link to="/don">Faire un don</Link>, key: '/don' },
      { label: <Link to="/benevole">Devenir bénévole</Link>, key: '/benevole' },
      { label: <Link to="/partenariats">Partenariats entreprises</Link>, key: '/partenariats' },
      { label: <Link to="/materiel">Collectes de matériel</Link>, key: '/materiel', icon: <ShoppingOutlined /> }
    ]
  },
  {
    key: '/actualites',
    label: <Link to="/actualites">Actualités</Link>,
    icon: <CalendarOutlined style={{ fontSize: '1.1rem' }} />
  },
  {
    key: '/contact',
    label: <Link to="/contact">Contact</Link>,
    icon: <MailOutlined style={{ fontSize: '1.1rem' }} />
  }
];

const AppLayout = () => {
  const location = useLocation();
  const { token } = useToken();

  const getBreadcrumbItems = () => {
    const pathSnippets = location.pathname.split('/').filter(i => i);
    return pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
      return <Breadcrumb.Item key={url}>{url.replace('/', '') || 'Accueil'}</Breadcrumb.Item>;
    });
  };

  return (
    <ConfigProvider theme={themeConfig}>
      <Layout className="layout">
        <Header style={{ 
          display: 'flex',
          alignItems: 'center',
          background: '#ffffff',
          padding: '0 24px',
          height: 80,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
          position: 'sticky',
          top: 0,
          zIndex: 1000
        }}>
          <div style={{ 
            background: 'linear-gradient(45deg, #2F54EB, #597EF7)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginRight: 40, 
            fontWeight: 700, 
            fontSize: 28,
            letterSpacing: 1.5,
            fontFamily: "'Inter', sans-serif"
          }}>
            S.E.F
          </div>
          
          <Menu
            mode="horizontal"
            selectedKeys={[location.pathname]}
            style={{ 
              flex: 1, 
              minWidth: 0,
              borderBottom: 'none',
              background: 'transparent',
              fontWeight: 500
            }}
            items={menuItems}
          />

          <Space style={{ marginLeft: 'auto', gap: 12 }}>
            <Button 
              type="primary" 
              icon={<GiftOutlined />}
              style={{ 
                height: 40,
                background: 'linear-gradient(45deg, #2F54EB, #597EF7)',
                border: 'none',
                fontWeight: 600,
                boxShadow: '0 4px 12px rgba(47, 84, 235, 0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: 8
              }}
            >
              <Link to="/don" style={{ color: 'white' }}>Faire un don</Link>
            </Button>
            
            <Dropdown
              menu={{
                items: [
                  { key: 'fr', label: 'Français' },
                  { key: 'en', label: 'English' },
                  { key: 'es', label: 'Español' }
                ]
              }}
            >
              <Button 
                icon={<GlobalOutlined />} 
                style={{ 
                  background: '#f8f9fa',
                  border: '1px solid #e9ecef',
                  color: '#2F54EB',
                  height: 40,
                  width: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }} 
              />
            </Dropdown>
          </Space>
        </Header>

        <Content style={{ 
          padding: "0 50px",
          marginTop: 24,
          minHeight: 'calc(100vh - 180px)'
        }}>
          <Breadcrumb style={{ 
            margin: "16px 0",
            fontSize: 15,
            padding: '12px 20px',
            background: '#f8f9fa',
            borderRadius: 8
          }}>
            {getBreadcrumbItems()}
          </Breadcrumb>
          
          <div style={{ 
            background: token.colorBgContainer,
            padding: 32, 
            minHeight: 280, 
            borderRadius: token.borderRadiusLG,
            boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
            border: '1px solid #f0f0f0'
          }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/mission" element={<Mission />} />
              <Route path="/comite" element={<Comite />} />
              <Route path="/don" element={<Donation />} />
              <Route path="/benevole" element={<DevenirBenevole />} />
              <Route path="/notre-histoire" element={<div>Notre histoire</div>} />
              <Route path="/partenaires" element={<div>Partenaires</div>} />
              <Route path="/documents" element={<div>Documents</div>} />
              <Route path="/education" element={<div>Éducation</div>} />
              <Route path="/nutrition" element={<div>Nutrition</div>} />
              <Route path="/medical" element={<div>Médical</div>} />
              <Route path="/activites" element={<div>Activités</div>} />
              <Route path="/temoignages" element={<div>Témoignages</div>} />
              <Route path="/parrainage" element={<div>Parrainage</div>} />
              <Route path="/partenariats" element={<div>Partenariats</div>} />
              <Route path="/materiel" element={<div>Matériel</div>} />
              <Route path="/actualites" element={<div>Actualités</div>} />
              <Route path="/contact" element={<div>Contact</div>} />
            </Routes>
          </div>
        </Content>

        <Footer style={{ 
          background: '#f8f9fa',
          padding: '48px 50px',
          marginTop: 48,
          borderTop: '1px solid #e9ecef'
        }}>
          <div style={{ 
            maxWidth: 1200,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 40
          }}>
            <div>
              <div style={{ 
                fontSize: 24,
                fontWeight: 700,
                marginBottom: 16,
                background: 'linear-gradient(45deg, #2F54EB, #597EF7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                S.E.F
              </div>
              <div style={{ color: '#666', lineHeight: 1.6 }}>
                Organisation à but non lucratif dédiée à l'éducation et au bien-être des enfants en RDC.
              </div>
            </div>

            <div>
              <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 16 }}>Navigation</div>
              <Space direction="vertical" style={{ display: 'flex' }}>
                <Link to="/mission" style={{ color: '#666' }}>Notre mission</Link>
                <Link to="/actualites" style={{ color: '#666' }}>Actualités</Link>
                <Link to="/contact" style={{ color: '#666' }}>Contact</Link>
                <Link to="/don" style={{ color: '#2F54EB', fontWeight: 500 }}>Faire un don</Link>
              </Space>
            </div>

            <div>
              <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 16 }}>Contact</div>
              <div style={{ color: '#666', lineHeight: 1.6 }}>
                <div>📍 Kinshasa, RDC</div>
                <div>📞 +243 810 000 000</div>
                <div>✉️ contact@sef-ong.org</div>
              </div>
            </div>

            <div>
              <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 16 }}>Réseaux sociaux</div>
              <Space size="middle">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FacebookFilled style={{ fontSize: 24, color: '#2F54EB' }} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <InstagramFilled style={{ fontSize: 24, color: '#E1306C' }} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <TwitterCircleFilled style={{ fontSize: 24, color: '#1DA1F2' }} />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <YoutubeFilled style={{ fontSize: 24, color: '#FF0000' }} />
                </a>
              </Space>
            </div>
          </div>

          <div style={{ 
            marginTop: 48,
            textAlign: 'center',
            color: '#666',
            borderTop: '1px solid #e9ecef',
            paddingTop: 24
          }}>
            © {new Date().getFullYear()} S.E.F - Tous droits réservés | 
            <Link to="/confidentialite" style={{ marginLeft: 8, color: '#666' }}>Confidentialité</Link> | 
            <Link to="/conditions" style={{ marginLeft: 8, color: '#666' }}>Conditions d'utilisation</Link>
          </div>
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};

const App = () => (
  <Router>
    <AppLayout />
  </Router>
);

export default App;