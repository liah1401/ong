import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Button, Dropdown, Space, ConfigProvider, theme, Row, Col, Input } from 'antd';
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
  YoutubeFilled,
  EnvironmentOutlined,
  PhoneOutlined,
  SendOutlined
} from '@ant-design/icons';
import { SiTiktok, SiGmail } from 'react-icons/si';
import Home from './pages/Home';
import Mission from './pages/Mission';
import Comite from './pages/Comite';
import Donation from './pages/Donation';
import DevenirBenevole from './pages/DevenirBenevole';
import Histoire from './pages/Histoire';
import Membre from './pages/Membre';
import Contact from './pages/Contact';
import Education from './pages/Education';
import Activites from './pages/Activites';
import Nutrition from './pages/Nutrition';
import Medical from './pages/Medical';
import Temoignages from './pages/Temoignages';
import 'antd/dist/reset.css';

// Import du logo
import logo from "C:/Users/maeli/OneDrive/Images/Sourired'enfant logo.jpg";

// PALETTE DE COULEURS BLEUE PROFESSIONNELLE
const COLORS = {
  primary: {
    main: '#1E5B8A',
    light: '#2D7FB8',
    lighter: '#4299E1',
    dark: '#154268',
    darker: '#0D2D4A',
    hover: '#2A6A94',
    transparent: '#1E5B8A15'
  },
  accent: {
    blue: '#3182CE',
    cyan: '#0BC5EA',
    sky: '#63B3ED',
  },
  complementary: {
    teal: '#2A8C82',
    green: '#38A169',
    gold: '#F0B429',
  },
  neutral: {
    white: '#FFFFFF',
    lightest: '#F8FAFC',
    lighter: '#EDF2F7',
    light: '#E2E8F0',
    medium: '#CBD5E0',
    dark: '#4A5568',
    darker: '#2D3748',
    black: '#1A202C',
  },
  success: '#38A169',
  warning: '#DD6B20',
  error: '#E53E3E',
  info: '#3182CE',
};

const SOCIAL_COLORS = {
  facebook: '#1877F2',
  instagram: '#E4405F',
  twitter: '#1DA1F2',
  tiktok: '#000000',
  youtube: '#FF0000',
  gmail: '#EA4335',
};

const themeConfig = {
  token: {
    colorPrimary: COLORS.primary.main,
    colorPrimaryHover: COLORS.primary.hover,
    colorPrimaryActive: COLORS.primary.dark,
    colorSuccess: COLORS.success,
    colorWarning: COLORS.warning,
    colorError: COLORS.error,
    colorInfo: COLORS.accent.blue,
    borderRadius: 8,
    fontFamily: "'Montserrat', 'Segoe UI', sans-serif",
    fontSize: 14,
    colorText: COLORS.neutral.darker,
    colorBgLayout: COLORS.neutral.lightest,
    colorBorder: COLORS.neutral.light,
    colorLink: COLORS.primary.main,
    colorLinkHover: COLORS.primary.light,
  },
  components: {
    Button: {
      colorPrimary: COLORS.primary.main,
      colorPrimaryHover: COLORS.primary.hover,
      colorPrimaryActive: COLORS.primary.dark,
      controlHeight: 40,
      borderRadius: 6,
    },
    Menu: {
      colorItemBg: 'transparent',
      colorItemBgSelected: COLORS.primary.transparent,
      colorItemTextSelected: COLORS.primary.main,
      colorItemText: COLORS.neutral.darker,
      colorItemTextHover: COLORS.primary.main,
      colorItemBgHover: COLORS.neutral.lighter,
      controlHeight: 48,
      itemBorderRadius: 4,
    },
    Layout: {
      headerBg: COLORS.neutral.white,
      headerPadding: '0 24px',
      footerBg: COLORS.primary.darker,
      footerPadding: '64px 0 32px 0',
      bodyBg: COLORS.neutral.lightest,
      siderBg: COLORS.neutral.white,
    },
    Input: {
      colorBgContainer: COLORS.neutral.white,
      colorBorder: COLORS.neutral.light,
      colorPrimaryHover: COLORS.primary.main,
      borderRadius: 6,
      hoverBorderColor: COLORS.primary.light,
      activeBorderColor: COLORS.primary.main,
    },
    Breadcrumb: {
      linkColor: COLORS.primary.main,
      linkHoverColor: COLORS.primary.light,
      separatorColor: COLORS.neutral.medium,
    },
    Card: {
      colorBgContainer: COLORS.neutral.white,
      colorBorderSecondary: COLORS.neutral.lighter,
    },
  },
};

const { useToken } = theme;
const { Header, Content, Footer } = Layout;

const menuItems = [
  {
    key: '/',
    label: <Link to="/">Accueil</Link>,
    icon: <HomeOutlined style={{ color: COLORS.primary.main }} />
  },
  {
    key: 'qui-sommes-nous',
    label: 'Qui sommes-nous',
    icon: <InfoCircleOutlined style={{ color: COLORS.primary.main }} />,
    children: [
      { label: <Link to="/notre-histoire">Notre histoire</Link>, key: '/notre-histoire' },
      { label: <Link to="/mission">Mission et valeurs</Link>, key: '/mission' },
      { label: <Link to="/comite">Comité exécutif</Link>, key: '/comite' },
      { label: <Link to="/partenaires">Partenaires</Link>, key: '/partenaires' },
      { label: <Link to="/documents">Transparence</Link>, key: '/documents' }
    ]
  },
  {
    key: 'actions',
    label: 'Nos actions',
    icon: <HeartOutlined style={{ color: COLORS.primary.main }} />,
    children: [
      { label: <Link to="/education">Éducation</Link>, key: '/education', icon: <BookOutlined style={{ color: COLORS.primary.light }} /> },
      { label: <Link to="/nutrition">Nutrition</Link>, key: '/nutrition' },
      { label: <Link to="/medical">Santé</Link>, key: '/medical', icon: <MedicineBoxOutlined style={{ color: COLORS.primary.light }} /> },
      { label: <Link to="/activites">Activités</Link>, key: '/activites' },
      { label: <Link to="/temoignages">Impact</Link>, key: '/temoignages' }
    ]
  },
  {
    key: '/parrainage',
    label: <Link to="/parrainage">Parrainage</Link>,
    icon: <TeamOutlined style={{ color: COLORS.primary.main }} />
  },
  {
    key: 'soutenir',
    label: 'Soutenir',
    icon: <GiftOutlined style={{ color: COLORS.primary.main }} />,
    children: [
      { label: <Link to="/don">Faire un don</Link>, key: '/don' },
      { label: <Link to="/benevole">Bénévolat</Link>, key: '/benevole' },
      { label: <Link to="/membre">Adhésion</Link>, key: '/membre' },
      { label: <Link to="/partenariats">Entreprises</Link>, key: '/partenariats' },
      { label: <Link to="/materiel">Matériel</Link>, key: '/materiel', icon: <ShoppingOutlined style={{ color: COLORS.primary.light }} /> }
    ]
  },
  {
    key: '/actualites',
    label: <Link to="/actualites">Actualités</Link>,
    icon: <CalendarOutlined style={{ color: COLORS.primary.main }} />
  },
  {
    key: '/contact',
    label: <Link to="/contact">Contact</Link>,
    icon: <MailOutlined style={{ color: COLORS.primary.main }} />
  }
];

const AppLayout = () => {
  const location = useLocation();
  useToken(); // assure injection du thème
  const getBreadcrumbItems = () => {
    const pathSnippets = location.pathname.split('/').filter(i => i);
    if (pathSnippets.length === 0) return [<Breadcrumb.Item key="home">Accueil</Breadcrumb.Item>];
    return pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
      const name = pathSnippets[index].replace('-', ' ');
      return <Breadcrumb.Item key={url}>{name.charAt(0).toUpperCase() + name.slice(1)}</Breadcrumb.Item>;
    });
  };

  return (
    <ConfigProvider theme={themeConfig}>
      <style>{`
        :root {
          --primary: ${COLORS.primary.main};
          --primary-light: ${COLORS.primary.light};
          --primary-lighter: ${COLORS.primary.lighter};
          --primary-dark: ${COLORS.primary.dark};
          --primary-darker: ${COLORS.primary.darker};
          --primary-hover: ${COLORS.primary.hover};
          --primary-transparent: ${COLORS.primary.transparent};
          --accent-blue: ${COLORS.accent.blue};
          --accent-cyan: ${COLORS.accent.cyan};
          --accent-sky: ${COLORS.accent.sky};
          --neutral-white: ${COLORS.neutral.white};
          --neutral-lightest: ${COLORS.neutral.lightest};
          --neutral-lighter: ${COLORS.neutral.lighter};
          --neutral-light: ${COLORS.neutral.light};
          --neutral-medium: ${COLORS.neutral.medium};
          --neutral-dark: ${COLORS.neutral.dark};
          --neutral-darker: ${COLORS.neutral.darker};
          --facebook: ${SOCIAL_COLORS.facebook};
          --instagram: ${SOCIAL_COLORS.instagram};
          --twitter: ${SOCIAL_COLORS.twitter};
          --tiktok: ${SOCIAL_COLORS.tiktok};
          --youtube: ${SOCIAL_COLORS.youtube};
          --gmail: ${SOCIAL_COLORS.gmail};
        }
        * { transition: background-color 0.18s ease, color 0.18s ease, border-color 0.18s ease; }
        a { color: var(--primary); text-decoration: none; }
        a:hover { color: var(--primary-light); }
        .header-menu { display:flex !important; align-items:center !important; gap:4px; }
        .header-menu .ant-menu-item, .header-menu .ant-menu-submenu-title {
          color: var(--neutral-darker) !important; padding: 0 12px; height:48px; display:flex; align-items:center; font-weight:500; position:relative;
        }
        .header-menu .ant-menu-item::after {
          content:''; position:absolute; bottom:6px; left:12px; right:12px; height:3px; background:var(--primary); transform:scaleX(0); transition:transform .28s ease; border-radius:2px;
        }
        .header-menu .ant-menu-item-selected::after, .header-menu .ant-menu-item:hover::after { transform:scaleX(1); }
        .ant-dropdown-menu { border:1px solid var(--neutral-light); box-shadow:0 8px 25px rgba(30,91,138,0.08); }
        .social-btn { display:inline-flex; align-items:center; justify-content:center; width:44px; height:44px; border-radius:12px; background:var(--neutral-white); box-shadow:0 4px 12px rgba(0,0,0,0.08); border:none; overflow:hidden; position:relative; }
        .social-btn::before { content:''; position:absolute; top:0; left:-100%; width:100%; height:100%; background:linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent); transition:left .6s ease; }
        .social-btn:hover::before { left:100%; }
        .social-btn.instagram{ background:linear-gradient(45deg,#405DE6,#5851DB,#833AB4,#C13584,#E1306C,#FD1D1D); color:#fff; }
        .social-btn.facebook{ background:var(--facebook); color:#fff; }
        .social-btn.twitter{ background:var(--twitter); color:#fff; }
        .social-btn.tiktok{ background:var(--tiktok); color:#fff; }
        .social-btn.youtube{ background:var(--youtube); color:#fff; }
        .social-btn.gmail{ background:var(--gmail); color:#fff; }
        .footer-links { display:flex; flex-direction:column; gap:12px; }
        .footer-link { display:flex; align-items:center; gap:10px; color:var(--neutral-lightest) !important; text-decoration:none; font-size:13px; padding:4px 0; }
        .footer-link:hover { transform:translateX(4px); color:var(--neutral-white) !important; }
        .footer-dot { width:6px; height:6px; border-radius:50%; background:var(--primary-light); flex-shrink:0; transition:all .18s ease; }
        .blue-badge { background:linear-gradient(135deg,var(--primary),var(--primary-light)); color:#fff; padding:2px 8px; border-radius:12px; font-size:11px; font-weight:600; display:inline-block; margin-left:4px; }
        .content-card { transition:transform .28s ease, box-shadow .28s ease; }
        .content-card:hover { transform:translateY(-4px); box-shadow:0 12px 30px rgba(30,91,138,0.12); }
        @keyframes fadeIn { from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)} }
        .fade-in { animation:fadeIn .45s ease-out; }
      `}</style>

      <Layout className="layout" style={{ minHeight: '100vh' }}>
        <Header style={{
          display: 'flex',
          alignItems: 'center',
          background: COLORS.neutral.white,
          padding: '0 24px',
          height: 80,
          boxShadow: '0 4px 12px rgba(30, 91, 138, 0.08)',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          borderBottom: `2px solid ${COLORS.neutral.lighter}`
        }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img src={logo} alt="Sourire d'Enfant Logo" style={{ height: 56, width: 'auto', marginRight: 12, borderRadius: 4 }} />
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
              <span style={{
                fontSize: 20,
                fontWeight: 700,
                background: `linear-gradient(135deg, ${COLORS.primary.main} 0%, ${COLORS.primary.light} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Sourire d'Enfant Forever
              </span>
              <span style={{ fontSize: 12, color: COLORS.neutral.dark, fontWeight: 400, letterSpacing: 0.5 }}>
                Offrir un avenir et un sourire a la fois
              </span>
            </div>
          </Link>

          <Menu
            mode="horizontal"
            selectedKeys={[location.pathname]}
            className="header-menu"
            style={{ flex: 1, minWidth: 0, borderBottom: 'none', background: 'transparent', marginLeft: 24, alignItems: 'center' }}
            items={menuItems}
          />

          <Space style={{ marginLeft: 24, gap: 12 }}>
            <Button
              type="primary"
              size="large"
              icon={<GiftOutlined />}
              style={{
                height: 44,
                fontWeight: 600,
                background: `linear-gradient(135deg, ${COLORS.primary.main} 0%, ${COLORS.primary.light} 100%)`,
                border: 'none',
                boxShadow: '0 4px 12px rgba(30, 91, 138, 0.3)',
                transition: 'all 0.3s ease'
              }}
              className="blue-gradient"
            >
              <Link to="/don" style={{ color: COLORS.neutral.white, textDecoration: 'none' }}>
                Faire un don
              </Link>
            </Button>

            <Dropdown
              menu={{
                items: [
                  { key: 'fr', label: (<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span>🇫🇷</span><span>Français</span></div>) },
                  { key: 'en', label: (<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span>🇬🇧</span><span>English</span></div>) },
                  { key: 'es', label: (<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span>🇪🇸</span><span>Español</span></div>) }
                ]
              }}
            >
              <Button
                icon={<GlobalOutlined />}
                style={{ background: COLORS.neutral.lighter, border: `1px solid ${COLORS.neutral.light}`, color: COLORS.primary.main, height: 44, width: 44 }}
              />
            </Dropdown>
          </Space>
        </Header>

        <Content style={{ padding: "0 50px", background: COLORS.neutral.lightest, minHeight: 'calc(100vh - 180px)', flex: 1, position: 'relative' }}>
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '300px',
            height: '300px',
            background: `radial-gradient(circle at top right, ${COLORS.primary.transparent} 0%, transparent 70%)`,
            pointerEvents: 'none',
            zIndex: 0
          }} />

          <Breadcrumb style={{ margin: "24px 0 20px 0", fontSize: 14, padding: '12px 0', position: 'relative', zIndex: 1 }}>
            {getBreadcrumbItems()}
          </Breadcrumb>

          <div className="content-card fade-in" style={{
            background: COLORS.neutral.white,
            padding: 40,
            minHeight: 400,
            borderRadius: 12,
            boxShadow: '0 4px 20px rgba(30, 91, 138, 0.08)',
            border: `1px solid ${COLORS.neutral.lighter}`,
            marginBottom: 32,
            position: 'relative',
            zIndex: 1
          }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/mission" element={<Mission />} />
              <Route path="/comite" element={<Comite />} />
              <Route path="/don" element={<Donation />} />
              <Route path="/benevole" element={<DevenirBenevole />} />
              <Route path="/membre" element={<Membre />} />
              <Route path="/notre-histoire" element={<Histoire />} />
              <Route path="/partenaires" element={<div>Partenaires</div>} />
              <Route path="/documents" element={<div>Documents</div>} />
              <Route path="/education" element={<Education />} />
              <Route path="/nutrition" element={<Nutrition />} />
              <Route path="/medical" element={<Medical />} />
              <Route path="/activites" element={<Activites />} />
              <Route path="/temoignages" element={<Temoignages />} />
              <Route path="/parrainage" element={<div>Parrainage</div>} />
              <Route path="/partenariats" element={<div>Partenariats</div>} />
              <Route path="/materiel" element={<div>Matériel</div>} />
              <Route path="/actualites" element={<div>Actualités</div>} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </Content>

        {/* Footer with theme blue */}
        <Footer style={{
          background: `linear-gradient(135deg, ${COLORS.primary.darker} 0%, ${COLORS.primary.dark} 100%)`,
          color: COLORS.neutral.light,
          padding: '64px 0 0 0',
          marginTop: 'auto',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: `linear-gradient(90deg, ${COLORS.accent.cyan} 0%, ${COLORS.primary.light} 50%, ${COLORS.accent.cyan} 100%)`
          }} />

          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 50px', position: 'relative', zIndex: 1 }}>
            <Row gutter={[48, 32]} style={{ marginBottom: 48 }}>
              <Col xs={24} sm={12} lg={6}>
                <div style={{ marginBottom: 20 }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
                    <div style={{
                      width: 50,
                      height: 50,
                      borderRadius: 8,
                      background: COLORS.neutral.white,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: 12,
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                    }}>
                      <img src={logo} alt="Logo SEF" style={{ height: 36, width: 'auto', borderRadius: 4 }} />
                    </div>
                    <div>
                      <div style={{ fontSize: 18, fontWeight: 700, color: COLORS.neutral.white, marginBottom: 4 }}>S.E.F</div>
                      <div style={{ fontSize: 11, color: COLORS.accent.sky, textTransform: 'uppercase', letterSpacing: 0.5 }}>Sourire d'Enfant Forever</div>
                    </div>
                  </div>
                  <div style={{ color: COLORS.accent.sky, lineHeight: 1.6, fontSize: 13, marginBottom: 20 }}>
                    Organisation à but non lucratif œuvrant pour l'éducation, la santé et le bien-être des enfants en République Démocratique du Congo.
                  </div>
                  <div style={{ padding: 12, background: 'rgba(255, 255, 255, 0.08)', borderRadius: 8, fontSize: 11, color: COLORS.accent.cyan, textAlign: 'center', border: `1px solid rgba(11, 197, 234, 0.2)` }}>
                    <div style={{ fontWeight: 600, marginBottom: 4 }}>Reconnue d'utilité publique</div>
                    <div>N° ONG/1234/2023</div>
                  </div>
                </div>
              </Col>

              <Col xs={24} sm={12} lg={6}>
                <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 20, color: COLORS.neutral.white, paddingBottom: 8, borderBottom: `2px solid ${COLORS.accent.cyan}`, display: 'inline-block' }}>
                  Navigation
                </div>
                <div className="footer-links">
                  <Link to="/mission" className="footer-link"><div className="footer-dot" />Notre mission</Link>
                  <Link to="/actualites" className="footer-link"><div className="footer-dot" />Actualités</Link>
                  <Link to="/contact" className="footer-link"><div className="footer-dot" />Nous contacter</Link>
                  <Link to="/don" className="footer-link"><div className="footer-dot" />Faire un don</Link>
                  <Link to="/benevole" className="footer-link"><div className="footer-dot" />Devenir bénévole</Link>
                </div>
              </Col>

              <Col xs={24} sm={12} lg={6}>
                <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 20, color: COLORS.neutral.white, paddingBottom: 8, borderBottom: `2px solid ${COLORS.accent.cyan}`, display: 'inline-block' }}>
                  Contact
                </div>
                <div style={{ color: COLORS.accent.sky, lineHeight: 1.6, fontSize: 13 }}>
                  <div style={{ display: 'flex', marginBottom: 16 }}>
                    <EnvironmentOutlined style={{ marginRight: 12, color: COLORS.accent.cyan, fontSize: 14, flexShrink: 0, marginTop: 4 }} />
                    <div>
                      <div style={{ fontWeight: 500, color: COLORS.neutral.lighter, fontSize: 13 }}>Siège social</div>
                      <div style={{ fontSize: 12 }}>n° 374 avenue Colonel Mondjiba</div>
                      <div style={{ fontSize: 12 }}>Immeuble Galerie Saint Pierre, local 18</div>
                      <div style={{ fontSize: 12 }}>Commune de Ngaliema, Kinshasa, RDC</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                    <PhoneOutlined style={{ marginRight: 12, color: COLORS.accent.cyan, fontSize: 14 }} />
                    <a href="tel:+243897849917" style={{ color: COLORS.neutral.lighter, textDecoration: 'none', fontSize: 13, fontWeight: 500 }}>+243 897 849 917</a>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                    <PhoneOutlined style={{ marginRight: 12, color: COLORS.accent.cyan, fontSize: 14 }} />
                    <a href="tel:+16134474124" style={{ color: COLORS.neutral.lighter, textDecoration: 'none', fontSize: 13, fontWeight: 500 }}>+1 613 447 4124</a>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <SiGmail style={{ fontSize: 14, color: COLORS.accent.cyan, marginRight: 12 }} />
                    <a href="mailto:sefforever8@gmail.com" style={{ color: COLORS.neutral.lighter, textDecoration: 'none', fontSize: 13, fontWeight: 500 }}>sefforever8@gmail.com</a>
                  </div>
                </div>
              </Col>

              <Col xs={24} sm={12} lg={6}>
                <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 20, color: COLORS.neutral.white, paddingBottom: 8, borderBottom: `2px solid ${COLORS.accent.cyan}`, display: 'inline-block' }}>
                  Suivez-nous
                </div>

                <div style={{ marginBottom: 24 }}>
                  <div style={{ color: COLORS.accent.sky, fontSize: 13, marginBottom: 16 }}>Restez informé de nos actions :</div>
                  <Space size="middle" style={{ marginBottom: 24 }}>
                    <a className="social-btn instagram" href="https://www.instagram.com/souriredenfantsforever" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram"><InstagramFilled style={{ fontSize: 20 }} /></a>
                    <a className="social-btn facebook" href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook"><FacebookFilled style={{ fontSize: 20 }} /></a>
                    <a className="social-btn twitter" href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" title="Twitter (X)"><TwitterCircleFilled style={{ fontSize: 20 }} /></a>
                    <a className="social-btn tiktok" href="https://www.tiktok.com/@souriredenfantsforever" target="_blank" rel="noopener noreferrer" aria-label="TikTok" title="TikTok"><SiTiktok style={{ fontSize: 20 }} /></a>
                  </Space>

                  <Space size="middle">
                    <a className="social-btn youtube" href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" title="YouTube"><YoutubeFilled style={{ fontSize: 20 }} /></a>
                    <a className="social-btn gmail" href="mailto:sefforever8@gmail.com" aria-label="Gmail" title="Envoyer un email"><SiGmail style={{ fontSize: 20 }} /></a>
                  </Space>
                </div>

                <div>
                  <div style={{ color: COLORS.accent.sky, fontSize: 13, marginBottom: 12 }}>Abonnez-vous à notre newsletter :</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <Input
                      placeholder="Votre adresse email"
                      size="small"
                      style={{ background: 'rgba(255,255,255,0.06)', border: `1px solid ${COLORS.accent.sky}`, color: COLORS.neutral.lighter, fontSize: 13, height: 36 }}
                      prefix={<MailOutlined style={{ color: COLORS.accent.cyan, fontSize: 14 }} />}
                    />
                    <Button
                      type="primary"
                      size="small"
                      icon={<SendOutlined />}
                      style={{ height: 36, background: `linear-gradient(135deg, ${COLORS.accent.cyan} 0%, ${COLORS.primary.light} 100%)`, border: 'none', fontSize: 13, fontWeight: 500, boxShadow: '0 2px 8px rgba(11,197,234,0.22)' }}
                    >
                      S'abonner
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          <div style={{ background: COLORS.primary.darker, padding: '24px 0', marginTop: 48, borderTop: `1px solid ${COLORS.primary.main}` }}>
            <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 50px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
              <div style={{ color: COLORS.accent.sky, fontSize: 12, textAlign: 'center', lineHeight: 1.5 }}>
                © {new Date().getFullYear()} Sourire d'Enfant Forever - Tous droits réservés.<br/>Organisation à but non lucratif enregistrée en RDC et à l'international.
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 20, fontSize: 11 }}>
                <Link to="/confidentialite" style={{ color: COLORS.accent.sky, textDecoration: 'none' }}>Politique de confidentialité</Link>
                <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: COLORS.primary.light }} />
                <Link to="/conditions" style={{ color: COLORS.accent.sky, textDecoration: 'none' }}>Mentions légales</Link>
                <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: COLORS.primary.light }} />
                <Link to="/cookies" style={{ color: COLORS.accent.sky, textDecoration: 'none' }}>Gestion des cookies</Link>
                <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: COLORS.primary.light }} />
                <Link to="/accessibilite" style={{ color: COLORS.accent.sky, textDecoration: 'none' }}>Accessibilité</Link>
              </div>
            </div>
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

